(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{908:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("百闻不如一见，先上一个"),s("code",[t._v("etcdctl")]),t._v("的help，看看etcd都能做啥：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ etcdctl -h\nNAME:\n   etcdctl - A simple "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" line client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" etcd.\n\nUSAGE:\n   etcdctl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nVERSION:\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1")]),t._v(".5\n\nCOMMANDS:\n     backup          backup an etcd directory\n     cluster-health  check the health of the etcd cluster\n     mk              "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" a new key with a given value\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" a new directory\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("              remove a key or a directory\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rmdir")]),t._v("           removes the key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it is an empty directory or a key-value pair\n     get             retrieve the value of a key\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("              retrieve a directory\n     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" the value of a key\n     setdir          create a new directory or update an existing directory TTL\n     update          update an existing key with a given value\n     updatedir       update an existing directory\n     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" a key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" changes\n     exec-watch      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" a key "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" changes and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" an executable\n     member          member add, remove and list subcommands\n     user            user add, grant and revoke subcommands\n     role            role add, grant and revoke subcommands\n     auth            overall auth controls\n     help, h         Shows a list of commands or "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" one "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n\nGLOBAL OPTIONS:\n   --debug                          output cURL commands "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" can be used to reproduce the request\n   --no-sync                        don't synchronize cluster information before sending request\n   --output simple, -o simple       output response "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the given "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("simple, "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("extended"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("json"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simple"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   --discovery-srv value, -D value  domain name to query "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" SRV records describing cluster endpoints\n   --insecure-discovery             accept insecure SRV records describing cluster endpoints\n   --peers value, -C value          DEPRECATED - "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--endpoints"')]),t._v(" should be used instead\n   --endpoint value                 DEPRECATED - "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--endpoints"')]),t._v(" should be used instead\n   --endpoints value                a comma-delimited list of machine addresses "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the cluster "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:2379,http://127.0.0.1:4001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   --cert-file value                identify HTTPS client using this SSL certificate "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n   --key-file value                 identify HTTPS client using this SSL key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n   --ca-file value                  verify certificates of HTTPS-enabled servers using this CA bundle\n   --username value, -u value       provide username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" and prompt "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" password is not supplied.\n   --timeout value                  connection "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" per request "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: 2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   --total-timeout value            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" execution "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("except "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: 5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   --help, -h                       show "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("\n   --version, -v                    print the version\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br")])]),s("p",[t._v("etcd 是 CoreOS 团队于 2013 年 6 月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库，具有一定的一致性、高性能、高可用的方案。")]),t._v(" "),s("p",[t._v("etcd 提供了一种可靠的方式来存储需要由分布式系统或机器集群访问的数据。etcd 机器之间的通信通过 Raft 算法处理，可以优雅地处理网络分区期间的 leader 选举，以应对机器的故障。")]),t._v(" "),s("p",[t._v("etcd 采用 Go 语言编写，它具有出色的跨平台支持，很小的二进制文件和强大的社区。 类似的 zookeeper，但没有 zookeeper 那么重，功能也没有覆盖那么多。")]),t._v(" "),s("p",[t._v("etcd 比较多的应用场景是用于服务注册与发现，除此之外，也可以用于键值对存储，应用程序可以读取和写入 etcd 中的数据。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/数据库/Raft.html"}},[t._v("《Raft算法》")])],1),t._v(" "),s("h2",{attrs:{id:"etcd主要功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etcd主要功能"}},[t._v("#")]),t._v(" etcd主要功能")]),t._v(" "),s("h3",{attrs:{id:"键值对存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#键值对存储"}},[t._v("#")]),t._v(" 键值对存储")]),t._v(" "),s("p",[t._v("etcd 是一个键值存储的组件，其他的应用都是基于其键值存储的功能展开。")]),t._v(" "),s("p",[t._v("etcd采用kv型数据存储，一般情况下比关系型数据库快。支持动态存储(内存)以及静态存储(磁盘)。")]),t._v(" "),s("p",[t._v("存储方式，采用类似目录结构。分布式存储，可集成为多节点集群。")]),t._v(" "),s("p",[t._v("只有叶子节点才能真正存储数据，叶子节点的父节点一定是目录，目录不能存储数据。")]),t._v(" "),s("h3",{attrs:{id:"消息发布与订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息发布与订阅"}},[t._v("#")]),t._v(" 消息发布与订阅")]),t._v(" "),s("p",[t._v("etcd可以构建为一个配置共享中心，数据提供者在这个配置中心发布消息，而消息使用者则订阅他们关心的主题，一旦主题有消息发布，就会实时通知订阅者。通过这种方式可以做到分布式系统配置的集中式管理与动态更新。")]),t._v(" "),s("h2",{attrs:{id:"etcd的使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etcd的使用场景"}},[t._v("#")]),t._v(" etcd的使用场景")]),t._v(" "),s("h3",{attrs:{id:"服务注册与发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务注册与发现"}},[t._v("#")]),t._v(" 服务注册与发现")]),t._v(" "),s("p",[t._v("服务发现要解决的也是分布式系统中最常见的问题之一，即在同一个分布式集群中的进程或服务，要如何才能找到对方并建立连接。本质上来说，服务发现就是想要了解集群中是否有进程在监听udp或tcp端口，并且通过名字就可以查找和连接。要解决服务发现的问题，需要有下面三大支柱，缺一不可。")]),t._v(" "),s("ul",[s("li",[t._v("一个强一致性、高可用的服务存储目录。基于Raft算法的etcd天生就是这样一个强一致性高可用的服务存储目录。")]),t._v(" "),s("li",[t._v("一种注册服务和监控服务健康状态的机制。用户可以在etcd中注册服务，并且对注册的服务设置key TTL，定时保持服务的心跳以达到监控健康状态的效果。")]),t._v(" "),s("li",[t._v("一种查找和连接服务的机制。通过在etcd指定的主题下注册的服务也能在对应的主题下查找到。为了确保连接，我们可以在每个服务机器上都部署一个Proxy模式的etcd，这样就可以确保能访问etcd集群的服务都能互相连接。")])]),t._v(" "),s("h3",{attrs:{id:"消息发布与订阅-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息发布与订阅-2"}},[t._v("#")]),t._v(" 消息发布与订阅")]),t._v(" "),s("p",[t._v("比如，应用中用到的一些配置信息放到etcd上进行集中管理。应用在启动的时候主动从etcd获取一次配置信息，在etcd节点上注册一个"),s("code",[t._v("Watcher")]),t._v("并等待，以后每次配置有更新的时候，etcd都会实时通知订阅者，以此达到获取最新配置信息的目的。")]),t._v(" "),s("h3",{attrs:{id:"分布式通知与协调"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式通知与协调"}},[t._v("#")]),t._v(" 分布式通知与协调")]),t._v(" "),s("ul",[s("li",[t._v("通过etcd进行低耦合的心跳检测：检测系统和被检测系统通过etcd上某个目录关联而非直接关联起来，这样可以大大减少系统的耦合性。")]),t._v(" "),s("li",[t._v("通过etcd完成系统调度：某系统有控制台和推送系统两部分组成，控制台的职责是控制推送系统进行相应的推送工作。管理人员在控制台作的一些操作，实际上是修改了etcd上某些目录节点的状态，而etcd就把这些变化通知给注册了Watcher的推送系统客户端，推送系统再作出相应的推送任务。")]),t._v(" "),s("li",[t._v("通过etcd完成工作汇报：大部分类似的任务分发系统，子任务启动后，到etcd来注册一个临时工作目录，并且定时将自己的进度进行汇报（将进度写入到这个临时目录），这样任务管理者就能够实时知道任务进度。")])]),t._v(" "),s("h3",{attrs:{id:"集群监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群监控"}},[t._v("#")]),t._v(" 集群监控")]),t._v(" "),s("p",[t._v("通过etcd来进行监控实现起来非常简单并且实时性强。")]),t._v(" "),s("p",[t._v("前面几个场景已经提到Watcher机制，当某个节点消失或有变动时，Watcher会第一时间发现并告知用户。")]),t._v(" "),s("p",[t._v("节点可以设置TTL key，比如每隔30s发送一次心跳使代表该机器存活的节点继续存在，否则节点消失。")]),t._v(" "),s("p",[t._v("这样就可以第一时间检测到各节点的健康状态，以完成集群的监控要求。")]),t._v(" "),s("h3",{attrs:{id:"负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),s("ul",[s("li",[t._v("etcd自己的负载均衡：etcd本身分布式架构存储的信息访问支持负载均衡。etcd集群化以后，每个etcd的核心节点都可以处理用户的请求。所以，把数据量小但是访问频繁的消息数据直接存储到etcd中也是个不错的选择，如业务系统中常用的二级代码表（在表中存储代码，在etcd中存储代码所代表的具体含义，业务系统调用查表的过程，就需要查找表中代码的含义）。")]),t._v(" "),s("li",[t._v("etcd给其他应用提供负载均衡功能：利用etcd维护一个负载均衡节点表。etcd可以监控一个集群中多个节点的状态，当有一个请求发过来后，可以轮询式的把请求转发给存活着的多个状态。类似KafkaMQ，通过ZooKeeper来维护生产者和消费者的负载均衡。同样也可以用etcd来做ZooKeeper的工作。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"i/etcd%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.png",alt:"etcd负载均衡"}})]),t._v(" "),s("h3",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),s("p",[t._v("因为etcd使用Raft算法保持了数据的强一致性，某次操作存储到集群中的值必然是全局一致的，所以很容易实现分布式锁。锁服务有两种使用方式，一是保持独占，二是控制时序。")]),t._v(" "),s("ul",[s("li",[t._v("保持独占：etcd为此提供了一套实现分布式锁原子操作CAS（CompareAndSwap）的API。通过设置prevExist值，可以保证在多个节点同时去创建某个目录时，只有一个成功。而创建成功的用户就可以认为是获得了锁")]),t._v(" "),s("li",[t._v("控制时序：即所有想要获得锁的用户都会被安排执行，但是获得锁的顺序也是全局唯一的，同时决定了执行顺序。etcd为此也提供了一套API（自动创建有序键）")])]),t._v(" "),s("h3",{attrs:{id:"分布式队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式队列"}},[t._v("#")]),t._v(" 分布式队列")]),t._v(" "),s("p",[t._v("分布式队列的常规用法与场景五中所描述的分布式锁的控制时序用法类似，即创建一个先进先出的队列，保证顺序。")]),t._v(" "),s("h3",{attrs:{id:"leader竞选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leader竞选"}},[t._v("#")]),t._v(" Leader竞选")]),t._v(" "),s("p",[t._v("使用分布式锁，可以完成Leader竞选。这种场景通常是一些长时间CPU计算或者使用IO操作的机器，只需要竞选出的Leader计算或处理一次，就可以把结果复制给其他的Follower。从而避免重复劳动，节省计算资源。")]),t._v(" "),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"i/etcd.png",alt:"etcd"}})]),t._v(" "),s("p",[t._v("从etcd的架构图中我们可以看到，etcd主要分为四个部分。")]),t._v(" "),s("ul",[s("li",[t._v("HTTP Server： 用于处理用户发送的API请求以及其它etcd节点的同步与心跳信息请求。")]),t._v(" "),s("li",[t._v("Store：用于处理etcd支持的各类功能的事务，包括数据索引、节点状态变更、监控与反馈、事件处理与执行等等，是etcd对用户提供的大多数API功能的具体实现。")]),t._v(" "),s("li",[t._v("Raft：Raft强一致性算法的具体实现，是etcd的核心。")]),t._v(" "),s("li",[t._v("WAL：Write Ahead Log（预写式日志），是etcd的数据存储方式。除了在内存中存有所有数据的状态以及节点的索引以外，etcd就通过WAL进行持久化存储。WAL中，所有的数据提交前都会事先记录日志。Snapshot是为了防止数据过多而进行的状态快照；Entry表示存储的具体日志内容。")])]),t._v(" "),s("p",[t._v("通常，一个用户的请求发送过来，会经由HTTP Server转发给Store进行具体的事务处理，如果涉及到节点的修改，则交给Raft模块进行状态的变更、日志的记录，然后再同步给别的etcd节点以确认数据提交，最后进行数据的提交，再次同步。")]),t._v(" "),s("h2",{attrs:{id:"etcd-vs-zookeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etcd-vs-zookeeper"}},[t._v("#")]),t._v(" etcd vs ZooKeeper")]),t._v(" "),s("p",[t._v("etcd实现的这些功能，ZooKeeper都能实现。那么为什么要用etcd而非直接使用ZooKeeper？")]),t._v(" "),s("ul",[s("li",[t._v("ZooKeeper的部署维护复杂，管理员需要掌握一系列的知识和技能。而Paxos强一致性算法也是素来以复杂难懂而闻名于世。ZooKeeper的使用也比较复杂，需要安装客户端，官方只提供了Java和C两种语言的接口。")]),t._v(" "),s("li",[t._v("Java编写，Java本身就偏向于重型应用，它会引入大量的依赖。而运维人员则普遍希望保持强一致、高可用的机器集群尽可能简单，维护起来也不易出错。")]),t._v(" "),s("li",[t._v("发展缓慢，由于基金会庞大的结构以及松散的管理导致项目发展缓慢。")])]),t._v(" "),s("p",[t._v("相比ZooKeeper，etcd有以下优点：")]),t._v(" "),s("ul",[s("li",[t._v("简单。使用Go语言编写部署简单。使用HTTP作为接口使用简单，使用Raft算法保证强一致性让用户易于理解。")]),t._v(" "),s("li",[t._v("数据持久化，etcd默认数据一更新就进行持久化。")]),t._v(" "),s("li",[t._v("安全，etcd支持SSL客户端安全认证。")]),t._v(" "),s("li",[t._v("发展迅速，etcd正处于高速迭代开发中。")])]),t._v(" "),s("p",[t._v("etcd现在还没有经过大型项目长时间的检验，但是目前CoreOS、Kubernetes和CloudFoundry等知名项目均在生产环境中使用了etcd。所以总的来说，etcd值得去学习和尝试的。")])])}),[],!1,null,null,null);e.default=n.exports}}]);