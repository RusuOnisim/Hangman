import"./style-29a1522f.js";import{u}from"./updategame-8faffae8.js";const i=document.querySelectorAll(".letter-button"),E=document.getElementById("message"),y=document.getElementById("message1"),d=["ALLIGATOR","BUTTERFLY","CHAMELEON","ELEPHANTS","FLAMINGO","GIRAFFES","HEDGEHOGS","JELLYFISH","KANGAROOS","LEMUR","MEERKATS","OCTOPUSES","PLATYPUS","QUOKKAS","RHINOCEROS","SEAHORSES","TARANTULA","VULTURES","WOODPECKER","ZEBRAFISH"];let n=d[Math.floor(Math.random()*d.length)],l=Array(n.length).fill("_"),s=0,o=!1;const a=document.getElementById("word-display");function m(e){if(!o){if(n.includes(e))for(let t=0;t<n.length;t++)n[t]===e&&(l[t]=e);else s++,u(s);c()}}function c(){a.textContent=l.join(" ")}function f(){const e=l.map(t=>t!=="_"?t:"_").join(" ");a.textContent=e}const A=document.querySelector(".overlaylose"),S=document.querySelector(".overlaywin");function g(){o||(l.join("")===n?(o=!0,i.forEach(e=>{e.disabled=!0}),S.style.display="flex",E.textContent="Congratulations! You won!"):s===3&&(o=!0,i.forEach(e=>{e.disabled=!0}),setTimeout(()=>{A.style.display="flex",y.textContent="You lost. The word was: "+n},6e3)))}let h=Array(n.length).fill("_");const L=document.querySelectorAll(".letter-button");L.forEach(e=>{e.addEventListener("click",()=>{const t=e.textContent||"";h.includes(t)?alert("You already guessed that letter."):(m(t),g(),e.disabled=!0)})});c();f();const r=document.querySelector(".overlayhint"),p=document.getElementById("testButton");p.addEventListener("click",()=>{r.style.display="flex"});r.addEventListener("click",()=>{r.style.display="none"});