(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{942:function(e,a,t){"use strict";t.r(a);var s=t(4),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"warp是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warp是什么"}},[e._v("#")]),e._v(" Warp是什么")]),e._v(" "),t("blockquote",[t("p",[e._v("The multiprocessor creates, manages, schedules, and executes threads in groups of 32 parallel threads called warps.")])]),e._v(" "),t("p",[e._v("Warp是Nvidia GPU中Thread的调度单位，每个Warp包含32个Thread。")]),e._v(" "),t("h2",{attrs:{id:"thread在warp中的组织方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread在warp中的组织方式"}},[e._v("#")]),e._v(" Thread在Warp中的组织方式")]),e._v(" "),t("blockquote",[t("p",[e._v("When a multiprocessor is given one or more thread blocks to execute, it partitions them into warps and each warp gets scheduled by a warp scheduler for execution.")])]),e._v(" "),t("p",[e._v("Warp的划分是由处理器自动进行的。")]),e._v(" "),t("blockquote",[t("p",[e._v("The way a block is partitioned into warps is always the same; each warp contains threads of consecutive, increasing thread IDs with the first warp containing thread 0.")])]),e._v(" "),t("p",[e._v("每个Warp中的Thread ID都是连续的。")]),e._v(" "),t("p",[e._v("所以，用户在程序里可以通过Thread ID判断Thread被划到了哪个Warp里，但无法指定Warp的划分方式。")]),e._v(" "),t("h2",{attrs:{id:"warp对计算的影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warp对计算的影响"}},[e._v("#")]),e._v(" Warp对计算的影响")]),e._v(" "),t("blockquote",[t("p",[e._v("Individual threads composing a warp start together at the same program address, but they have their own instruction address counter and register state and are therefore free to branch and execute independently.")])]),e._v(" "),t("p",[e._v("每个Warp在从相同的指令地址上开始执行，但有各自的指令计数器。")]),e._v(" "),t("p",[e._v("可以理解为多个Thread都在扫描同一个数组，但各自有各自的进度。")]),e._v(" "),t("blockquote",[t("p",[e._v("A warp executes one common instruction at a time, so full efficiency is realized when all 32 threads of a warp agree on their execution path.")])]),e._v(" "),t("p",[e._v("但Warp中的每个Thread不是各自执行不同的指令，而是全部执行相同的指令。")]),e._v(" "),t("p",[e._v("所以这个运行模式也不是多个“扫描机”在相互独立地扫描同一个数组，而是一个“扫描机”在扫描数组然后把数据发给多个“执行机”。")]),e._v(" "),t("blockquote",[t("p",[e._v("If threads of a warp diverge via a data-dependent conditional branch, the warp executes each branch path taken, disabling threads that are not on that path.")])]),e._v(" "),t("p",[e._v("在这种模式下，如果Thread里面有if什么的跳过了一些指令，那这个Thread将会被暂时暂停，直到“扫描机”扫到了这个Thread要执行的下一条指令。")]),e._v(" "),t("h2",{attrs:{id:"warp相关操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#warp相关操作"}},[e._v("#")]),e._v(" Warp相关操作")]),e._v(" "),t("blockquote",[t("p",[e._v("The "),t("code",[e._v("__shfl_sync()")]),e._v(" intrinsics permit exchanging of a variable between threads within a warp without use of shared memory. The exchange occurs simultaneously for all active threads within the warp (and named in "),t("code",[e._v("mask")]),e._v("), moving 4 or 8 bytes of data per thread depending on the type.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Threads within a warp are referred to as lanes, and may have an index between 0 and "),t("code",[e._v("warpSize-1")]),e._v(" (inclusive). Four source-lane addressing modes are supported:")]),e._v(" "),t("ul",[t("li",[e._v("__shfl_sync()\n"),t("ul",[t("li",[e._v("Direct copy from indexed lane")])])]),e._v(" "),t("li",[e._v("__shfl_up_sync()\n"),t("ul",[t("li",[e._v("Copy from a lane with lower ID relative to caller")])])]),e._v(" "),t("li",[e._v("__shfl_down_sync()\n"),t("ul",[t("li",[e._v("Copy from a lane with higher ID relative to caller")])])]),e._v(" "),t("li",[e._v("__shfl_xor_sync()\n"),t("ul",[t("li",[e._v("Copy from a lane based on bitwise XOR of own lane ID")])])])])]),e._v(" "),t("p",[e._v("可以看到主要都是一些传数据的函数。")]),e._v(" "),t("blockquote",[t("p",[e._v("Threads may only read data from another thread which is actively participating in the "),t("code",[e._v("__shfl_sync()")]),e._v(" command. If the target thread is inactive, the retrieved value is undefined.")])]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[e._v("T "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__shfl_sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" T var"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" srcLane"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("warpSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nT "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__shfl_up_sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" T var"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" delta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("warpSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nT "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__shfl_down_sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" T var"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" delta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("warpSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nT "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__shfl_xor_sync")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" mask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" T var"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" laneMask"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" width"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("warpSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[t("code",[e._v("T")]),e._v(" can be "),t("code",[e._v("int")]),e._v(", "),t("code",[e._v("unsigned int")]),e._v(", "),t("code",[e._v("long")]),e._v(", "),t("code",[e._v("unsigned long")]),e._v(", "),t("code",[e._v("long long")]),e._v(", "),t("code",[e._v("unsigned long long")]),e._v(", "),t("code",[e._v("float")]),e._v(" or "),t("code",[e._v("double")]),e._v(". With the "),t("code",[e._v("cuda_fp16.h")]),e._v(" header included, "),t("code",[e._v("T")]),e._v(" can also be "),t("code",[e._v("__half")]),e._v(" or "),t("code",[e._v("__half2")]),e._v(". Similarly, with the cuda_bf16.h header included, T can also be "),t("code",[e._v("__nv_bfloat16")]),e._v(" or "),t("code",[e._v("__nv_bfloat162")]),e._v(".")])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("__shfl_sync()")]),e._v(" returns the value of "),t("code",[e._v("var")]),e._v(" held by the thread whose ID is given by "),t("code",[e._v("srcLane")]),e._v(". If "),t("code",[e._v("width")]),e._v(" is less than "),t("code",[e._v("warpSize")]),e._v(" then each subsection of the warp behaves as a separate entity with a starting logical lane ID of 0. If "),t("code",[e._v("srcLane")]),e._v(" is outside the range [0:"),t("code",[e._v("width-1")]),e._v("], the value returned corresponds to the value of var held by the "),t("code",[e._v("srcLane")]),e._v(" modulo "),t("code",[e._v("width")]),e._v(" (i.e. within the same subsection).")])]),e._v(" "),t("p",[e._v("所以这些函数的第一个参数"),t("code",[e._v("mask")]),e._v("和地四个参数"),t("code",[e._v("width")]),e._v("分别通过掩码和范围限定了操作涉及的Thread的ID范围，第二个参数"),t("code",[e._v("var")]),e._v("指定了要传哪个变量的值，第三个参数用于指定具体要找哪个Thread，最后返回值是要取的那个参数的值。")]),e._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),t("blockquote",[t("p",[e._v("If applications have warp-synchronous codes, they will need to insert the new "),t("code",[e._v("__syncwarp()")]),e._v(" warp-wide barrier synchronization instruction between any steps where data is exchanged between threads via global or shared memory. Assumptions that code is executed in lockstep or that reads/writes from separate threads are visible across a warp without synchronization are invalid.")])]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__syncwarp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("unsigned")]),e._v(" mask"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0xffffffff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("will cause the executing thread to wait until all warp lanes named in mask have executed a "),t("code",[e._v("__syncwarp()")]),e._v(" (with the same mask) before resuming execution. All non-exited threads named in mask must execute a corresponding "),t("code",[e._v("__syncwarp()")]),e._v(" with the same mask, or the result is undefined.")])]),e._v(" "),t("p",[e._v("就是Warp级的同步，类似"),t("code",[e._v("__syncthreads()")])])])}),[],!1,null,null,null);a.default=n.exports}}]);