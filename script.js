const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
function setTheme() {
  const dark = body.classList.contains("dark");
  themeToggle.querySelector(".sun").classList.toggle("active", !dark);
  themeToggle.querySelector(".moon").classList.toggle("active", dark);
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  document.querySelector('meta[name="theme-color"]').content = dark ? "#0E1116" : "#F6F7F9";
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  setTheme();
});
setTheme();

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle scroll animations
(function(){
  const header=document.querySelector(".header");
  const onScroll=()=>header.classList.toggle("scrolled",window.scrollY>8);
  addEventListener("scroll",onScroll,{passive:true});onScroll();

  const targets=document.querySelectorAll(".about-grid>*,.journey-card,.section-heading,.skill,.soft,.project,.education>*,.award-list>*,.contact-grid>*,.stats-grid>*");
  const lang=document.querySelectorAll(".language");
  const calm=matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window);
  targets.forEach(el=>{el.classList.add("reveal");el.style.setProperty("--d",Math.min([...el.parentNode.children].indexOf(el),5)*0.07+"s")});
  if(calm){targets.forEach(el=>el.classList.add("in"));lang.forEach(el=>el.classList.add("in"))}
  else{
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
    targets.forEach(el=>io.observe(el));lang.forEach(el=>io.observe(el));
  }

  // highlight current section in the nav
  const links=[...document.querySelectorAll(".nav a")];
  if("IntersectionObserver" in window){
    const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-45% 0px -50% 0px"});
    document.querySelectorAll("main section[id]").forEach(s=>so.observe(s));
  }
})();
