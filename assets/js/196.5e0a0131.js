(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{873:function(t,a,s){"use strict";s.r(a);var i=s(4),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前置知识："),s("RouterLink",{attrs:{to:"/人工智能/quant.html"}},[t._v("《一些常见的模型量化方法》")])],1),t._v(" "),s("h2",{attrs:{id:"siggraph-22-variable-bitrate-neural-fields-vector-quantized-auto-decoder-vq-ad-用于feature-grid压缩的矢量量化思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#siggraph-22-variable-bitrate-neural-fields-vector-quantized-auto-decoder-vq-ad-用于feature-grid压缩的矢量量化思想"}},[t._v("#")]),t._v(" (SIGGRAPH'22) Variable Bitrate Neural Fields (Vector-Quantized Auto-Decoder, VQ-AD): 用于Feature Grid压缩的矢量量化思想")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/20240423163529.png",alt:""}})]),t._v(" "),s("p",[t._v("这论文把矢量量化的思想用到Feature Grid的训练和存储中，从而压缩模型的大小。\n具体来说，本文的方法是把InstantNGP中使用空间hash函数查表的方法改成了一个可训练的indices。")]),t._v(" "),s("p",[t._v("前置知识：InstantNGP")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/图形学/Nerf加速.html"}},[t._v("《体渲染、体素、位置编码——主流Nerf质量优化和计算加速方法学习》")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/图形学/NeRF系列工作总结.html"}},[t._v("《【转载】NeRF系列工作总结》")])],1)]),t._v(" "),s("p",[t._v("在InstantNGP中，hash表的values可以视为矢量量化中的码矢，训练过程实际上就是在对这个码矢进行训练。\n照这个思路，InstantNGP中codebook的key就是由空间hash函数生成的值。\n但是，矢量量化的一个很重要的思想就是要对输入向量进行聚类，保证输入向量和其对应的码矢尽可能接近，而InstantNGP中feature值相近的region（内容相似的区域）经过空间hash出来的值随机均匀分布在指定范围内，于是相近的输入向量并不一定会对应到同一个码矢。")]),t._v(" "),s("p",[t._v("所以这样其实并不符合矢量量化的思想，矢量量化通常用聚类等方法让输入向量和其对应的码矢尽可能接近，在InstantNGP的场景就是内容相似的区域对应到同一个码矢。\n本文就是要解决这个问题。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("符号")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")]),s("mo",[t._v("∈")]),s("msup",[s("mi",{attrs:{mathvariant:"double-struck"}},[t._v("R")]),s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1),s("mo",[t._v("×")]),s("mi",[t._v("k")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D\\in\\mathbb R^{2^b\\times k}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72243em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("∈")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.01192em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathbb"},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.01192em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.9270285714285713em"}},[s("span",{staticStyle:{top:"-2.931em","margin-right":"0.07142857142857144em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),s("span",{staticClass:"sizing reset-size3 size1 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])]),s("span",{staticClass:"mbin mtight"},[t._v("×")]),s("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])])])])])])])])])]),t._v(" "),s("td",[t._v("存储"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.849108em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])]),t._v("个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("k")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v("维feature的codebook")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])])]),t._v(" "),s("td",[t._v("空间等分为grid，grid每个顶点都对应一个feature，feature数量共"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("V")]),s("mo",[t._v("∈")]),s("msup",[s("mi",{attrs:{mathvariant:"double-struck"}},[t._v("Z")]),s("mi",[t._v("m")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V\\in\\mathbb Z^m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72243em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("∈")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68889em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathbb"},[t._v("Z")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("m")])])])])])])])])])])]),t._v("，取值范围"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[0,2^b-1]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.099108em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")])])])])]),t._v(" "),s("td",[t._v("grid的"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个顶点对应的feature在codebook中的位置")])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("C")]),s("mo",[t._v("∈")]),s("msup",[s("mi",{attrs:{mathvariant:"double-struck"}},[t._v("R")]),s("mrow",[s("mi",[t._v("m")]),s("mo",[t._v("×")]),s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C\\in\\mathbb R^{m\\times 2^b}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72243em","vertical-align":"-0.0391em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("∈")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.01192em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathbb"},[t._v("R")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.01192em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("m")]),s("span",{staticClass:"mbin mtight"},[t._v("×")]),s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mtight"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.9270285714285713em"}},[s("span",{staticStyle:{top:"-2.931em","margin-right":"0.07142857142857144em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),s("span",{staticClass:"sizing reset-size3 size1 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])])])])])])])])])])]),t._v(" "),s("td",[t._v("softened indices矩阵，grid的"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个顶点都能从其中查出一个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.849108em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])]),t._v("维向量")])])])]),t._v(" "),s("h3",{attrs:{id:"训练过程中的forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#训练过程中的forward"}},[t._v("#")]),t._v(" 训练过程中的forward")]),t._v(" "),s("ol",[s("li",[t._v("（同InstantNGP）对于每个输入坐标，计算其在grid里的那个cube中，算出cube的8个顶点编号")]),t._v(" "),s("li",[t._v("对于每个顶点，在"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("C")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")])])])]),t._v("中查出"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.849108em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])]),t._v("维向量，经过一个softmax激活函数")]),t._v(" "),s("li",[t._v("把这个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.849108em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])]),t._v("维向量与"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),t._v("中的"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("b")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.849108em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.849108em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])])])])])])])])]),t._v("个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("k")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v("维feature依次相乘后求和，作为这个顶点的feature")]),t._v(" "),s("li",[t._v("（同InstantNGP）插值、过MLP、渲染")])]),t._v(" "),s("p",[t._v("这样，用可训练的softened indices矩阵"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("C")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")])])])]),t._v("代替没法训练的hash函数indices，间接达到聚类的效果。")]),t._v(" "),s("h3",{attrs:{id:"训练结束后的数据转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#训练结束后的数据转换"}},[t._v("#")]),t._v(" 训练结束后的数据转换")]),t._v(" "),s("p",[t._v("softened indices矩阵"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("C")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")])])])]),t._v("很大，显然不能直接存它，但是在前面训练的时候让它经过一个softmax激活函数就是为了让它里面的值变成one-hot的，于是直接"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("V")]),s("mo",[t._v("=")]),s("msub",[s("mtext",[t._v("argmax")]),s("mi",[t._v("i")])],1),s("mi",[t._v("C")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V=\\text{argmax}_iC[i]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("argmax")])]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.21752399999999997em"}},[s("span",{staticStyle:{top:"-2.4558600000000004em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathdefault mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.24414em"}},[s("span")])])])])]),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathdefault"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("就把它转化为了一个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" bit整数的index表。")]),t._v(" "),s("h3",{attrs:{id:"推断时的forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推断时的forward"}},[t._v("#")]),t._v(" 推断时的forward")]),t._v(" "),s("ol",[s("li",[t._v("（同InstantNGP）对于每个输入坐标，计算其在grid里的那个cube中，算出cube的8个顶点编号")]),t._v(" "),s("li",[t._v("对于每个顶点，在"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("V")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("中查出"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" bit整数即其feature在feature表中"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),t._v("的位置")]),t._v(" "),s("li",[t._v("根据这个位置从"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),t._v("中找出这个顶点的feature")]),t._v(" "),s("li",[t._v("（同InstantNGP）插值、过MLP、渲染")])]),t._v(" "),s("h3",{attrs:{id:"压缩效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩效果"}},[t._v("#")]),t._v(" 压缩效果")]),t._v(" "),s("h4",{attrs:{id:"对比instantngp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比instantngp"}},[t._v("#")]),t._v(" 对比InstantNGP")]),t._v(" "),s("p",[t._v("原文中的描述：")]),t._v(" "),s("blockquote",[s("p",[t._v("In contrast to using a hash function [Müller et al. 2022] for indexing, we need to store 𝑏-bit integers in the feature grid but we are able to use a much smaller codebook (table) due to the learned adaptivity of the indices.")])]),t._v(" "),s("p",[t._v("比InstantNGP多存"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" bit整数，空间划分越细"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("越大。")]),t._v(" "),s("p",[t._v("这种方法用可训练的softened indices间接达到聚类的效果，所以同样的codebook长度其质量要比用空间hash的InstantNGP更好。")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/20240423175518.png",alt:""}})]),t._v(" "),s("p",[t._v("实验结果可以看出，VQ-AD主要的存储占用都是那"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])]),t._v("个"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("b")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("b")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("b")])])])]),t._v(" bit整数，反倒是codebook成了大头，不过整体上还是VQ-AD更小。")]),t._v(" "),s("p",[t._v("bw表示bitwidth，比如10bw表示codebook "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),t._v("的长度是"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msup",[s("mn",[t._v("2")]),s("mn",[t._v("10")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2^{10}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mtight"},[t._v("1")]),s("span",{staticClass:"mord mtight"},[t._v("0")])])])])])])])])])])])]),t._v("。\n根据这里的VQ-AD在6bw时"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("V")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("大小可以算出其将空间划分方式和feature的长度：")]),t._v(" "),s("ul",[s("li",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("477")]),s("mtext",[t._v("kB")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),s("mn",[t._v("6")]),s("mtext",[t._v("bit")]),s("mo",[t._v("=")]),s("mn",[t._v("651264")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("477\\text{kB}/6\\text{bit}=651264")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("4")]),s("span",{staticClass:"mord"},[t._v("7")]),s("span",{staticClass:"mord"},[t._v("7")]),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("kB")])]),s("span",{staticClass:"mord"},[t._v("/")]),s("span",{staticClass:"mord"},[t._v("6")]),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("bit")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("6")]),s("span",{staticClass:"mord"},[t._v("5")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mord"},[t._v("6")]),s("span",{staticClass:"mord"},[t._v("4")])])])]),t._v("，所以空间中共有651264个grid顶点")]),t._v(" "),s("li",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("8")]),s("mtext",[t._v("kB")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),s("msup",[s("mn",[t._v("2")]),s("mn",[t._v("6")])],1),s("mo",[t._v("=")]),s("mn",[t._v("128")]),s("mtext",[t._v("B")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("8\\text{kB}/2^6=128\\text{B}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("8")]),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("kB")])]),s("span",{staticClass:"mord"},[t._v("/")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("6")])])])])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mord"},[t._v("8")]),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("B")])])])])]),t._v("，论文前面说了特征值是fp16，所以每个feature由64个浮点数组成")])]),t._v(" "),s("p",[t._v("1bw的时候codebook应该只有两个feature，这样都能比InstantNGP效果好？")]),t._v(" "),s("h4",{attrs:{id:"对比其他压缩方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比其他压缩方法"}},[t._v("#")]),t._v(" 对比其他压缩方法")]),t._v(" "),s("p",[t._v("对比的其他压缩方法都是在模型训练完进行后处理")]),t._v(" "),s("ul",[s("li",[t._v("LRA: low-rank approximation 低秩估计，具体是用的Karhunen-Loeve Transform（其实就是PCA），即对codebook进行特征值分解，保留较大的特征值")]),t._v(" "),s("li",[t._v("kmVQ: 对codebook进行"),s("RouterLink",{attrs:{to:"/人工智能/quant.html"}},[t._v("K-means矢量量化")])],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"i/20240423201038.png",alt:""}})]),t._v(" "),s("p",[t._v("总之就是VQ-AD效果最好")]),t._v(" "),s("h2",{attrs:{id:"compact3d-compressing-gaussian-splat-radiance-field-models-with-vector-quantization-用于压缩3d-gaussian-splatting的矢量量化和量化感知训练"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compact3d-compressing-gaussian-splat-radiance-field-models-with-vector-quantization-用于压缩3d-gaussian-splatting的矢量量化和量化感知训练"}},[t._v("#")]),t._v(" Compact3D: Compressing Gaussian Splat Radiance Field Models with Vector Quantization: 用于压缩3D Gaussian Splatting的矢量量化和量化感知训练")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/Compact3D.png",alt:""}})]),t._v(" "),s("p",[t._v("主要是对高斯点的参数进行K-means量化，并且提出了对应的量化感知训练方法。")]),t._v(" "),s("p",[t._v("被量化的高斯点参数包括四种：颜色、球谐系数、scale、rotation，每种的量化都独立进行，有各自的codebook。")]),t._v(" "),s("p",[t._v("没被量化的高斯点参数是位置和透明度。显然位置被矢量量化了会导致高斯点重合，没有意义；透明度是个标量值不需要矢量量化。")]),t._v(" "),s("h3",{attrs:{id:"量化过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量化过程"}},[t._v("#")]),t._v(" 量化过程")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/人工智能/quant.html"}},[t._v("K-means矢量量化")]),t._v("直接拿来用")],1),t._v(" "),s("h3",{attrs:{id:"量化感知训练过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量化感知训练过程"}},[t._v("#")]),t._v(" 量化感知训练过程")]),t._v(" "),s("p",[t._v("forward pass: 和通常的量化感知一样，具体如下：")]),t._v(" "),s("ul",[s("li",[t._v("高精度参数（高斯点参数）->量化->反量化->得到低精度参数（码矢）->推断->得到梯度")])]),t._v(" "),s("p",[t._v("backward pass: 通常的量化感知训练是用反向传播梯度更新高精度参数上，再通过量化操作重新生成低精度参数，但是本文的低精度参数是K-means生成的，每次反向传播都进行一次K-means量化生成低精度参数显然不现实，所以作者每100轮才进行一次K-means量化生成codebook，具体如下：")]),t._v(" "),s("ul",[s("li",[t._v("用反向传播梯度同时更新高精度参数和低精度参数\n"),s("ul",[s("li",[t._v("低精度参数的梯度等于所有用了这个码矢的参数梯度之和\n"),s("ul",[s("li",[t._v("每个高精度参数都有一个梯度，每个码矢的梯度对应多个高精度参数，所以有多个梯度")])])]),t._v(" "),s("li",[t._v("用低精度参数的梯度更新高精度参数")])])]),t._v(" "),s("li",[t._v("每100轮重新进行K-means量化生成codebook")])]),t._v(" "),s("p",[t._v("这个操作相当于对整个编码区域中的点进行平移，这样，位于编码区域边缘的点就会在下一次K-means量化中被聚类到别的区域里")]),t._v(" "),s("h3",{attrs:{id:"效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),s("p",[t._v("虽然还是很大，但是已经压了很多了，在某些数据集上甚至比没有向量量化的原版3DGS还高那么一丢丢：")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/Compact3D1.png",alt:""}})]),t._v(" "),s("p",[t._v("消融实验总之就是我最好：")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/Compact3D2.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);