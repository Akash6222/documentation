"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,b=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(b,o(o({ref:t},l),{},{components:n})):r.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i=n.p+"assets/images/sidebar-33b9b9d10d3ea58233bfa2b6b91fce5b.png",o={title:"Multiple Sidebars",id:"multiple-sidebars",sidebar_label:"Multiple Sidebars",description:"A detailed overview of creating multiple sidebars in Sidebar of TCET Open Source Website",keywords:["tcet","open-source","software"]},s=void 0,d={unversionedId:"projects/docs-site/sidebar/multiple-sidebars",id:"projects/docs-site/sidebar/multiple-sidebars",title:"Multiple Sidebars",description:"A detailed overview of creating multiple sidebars in Sidebar of TCET Open Source Website",source:"@site/docs/projects/docs-site/sidebar/multiple-sidebars.md",sourceDirName:"projects/docs-site/sidebar",slug:"/projects/docs-site/sidebar/multiple-sidebars",permalink:"/docs/projects/docs-site/sidebar/multiple-sidebars",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/docs-site/sidebar/multiple-sidebars.md",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1686290493,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{title:"Multiple Sidebars",id:"multiple-sidebars",sidebar_label:"Multiple Sidebars",description:"A detailed overview of creating multiple sidebars in Sidebar of TCET Open Source Website",keywords:["tcet","open-source","software"]},sidebar:"docs",previous:{title:"Items",permalink:"/docs/projects/docs-site/sidebar/adding-items"},next:{title:"What is TCET Linux",permalink:"/docs/projects/tcet-linux/about-tcet-linux"}},p={},l=[{value:"Adding multiple sidebars in our website",id:"adding-multiple-sidebars-in-our-website",level:3},{value:"Adding nested categories",id:"adding-nested-categories",level:3},{value:"Adding nested items in nested categories",id:"adding-nested-items-in-nested-categories",level:3},{value:"Congratulations \ud83c\udf8a",id:"congratulations-",level:2}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"adding-multiple-sidebars-in-our-website"},"Adding multiple sidebars in our website"),(0,a.kt)("p",null,"Adding multiple sidebars in our website allowed us to better organize our content and improve the navigation experience for our users. We created different ",(0,a.kt)("a",{parentName:"p",href:"adding-categories"},(0,a.kt)("strong",{parentName:"a"},"categories"))," in the sidebars for different sections of our website and added them to the appropriate pages."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Here's a step-by-step guide on how the multiple sidebars were added to our ",(0,a.kt)("a",{parentName:"strong",href:"https://opensource.tcetmumbai.in/"},"TCET Open Source"),"  website.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locating the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," file in our project's root directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We already have our ",(0,a.kt)("strong",{parentName:"p"},"sidebar")," ready from the previous page. ",(0,a.kt)("a",{parentName:"p",href:"adding-items#adding-and-organizing-items-in-sidebar-categories"},"See here")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="sidebars.js" {13-14} showLineNumbers',title:'"sidebars.js"',"{13-14}":!0,showLineNumbers:!0},"// Other sidebar properties\ntype: 'category',\nlabel: 'Projects',\nlink: \n{\n    type: 'generated-index',\n    title: 'Project Docs',\n    description: 'Official Documentation of all TCET Open Source projects',\n    keywords: ['documentation, open-source'],\n},\ncollapsed: false,\nitems:  [\n    'projects/docs-site/about-docs',\n    'projects/tcet-linux/about-tcet-linux',\n],\n// Other sidebar properties\n")))),(0,a.kt)("h3",{id:"adding-nested-categories"},"Adding nested categories"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For creating multiple sidebars, we chose to categorize ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs Site")," in our ",(0,a.kt)("inlineCode",{parentName:"p"},"Projects")," category such  that all the ",(0,a.kt)("strong",{parentName:"p"},"children categories")," of the category ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs Site")," stays inside it. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Here's how we added a nested category in our ",(0,a.kt)("inlineCode",{parentName:"strong"},"sidebars.js")," file.")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We needed to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"projects/docs-site/about-docs")," in the category of ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs Site")," such that whenever someone clicks on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs Site")," link, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/about-docs"},(0,a.kt)("strong",{parentName:"a"},"About Docs"))," section should be displayed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To do this we will have to add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," labelled ",(0,a.kt)("strong",{parentName:"p"},"'Docs Site'")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," of the predefined category ",(0,a.kt)("inlineCode",{parentName:"p"},"Projects")," and we have to link this doc's default page to ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/about-docs"},(0,a.kt)("strong",{parentName:"a"},"About Docs"))," page as mentioned in the earlier step."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="sidebars.js" {19-27} showLineNumbers',title:'"sidebars.js"',"{19-27}":!0,showLineNumbers:!0},"const sidebars = \n{\n    docs: \n    [\n        'about-tcetopensource',\n        {\n            type: 'category',\n            label: 'Projects',\n            link: \n            {\n                type: 'generated-index',\n                title: 'Project Docs',\n                description: 'Official Documentation of all TCET Open Source projects',\n                keywords: ['documentation, open-source'],\n            },\n            collapsed: false,\n            items:  \n            [\n                {\n                    type: 'category',\n                    label: 'Docs Site',\n                    link:\n                    {\n                        type: 'doc',\n                        id: 'projects/docs-site/about-docs',\n                    },\n                },\n            ],\n            // Other sidebar properties\n        },\n    ],\n    // Other sidebar properties\n}\nmodule.exports = sidebars;\n")))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"After following the steps mentioned above, we were able to create a nested category in our website's ",(0,a.kt)("strong",{parentName:"em"},"Sidebar"),".")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Before moving forward to the next step, make sure you have referred the  basics of ",(0,a.kt)("strong",{parentName:"p"},"adding items")," in a sidebar category. ",(0,a.kt)("a",{parentName:"p",href:"adding-items"},(0,a.kt)("strong",{parentName:"a"},"See here")))),(0,a.kt)("h3",{id:"adding-nested-items-in-nested-categories"},"Adding nested items in nested categories"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, we had to define different categories in ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," of our newly defined category ",(0,a.kt)("strong",{parentName:"p"},"Docs Site"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="sidebars.js" {27-46} showLineNumbers',title:'"sidebars.js"',"{27-46}":!0,showLineNumbers:!0},"const sidebars = \n{\n    docs: \n    [\n        'about-tcetopensource',\n        {\n            type: 'category',\n            label: 'Projects',\n            link: \n            {\n                type: 'generated-index',\n                title: 'Project Docs',\n                description: 'Official Documentation of all TCET Open Source projects',\n                keywords: ['documentation, open-source'],\n            },\n            collapsed: false,\n            items:  \n            [\n                {\n                    type: 'category',\n                    label: 'Docs Site',\n                    link:\n                    {\n                        type: 'doc',\n                        id: 'projects/docs-site/about-docs',\n                    },\n                    items: \n                    [\n                        'projects/docs-site/getting-started',\n                        {\n                            type: 'category',\n                            label: 'Navbar',\n                            link:\n                            {\n                                type: 'doc',\n                                id: 'projects/docs-site/navbar/navbar',\n                            },\n                            items: \n                            [ \n                                'projects/docs-site/navbar/title-and-logo',\n                                'projects/docs-site/navbar/adding-items',\n                                'projects/docs-site/navbar/adding-links',\n                                'projects/docs-site/navbar/search-bar',\n                            ],\n                        },\n                    ],\n                },\n            ],\n            // Other sidebar properties\n        },\n    ],\n    // Other sidebar properties\n}\nmodule.exports = sidebars;\n")),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you look carefully at the highlighted codeblock above, you will notice that there is another category defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," array of the category ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs Site"),". This is because the ",(0,a.kt)("strong",{parentName:"p"},"parent")," category ",(0,a.kt)("inlineCode",{parentName:"p"},"Navbar")," has various ",(0,a.kt)("strong",{parentName:"p"},"child")," ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," inside it. "),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"- Getting Started\n- Navbar\n    - Title and Logo\n    - Items\n    - Links\n    - Search Bar\n")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"If you have any doubts in adding nested categories in items, ",(0,a.kt)("a",{parentName:"strong",href:"#adding-nested-categories"},"see here")))))),(0,a.kt)("br",null),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Similarly for defining a new nested ",(0,a.kt)("inlineCode",{parentName:"li"},"category")," in our sidebar, we referred ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#adding-nested-categories"},"Step 3-4"))," for creating and adding ",(0,a.kt)("strong",{parentName:"li"},"new categories and items")," in our ",(0,a.kt)("a",{parentName:"li",href:"https://opensource.tcetmumbai.in/"},(0,a.kt)("strong",{parentName:"a"},"TCET Open Source"))," website's sidebar.")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"congratulations-"},"Congratulations \ud83c\udf8a"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This marks the end of the project documentation on configuring the sidebar of ",(0,a.kt)("a",{parentName:"em",href:"https://opensource.tcetmumbai.in/"},(0,a.kt)("strong",{parentName:"a"},"TCET Open Source"))," website using the ",(0,a.kt)("inlineCode",{parentName:"em"},"sidebar.js")," file.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Here's a snapshot of how our sidebar looks after meeting all the requirements.")),(0,a.kt)("img",{src:i,style:{border:"2px solid gray",display:"block",margin:"0 auto"}}),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the upcoming section, we will delve into the process of configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file, which is crucial for seamlessly integrating our previously created ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/sidebar/"},(0,a.kt)("strong",{parentName:"a"},"sidebar"))," with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/navbar/"},(0,a.kt)("strong",{parentName:"a"},"navbar"))," of our website built using Docusaurus."),(0,a.kt)("i",null,(0,a.kt)("b",null,"Stay tuned for more updates!"))))}u.isMDXComponent=!0}}]);