(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{887:function(s,t,a){"use strict";a.r(t);var i=a(4),l=Object(i.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("strong",[s._v("Description")])]),s._v(" "),a("p",[s._v("有n个作业需要在一台机器上执行，一个时刻机器上只能执行一个作业，每个作业可在单位时间内完成，作业i有截止时间di，当作业i在截止时间被执行完，则可获得pi的收益。求最大收益。")]),s._v(" "),a("p",[a("strong",[s._v("Input")])]),s._v(" "),a("p",[s._v("第一行输入T(T<=10)表示有T组数据。每组数据先输入一个正整数N(1<=N<=50000)，表示共有N个作业，随后输入N组(di,pi)，表示每个作业的截止时间和收益。")]),s._v(" "),a("p",[a("strong",[s._v("Output")])]),s._v(" "),a("p",[s._v("输出T行正整数，第i行表示第i组数据下能获得的最大收益。")]),s._v(" "),a("h2",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("p",[s._v("初见此题，从搜索的角度看，可以看出这是一个排列树问题，但是排列数问题难以用动态规划等解法使时间复杂度为多项式。我们需要使用某种方法消除“排列”，使这个问题成为一个组合数问题，以便于我们使用动态规划等方法。")]),s._v(" "),a("p",[s._v("可以证明，将最优解中的任务执行顺序按截止时间从小到大排序不会影响最终结果：")]),s._v(" "),a("p",[s._v("对于一个最优的任务执行序列"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("1")])],1),a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("2")])],1),a("mo",[s._v("…")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("msub",[a("mi",[s._v("x")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1),a("mo",[s._v("…")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_1x_2\\dots x_ix_{i+1}\\dots x_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.638891em","vertical-align":"-0.208331em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("1")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("2")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[s._v("…")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.311664em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("+")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[s._v("…")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),s._v("，如果"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("d")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1)],1),a("mo",[s._v(">")]),a("msub",[a("mi",[s._v("d")]),a("msub",[a("mi",[s._v("x")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("d_{x_i}>d_{x_{i+1}}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.9445399999999999em","vertical-align":"-0.2501em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139199999999997em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3280857142857143em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2501em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v(">")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.986205em","vertical-align":"-0.291765em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139200000000003em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.32808571428571426em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("+")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.20252142857142857em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.291765em"}},[a("span")])])])])])])])]),s._v("，那么直接交换"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("msub",[a("mi",[s._v("x")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_ix_{i+1}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.638891em","vertical-align":"-0.208331em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.311664em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("+")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}},[a("span")])])])])])])])]),s._v("，使"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_{i+1}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.638891em","vertical-align":"-0.208331em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.311664em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("+")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}},[a("span")])])])])])])])]),s._v("先执行，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),s._v("后执行。显然，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("≤")]),a("msub",[a("mi",[s._v("d")]),a("msub",[a("mi",[s._v("x")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1)],1),a("mo",[s._v("<")]),a("msub",[a("mi",[s._v("d")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1)],1),a("mo",[s._v("≤")]),a("mi",[s._v("i")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("i\\leq d_{x_{i+1}}<d_{x_i}\\leq i+1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.79549em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.986205em","vertical-align":"-0.291765em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139200000000003em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.32808571428571426em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")]),a("span",{staticClass:"mbin mtight"},[s._v("+")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.20252142857142857em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.291765em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("<")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.9445399999999999em","vertical-align":"-0.2501em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139199999999997em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3280857142857143em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2501em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.74285em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")])])])]),s._v("，交换后仍然能保证任务执行完成。因此，最优解中的任务执行顺序按截止时间从小到大排序不会影响最终结果。")]),s._v(" "),a("p",[s._v("有了这个结论，我们就可以消除“排列”了。直接将任务执行的顺序固定为截止时间从小到大顺序，在此基础上选择收益最大的任务组合方案即是最优方案。")]),s._v(" "),a("p",[s._v("若排序后的任务顺序为"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("1")])],1),a("msub",[a("mi",[s._v("x")]),a("mn",[s._v("2")])],1),a("mo",[s._v("…")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("x_1x_2\\dots x_n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("1")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("2")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[s._v("…")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])])])])]),s._v("，设"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("i")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("t")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("f(i,t)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("为前"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("i")])])])]),s._v("个任务在"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("t")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.61508em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("t")])])])]),s._v("时间内安排产生的最大收益，那么易得状态转移为执行当前任务和不执行当前任务的收益较大的那个：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("i")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("t")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",[s._v("=")]),a("mi",[s._v("m")]),a("mi",[s._v("a")]),a("mi",[s._v("x")]),a("mo",{attrs:{stretchy:"false"}},[s._v("{")]),a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("t")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",[s._v("+")]),a("msub",[a("mi",[s._v("p")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1)],1),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("t")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",{attrs:{stretchy:"false"}},[s._v("}")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("f(i,t)=max\\{f(i-1,t-1)+p_{x_i},f(i-1,t)\\}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("m")]),a("span",{staticClass:"mord mathdefault"},[s._v("a")]),a("span",{staticClass:"mord mathdefault"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("{")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8388800000000001em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0001em","vertical-align":"-0.2501em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("p")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15139199999999997em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("x")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3280857142857143em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.07142857142857144em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("i")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.143em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2501em"}},[a("span")])])])])]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("1")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mclose"},[s._v("}")])])])])])]),s._v(" "),a("p",[s._v("可从"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mn",[s._v("0")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mn",[s._v("0")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("f(0,0)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("开始一直计算到"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("f")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("n")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("n")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("f(n,n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("即得到最终解。")])])}),[],!1,null,null,null);t.default=l.exports}}]);