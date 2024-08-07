---
title: "【转载】响应式编程"
created: "2023-02-09 10:12:02"
updated: "2023-02-09 10:12:02"
date: "2023-02-09 10:12:02"
tags: 
 - "编程语言"
 - "Vue"
 - "概念"
 - "前端"
categories: 
 - "编程语言"
 - "Vue"
---

[原文在此](https://zhuanlan.zhihu.com/p/162947532)

响应式编程是一种异步编程风格，它关注数据流和变化的传播。

响应式编程是一种与数据流和变化传播相关的声明式编程范式。使用此范例，可以轻松地表示静态(例如，数组)或动态(例如，事件发射器)数据流，并且还可以表示关联执行模型中的推断出的依赖关系，这有助于更改数据流的自动传播。

reactive programming （响应式编程）

imperative programming（命令式编程）

在命令式编程中，a:=b+c意味着将b+c的结果赋值给a，并且此后b或c的值发生变化不会影响到a的值。而在响应式编程中，**a的值会随着b或c的改变而自动更新，并且不需要重新执行a:=b+c来确定当前分配给a的值**。（PS：是不是很像angularjs、vuejs这种MVVM框架，视图绑定模型，模型变了，视图自动就跟着变了）

例如，在 model–view–controller (MVC) 架构中，响应式编程可以促进基础模型中的更改，这些更改会自动反映在关联的视图中。

响应式编程与面向对象编程中通常使用的观察者模式具有很多相似之处。

如果从推拉的角度来看的话，响应式编程是“推”，它主动将变化推送给它的订阅者。Publisher-Subscriber是两个非常重要的概念。

想象一下，数据流从源出发，经过一个一个节点的处理，最终达到目的地。节点就相当于操作符，处理完了以后就将流发射出去，到下一个节点再执行再发射。

我总觉得这个流程很眼熟，很像 Apache Storm 的处理方式。在一个拓扑结构中，数据流从Spout发出，经过若干bolt的处理，最终汇集到某个地方。

还有一种理解，我觉得也很不错，说响应式编程是一种通过异步和数据流来构建事务关系的编程模型。事物可以理解程一次处理过程，一次执行过程。响应式编程就是要构建关系，事务和事务之间的关系。而数据流就像是一个桥梁一样，数据流从一个事务流向下一个事务。

想象一下，长江流经宜宾、泸州、重庆、涪陵、万州、宜昌、荆州、武汉、黄石、鄂州、九江、安庆、铜陵、芜湖、南京、上海，最终汇入东海。

就像CompleteFuture把Future进行编排一样。

本质来讲，响应式编程上是对数据流或某种变化所作出的反应，但是这个变化什么时候发生是未知的，所以他是一种基于异步、回调的方式在处理问题