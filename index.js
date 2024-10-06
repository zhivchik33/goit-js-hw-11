import{i as c,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=t=>`
  <li class="gallery-card">
    <a class="gallery-a" href="${t.largeImageURL}">
       <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"  />
    </a>

<ul class="img-description-list">
  <li class="img-description-el">
  <p>Likes</p>
  <p>${t.likes}</p></li>
  <li class="img-description-el">
  <p>Views</p>
  <p>${t.views}</p></li>
  <li class="img-description-el">
  <p>Comments</p>
  <p>${t.comments}</p></li>
  <li class="img-description-el">
  <p>Downloads</p>
  <p>${t.downloads}</p></li>
</ul>
  </li> `,u="https://pixabay.com/api/",m=t=>{const s=new URLSearchParams({key:"45491885-d594c4380fd68d18bb383d8af",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${s}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},n=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),h=t=>{t.preventDefault();const s=document.querySelector(".loader");s.classList.remove("is-hidden");const i=n.elements.user_query.value;if(!i.trim()){s.classList.add("is-hidden");return}m(i).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}const e=o.hits.map(r=>p(r)).join("");l.innerHTML=e,new d(".js-gallery a",{captionsData:"alt",captionDelay:250}),n.reset()}).catch(o=>{c.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o),l.innerHTML=""}).finally(()=>{s.classList.add("is-hidden")})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
