(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{709:function(t,a,e){"use strict";e.r(a);var r=e(4),v=function(t){t.options.__data__block__={mermaid_1a96284d:"graph TD\n存储技术--\x3eDAS\n存储技术--\x3eNAS\n存储技术--\x3eSAN\nDAS--\x3e|演进|NAS\nNAS--\x3e|演进|SAN\nSAN--\x3eFC-SAN\nDAS--\x3e存储接口\n存储接口--\x3eSCSI\n存储接口--\x3eIDE\n存储接口--\x3eATA\nIDE--\x3e|包含|ATA\n存储接口--\x3ePCI\nATA--\x3ePATA\nATA--\x3eSATA\nFC-SAN--\x3eFC卡\nFC-SAN--\x3eFCHub(FC Hub)\nFC-SAN--\x3eFC交换机\nFC-SAN--\x3eFC存储设备\nSAN--\x3eIP-SAN\nIP-SAN--\x3eiSCSI\nIP-SAN--\x3eiFCP\nIP-SAN--\x3eFCIP\n"}},_=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://blog.csdn.net/zhongbeida_xue/article/details/78111086",target:"_blank",rel:"noopener noreferrer"}},[t._v("几种存储技术的比较（FC SAN、IP SAN、DAS、NAS）"),e("OutboundLink")],1)]),t._v(" "),e("Mermaid",{attrs:{id:"mermaid_1a96284d",graph:t.$dataBlock.mermaid_1a96284d}}),e("h2",{attrs:{id:"das"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#das"}},[t._v("#")]),t._v(" DAS")]),t._v(" "),e("p",[t._v("DAS（Direct Attached Storage）直接附加存储，直接附加存储是指将存储设备通过总线（SCSI、PCI、IDE等）接口直接连接到一台服务器上使用。这是最常见的存设备连接方式。它有几个问题：")]),t._v(" "),e("ul",[e("li",[t._v("服务器本身容易成为系统瓶颈")]),t._v(" "),e("li",[t._v("服务器发生故障时，数据不可访问")]),t._v(" "),e("li",[t._v("对于存在多个服务器的系统来说，设备分散，不便管理。同时多台服务器使用DAS时，存储空间不能在服务器之间动态分配，可能造成相当的资源浪费")]),t._v(" "),e("li",[t._v("数据备份操作复杂")])]),t._v(" "),e("h3",{attrs:{id:"scsi（small-computer-system-interface，小型计算机系统接口）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scsi（small-computer-system-interface，小型计算机系统接口）"}},[t._v("#")]),t._v(" SCSI（Small Computer System Interface，小型计算机系统接口）")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/SCSI.jpg",alt:"SCSI"}})]),t._v(" "),e("ul",[e("li",[t._v("SCSI是一种历史悠久的外设接口，可以用来连接硬盘、软驱、光驱、打印机、扫描仪等外设")]),t._v(" "),e("li",[t._v("SCSI是个多任务接口，设有母线仲裁功能")]),t._v(" "),e("li",[t._v("挂在一个SCSI母线上的多个外设可以同时工作。SCSI上的设备平等占有总线")]),t._v(" "),e("li",[t._v("可以同步或异步传输数据，同步传输速率可以达到10MB/s，异步传输速率可以达到1.5MB/s")]),t._v(" "),e("li",[t._v("连接电缆可以长达6m")])]),t._v(" "),e("p",[t._v("1986年SCSI-1、1994年SCSI-2、1995年SCSI-3、1997年Ultra 2 SCSI、1999年Ultra 3 SCSI、2002年Ultra 320 SCSI、2003年Ultra 640 SCSI")]),t._v(" "),e("p",[t._v("目前SCSI性能稳定，数据流量大，CPU占用低，但成本较高，主要用于中高端服务器与工作站上。")]),t._v(" "),e("h3",{attrs:{id:"ide（integrated-drive-electronics，集成设备电路、电子集成驱动器）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ide（integrated-drive-electronics，集成设备电路、电子集成驱动器）"}},[t._v("#")]),t._v(" IDE（Integrated Drive Electronics，集成设备电路、电子集成驱动器）")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/IDE.jpg",alt:"IDE"}})]),t._v(" "),e("p",[t._v("它的本意是指把“硬盘控制器”与“盘体”集成在一起的硬盘驱动器。IDE是一种磁盘驱动器接口类型，硬盘和光驱通过IDE接口与主板连接。控制器电路就驻留在驱动器中，不再需要单独的适配器卡。")]),t._v(" "),e("p",[t._v("IDE背后的基本思想是应该将硬盘驱动器和控制器组合在一起。控制器是载有芯片的小型电路板，这些芯片对硬盘驱动器如何正确存储和访问数据进行控制。大多数控制器还带有一些内存，它充当缓冲器以增强硬盘驱动器性能。")]),t._v(" "),e("p",[t._v("相比于SCSI，这种接口价格低廉但支持的设备较少，更多用于一般的家用设备中。尤其是在十年前的家用PC机硬盘中非常常见。后文所讲的ATA接口也是从IDE接口演化而来。")]),t._v(" "),e("h3",{attrs:{id:"ata（advanced-technology-attachment）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ata（advanced-technology-attachment）"}},[t._v("#")]),t._v(" ATA（Advanced Technology Attachment）")]),t._v(" "),e("p",[t._v("一般说来，ATA是一个控制器技术，而IDE是一个匹配它的磁盘驱动器技术，但是两个术语经常可以互用。ATA是一个花费低而性能适中的接口，主要是针对台式机而设计的，销售的大多数ATA控制器和IDE磁盘都是更高版本的，称为ATA - 2和ATA - 3，与之匹配的磁盘驱动器称为增强的IDE。")]),t._v(" "),e("h4",{attrs:{id:"pata（parallel-ata）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pata（parallel-ata）"}},[t._v("#")]),t._v(" PATA（Parallel ATA）")]),t._v(" "),e("p",[t._v("并行ATA硬盘接口规范，基本停产，现在已经不常见。PATA硬盘接口规模已经具有相当的辉煌的历史了，而且从ATA33/66一直发展到ATA100/133一直到目前最高的ATA150。")]),t._v(" "),e("h4",{attrs:{id:"sata（serial-ata）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sata（serial-ata）"}},[t._v("#")]),t._v(" SATA（Serial ATA）")]),t._v(" "),e("p",[t._v("目前最常见的硬盘接口，在家用机领域已经完全取代前面说的那几个，是硬盘接口的绝对主流。")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/SATA.jpg",alt:"SATA"}})]),t._v(" "),e("h3",{attrs:{id:"pci（peripheral-component-interconnect，外设部件互连标准）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pci（peripheral-component-interconnect，外设部件互连标准）"}},[t._v("#")]),t._v(" PCI（Peripheral Component Interconnect，外设部件互连标准）")]),t._v(" "),e("p",[t._v("目前个人电脑中使用最为广泛的接口，几乎所有的主板产品上都带有这种插槽。PCI插槽也是主板带有最多数量的插槽类型，在目前流行的台式机主板上，ATX结构的主板一般带有5～6个PCI插槽，而小一点的MATX主板也都带有2～3个PCI插槽，可见其应用的广泛性。")]),t._v(" "),e("p",[t._v("计算机组成重要知识点，不多说。")]),t._v(" "),e("h2",{attrs:{id:"nas（network-attached-storage，网络附加存储）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nas（network-attached-storage，网络附加存储）"}},[t._v("#")]),t._v(" NAS（Network Attached Storage，网络附加存储）")]),t._v(" "),e("p",[t._v("从这里开始，存储设备进入网络时代。在NAS存储结构中，存储系统不再通过I/O总线附属于某个服务器或客户机，而直接通过网络接口与网络直接相连，由用户通过网络访问。")]),t._v(" "),e("p",[t._v("NAS实际上是一个带有瘦服务器的存储设备，其作用类似于一个专用的文件服务器。这种专用存储服务器去掉了通用服务器原有的不适用的大多数计算功能，而仅仅提供文件系统功能。与传统以服务器为中心的存储系统相比，数据不再通过服务器内存转发，直接在客户机和存储设备间传送，服务器仅起控制管理的作用。")]),t._v(" "),e("p",[t._v("NAS在企业应用中可以说只是DAS到SAN的过渡阶段，而在家用领域，因为家用物联网的推广而备受推崇，家用领域的NAS常用于离线下载、视频照片存储分享等功能中。")]),t._v(" "),e("h2",{attrs:{id:"san"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#san"}},[t._v("#")]),t._v(" SAN")]),t._v(" "),e("p",[t._v("SAN（Storage Area Network）存储区域网络，是一种专门用于存储的网络，通常独立于计算机局域网（LAN）。SAN将主机和存储设备连接在一起，能够"),e("strong",[t._v("为其上的任意一台主机和任意一台存储设备提供专用的通信通道")]),t._v("。SAN将存储设备从服务器中独立出来，实现了服务器层次上的存储资源共享。")]),t._v(" "),e("h3",{attrs:{id:"fc-san"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fc-san"}},[t._v("#")]),t._v(" FC-SAN")]),t._v(" "),e("p",[t._v("通常SAN由磁盘阵列（RAID）连接光纤通道（Fibre Channel）组成，为了区别于IP SAN，通常SAN也称为FC-SAN。")]),t._v(" "),e("h4",{attrs:{id:"组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[t._v("#")]),t._v(" 组成")]),t._v(" "),e("ul",[e("li",[t._v("FC卡：主要用于主机与FC设备之间的连接")]),t._v(" "),e("li",[t._v("FC Hub：内部运行仲裁环拓扑，连接到HUB的节点共享100MB/S以上带宽")]),t._v(" "),e("li",[t._v("FC交换机：内部运行Fabric拓扑，每端口独占100MB/S以上带宽")]),t._v(" "),e("li",[t._v("FC存储设备：采用FC连接方式，光纤接口可以有一到多个。FC存储设备通常采用光纤硬盘，也有Fibre to SCSI（Fibre to ATA）的解决方案，使用SCSI（或ATA）的硬盘，在整个配置上较便宜")]),t._v(" "),e("li",[t._v("存储网络管理软件：存储管理软件主要的功能是自动发现网络拓扑及映射，当在存储网络中增加或减少时自动发现及组态。")])]),t._v(" "),e("p",[e("strong",[t._v("高性能的光纤通道交换机和光纤通道网络协议是FC-SAN的关键")]),t._v("。把以光纤通道交换机为骨干的网络拓扑结构称为“SAN Fabric”。而光纤通道协议是FC-SAN的另一个本质特征。FC-SAN正是利用"),e("strong",[t._v("在光纤通道协议上加载SCSI协议")]),t._v("来达到可靠的块级数据传输。")]),t._v(" "),e("h4",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),e("p",[t._v("由于FC-SAN是为在服务器和存储设备之间传输大块数据而进行优化的，因此对于以下应用来说是理想的选择：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("关键任务数据库")]),t._v("应用，其中可预计的响应时间、可用性和可扩展性是基本要素")]),t._v(" "),e("li",[e("strong",[t._v("集中的存储备份")]),t._v("，其中性能、数据一致性和可靠性可以确保企业关键数据的安全")]),t._v(" "),e("li",[e("strong",[t._v("高可用性和故障切换环境")]),t._v("可以确保更低的成本、更高的应用水平")]),t._v(" "),e("li",[e("strong",[t._v("可扩展的存储虚拟化")]),t._v("，可使存储与直接主机连接相分离，并确保动态存储分区")]),t._v(" "),e("li",[e("strong",[t._v("改进的灾难容错特性")]),t._v("，在主机服务器及其连接设备之间提供光纤通道高性能和可扩展的距离")])]),t._v(" "),e("h4",{attrs:{id:"优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),e("ul",[e("li",[t._v("FC-SAN设备之间采用光纤连接，大块数据传输速度比较快，适合数据密集型应用")]),t._v(" "),e("li",[t._v("FC-SAN不必宕机和中断与服务器的连接即可增加存储")]),t._v(" "),e("li",[t._v("FC-SAN可以集中管理数据，从而降低了总体拥有成本")]),t._v(" "),e("li",[t._v("FC-SAN克服了传统上与SCSI相连的线缆限制，极大地拓展了服务器和存储之间的距离，从而增加了更多连接的可能性")])]),t._v(" "),e("h3",{attrs:{id:"ip-san"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip-san"}},[t._v("#")]),t._v(" IP-SAN")]),t._v(" "),e("p",[t._v("IP-SAN是指架设在IP通道而不是光纤通道上的网络协议。除了标准已获通过的iSCSI，还有FCIP、iFCP等正在制定的标准。而iSCSI发展最快，已经成了IP存储一个有力的代表。")]),t._v(" "),e("p",[t._v("像光纤通道一样，IP存储是可交换的，但是与光纤通道不一样的是，IP网络是成熟的，不存在互操作性问题，而光纤通道SAN最令人头痛的就是这个问题。IP已经被IT业界广泛认可，有非常多的网络管理软件和服务产品可供使用。")]),t._v(" "),e("h4",{attrs:{id:"几个ip-san标准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几个ip-san标准"}},[t._v("#")]),t._v(" 几个IP-SAN标准")]),t._v(" "),e("h5",{attrs:{id:"iscsi（internet-small-computer-system-interface，互联网小型计算机系统接口）：用tcp-ip网络模拟scsi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iscsi（internet-small-computer-system-interface，互联网小型计算机系统接口）：用tcp-ip网络模拟scsi"}},[t._v("#")]),t._v(" iSCSI（internet Small Computer System Interface，互联网小型计算机系统接口）：用TCP/IP网络模拟SCSI")]),t._v(" "),e("p",[t._v("是一种在internet协议网络上，特别是以太网上进行数据块传输的标准。简单地说，iSCSI可以实现"),e("strong",[t._v("在IP网络上运行SCSI协议")]),t._v("，使其能够在诸如高速千兆以太网上进行路由选择，实现了SCSI和TCP/IP协议的连接。")]),t._v(" "),e("h5",{attrs:{id:"fcip（fiber-channel-over-ip）：用tcp-ip网络模拟两个fc-san设备间的互连"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fcip（fiber-channel-over-ip）：用tcp-ip网络模拟两个fc-san设备间的互连"}},[t._v("#")]),t._v(" FCIP（Fiber Channel over IP）：用TCP/IP网络模拟两个FC-SAN设备间的互连")]),t._v(" "),e("p",[t._v("FCIP描述了一种机制，能够通过 IP 网络将各个孤立的光纤信道存储区域网络（又称“孤岛”）连接起来，从而形成一个统一的存储区域网络。它实际上"),e("strong",[t._v("只是一种简单的隧道协议")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/FCIP.GIF",alt:"FCIP"}})]),t._v(" "),e("p",[t._v("其原理是，在同一个SAN范围内，TCP/IP数据包封装FC命令和数据，从而"),e("strong",[t._v("在IP网络上传输FC命令和数据")]),t._v("。每个SAN采用标准FC寻址，在FCIP的端点之间建立IP"),e("strong",[t._v("隧道")]),t._v("（或网关)，一旦隧道建立，扩展的FC设备将被视为标准的FC设备，并予以FC寻址。")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/FCIP.svg",alt:"FCIP"}})]),t._v(" "),e("ul",[e("li",[t._v("FCIP只能在FCIP设备之间建立点到点连接，即FCIP设备一端(IP端)和另外一个FCIP设备的IP端进行连接，FCIP设备的另外一端(FC端)和FC光纤通道交换机进行连接，FCIP设备无法在两个独立存储设备之间提供本地IP连接")]),t._v(" "),e("li",[t._v("由于FCIP是一种不透明的传输协议，即一个SAN向另一个SAN发送的信息在FC层没有错误检测，容易将一个SAN上的错误蔓延到各个SAN")])]),t._v(" "),e("h5",{attrs:{id:"ifcp（internet-fibre-channel-protocol）：用tcp-ip网络模拟全部的fc-san功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ifcp（internet-fibre-channel-protocol）：用tcp-ip网络模拟全部的fc-san功能"}},[t._v("#")]),t._v(" iFCP（Internet Fibre Channel Protocol）：用TCP/IP网络模拟全部的FC-SAN功能")]),t._v(" "),e("p",[t._v("此协议和FCIP协议的功能原理相似，都是用TCP/IP网络模拟FC-SAN，不同点在于，FCIP只能模拟两个FC设备间互联，而iFCP完全透明地模拟了FC协议。")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/iFCP.GIF",alt:"iFCP"}})]),t._v(" "),e("p",[t._v("iFCP将 Fibre Channel 数据以 IP 包形式封装，并将 IP 地址映射到分离 Fibre Channel 设备。 由于在 IP 网中每类 Fibre Channel 设备都有其独特标识，因而能够与位于 IP网其它节点的设备单独进行存储数据收发")]),t._v(" "),e("p",[e("img",{attrs:{src:"i/iFCP.svg",alt:"iFCP"}})])],1)}),[],!1,null,null,null);"function"==typeof v&&v(_);a.default=_.exports}}]);