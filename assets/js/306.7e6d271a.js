(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{997:function(t,e,i){"use strict";i.r(e);var a=i(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"层次"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#层次"}},[t._v("#")]),t._v(" 层次")]),t._v(" "),i("h3",{attrs:{id:"type-1-hypervisor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#type-1-hypervisor"}},[t._v("#")]),t._v(" Type-1 hypervisor")]),t._v(" "),i("ul",[i("li",[t._v("EVE底层是一个基于Xen虚拟机的Type-1 hypervisor")]),t._v(" "),i("li",[t._v("可以在边缘设备上运行多种操作系统，是其边缘化的基础")]),t._v(" "),i("li",[t._v("因为是虚拟机，所以可以运行任何边缘计算框架，包括EdgeX Foundry, Fledge, Azure IoT Edge, AWS Greengrass Core等")]),t._v(" "),i("li",[t._v("因为是虚拟机，所以隔离性好，安全性高")])]),t._v(" "),i("h3",{attrs:{id:"device-connectivity-and-management-interfaces"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-connectivity-and-management-interfaces"}},[t._v("#")]),t._v(" Device connectivity and management interfaces")]),t._v(" "),i("p",[t._v("通过网络接口连接EVE中的应用（虚拟机）")]),t._v(" "),i("ul",[i("li",[t._v("device network interface")]),t._v(" "),i("li",[t._v("drivers for ethernet and wireless networking")]),t._v(" "),i("li",[t._v("an API for connecting EVE to centralized management services")])]),t._v(" "),i("h3",{attrs:{id:"operating-system-services"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#operating-system-services"}},[t._v("#")]),t._v(" Operating system services")]),t._v(" "),i("p",[t._v("a hardened root-of-trust operating system")]),t._v(" "),i("p",[t._v("为EVE中的应用提供以下功能：")]),t._v(" "),i("ul",[i("li",[t._v("self update")]),t._v(" "),i("li",[t._v("identity management：身份验证")]),t._v(" "),i("li",[t._v("security：安全（主要指内存隔离和内存/存储加密）")]),t._v(" "),i("li",[t._v("networking services")])]),t._v(" "),i("h3",{attrs:{id:"edge-container-runtime"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edge-container-runtime"}},[t._v("#")]),t._v(" Edge container runtime")]),t._v(" "),i("p",[t._v("容器运行控制/容器编排工具")]),t._v(" "),i("ul",[i("li",[t._v("domain management：域控制")]),t._v(" "),i("li",[t._v("instance orchestration：实例编排")]),t._v(" "),i("li",[t._v("virtualized IO")]),t._v(" "),i("li",[t._v("inter instance networking：实例间的动态联网")]),t._v(" "),i("li",[t._v("remote instance consoles")])]),t._v(" "),i("h2",{attrs:{id:"架构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" 架构")]),t._v(" "),i("p",[i("img",{attrs:{src:"i/EVEArchit.png",alt:"架构图"}})]),t._v(" "),i("h3",{attrs:{id:"device-identity-onboarding-and-security-foundation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-identity-onboarding-and-security-foundation"}},[t._v("#")]),t._v(" Device Identity Onboarding and Security Foundation")]),t._v(" "),i("ul",[i("li",[t._v("设备以公钥为ID (as X.509 certificate)\n"),i("ul",[i("li",[t._v("Generated by the TPM (trusted platform module) if available")])])]),t._v(" "),i("li",[t._v("启动时扫描序列号\n"),i("ul",[i("li",[t._v("User adds serial number (plus onboarding token) to controller")]),t._v(" "),i("li",[t._v("Device will attempt to register its device cert on first boot")])])]),t._v(" "),i("li",[t._v("设备私钥用于磁盘加密、远程认证等")]),t._v(" "),i("li",[t._v("理想情况是设备公私钥在制造时即写入，用户在购买设备时收到一个证书才能在设备上编程")])]),t._v(" "),i("h3",{attrs:{id:"self-update"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#self-update"}},[t._v("#")]),t._v(" Self Update")]),t._v(" "),i("ul",[i("li",[t._v("Update all of EVE including hypervisor")]),t._v(" "),i("li",[t._v("处理错误\n"),i("ul",[i("li",[t._v("Power failure when writing to flash")]),t._v(" "),i("li",[t._v("Bad new EVE image resulting in not being able to connect to controller")]),t._v(" "),i("li",[t._v("checking image signature")])])]),t._v(" "),i("li",[t._v("Option for user to commit to new EVE version (未完成)")]),t._v(" "),i("li",[t._v("???Implemented using dual partitions, hardware and software watchdog")]),t._v(" "),i("li",[t._v("???Currently using grub for fallback booting; being generalized")]),t._v(" "),i("li",[t._v("???使用GBT（GUID分区表）")])]),t._v(" "),i("h3",{attrs:{id:"device-connectivity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-connectivity"}},[t._v("#")]),t._v(" Device connectivity")]),t._v(" "),i("ul",[i("li",[t._v("设备必须与控制器相连\n"),i("ul",[i("li",[t._v("控制器控制容器启停")]),t._v(" "),i("li",[t._v("设备必须与控制器的连接可以冗余")])])]),t._v(" "),i("li",[t._v("容器间连接默认使用DHCP，可以设置静态IP")]),t._v(" "),i("li",[t._v("可以设置HTTP代理")]),t._v(" "),i("li",[t._v("网络设置可以由控制器进行修改")])]),t._v(" "),i("h3",{attrs:{id:"eve-device-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eve-device-api"}},[t._v("#")]),t._v(" EVE Device API")]),t._v(" "),i("p",[t._v("所有API均由ProtoBuf定义，TLS传输")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("接口URL")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/register")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("设备注册")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/ping")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("for connectivity test")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/config")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("for complete device + instance config")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/info")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("for triggered device/instance status")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/metrics")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("设备定期上报状态")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/logs")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("for logs from microservices on device")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("api/v1/edgedevice/flowlog")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("for ECO network flows logs")])])])]),t._v(" "),i("h3",{attrs:{id:"edge-container-runtime-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edge-container-runtime-2"}},[t._v("#")]),t._v(" Edge Container runtime")]),t._v(" "),i("ul",[i("li",[t._v("基于Xen虚拟化")]),t._v(" "),i("li",[t._v("可以直接运行Docker容器（基于rkt）")]),t._v(" "),i("li",[t._v("提供一套设置容器连接的工具链")])]),t._v(" "),i("h4",{attrs:{id:"what-is-an-edge-container"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-edge-container"}},[t._v("#")]),t._v(' What is an "edge container"?')]),t._v(" "),i("p",[t._v("Edge containers are virtual machines with a manifest that describes the runtime environment including device resource and connectivity requirements.")]),t._v(" "),i("h5",{attrs:{id:"edge-container-image-eci"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edge-container-image-eci"}},[t._v("#")]),t._v(" Edge Container Image (ECI)")]),t._v(" "),i("p",[t._v("类比docker Image，是EVE容器的模板，支持传统VMs, OCI/docker Image格式和Unikernels")]),t._v(" "),i("h6",{attrs:{id:"can-i-use-docker-containers-with-eve"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-docker-containers-with-eve"}},[t._v("#")]),t._v(" Can I use Docker containers with EVE?")]),t._v(" "),i("p",[t._v("You can run a virtual machine with Linux that runs Docker Install within it.")]),t._v(" "),i("h5",{attrs:{id:"edge-container-object-eco"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edge-container-object-eco"}},[t._v("#")]),t._v(" Edge Container Object (ECO)")]),t._v(" "),i("p",[t._v("类比由docker Image生成的docker Container，是由ECI生成的运行容器")]),t._v(" "),i("h3",{attrs:{id:"edge-container-connectivity"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edge-container-connectivity"}},[t._v("#")]),t._v(" Edge Container Connectivity")]),t._v(" "),i("ul",[i("li",[t._v("默认通过NAT")]),t._v(" "),i("li",[t._v("可以设置USB或者COM口连接")]),t._v(" "),i("li",[t._v("可以设置交换网络")]),t._v(" "),i("li",[t._v("可以设置云网络连接到AWS VPN或者Azure VPN等")]),t._v(" "),i("li",[t._v("可以设置mesh network实现Edge-to-Edge连接")])])])}),[],!1,null,null,null);e.default=n.exports}}]);