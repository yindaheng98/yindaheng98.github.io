(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(t,a,s){t.exports=s.p+"assets/img/self-attention-matrix-calculation-2.752c1c91.png"},524:function(t,a,s){t.exports=s.p+"assets/img/Transformer-official.968dd26d.png"},525:function(t,a,s){t.exports=s.p+"assets/img/transformer_resideual_layer_norm.16f50ec4.png"},526:function(t,a,s){t.exports=s.p+"assets/img/transformer_resideual_layer_norm_2.e5f84071.png"},527:function(t,a,s){t.exports=s.p+"assets/img/transformer_resideual_layer_norm_3.6d335c4b.png"},528:function(t,a,s){t.exports=s.p+"assets/img/TransformerDecoder.251b076a.png"},529:function(t,a,s){t.exports=s.p+"assets/img/transformer_decoding_1.f457bd6d.gif"},530:function(t,a,s){t.exports=s.p+"assets/img/transformer_decoding_2.f234ea0b.gif"},823:function(t,a,s){"use strict";s.r(a);var i=s(4),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("原文："),i("a",{attrs:{href:"https://arxiv.org/pdf/1706.03762.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Attention Is All You Need》"),i("OutboundLink")],1)]),t._v(" "),i("p",[t._v("原文："),i("a",{attrs:{href:"https://jalammar.github.io/illustrated-transformer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Illustrated Transformer"),i("OutboundLink")],1)]),t._v(" "),i("p",[t._v("学Transformer之前请先理解"),i("RouterLink",{attrs:{to:"/人工智能/Attention.html"}},[t._v("《机器学习中的Attention机制》")]),t._v("，Transformer会用到里面讲的自注意力和多头注意力机制。")],1),t._v(" "),i("p",[t._v("先看论文里给出的结构：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(524),alt:""}})]),t._v(" "),i("p",[t._v("一看，也是和"),i("RouterLink",{attrs:{to:"/人工智能/Attention.html"}},[t._v("《机器学习中的Attention机制》")]),t._v("里介绍的RNN很相似的Encoder-Decoder结构。结合网上的各自解析我们可以知道，这个Encoder和Decoder都是由一个个基本单位叠起来的（可以看到原图中也写了这个“Nx”表示堆叠了多个像这样的单元）。")],1),t._v(" "),i("h2",{attrs:{id:"encoder单元"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#encoder单元"}},[t._v("#")]),t._v(" Encoder单元")]),t._v(" "),i("p",[t._v("Encoder单元内部长这样：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(525),alt:""}})]),t._v(" "),i("p",[t._v("输入的词经过自注意力+多头注意力之后经过一个全连接层。并且这自注意力和全连接层还吸收了残差网络的思想做了Add和Normalize：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(526),alt:""}})]),t._v(" "),i("p",[t._v("注意这里Encoder有全连接层为什么还能输入任意长度？因为可以看到这个全连接层一次只处理一个词的输出，从"),i("RouterLink",{attrs:{to:"/人工智能/Attention.html"}},[t._v("《机器学习中的Attention机制》")]),t._v("里介绍的自注意力+多头注意力可以知道每个词的自注意力输出的大小是固定的。")],1),t._v(" "),i("h2",{attrs:{id:"decoder单元"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decoder单元"}},[t._v("#")]),t._v(" Decoder单元")]),t._v(" "),i("p",[t._v("下面这图左边就是Decoder单元：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(527),alt:""}})]),t._v(" "),i("p",[t._v("右边是Encoder单元的对堆叠方式，因为Self Attention和Feed Forward都没改变输入的尺寸，所以Encoder单元的输出可以直接作为下一个Encoder单元的输入，Decoder单元也是同样的原理堆叠方式也是一样。")]),t._v(" "),i("p",[t._v("此外，还可以看到，这个Decoder的中间有一个Attention层既接收了编码器的输入又接收了解码器前面的输入，那么这一层的"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("K")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("、"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("、"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("都是多少？看这就知道了：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(528),alt:""}})]),t._v(" "),i("h2",{attrs:{id:"具体的运行过程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#具体的运行过程"}},[t._v("#")]),t._v(" 具体的运行过程")]),t._v(" "),i("p",[t._v("大佬做的动图，首先是把Encoder输出的"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("K")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("、"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("矩阵放进Decoder里，然后输入一个起始字符：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(529),alt:""}})]),t._v(" "),i("p",[t._v("第一步的输出就是输出句子的一个词向量。")]),t._v(" "),i("p",[t._v("接下来的步骤就和RNN里的Decoder有异曲同工之妙，就是把之前的输出作为输入再输进Decoder里：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(530),alt:""}})]),t._v(" "),i("p",[i("s",[t._v("疑问：")])]),t._v(" "),i("ul",[i("li",[i("s",[t._v("如果按照上面几张图的Decoder结构，Decoder模块的输出向量数量应该和输入的一样多，即输到最后的Linear+Softmax的矩阵大小是不断增长的不可能由一个固定的Linear+Softmax完成，是我漏看了什么吗？")])])]),t._v(" "),i("p",[t._v("解答：")]),t._v(" "),i("ul",[i("li",[t._v("编码器输入到解码器中的两个矩阵是作为"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("K")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("和"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("的，解码器生成的序列作为"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("，它们的特征维数都相同。")]),t._v(" "),i("li",[t._v("于是在"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("A")]),i("mi",[t._v("t")]),i("mi",[t._v("t")]),i("mi",[t._v("e")]),i("mi",[t._v("n")]),i("mi",[t._v("t")]),i("mi",[t._v("i")]),i("mi",[t._v("o")]),i("mi",[t._v("n")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("Q")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("K")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("V")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",[t._v("=")]),i("mi",[t._v("s")]),i("mi",[t._v("o")]),i("mi",[t._v("f")]),i("mi",[t._v("t")]),i("mi",[t._v("m")]),i("mi",[t._v("a")]),i("mi",[t._v("x")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mfrac",[i("mrow",[i("mi",[t._v("Q")]),i("msup",[i("mi",[t._v("K")]),i("mi",[t._v("T")])],1)],1),i("msqrt",[i("msub",[i("mi",[t._v("d")]),i("mi",[t._v("k")])],1)],1)],1),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Attention(Q,K,V)=softmax(\\frac{QK^T}{\\sqrt{d_k}})V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("A")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("e")]),i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("i")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("Q")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.627473em","vertical-align":"-0.538em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("m")]),i("span",{staticClass:"mord mathdefault"},[t._v("a")]),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mopen nulldelimiter"}),i("span",{staticClass:"mfrac"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"1.089473em"}},[i("span",{staticStyle:{top:"-2.5864385em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord sqrt mtight"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.8622307142857143em"}},[i("span",{staticClass:"svg-align",staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord mtight",staticStyle:{"padding-left":"0.833em"}},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("d")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.3448em"}},[i("span",{staticStyle:{top:"-2.3487714285714287em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),i("span",{staticClass:"sizing reset-size3 size1 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15122857142857138em"}},[i("span")])])])])])])]),i("span",{staticStyle:{top:"-2.8222307142857144em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"hide-tail mtight",staticStyle:{"min-width":"0.853em",height:"1.08em"}},[i("svg",{attrs:{width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"}},[i("path",{attrs:{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}})])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.17776928571428574em"}},[i("span")])])])])])])]),i("span",{staticStyle:{top:"-3.23em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),i("span",{staticStyle:{top:"-3.446108em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("Q")]),i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.9190928571428572em"}},[i("span",{staticStyle:{top:"-2.931em","margin-right":"0.07142857142857144em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),i("span",{staticClass:"sizing reset-size3 size1 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])])])])])])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.538em"}},[i("span")])])])]),i("span",{staticClass:"mclose nulldelimiter"})]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("中，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")]),i("msup",[i("mi",[t._v("K")]),i("mi",[t._v("T")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("QK^T")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.035771em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.8413309999999999em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])])])])])])])]),t._v("计算得到的矩阵长宽分别为"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("的样本数（"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("的行数）和"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("K")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("的样本数（"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("K")]),i("mi",[t._v("T")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K^T")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8413309999999999em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.8413309999999999em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])])])])])])])]),t._v("的列数）。")]),t._v(" "),i("li",[t._v("而"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("K")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("的样本数和"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("的样本数相同，所以再乘上一个"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("之后的长宽就是"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("的样本数和"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("的特征维数（等于"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("的特征维数）。")]),t._v(" "),i("li",[t._v("所以解码器输出矩阵和输入"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("Q")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("Q")])])])]),t._v("的矩阵大小相同")])]),t._v(" "),i("p",[i("img",{attrs:{src:s(442),alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);