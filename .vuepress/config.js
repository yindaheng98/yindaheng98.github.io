module.exports = {
  "title": "Yin的笔记本",
  "description": "Yin的笔记本",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": require.resolve('./theme'),
  "themeConfig": {
    "mode": "light",
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/yindaheng98",
            "icon": "reco-github"
          },
          {
            "text": "Site",
            "link": "http://yindaheng98.top:8888/",
            "icon": "reco-account"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Howard Yin",
    "authorAvatar": "/avatar.svg",
    "startYear": "2018",
    "coverImgBase": "/blogs"
  },
  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.use(require("@neilsustc/markdown-it-katex"));
    }
  },
  "plugins": [
    'vuepress-plugin-mermaidjs'
  ]
}