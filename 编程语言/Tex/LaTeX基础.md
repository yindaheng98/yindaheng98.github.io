---
title: "LaTeX基础"
date: "2020-04-02 06:01:49"
tags: 
 - "Tex"
 - "实操"
 - "概念"
 - "设计思路"
 - "编程语言"
categories: 
 - "编程语言"
 - "Tex"
created: "2020-04-01 15:40:02"
updated: "2020-04-02 06:01:49"
---

参考资料：
* [LaTeX vs. MiKTeX: The levels of TeX](http://www.tug.org/levels.html)
* [doc 、ltxdoc 与 docstrip](https://www.latexstudio.net/hulatex/package/packagewrite.htm)

## The levels of TeX —— TeX系统的层次结构

* 发行版：TeX Live、MiKTeX、CTeX等。这些是对TeX相关工具的打包，里面包含有许多的TeX相关的文件。当需要安装TeX的时候，从这些发行版里面选一个，下载并安装，你的电脑就能运行TeX以及一些相关的工具了。
* 文本编辑器：Emacs、vim、TeXworks、TeXShop、TeXnicCenter、WinEdt等。这些不用多说，只不过是编辑tex等文件的工具。
* TeX引擎：TeX、pdfTeX、XeTeX、LuaTeX等。这些是可执行的TeX程序，它们可以对.tex文件进行编译并输出一些可打印的文件。其中：
  * TeX是最原始的TeX程序，它的输出是.dvi文件
  * pdfTeX和TeX功能基本相同，最大的区别在于pdfTeX直接输出.pdf文件
  * XeTeX的诞生是因为原始pdfTeX程序只支持ASCII。XeTeX直接支持Unicode编码，因此可以在不加任何操作的情况下直接编译中日韩等国文字
  * LuaTeX因其支持内嵌Lua脚本而得名，有足够强的计算能力以及足够多扩展的可能性，但是其主要是为ConTeXt服务
* TeX格式(format)：LaTeX、plain TeX等。这些是一系列预定义好的TeX宏，隐藏了TeX底层的原始控制词，以方便用户使用（不同的引擎对同一种TeX格式可能用的是不同的文件）
* 宏包： geometry、lm等。这些也是一系列定义好的宏，它们有些可能是用plain TeX写的，有些可能是LaTeX写的，是对plain TeX或LaTeX的扩展

TeX家族还有一个特殊的成员——ConTeXt，它将.tex文件和TeX格式用其他程序解析为底层TeX再运行LuaTeX，从而比较充分地使用LuaTeX的扩展能力。

##### tex与latex、pdftex与pdflatex、xetex与xelatex、luatex与lualatex

上面写的这些指的是TeX Live等发行版中的可执行程序，它们之间有一定区别。顾名思义tex、pdftex、xetex、luatex分别是TeX引擎TeX、pdfTeX、XeTeX、LuaTeX的可执行程序，它们在运行时会默认载入plain TeX的格式；而latex、pdflatex、xelatex、lualatex与上面这些TeX引擎完全一样，只不过默认载入LaTeX的格式。这种做法只是为了少输点命令行而已。

比如，下面这两个指令完全等价：
```sh
pdftex -fmt=latex foo.tex #pdftex，载入pdfTeX的LaTeX格式文件pdflatex.fmt
pdflatex foo.tex #pdflatex默认就载入pdflatex.fmt
```

##### TeX、LaTeX

这两个词比较容易混淆。TeX可以指整个TeX生态圈和相关工具链、TeX或plain TeX中所用的宏语言、.tex文档、纯净的TeX引擎或者载入了plain TeX格式的TeX引擎；LaTeX可以指整个基于LaTeX的工具链（也即LaTeX这个软件本身）、基于LaTeX格式的宏语言、或者载入了LaTeX格式的TeX引擎。

## LaTeX重要文件

* .cls文件：类型文件
  * 包含任意TeX和LaTeX代码
  * 用于指定整个LaTeX文档的基本格式。用于修改基本LaTeX指令或提供新的排版指令，如 \section，\tablecontents，\author等
  * 由\documentclass{...}命令载入
  * 每个LaTeX文档中只能载入一个
* .sty文件：样式文件
  * 包含任意TeX和LaTeX代码
  * 用于调整LaTeX文档的格式。一般会提供专用于某一类场景下的排版指令，例如专用于图片排版的graphicx
  * 由\usepackage{...}命令载入
  * 每个LaTeX文档中可以载入多个

## doc、ltxdoc与docstrip

LATEX生态系统中的doc/docStrip包虽不及ipython jupyter的设计精妙复杂且用途广泛，但仍是文学编程思想在LATEX生态中的一种体现。它赋予了TEX文学编程的能力。正如doc包的作者在其文档开头所写：

>The TEX macros which are described here allow definitions and documentation to be held in one and the same file. This has the advantage that normally very complicated instructions are made simpler to understand by comments inside the definition. In addition to this, updates are easier and only one source file needs to be changed. 

文学编程这种寓代码于文档中的方式会使得编程维护变得更加简单。然而，也正如docStrip的作者在docStrip的文档开头所写：

>This way of writing TEX programs obviously has great advantages, especially when the program becomes larger than a couple of macros. There is one drawback however, and that is that such programs may take longer than expected to run because TEX is an interpreter and has to decide for each line of the program file what it has to do with it. Therefore, TEX programs may be sped up by removing all comments from them. 

非结构化的文学编程方式在性能上的弊端非常明显。这也是作者创造docStrip包的原因。用于自动将TEX包文档的代码删去，只保留TEX代码，从而在后续操作中提高性能，这一过程完全可以看作是文学编程中的Tangle过程。

`doc`是个编写宏包文件的宏包，它定义了一组宏包文件编辑环境和命令，其本质是一个.sty文件；`ltxdoc`是用于排版LaTeX源文件的类型文件，其本质是一个.cls文件，且其中调用了`doc`宏包；`docstrip`是个文件分解工具，定义了一组文件输入和分类创建命令，它是一个.tex“脚本”。

.cls类型文件和.sty样式文件都来自于一种后缀名为.dtx的文件，这类文件按照`doc`要求的方式编写，将使用说明文档的TeX代码放在在注释中。

当要生成文档时(Weave)，调用（以pdflatex为例），调用：
```sh
$ pdflatex [文件名].dtx
```
pdflatex就会像编译正常的.tex文件一样编译.dtx中的文档，生成.pdf文件。

当要生成.cls或.sty文件时(Tangle)，调用：
```sh
$ latex docstrip
```
会出现一个对话窗口，让用户选择是输出.cls还是.sty以及.dtx文件名等信息，然后自动从指定的.dtx文件中剥离说明文档，摘取命令程序，创建.cls类型文件或.sty样式文件。

除直接编译外，.dtx文件还可以借助.ins安装文件进行编译。.ins安装文件一般与.dtx同名，其内容非常简单：
```TEX
\input docstrip.tex % 调用 docstrip 工具；
\generateFile{*.cls}{f}{\from{*.dtx}{class}} % 创建类包文件。
```
很多大型程序说明文件的源文件*.dtx 含有类包程序*.cls、宏包程序*.sty、说明或格式程序*.tex 和配置程序*.cfg 等多种程序，使用*.ins 安装文件的好处就在于它能够一次性自动地完成对*.dtx 文件的分类重建工作。

很多数情况*.dtx 和*.ins 都是成对出现的；如果找不到*.ins，可以打开*.dtx 文件，根据里面的各种程序界定标记，使用第一种方法手工解包。现在有很多*.dtx 文件已将*.ins 的内容并入其中，这样用 PDFLaTeX 对其编译，就会自动同时创建出程序说明文件*.pdf 和宏包文件*.sty 或类包文件*.cls 等相关文件。