(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{740:function(t,r,e){"use strict";e.r(r);var v=e(4),a=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[e("strong",[t._v("Any problem in computer science can be solved by another layer of indirection.")])]),t._v(" "),e("p",[e("strong",[t._v("计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决。")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22403015",target:"_blank",rel:"noopener noreferrer"}},[t._v("基础教程"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wenku.baidu.com/view/ef529b470408763231126edb6f1aff00bfd5703e.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMWare"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"容器和虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器和虚拟机"}},[t._v("#")]),t._v(" 容器和虚拟机")]),t._v(" "),e("h3",{attrs:{id:"虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机"}},[t._v("#")]),t._v(" 虚拟机")]),t._v(" "),e("p",[t._v("在软件层面上通过"),e("strong",[t._v("模拟硬件的输入和输出")]),t._v("，让虚拟机的操作系统得以运行在没有物理硬件的环境中（也就是宿主机的操作系统上）。")]),t._v(" "),e("p",[t._v("模拟出硬件输入输出的程序称为“"),e("strong",[t._v("hypervisor")]),t._v("”。")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%9E%B6%E6%9E%84.png",alt:"虚拟机"}})]),t._v(" "),e("ul",[e("li",[t._v("Guest OS：虚拟机上运行的操作系统")]),t._v(" "),e("li",[t._v("Virtual Hardware：hypervisor虚拟出来的硬件")]),t._v(" "),e("li",[t._v("宿主机：运行虚拟机的物理机")])]),t._v(" "),e("h3",{attrs:{id:"高性能的虚拟机：虚拟化直通技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高性能的虚拟机：虚拟化直通技术"}},[t._v("#")]),t._v(" 高性能的虚拟机：虚拟化直通技术")]),t._v(" "),e("ul",[e("li",[t._v("单纯模拟硬件的输入输出，指令执行效率很低")]),t._v(" "),e("li",[t._v("解决方法：虚拟化直通技术。不模拟硬件输入输出，只是"),e("strong",[t._v("做真实硬件输入输出的搬运")]),t._v("工，从而能极大提升虚拟机的运行效率（前提是宿主机的硬件架构必须和要虚拟的"),e("strong",[t._v("硬件架构一致")]),t._v("）")])]),t._v(" "),e("p",[t._v("代表性技术：Intel的VT-d、Linux的Direct I/O")]),t._v(" "),e("p",[t._v("代表性软件：VMware vSphere")]),t._v(" "),e("p",[t._v("虚拟化直通技术允许宿主机将某些硬件资源的管辖权直接移交给虚拟机，此时宿主机将不能再使用此硬件，虚拟机会以直通独占的方式使用它们，利用效率几乎等同于将硬件插到了虚拟机的主板扩展槽里一样。")]),t._v(" "),e("p",[t._v("虚拟化直通技术对于像 VirtualBox、VMware Workstation 这类安装在 OS 层以上的虚拟机软件来说实际意义并不是很大，它主要面向的是企业级服务器这种全天候、对性能要求很高的场景。")]),t._v(" "),e("h3",{attrs:{id:"容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),e("h4",{attrs:{id:"比虚拟化直通技术更进一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#比虚拟化直通技术更进一步"}},[t._v("#")]),t._v(" 比虚拟化直通技术更进一步")]),t._v(" "),e("p",[t._v("创建虚拟机也不一定需要模拟硬件的输入和输出，假如"),e("strong",[t._v("宿主机和虚拟机的操作系统内核(Kernel)是一致的")]),t._v("，就不用做硬件输入输出的搬运工了，只需要"),e("strong",[t._v("做Kernel输入输出的搬运")]),t._v("工即可。")]),t._v(" "),e("h4",{attrs:{id:"容器技术由此产生👇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器技术由此产生👇"}},[t._v("#")]),t._v(" 容器技术由此产生👇")]),t._v(" "),e("p",[e("strong",[t._v("容器")]),t._v("，又名操作"),e("strong",[t._v("系统层虚拟化")]),t._v(" (Operating-system-level virtualization)，是通过“模拟”Kernel的输入输出实现的虚拟化，它要求宿主机和虚拟机有同样的操作系统内核。")]),t._v(" "),e("p",[t._v("Docker是在Linux Kernel上开发的容器服务，因此Docker容器的宿主机只能是Linux系统。并且：")]),t._v(" "),e("ul",[e("li",[t._v("各个Linux 发行版的内核都是一样的所以在很大程度上都能通用")]),t._v(" "),e("li",[t._v("在Windows上运行 Docker 的时候其实是在一个 Hyper-V虚拟机上运行的简易Linux系统上运行Docker")])]),t._v(" "),e("h3",{attrs:{id:"对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),e("ul",[e("li",[t._v("传统虚拟机如VMware、VisualBox之类的需要"),e("strong",[t._v("模拟整台机器")]),t._v("包括硬件，每台虚拟机都需要有自己的操作系统，虚拟机一旦被开启，预分配给它的资源将全部被占用。每一台虚拟机包括应用，必要的二进制和库，以及一个完整的用户操作系统")]),t._v(" "),e("li",[t._v("容器技术是"),e("strong",[t._v("和宿主机共享硬件资源及操作系统")]),t._v("，可以实现资源的动态分配。容器"),e("strong",[t._v("包含应用和其所有的依赖包")]),t._v("，但是"),e("strong",[t._v("与其他容器共享内核")]),t._v("。容器"),e("strong",[t._v("在宿主机操作系统中")]),t._v("，在用户空间"),e("strong",[t._v("以分离的进程运行")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"i/%E5%AE%B9%E5%99%A8%E5%92%8C%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AF%B9%E6%AF%94%E5%9B%BE.png",alt:"对比图"}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("容器技术是实现操作系统虚拟化的一种途径")])]),t._v(" "),e("li",[t._v("Linux 容器是 Linux 发展出的一种虚拟化技术")]),t._v(" "),e("li",[e("strong",[t._v("Docker 是 Linux 容器的一种封装")])])]),t._v(" "),e("h2",{attrs:{id:"深入原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入原理"}},[t._v("#")]),t._v(" 深入原理")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22382728",target:"_blank",rel:"noopener noreferrer"}},[t._v("提高教程"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"核心技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心技术"}},[t._v("#")]),t._v(" 核心技术")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/Docker/AUFS.html"}},[t._v("AUFS")])],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/Docker/cgroup.html"}},[t._v("cgroup")])],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/Docker/namespace.html"}},[t._v("namespace")])],1)])}),[],!1,null,null,null);r.default=a.exports}}]);