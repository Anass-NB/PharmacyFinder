
/**
 * Theme: Tailfox - Tailwind Admin Dashboard Template
 * Author: Mannatthemes
 * App Js
 **/

class App{init(){let e=document.querySelector("html"),t=document.querySelector("#toggle-theme"),a=t?.querySelector("i");t?.addEventListener("click",()=>{"dark"==e.getAttribute("class")?document.body.setAttribute("data-layout-mode","light"):document.body.setAttribute("data-layout-mode","dark"),e.classList.toggle("dark");let t=e.classList.contains("dark");a.className=`ti ti-${t?"sun":"moon"} text-3xl top-icon`})}}function windowScroll(){let e=document.getElementById("topbar");null!=e&&(document.body.scrollTop>=50||document.documentElement.scrollTop>=50?e.classList.add("nav-sticky"):e.classList.remove("nav-sticky"))}function activeMenu(){document.querySelectorAll(".tab-menu button").forEach(e=>{e.setAttribute("aria-selected",!1)}),document.querySelectorAll("#Icon-menu a").forEach(function(e,t){var a=window.location.href.split(/[?#]/)[0];let n=e;if(e.href==a){document.querySelectorAll('#Icon-menu [role="tabpanel"]').forEach(function(e){e.classList.add("hidden"),e.querySelectorAll(".collapse-menu").forEach(function(e){e.classList.add("hidden")})}),n.classList.add("active"),n.parentNode.classList.add("menuitem-active");let o=null;n.parentNode.parentNode.parentNode.hasAttribute("role")&&(n.parentNode.parentNode.parentNode.classList.remove("hidden"),o=n.parentNode.parentNode.parentNode),n.parentNode.parentNode.parentNode.classList.contains("collapse-menu")&&(n.parentNode.parentNode.parentNode.classList.remove("hidden"),o=n.parentNode.parentNode.parentNode),n.parentNode.parentNode.parentNode.previousElementSibling&&(n.parentNode.parentNode.parentNode.previousElementSibling.querySelector(".nav-link").classList.add("active"),n.parentNode.parentNode.parentNode.previousElementSibling.querySelector("[data-accordion-icon]")?.classList.add("rotate-180"),n.parentNode.parentNode.parentNode.previousElementSibling.querySelector(".nav-link").setAttribute("aria-expanded","true"),n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.hasAttribute("role")&&(n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("hidden"),o=n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)),o&&document.querySelectorAll(`.tab-menu button[data-tabs-target="#${o.id}"]`).forEach(e=>{e.click()})}}),document.querySelector("nav#topbar")&&document.querySelectorAll("nav#topbar ul.NavMenu a").forEach(function(e,t){var a=window.location.href.split(/[?#]/)[0];e.href==a&&(console.info(e),e.classList.add("active"),e.parentElement.parentElement.parentElement.querySelector("a")?.classList.add("active"),e.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("a")?.classList.add("active"))})}window.addEventListener("DOMContentLoaded",function(e){new App().init()}),window.addEventListener("scroll",e=>{e.preventDefault(),windowScroll()}),window.addEventListener("load",e=>{activeMenu()}),feather.replace();try{document.getElementById("toggle-menu").addEventListener("click",function(){var e=document.getElementById("mobile-menu-2");e.classList.toggle("block"),e.classList.contains("block")?e.classList.remove("hidden"):e.classList.add("hidden")})}catch(e){}document.getElementById("default-size-check")?.addEventListener("click",()=>{document.body.setAttribute("data-sidebar-size","default")});var collapsedToggle=document.querySelector(".button-menu-mobile");collapsedToggle?.addEventListener("click",function(){"collapsed"==document.body.getAttribute("data-sidebar-size")?document.body.setAttribute("data-sidebar-size","default"):document.body.setAttribute("data-sidebar-size","collapsed")}),window.addEventListener("resize",()=>{window.innerWidth>=310&&window.innerWidth<=1440?document.body.setAttribute("data-sidebar-size","collapsed"):document.body.setAttribute("data-sidebar-size","default")});var collapsedToggle=document.querySelector(".button-menu-mobile-2");function dismissDropdownMenu(){document.querySelectorAll(".dropdown-menu").forEach(function(e){e.classList.remove("block"),e.classList.add("hidden")}),document.querySelectorAll(".dropdown-toggle").forEach(function(e){e.classList.remove("block")})}collapsedToggle?.addEventListener("click",function(){"collapsed"==document.body.getAttribute("data-sidebar-size")?document.body.setAttribute("data-sidebar-size","default"):document.body.setAttribute("data-sidebar-size","collapsed")}),window.addEventListener("click",function(e){dismissDropdownMenu()});try{window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".drop-multi button, .second-level a").forEach(e=>{e.addEventListener("click",function(){this.nextElementSibling.classList.toggle("block"),this.parentNode.classList.toggle("block")})})})}catch(t){}