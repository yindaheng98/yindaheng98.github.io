---
title: "并不是从零开始的Python协程学习-生成器"
created: "2021-08-17 09:26:23"
updated: "2021-08-18 07:41:07"
date: "2021-08-18 07:41:07"
tags: 
 - "编程语言"
 - "Python"
categories: 
 - "编程语言"
 - "Python"
---

## 生成器函数

在 Python 中，使用了 `yield`关键字 的函数被称为生成器（generator）。

跟普通函数不同的是，生成器是一个返回迭代器的函数，只能用于迭代操作。

迭代器是一个可以记住遍历的位置的对象。

>`yield`表达式在定义生成器函数或是异步生成器函数的时候才会用到。因此只能在函数定义的内部使用yield表达式。 在一个函数体内使用 `yield` 表达式会使这个函数变成一个生成器。
>```python
>def gen():  # defines a generator function
>    v = yield 123
>    print(v)
>    v = yield 'abc'
>    print(v)
>    return 'xxx'
>```
>
>当一个生成器函数被调用的时候，它**返回一个迭代器控制生成器函数的执行**。当迭代器的`__next__()`或`send()`方法第一次被调用的时候，生成器函数开始执行。**当执行到`yield`表达式处，生成器函数将被挂起，给迭代器的调用者返回`yield`后的表达式的值**。挂起时，所有局部状态都被保留下来，包括生成器函数内部局部变量的当前绑定，指令指针，内部求值栈和任何异常处理的状态。通过调用迭代器的`__next__()`或`send()`方法，生成器函数继续执行。
>
>恢复后`yield`表达式的值取决于调用的哪个方法来恢复执行。如果用的是`__next__()`(通常通过语言内置的`for`或是`next()`来调用) 那么结果就是`None`. 否则，如果用`send()`, 那么结果就是传递给send方法的值。

例如，对于上面的例子，我们可以这样调用：
```python
>>> it = gen()
>>> print(it.__next__())
123
>>> print(it.send(456))
456
abc
>>> print(it.__next__())
None
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration: xxx
```
可以看到：
* 直接调用生成器函数`gen()`并不会实际执行生成器函数内的代码，而是返回了一个迭代器；
* 第一次调用迭代器的`__next__()`，从第一个`yeild`处返回了`123`；
* 第二次调用迭代器的`send()`，生成器函数`gen`内首先从第一个`yeild`处获得并输出了`send`发送进去的值，然后运行到第二个`yeild`处返回了`abc`；
* 最后再调用迭代器的`__next__()`时，可以看到生成器函数`gen`内从第二个`yeild`处获得的值为`None`，然后运行到`return`处报`StopIteration`错，并且将返回值`xxx`放到了错误里。

完整的迭代器方法列表：
>* `generator.__next__()`：开始一个生成器函数的执行或是从上次执行的`yield`表达式位置恢复执行；
>* `generator.send(value)`：恢复执行并向生成器函数“发送”一个值。 value 参数将成为当前`yield`表达式的结果。
>* `generator.throw(type[, value[, traceback]])`：在生成器暂停的位置引发 `type` 类型的异常，并返回该生成器函数所产生的下一个值。 如果生成器没有产生下一个值就退出，则将引发 `StopIteration` 异常。如果生成器函数没有捕获传入的异常，或引发了另一个异常，则该异常会被传播给调用者。
>* `generator.close()`：在生成器函数暂停的位置引发 `GeneratorExit`。 如果之后生成器函数正常退出、关闭或引发 `GeneratorExit` (由于未捕获该异常) 则关闭并返回其调用者。 如果生成器产生了一个值，关闭会引发 `RuntimeError`。 如果生成器引发任何其他异常，它会被传播给调用者。 如果生成器已经由于异常或正常退出则 `close()` 不会做任何事。

## 从生成器到协程

