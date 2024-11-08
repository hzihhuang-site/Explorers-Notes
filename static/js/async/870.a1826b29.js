"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["870"],{5855:function(e,s,n){n.r(s),n.d(s,{default:function(){return c}});var r=n(2676),i=n(453);function t(e){let s=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",pre:"pre",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"masonry-瀑布流",children:["Masonry 瀑布流",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#masonry-瀑布流",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["大概是今年 23 年 5 月份左右，在遇到的一个实现 ",(0,r.jsx)(s.code,{children:"Masonry"})," 的问题，现在过了段时间在这里再讨论一下实现方案以及一些优缺点。"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"介绍",children:["介绍",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"瀑布流是一种很受图片网站欢迎的布局方式，英文名: Masonry Layout"}),"\n",(0,r.jsx)(s.p,{children:"特点: 内容由不同高度的方格从左到右自上而下依次排列组成。有种参差不齐又缺又很整齐的感觉。\n以下站点皆是瀑布流布局的例子"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.pexels.com/zh-cn/",target:"_blank",rel:"noopener noreferrer",children:"Pexels"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://huaban.com/discovery",target:"_blank",rel:"noopener noreferrer",children:"花瓣网"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.pinterest.com/",target:"_blank",rel:"noopener noreferrer",children:"Pinterset"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://civitai.com/",target:"_blank",rel:"noopener noreferrer",children:"Civitai"})}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"js-实现",children:["JS 实现",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#js-实现",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"自己写或是加载其他人已经写好的库。目前这种方式是最容易也最完美的方案"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["原理基本上都是通过 ",(0,r.jsx)(s.code,{children:"JavaScript"})," 计算共有多少个卡片，再计算每个卡片的宽度和高度，因父容器的宽度每行放置多少个卡片等等要求。将全部卡片的 ",(0,r.jsx)(s.code,{children:"position"})," 都设置成 ",(0,r.jsx)(s.code,{children:"absolute"})," 逐一计算去 ",(0,r.jsx)(s.code,{children:"top"})," 和 ",(0,r.jsx)(s.code,{children:"left"})," 定位。"]}),"\n",(0,r.jsx)(s.p,{children:"由于所有卡片位置都是计算出来的，所以还能在父容器宽度改变的时候，将卡片动态移动并且重新排列。"}),"\n",(0,r.jsx)(s.p,{children:"唯一的不足是因为介入了太多的计算，卡片多的时候不建议根据父元素宽度动态重新排列，否则可能会出现卡顿现象。并且由于计算需要时间完成，在完成之前卡片并未设置位置，所以基本上都堆叠在左上角了"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["原生: ",(0,r.jsx)(s.a,{href:"https://masonry.desandro.com/",target:"_blank",rel:"noopener noreferrer",children:"Masonry.js"}),"、",(0,r.jsx)(s.a,{href:"https://isotope.metafizzy.co/",target:"_blank",rel:"noopener noreferrer",children:"Isotope.js"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["React：",(0,r.jsx)(s.a,{href:"https://github.com/cedricdelpoux/react-responsive-masonry",target:"_blank",rel:"noopener noreferrer",children:"react-responsive-masonry"}),"、",(0,r.jsx)(s.a,{href:"https://github.com/hoschi/react-masonry-component",target:"_blank",rel:"noopener noreferrer",children:"react-masonry-component"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Vue: ",(0,r.jsx)(s.a,{href:"https://github.com/MopTym/vue-waterfall",target:"_blank",rel:"noopener noreferrer",children:"vue-waterfall"}),"、",(0,r.jsx)(s.a,{href:"https://github.com/lfyfly/vue-waterfall-easy/tree/master",target:"_blank",rel:"noopener noreferrer",children:"vue-waterfall-easy"}),"、",(0,r.jsx)(s.a,{href:"https://github.com/starkwang/vue-virtual-collection",target:"_blank",rel:"noopener noreferrer",children:"vue-virtual-collection"}),"、",(0,r.jsx)(s.a,{href:"https://github.com/jbaysolutions/vue-grid-layout",target:"_blank",rel:"noopener noreferrer",children:"vue-grid-layout"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"css-实现",children:["CSS 实现",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#css-实现",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"CSS 直接支持，性能优秀。"}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"多列布局",children:["多列布局",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#多列布局",children:"#"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:".masonry {\n  /* 设置四列，每列间距 0 */\n  column-count: 4;\n  column-gap: 0;\n}\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["只需要两行代码就能实现。但是它有一个缺陷，就是只能",(0,r.jsx)(s.strong,{children:"从上到下，再从左到右"}),"排列。"]}),"\n",(0,r.jsx)(s.p,{children:"如果我们想列出的内容是根据时间由新至旧排列，这样的排列顺序就未必合适了。我们辉期望它是由左到右，再由上到下排列。"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://codepen.io/hzihhuang/pen/NWeWRzp",target:"_blank",rel:"noopener noreferrer",children:"案例一"})}),"\n",(0,r.jsxs)(s.h3,{id:"flex-布局",children:["Flex 布局",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#flex-布局",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"利用 flex 竖着排列，固定容器高度让它自动换行实现，如果想要完美展示需要我们计算最合适的容器高度。"}),"\n",(0,r.jsx)(s.p,{children:"缺陷同上"}),"\n",(0,r.jsxs)(s.p,{children:["但是由于 flex 中有一个 order 的属性，可以让我们自己控制图片的排列顺序，所以可控性会高一点，甚至经过计算后也能实现 ",(0,r.jsx)(s.code,{children:"从左到右，从上至下"}),"的排列"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-scss",children:".masonry {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 2800px;\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://codepen.io/hzihhuang/pen/Yzdzpzw::fa-solid",target:"_blank",rel:"noopener noreferrer",children:"案例二"})}),"\n",(0,r.jsxs)(s.h3,{id:"grid-布局新特性实验阶段",children:["Grid 布局新特性（实验阶段）",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#grid-布局新特性实验阶段",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"grid-template-rows: masonry;\n可在 火狐浏览器（开启实验模式） 中试用"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-html",children:'<div class="masonry">\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>\n  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>\n</div>\n<style>\n  .masonry {\n    display: none;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: masonry;\n    gap: 16px\n  }\n  @supports (grid-template-rows: masonry) {\n    .masonry {\n      display: grid;\n    }\n  }\n  .item {\n    width: 100%;\n    overflow: hidden;\n    height: auto;\n    border-radius: 8px;\n  }\n  .item > img {\n    display: block;\n    width: 100%;\n    height: auto;\n  }\n</style>\n'})}),"\n",(0,r.jsxs)(s.h2,{id:"结尾",children:["结尾",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#结尾",children:"#"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["最后可以看出，",(0,r.jsx)(s.code,{children:"Masonry"})," 完美的解决方法还未出现，都有各自的优劣势，不过现在用 ",(0,r.jsx)(s.code,{children:"js"})," 会比较方便功能性会强。\n很多使用 ",(0,r.jsx)(s.code,{children:"js"})," 实现 ",(0,r.jsx)(s.code,{children:"Masonry"})," 网站都基本上限制了他的动态设置列数，或者延迟计算（等待容器宽度变化停止后）。主要是当卡片变多的时候动态计算会大幅度影响性能，所以限制列数或者延迟计算是必要的。"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://huaban.com/discovery",target:"_blank",rel:"noopener noreferrer",children:"花瓣网"})," 没有限制，在浏览器大小变化时会卡顿是一个很好的例子。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.pexels.com/zh-cn/",target:"_blank",rel:"noopener noreferrer",children:"Pexels"})," 则是限制了它的变化。"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://civitai.com/",target:"_blank",rel:"noopener noreferrer",children:"Civitai"})," 进行了延迟计算，等待容器宽度停止变化后再计算变化。"]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let c=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["frontEnd%2Fcss%2Fmasonry.md"]={toc:[{text:"介绍",id:"介绍",depth:2},{text:"JS 实现",id:"js-实现",depth:2},{text:"CSS 实现",id:"css-实现",depth:2},{text:"多列布局",id:"多列布局",depth:3},{text:"Flex 布局",id:"flex-布局",depth:3},{text:"Grid 布局新特性（实验阶段）",id:"grid-布局新特性实验阶段",depth:3},{text:"结尾",id:"结尾",depth:2}],title:"Masonry 瀑布流",frontmatter:{title:"Masonry 瀑布流",date:"2023-08-18T10:18:00.000Z"}}}}]);