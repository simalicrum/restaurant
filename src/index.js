import { renderHome } from "./home.js";
import { renderAboutUs } from "./aboutus.js";
import { renderMenu } from "./menu.js";

const renderTabs = () => {
  let contentDiv = document.getElementById("content");
  let tabMenu = document.createElement("div");
  tabMenu.setAttribute("id", "tab-menu");
  let homeTab = document.createElement("div");
  homeTab.setAttribute("class", "tab-item");
  homeTab.innerHTML = "Home";
  homeTab.addEventListener("click", function clickHomeTab() {
    console.log("Event happened");
    document.getElementById("content").removeChild(document.querySelector(".tab-content"));
    renderHome();
  });
  tabMenu.appendChild(homeTab);
  let aboutUsTab = document.createElement("div");
  aboutUsTab.setAttribute("class", "tab-item");
  aboutUsTab.innerHTML = "About Us";
  aboutUsTab.addEventListener("click", function clickAbourUsTab() {
    console.log("Event happened");
    document.getElementById("content").removeChild(document.querySelector(".tab-content"));
    renderAboutUs();
  });
  tabMenu.appendChild(aboutUsTab);
  let menuTab = document.createElement("div");
  menuTab.setAttribute("class", "tab-item");
  menuTab.innerHTML = "Menu";
  menuTab.addEventListener("click", function clickMenuTab() {
    console.log("Event happened");
    document.getElementById("content").removeChild(document.querySelector(".tab-content"));
    renderMenu();
  });
  tabMenu.appendChild(menuTab);
  contentDiv.appendChild(tabMenu);
};

console.log("Hello, World");

renderTabs();
renderHome();
