import{d as l}from"./index-2a8ce3c2.js";import{b as f}from"./helpers-0bb72b7a.js";function h(n){const t=f(n);n.addEventListener("click",l('[data-ref="loadMore"]',i));async function i(o){o.preventDefault();const e=o.delegateTarget;e.classList.add("button--disabled");const c=new URL(e.href);try{const d=await(await fetch(c)).text(),a=new DOMParser().parseFromString(d,"text/html"),p=a.querySelector('flynt-component[name="GridPostsArchive"] [data-ref="posts"]'),r=a.querySelector('flynt-component[name="GridPostsArchive"] [data-ref="pagination"]');t.posts.append(...p.children),t.pagination.textContent="",r&&t.pagination.append(...r.children),e.classList.remove("button--disabled")}catch(s){console.error(s)}}}export{h as default};