>迭代器与协程非常相似；它们`yield`多次，它们具有多个入口点，并且它们的执行可以被挂起。唯一的区别是迭代器不能控制在它在`yield`后交给哪里继续执行；控制权总是转移到迭代器的调用者。

### 可等待对象

`awaitable`对象主要实现了`__await__()`方法。**该方法必须返回一个迭代器**。

### 协程对象

>协程对象继承自`awaitable`对象。 协程的执行可通过调用`__await__()`并迭代其结果来控制。 当协程结束执行并返回时，迭代器会引发`StopIteration`，该异常的`value`属性将成为协程的返回值。如果协程引发了异常，它会被迭代器所传播。协程不应直接引发未处理的`StopIteration`异常。
>
>除了`__await__()`外，协程对象还具有下面列出的方法，它们类似于生成器的对应方法。 但是，与生成器不同，协程并不直接支持迭代。
>
>* `coroutine.send(value)`：开始或恢复协程的执行。 如果 `value` 为 `None`，则这相当于前往 `__await__()` 所返回迭代器的下一项。 如果 `value` 不为 `None`，此方法将委托给导致协程挂起的迭代器的 `send()` 方法。 其结果（返回值，`StopIteration` 或是其他异常）将与上述对 `__await__()` 返回值进行迭代的结果相同。
>* `coroutine.throw(type[, value[, traceback]])`：在协程内引发指定的异常。 此方法将委托给导致协程挂起的迭代器的 `throw()` 方法，如果存在该方法。 否则的话，异常会在挂起点被引发。 其结果（返回值，`StopIteration` 或是其他异常）将与上述对 `__await__()` 返回值进行迭代的结果相同。 如果异常未在协程内被捕获，则将回传给调用者。
>* `coroutine.close()`：此方法会使得协程清理自身并退出。 如果协程被挂起，此方法会先委托给导致协程挂起的迭代器的 `close()` 方法，如果存在该方法。 然后它会在挂起点引发 `GeneratorExit`，使得协程立即清理自身。 最后，协程会被标记为已结束执行，即使它根本未被启动。当协程对象将要被销毁时，会使用以上处理过程来自动关闭。

可以看到，协程与迭代器非常相似，都是一个可以挂起和继续的对象，协程的底层就是基于迭代器在控制挂起和继续的操作。这也是为什么Python协程的教程都要从生成器和迭代器开始讲起。

### 基于生成器的协程

>**注解**：对基于生成器的协程的支持 **已弃用** 并计划在 Python 3.10 中移除。
>
>基于生成器的协程是 async/await 语法的前身。它们是使用 `yield from` 语句创建的 Python 生成器，可以等待 Future 和其他协程。
>
>基于生成器的协程应该使用 `@asyncio.coroutine` 装饰，虽然这并非强制。此装饰器使得旧式的基于生成器的协程能与 async/await 代码相兼容:
>
>```python
>@asyncio.coroutine
>def old_style_coroutine():
>    yield from asyncio.sleep(1)
>
>async def main():
>    await old_style_coroutine()
>```
>
>Deprecated since version 3.8, will be removed in version 3.10: 请改用 `async def`。

## 异步生成器

在一个 `async def` 定义的函数体内使用 `yield` 表达式会让协程函数变成异步的生成器。

>在一个使用 `async def` 定义的函数或方法中出现的 `yield` 表达式会进一步将该函数定义为一个异步生成器函数。

异步生成器和生成器的方法类似，最大的区别在于其所有的方法返回的都是`awaitable`对象，在调用时要用`async for`。

* `generator.__anext__()`：返回一个可等待对象，功能同`generator.__next__()`；此方法通常是通过 async for 循环隐式地调用；
* `generator.asend(value)`：返回一个可等待对象，功能同`generator.send(value)`；
* `generator.athrow(type[, value[, traceback]])`：返回一个可等待对象，功能同`generator.throw(type[, value[, traceback]])`；
* `generator.aclose()`：返回一个可等待对象，功能同`generator.close()`。