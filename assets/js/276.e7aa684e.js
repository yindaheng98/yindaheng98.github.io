(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{953:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"getopts和getopt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getopts和getopt"}},[t._v("#")]),t._v(" getopts和getopt")]),t._v(" "),a("p",[t._v("这两个都是用来解析脚本运行时的命令行参数的。")]),t._v(" "),a("h3",{attrs:{id:"getopts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getopts"}},[t._v("#")]),t._v(" getopts")]),t._v(" "),a("p",[t._v("只能处理短选项，无法处理长选项，暂不介绍")]),t._v(" "),a("h3",{attrs:{id:"getopt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getopt"}},[t._v("#")]),t._v(" getopt")]),t._v(" "),a("p",[t._v("可以同时处理短选项和长选项。")]),t._v(" "),a("p",[t._v("getopt命令不是一个标准的unix命令，但它在大多数Linux的发行版中都自带了有，如果没有，也可以从getopt官网上下载安装。")]),t._v(" "),a("p",[t._v("用法👇")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("存储解析结果的变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("getopt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("短命令解析设置"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--long "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("长命令解析设置"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("解析错误时提示的脚本名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("要解析的变量"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("下面这个示例")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("getopt -o :ab:c:: --long along,blong:,clong:: -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example.sh'")]),t._v(" -- "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$@")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("-o")]),t._v("或"),a("code",[t._v("--options")]),t._v("选项后面接可接受的短选项，如"),a("code",[t._v("ab:c::")]),t._v("，表示可接受的短选项为"),a("code",[t._v("-a -b -c")]),t._v("，其中"),a("code",[t._v("-a")]),t._v("选项不接参数，"),a("code",[t._v("-b")]),t._v("选项后必须接参数，"),a("code",[t._v("-c")]),t._v("选项的参数为可选的")]),t._v(" "),a("li",[a("code",[t._v(":ab:c::")]),t._v("开头的"),a("code",[t._v(":")]),t._v("表示不打印错误信息")]),t._v(" "),a("li",[a("code",[t._v("-l")]),t._v("或"),a("code",[t._v("--long")]),t._v("选项后面接可接受的长选项，"),a("strong",[t._v("用逗号分开，冒号的意义同短选项")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("-n")]),t._v("选项后接选项解析错误时提示的脚本名字")])]),t._v(" "),a("h4",{attrs:{id:"的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#的用法"}},[t._v("#")]),t._v(" --的用法")]),t._v(" "),a("p",[t._v("*nix 中，ls 命令是用来列出当前目录下的文件和子目录的。它可以接受一些选项（如 -lrt）。现在的问题是，如果有一个文件，它的名字叫做 -foobar，要怎样才能列出它的相关信息呢？")]),t._v(" "),a("p",[t._v("实际上 ls 内部使用了 getopts 解析参数。于是我们可以这样👇")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -lrt -- -foobar\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("利用两个连续的连字符 --，显式地告诉 getopts：到这为止！然后，ls 会读入 -foobar 作为文件名，显示它的相关信息。")])])}),[],!1,null,null,null);s.default=r.exports}}]);