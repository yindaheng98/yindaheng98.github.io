(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{996:function(a,t,v){"use strict";v.r(t);var _=v(4),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"为什么需要边缘计算？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要边缘计算？"}},[a._v("#")]),a._v(" 为什么需要边缘计算？")]),a._v(" "),v("p",[a._v("互联网中数据量的增长速度超过了云计算基础设施的发展速度，云计算服务受到了带宽和容量的限制。")]),a._v(" "),v("p",[a._v("新兴的物联网计算模式对延迟要求越来越高，而云计算中心离设备太远。")]),a._v(" "),v("p",[a._v("用户对隐私保护的要求越来越高，而数据传输到云数据中心的过程中隐私泄露的风险较大。")]),a._v(" "),v("p",[a._v("云计算中心能耗较高。")]),a._v(" "),v("p",[a._v("边缘设备能源有限，而通过网络传输的云计算模式需要借助GSM或WiFi等无线传输模块将数据传到云计算中心，功耗较高。")]),a._v(" "),v("ul",[v("li",[a._v("大数据量")]),a._v(" "),v("li",[a._v("低延迟")]),a._v(" "),v("li",[a._v("隐私保护")]),a._v(" "),v("li",[a._v("云计算中心节能")]),a._v(" "),v("li",[a._v("边缘设备节能")])]),a._v(" "),v("h2",{attrs:{id:"边缘计算案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#边缘计算案例"}},[a._v("#")]),a._v(" 边缘计算案例")]),a._v(" "),v("h3",{attrs:{id:"云计算任务迁移"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#云计算任务迁移"}},[a._v("#")]),a._v(" 云计算任务迁移")]),a._v(" "),v("p",[a._v("借助边缘端的计算资源迁移部分或全部任务到边缘端执行。")]),a._v(" "),v("p",[a._v("EAWP(Edge Accelerated Web Platform)")]),a._v(" "),v("h3",{attrs:{id:"边缘计算视频监控"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#边缘计算视频监控"}},[a._v("#")]),a._v(" 边缘计算视频监控")]),a._v(" "),v("p",[a._v("利用智能摄像头的处理能力对视频进行处理后再上传，从而让部分或全部的视频分析过程在边缘端完成，降低云计算中心计算负担。")]),a._v(" "),v("p",[a._v("用人工智能自主识别并截取部分视频上传，减小网络压力。")]),a._v(" "),v("h3",{attrs:{id:"智能家居"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#智能家居"}},[a._v("#")]),a._v(" 智能家居")]),a._v(" "),v("p",[a._v("智能家居天生适合使用边缘计算实现。仅有WiFi模块远远不能满足智能家居中各类传感器的需要，因而需要有一个在家中集中收集各类传感器和智能家具数据的边缘网关；而智能家居对隐私保护的要求也非常适合部署在本地存储数据的边缘服务器。")]),a._v(" "),v("h3",{attrs:{id:"智慧城市"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#智慧城市"}},[a._v("#")]),a._v(" 智慧城市")]),a._v(" "),v("p",[a._v("边缘计算模型可以从智能家居灵活地扩展到社区甚至城市规模。")]),a._v(" "),v("p",[a._v("特别地，城市中的运输和设施管理等服务需要识别地理位置，边缘计算这一方面优于云计算模型。")]),a._v(" "),v("h3",{attrs:{id:"智能交通"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#智能交通"}},[a._v("#")]),a._v(" 智能交通")]),a._v(" "),v("p",[a._v("有智慧城市必然进一步带来智慧交通。")]),a._v(" "),v("p",[a._v("用智能信号灯控制道路交通的计算过程完全可以基于一片区域内部及附近道路的交通状况完成，服务器架设在道路附近即可。")]),a._v(" "),v("p",[a._v("智能车辆控制对低时延要求很高，控制不好容易出现人员伤亡，现有的自动驾驶技术大都直接在车上执行主要计算过程，只有少量数据会传输到云端。")]),a._v(" "),v("h3",{attrs:{id:"协同边缘"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协同边缘"}},[a._v("#")]),a._v(" 协同边缘")]),a._v(" "),v("p",[a._v("协同边缘是连接多个数据拥有者的边缘，这些数据拥有者在地理上是分布的，但具有各自的物理位置和网络结构．类似于点对点的边缘连接方式，在数据拥有者之间提供数据的共享。")]),a._v(" "),v("h2",{attrs:{id:"边缘计算挑战"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#边缘计算挑战"}},[a._v("#")]),a._v(" 边缘计算挑战")]),a._v(" "),v("h3",{attrs:{id:"可编程性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可编程性"}},[a._v("#")]),a._v(" 可编程性")]),a._v(" "),v("p",[a._v("在云计算模型中，基础设施对用户透明，用户程序在目标平台上编译，在云服务器运行；而边缘计算中部分或全部任务在边缘运行，这些边缘大都异构，运行环境有所差异，部署时会遇到困难。")]),a._v(" "),v("p",[a._v("烟花模型：Zhang Quan,Zhang Xiaohong,Zhang Qingyang,et al.Firework:Big data sharing and processing in collaborativeedge environment[C]Proc of IEEE?ACM Symp on EdgeComputing(SEC2016).Piscataway,NJ:IEEE,2016:81-82")]),a._v(" "),v("h3",{attrs:{id:"命名规则和寻址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名规则和寻址"}},[a._v("#")]),a._v(" 命名规则和寻址")]),a._v(" "),v("p",[a._v("边缘计算的命名规则需要满足移动设备、高度动态的网络拓扑结构、隐私安全等需求。")]),a._v(" "),v("p",[a._v("DNS和URI不能灵活地为动态边缘提供服务，TCP/IP开销太大。")]),a._v(" "),v("p",[a._v("命名数据网络：Zhang L,Estrin D,Burke J,et al.Named data networking (NDN)project[J].Transportation Research Record Journalof the Transportation Research Board,2010,1892(1):227-234")]),a._v(" "),v("p",[a._v("移动优先：Raychaudhuri  D, Nagaraja  K, Venkataramani  A.MobilityFirst:A robust and trustworthy mobility-centricarchitecture for the future Internet [J].ACM SigmobileMobile Computing & Communications Review,2012,16(3):2-13")]),a._v(" "),v("h3",{attrs:{id:"数据抽象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据抽象"}},[a._v("#")]),a._v(" 数据抽象")]),a._v(" "),v("p",[a._v("各种设备数据规格的多样性，难以用一个统一的数据表或结构进行存储")]),a._v(" "),v("p",[a._v("数据抽象的度不好把握，抽象的太多服务程序那边的信息量会不够，抽象的太少数据量大太占资源。")]),a._v(" "),v("p",[a._v("边缘设备的异构性，数据表示和操作方式差别很大，难以提供统一接口。")]),a._v(" "),v("h3",{attrs:{id:"服务管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务管理"}},[a._v("#")]),a._v(" 服务管理")]),a._v(" "),v("p",[a._v("DEIR模型：Shi Weisong,Cao Jie,Zhang Quan,et al.Edge computing:Vision and challenges[J].IEEE Internet of Things Journal,2016,3(5):637-646")]),a._v(" "),v("ul",[v("li",[a._v("差异性：不同的服务形式、不同的服务优先级、不同的服务管理方式......")]),a._v(" "),v("li",[a._v("可扩展性：")]),a._v(" "),v("li",[a._v("隔离性：一个程序服务崩溃不能影响到其他服务程序")]),a._v(" "),v("li",[a._v("可靠性：\n"),v("ul",[v("li",[a._v("确定服务失败的原因")]),a._v(" "),v("li",[a._v("维护系统的网络拓扑结构")]),a._v(" "),v("li",[a._v("边缘设备容易出现故障，要在数据不可靠的情况下提供可靠服务")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);