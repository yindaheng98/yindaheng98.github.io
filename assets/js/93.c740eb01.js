(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{759:function(a,s,t){"use strict";t.r(s);var n=t(4),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("code",[a._v("downwardAPI")]),a._v("用于让程序在容器中获取 Pod 的基本信息。")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("downwardAPI")]),a._v("让程序在容器中获取 Pod 基本信息的方法有两种：")]),a._v(" "),t("ul",[t("li",[a._v("把 Pod 基本信息放到环境变量中")]),a._v(" "),t("li",[a._v("把 Pod 基本信息生成文件挂载到容器内部（DownwardAPIVolumeFiles）")])]),a._v(" "),t("blockquote",[t("p",[a._v("下面这些信息可以通过环境变量和DownwardAPIVolumeFiles提供给容器：")]),a._v(" "),t("p",[a._v("能通过"),t("code",[a._v("fieldRef")]),a._v("获得的：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("metadata.name")]),a._v(" - Pod名称")]),a._v(" "),t("li",[t("code",[a._v("metadata.namespace")]),a._v(" - Pod名字空间")]),a._v(" "),t("li",[t("code",[a._v("metadata.uid")]),a._v(" - Pod的UID, 版本要求 v1.8.0-alpha.2")]),a._v(" "),t("li",[t("code",[a._v("metadata.labels['<KEY>']")]),a._v(" - 单个 pod 标签值 "),t("code",[a._v("<KEY>")]),a._v(" (例如, "),t("code",[a._v("metadata.labels['mylabel']")]),a._v("); 版本要求 Kubernetes 1.9+")]),a._v(" "),t("li",[t("code",[a._v("metadata.annotations['<KEY>']")]),a._v(" - 单个 pod 的标注值 "),t("code",[a._v("<KEY>")]),a._v(" (例如, "),t("code",[a._v("metadata.annotations['myannotation']")]),a._v("); 版本要求 Kubernetes 1.9+")])]),a._v(" "),t("p",[a._v("能通过"),t("code",[a._v("resourceFieldRef")]),a._v("获得的：")]),a._v(" "),t("ul",[t("li",[a._v("容器的CPU约束值")]),a._v(" "),t("li",[a._v("容器的CPU请求值")]),a._v(" "),t("li",[a._v("容器的内存约束值")]),a._v(" "),t("li",[a._v("容器的内存请求值")]),a._v(" "),t("li",[a._v("容器的临时存储约束值, 版本要求 v1.8.0-beta.0")]),a._v(" "),t("li",[a._v("容器的临时存储请求值, 版本要求 v1.8.0-beta.0")])]),a._v(" "),t("p",[a._v("此外，以下信息可通过DownwardAPIVolumeFiles从"),t("code",[a._v("fieldRef")]),a._v("获得：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("metadata.labels")]),a._v(" - all of the pod’s labels, formatted as "),t("code",[a._v('label-key="escaped-label-value"')]),a._v(" with one label per line")]),a._v(" "),t("li",[t("code",[a._v("metadata.annotations")]),a._v(" - all of the pod’s annotations, formatted as "),t("code",[a._v('annotation-key="escaped-annotation-value"')]),a._v(" with one annotation per line")]),a._v(" "),t("li",[t("code",[a._v("metadata.labels")]),a._v(" - 所有Pod的标签，以"),t("code",[a._v('label-key="escaped-label-value"')]),a._v("格式显示，每行显示一个label")]),a._v(" "),t("li",[t("code",[a._v("metadata.annotations")]),a._v(" - Pod的注释，以"),t("code",[a._v('annotation-key="escaped-annotation-value"')]),a._v("格式显示，每行显示一个标签")])]),a._v(" "),t("p",[a._v("以下信息可通过环境变量从"),t("code",[a._v("fieldRef")]),a._v("获得：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("status.podIP")]),a._v(" - 节点IP")]),a._v(" "),t("li",[t("code",[a._v("spec.serviceAccountName")]),a._v(" - Pod服务帐号名称, 版本要求 v1.4.0-alpha.3")]),a._v(" "),t("li",[t("code",[a._v("spec.nodeName")]),a._v(" - 节点名称, 版本要求 v1.4.0-alpha.3")]),a._v(" "),t("li",[t("code",[a._v("status.hostIP")]),a._v(" - 节点IP, 版本要求 v1.7.0-alpha.1")])])]),a._v(" "),t("h2",{attrs:{id:"把-pod-基本信息放到环境变量中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把-pod-基本信息放到环境变量中"}},[a._v("#")]),a._v(" 把 Pod 基本信息放到环境变量中")]),a._v(" "),t("p",[a._v("案例：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("pod\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("system\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("pod\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" busybox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" POD_NAME\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("valueFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" metadata.name "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#获取Pod名称")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" POD_NAMESPACE\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("valueFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" metadata.namespace "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#获取Pod名字空间")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" POD_IP\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("valueFrom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" status.podIP "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#获取节点IP")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br")])]),t("p",[a._v("在这个容器中查看环境变量：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" POD\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("POD_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.30")]),a._v(".19.24\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("POD_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("test-env-pod\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("POD_NAMESPACE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kube-system\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("可以看到相关信息都已被写入。")]),a._v(" "),t("h2",{attrs:{id:"把-pod-基本信息生成文件挂载到容器内部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把-pod-基本信息生成文件挂载到容器内部"}},[a._v("#")]),a._v(" 把 Pod 基本信息生成文件挂载到容器内部")]),a._v(" "),t("p",[a._v("比如把上面那个加个注释改成挂载文件到容器内部：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("pod\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("system\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("annotations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("own")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" qikqiak\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pod"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("info\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("downwardAPI")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"labels"')]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" metadata.labels\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"annotations"')]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldRef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("fieldPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" metadata.annotations\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("pod\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" busybox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" podinfo\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /etc/podinfo\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br")])]),t("p",[a._v("这样，我们就能在容器中看到两个文件：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /etc/podinfo\nlabels\nannotations\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/podinfo/labels\nk8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test-volume"')]),a._v("\nnode-env"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/podinfo/annotations\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("build")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),a._v("\nkubernetes.io/config.seen"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2018-03-02T17:51:10.856356259+08:00"')]),a._v("\nkubernetes.io/config.source"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"api"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("own")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qikqiak"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);