(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{881:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"数据管理（data-management）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据管理（data-management）"}},[a._v("#")]),a._v(" 数据管理（Data management）")]),a._v(" "),e("p",[a._v("如何实现数据一致性和查询？")]),a._v(" "),e("h3",{attrs:{id:"每服务数据库（database-per-service）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每服务数据库（database-per-service）"}},[a._v("#")]),a._v(" 每服务数据库（Database per Service）")]),a._v(" "),e("p",[a._v("每个服务都拥有它私有的数据库")]),a._v(" "),e("h3",{attrs:{id:"共享数据库（shared-database）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共享数据库（shared-database）"}},[a._v("#")]),a._v(" 共享数据库（Shared database）")]),a._v(" "),e("p",[a._v("服务之间共享同一个数据库")]),a._v(" "),e("h3",{attrs:{id:"事件驱动架构（event-driven-architecture）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动架构（event-driven-architecture）"}},[a._v("#")]),a._v(" 事件驱动架构（Event-driven architecture）")]),a._v(" "),e("p",[a._v("使用事件来维护服务间的数据一致性")]),a._v(" "),e("h3",{attrs:{id:"事件溯源（event-sourcing）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件溯源（event-sourcing）"}},[a._v("#")]),a._v(" 事件溯源（Event sourcing）")]),a._v(" "),e("p",[a._v("以一连串事件的方式来持久化聚合")]),a._v(" "),e("h3",{attrs:{id:"事务日志跟踪（transaction-log-tailing）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务日志跟踪（transaction-log-tailing）"}},[a._v("#")]),a._v(" 事务日志跟踪（Transaction log tailing）")]),a._v(" "),e("p",[a._v("跟踪数据库的日志变更并由此对外发布消息")]),a._v(" "),e("h3",{attrs:{id:"数据库触发器（database-triggers）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库触发器（database-triggers）"}},[a._v("#")]),a._v(" 数据库触发器（Database triggers）")]),a._v(" "),e("p",[a._v("使用触发器来捕获对数据的修改")]),a._v(" "),e("h3",{attrs:{id:"应用程序事件（application-events）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用程序事件（application-events）"}},[a._v("#")]),a._v(" 应用程序事件（Application events）")]),a._v(" "),e("p",[a._v("应用程序从消息队列获取事件并插入数据库中")]),a._v(" "),e("h3",{attrs:{id:"命令查询职责分离（cqrs）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令查询职责分离（cqrs）"}},[a._v("#")]),a._v(" 命令查询职责分离（CQRS）")]),a._v(" "),e("p",[a._v("维护一个或者多个重要的数据视图以供高效率的查询")]),a._v(" "),e("h2",{attrs:{id:"安全（security）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全（security）"}},[a._v("#")]),a._v(" 安全（Security）")]),a._v(" "),e("p",[a._v("如何向服务实例传递访问客户端的身份信息？")]),a._v(" "),e("h3",{attrs:{id:"访问令牌（access-token）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问令牌（access-token）"}},[a._v("#")]),a._v(" 访问令牌（Access Token）")]),a._v(" "),e("p",[a._v("服务实例通过访问令牌来安全地传递客户端的身份信息")]),a._v(" "),e("h2",{attrs:{id:"ui-模式（ui-patterns）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-模式（ui-patterns）"}},[a._v("#")]),a._v(" UI 模式（UI patterns）")]),a._v(" "),e("p",[a._v("如何将源自多个服务的信息组织在一起生成 UI 界面或 Web 页面？")]),a._v(" "),e("h3",{attrs:{id:"服务器端页面碎片化元素构建（server-side-page-fragment-composition）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器端页面碎片化元素构建（server-side-page-fragment-composition）"}},[a._v("#")]),a._v(" 服务器端页面碎片化元素构建（Server-side page fragment composition）")]),a._v(" "),e("p",[a._v("在服务器端通过编排由多个业务或领域相关后端服务生成的 HTML 片段来构建前端输出的页面内容")]),a._v(" "),e("h3",{attrs:{id:"客户端-ui-构建（client-side-ui-composition）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端-ui-构建（client-side-ui-composition）"}},[a._v("#")]),a._v(" 客户端 UI 构建（Client-side UI composition）")]),a._v(" "),e("p",[a._v("在客户端通过编排由多个业务或领域相关 UI 组件生成的 HTML 片段来构建前端输出的页面内容")])])}),[],!1,null,null,null);t.default=r.exports}}]);