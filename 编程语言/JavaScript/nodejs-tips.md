---
title: "nodejs补充知识"
date: "2019-11-29 01:30:25"
tags: 
 - "Node"
 - "实操"
 - "编程语言"
 - "JavaScript"
categories: 
 - "编程语言"
 - "JavaScript"
created: "2019-11-29 01:30:25"
updated: "2019-11-29 01:30:25"
---

## 在指定目录下运行npm

### 需求来源

写了一个需要在本地保存文件的项目，想让这个项目能在任意位置保存文件，但是又不想单独为这一个功能单独搞配置文件，于是乎在代码里面用`process.CWD()`指定文件路径，使保存目录为程序实际运行的目录。

然而，通常的`npm start`只能在工程目录下才能运行，需要一个命令行参数指定要运行的工程目录，使它能在非工程目录下运行指定工程。

### 解决方法：npm命令行参数

`npm start`加参数：`npm start --dir=XXX`，然后在程序里获取`process.env.npm_config_dir`。
