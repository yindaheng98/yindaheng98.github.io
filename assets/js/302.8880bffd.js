(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{993:function(v,_,t){"use strict";t.r(_);var l=t(4),a=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前提"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[v._v("#")]),v._v(" 前提")]),v._v(" "),t("p",[v._v("对恢复质量有重大影响的因素")]),v._v(" "),t("ul",[t("li",[v._v("对当前帧进行超分时，采用的临近帧越多，质量越佳")]),v._v(" "),t("li",[v._v("如果后面几帧有在当前帧中被遮挡的细节，那么反向传播会对超分质量有显著影响")])]),v._v(" "),t("h2",{attrs:{id:"视频分发场景：提前计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频分发场景：提前计算"}},[v._v("#")]),v._v(" 视频分发场景：提前计算")]),v._v(" "),t("p",[v._v("特点：对实时性要求不高，图像计算好了可以缓一缓再发")]),v._v(" "),t("ul",[t("li",[v._v("根据用户的播放情况（用户还没播放到当前位置），可以将用户还没播放到的帧纳入计算（“提前量”）")]),v._v(" "),t("li",[v._v("根据用户的播放情况将待超分的视频帧提前发送到算力网络中")])]),v._v(" "),t("h2",{attrs:{id:"直播场景：实时计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直播场景：实时计算"}},[v._v("#")]),v._v(" 直播场景：实时计算")]),v._v(" "),t("p",[v._v("特点：对实时性要求高，图像计算好了必须立即发送")]),v._v(" "),t("ul",[t("li",[v._v("无法进行反向传播")]),v._v(" "),t("li",[v._v("模型需要具有较强泛化性或者可以进行在线训练")]),v._v(" "),t("li",[v._v("无法进行提前计算")])]),v._v(" "),t("p",[v._v("将“超分计算总延迟<可接受的延迟”作为优化的限制条件，视频质量作为优化目标？\n将“超分计算总延迟”作为优化目标，视频质量作为优化条件？")]),v._v(" "),t("p",[t("strong",[v._v("延迟和质量都作为优化目标！视频分发保证质量，直播保证延迟！")])]),v._v(" "),t("ul",[t("li",[v._v("直播场景在延迟允许的情况下也可以提前计算！")])]),v._v(" "),t("h2",{attrs:{id:"有待实验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有待实验"}},[v._v("#")]),v._v(" 有待实验")]),v._v(" "),t("ul",[t("li",[v._v("同一个模型运行两次vs提前退出")]),v._v(" "),t("li",[v._v("特征图大小不变vs特征图变大vs多尺度连接")]),v._v(" "),t("li",[v._v("在线训练的性能有多少提升？在线训练是否必要？")])]),v._v(" "),t("h2",{attrs:{id:"有待思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有待思考"}},[v._v("#")]),v._v(" 有待思考")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("既然是按片段超分的，那片段与片段之间的中间数据如何衔接？")]),v._v(" "),t("ul",[t("li",[v._v("不衔接：每一个片段都重新算（在线训练时）")]),v._v(" "),t("li",[v._v("部分衔接：取长期数据在片段间传递")]),v._v(" "),t("li",[v._v("完全衔接：直接把前面几个片段拿过来一起算")])])]),v._v(" "),t("li",[t("p",[v._v("如何获取最终视频质量并选择合适的SR帧？")]),v._v(" "),t("ul",[t("li",[v._v("直播场景：在起点处用模型进行估计")]),v._v(" "),t("li",[v._v("视频分发场景：训练时标记好（同NEMO）")])])]),v._v(" "),t("li",[t("p",[v._v("连贯性很重要！（待实验：有多重要？）")]),v._v(" "),t("ul",[t("li",[v._v("如果只处理一个个片段的话会影响到连贯性进而影响性能")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("多用户？")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);