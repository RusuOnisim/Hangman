import{c as s,a as d,b as a,u as c,d as o}from"./check-d6961762.js";let r=Array(s.length).fill("_");const i=document.querySelectorAll(".letter-button"),l=document.getElementById("Start");l&&l.addEventListener("click",()=>{window.location.href="menu.html"});i.forEach(e=>{e.addEventListener("click",()=>{const n=e.textContent||"";r.includes(n)?alert("You already guessed that letter."):(d(n),a(),e.disabled=!0)})});c();o();const t=document.querySelector(".overlayhint"),u=document.getElementById("testButton");u.addEventListener("click",()=>{t.style.display="flex"});t.addEventListener("click",()=>{t.style.display="none"});
