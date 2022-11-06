import{o as l,c as t,b as n,a,e as o,d as e,_ as c}from"./app.f088fdd7.js";const i=o(`<h1 id="\u5F00\u53D1\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5F00\u53D1\u5E38\u89C1\u95EE\u9898 <a class="header-anchor vp-link" href="#\u5F00\u53D1\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u662F\u5F00\u53D1\u65B9\u9762\u5BB9\u6613\u9047\u5230\u7684\u95EE\u9898</p><h2 id="\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898" tabindex="-1">\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898 <a class="header-anchor vp-link" href="#\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">rm</span> -fr node_modules
<span class="token function">pnpm</span> i
</code></pre></div><h2 id="\u94FE\u63A5\u672C\u5730\u4F9D\u8D56" tabindex="-1">\u94FE\u63A5\u672C\u5730\u4F9D\u8D56 <a class="header-anchor vp-link" href="#\u94FE\u63A5\u672C\u5730\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u83B7\u53D6\u6784\u5EFA\u7ED3\u679C</span>
<span class="token function">pnpm</span> build
<span class="token builtin class-name">cd</span> dist/element-plus
<span class="token comment"># set cur element-plus to global \`node_modules\`</span>
<span class="token function">pnpm</span> <span class="token function">link</span> --global
<span class="token comment"># for esm we also need link element-plus for dist</span>
<span class="token function">pnpm</span> <span class="token function">link</span> --global element-plus

<span class="token comment"># \u8FDB\u5165\u4F60\u7684\u9879\u76EE, \u94FE\u63A5\u5230 \`element-plus\`</span>
<span class="token builtin class-name">cd</span> your-project
<span class="token function">pnpm</span> <span class="token function">link</span> --global element-plus
</code></pre></div>`,6),p=e("\u66F4\u591A\u4FE1\u606F\u67E5\u770B "),r={href:"https://pnpm.io/cli/link",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=e("pnpm link"),_=n("h2",{id:"\u4E3B\u9898",tabindex:"-1"},[e("\u4E3B\u9898 "),n("a",{class:"header-anchor vp-link",href:"#\u4E3B\u9898","aria-hidden":"true"},"#")],-1),u=n("p",null,"\u6211\u4EEC\u4E0D\u5E94\u5728\u4E2D\u6587\u7EC4\u4EF6\u5185\u5199\u5165 scss \u6587\u4EF6",-1),h=n("p",null,[e("\u90A3\u5C06\u4F1A\u5728 vite \u6784\u5EFA\u4E0B\u7684 css \u6587\u4EF6\u5F00\u5934\u751F\u6210\u8B66\u544A\u4FE1\u606F "),n("code",null,'@charset "UTF-8";')],-1),m=e("\u66F4\u591A\u4FE1\u606F\u89C1 "),k={href:"https://github.com/element-plus/element-plus/issues/3219",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f=e("#3219"),N='{"title":"\u5F00\u53D1\u5E38\u89C1\u95EE\u9898","description":"","frontmatter":{"title":"\u5F00\u53D1\u5E38\u89C1\u95EE\u9898","lang":"zh-CN"},"headers":[{"level":2,"title":"\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898","slug":"\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898"},{"level":2,"title":"\u94FE\u63A5\u672C\u5730\u4F9D\u8D56","slug":"\u94FE\u63A5\u672C\u5730\u4F9D\u8D56"},{"level":2,"title":"\u4E3B\u9898","slug":"\u4E3B\u9898"}],"relativePath":"zh-CN/guide/dev-faq.md","lastUpdated":null}',g={},V=Object.assign(g,{__name:"dev-faq",setup(b){return(v,x)=>{const s=c;return l(),t("div",null,[i,n("blockquote",null,[n("p",null,[p,n("a",r,[d,a(s,{class:"link-icon"})])])]),_,u,h,n("blockquote",null,[n("p",null,[m,n("a",k,[f,a(s,{class:"link-icon"})])])])])}}});export{N as __pageData,V as default};
