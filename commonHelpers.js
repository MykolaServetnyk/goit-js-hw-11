import{i as f,S as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",p="42459298-1821cc9c9c9d24f5ec127ca7c",g=s=>{const o=`${h}?key=${p}&q=${s}&image-type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).then(r=>(r.hits.length===0&&f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconColor:"#FAFAFB",position:"topRight",iconUrl:"https://fonts.google.com/icons?selected=Material%20Icons%3Adangerous%3A"}),r.hits)).catch(r=>{console.error("Error fetching data:")})},y=(s,o)=>{if(s.length>0){const r=s.map(({largeImageURL:e,webformatURL:t,tags:c,likes:a,views:l,comments:u,downloads:d})=>`<li class="gallery-item">
                         <a class="link" href="${e}">
                            <img
                            class="gallery-image"
                            src="${t}"
                            alt="${c}"
                            data-source="${e}"/>
                        <div class="desc">
                            <p class="likes">Likes ${a}</p>
                            <p class="views">Views ${l}</p>
                            <p class="comments">Comments ${u}</p>
                            <p class="downloads">Downloads ${d}</p>
                        </div>
                        </a>
                    </li>`).join("");o.insertAdjacentHTML("beforeend",r),new m(".gallery-item a").refresh()}else console.warn("No images found. Please try a different search query.")},b=document.getElementById("search-form"),L=document.querySelector(".searchInput"),i=document.querySelector(".image-gallery");function v(){i.innerHTML=""}b.addEventListener("submit",function(s){s.preventDefault();const o=L.value.trim();if(!o){console.warn("Please enter a search query before submitting.");return}v();const r=document.createElement("div");r.classList.add("loader"),g(o).then(n=>{r.remove(),y(n,i)}).catch(n=>{r.remove()})});
//# sourceMappingURL=commonHelpers.js.map
