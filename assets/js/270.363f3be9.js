(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{943:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("有一个Python包包含许多互相导入的子包、一个在包外的脚本想要导入这个包，问包内import和包外脚本应该如何书写，使得对任意位置的包外脚本都能导入包内的所有名称？")]),t._v(" "),a("h2",{attrs:{id:"解决方案1：使用相对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案1：使用相对路径"}},[t._v("#")]),t._v(" 解决方案1：使用相对路径")]),t._v(" "),a("p",[t._v("这是Python建议的解决方案。")]),t._v(" "),a("p",[t._v("需要包是标准格式，即有"),a("code",[t._v("__init__.py")]),t._v("文件，否则会报“不可使用相对路径”的错误。")]),t._v(" "),a("p",[t._v("包内：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" x\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" xx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("包外：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"包的上一级目录"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxxxx "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# xxxxx为包名")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"解决方案2：将包路径加入os-path中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案2：将包路径加入os-path中"}},[t._v("#")]),t._v(" 解决方案2：将包路径加入"),a("code",[t._v("os.path")]),t._v("中")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("__init__.py")]),t._v("文件中写上：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("包外：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxxxx\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" x\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" xx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[a("code",[t._v("__init__.py")]),t._v("文件开头的那就好")]),t._v(" "),a("p",[t._v("Python启动时，"),a("code",[t._v("os.path")]),t._v("中会有一系列预置的路径（一般为当前目录+pip安装的包的路径），当需要"),a("code",[t._v("import")]),t._v("时，Python会从"),a("code",[t._v("os.path")]),t._v("所指的路径中查找所需要"),a("code",[t._v("import")]),t._v("的名称，进行导入。换句话说，所有在"),a("code",[t._v("os.path")]),t._v("所指目录下的文件都相当于在当前目录下，与当前目录下的Python平起平坐。")]),t._v(" "),a("p",[t._v("因此，将包路径加入"),a("code",[t._v("os.path")]),t._v("中就相当于这个包的内容处在当前目录下，这个包是不是一个标准的包都无所谓了。")]),t._v(" "),a("p",[a("code",[t._v("__init__.py")]),t._v("文件开头的那句话将"),a("code",[t._v("__init__.py")]),t._v("的上级目录，即包的根目录加入到"),a("code",[t._v("os.path")]),t._v("，"),a("code",[t._v("import")]),t._v("这个包时此句自动执行，之后所有"),a("code",[t._v("import")]),t._v("操作就都如同在包内一样了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);