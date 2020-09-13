const renderMenu = () => {
  let contentDiv = document.getElementById("content");
  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "tab-content");
  let menuTitle = document.createElement("h1");
  menuTitle.innerHTML ="Lunch Menu";
  menuDiv.appendChild(menuTitle);
  let salmonNigiriTitle = document.createElement("h2");
  salmonNigiriTitle.innerHTML ="Salmon Nigiri";
  menuDiv.appendChild(salmonNigiriTitle);
  let salmonNigiriContent = document.createElement("p");
  salmonNigiriContent.innerHTML = "Salmon on rice. Everyones favorite. $2";
  menuDiv.appendChild(salmonNigiriContent);
  let tunaNigiriTitle = document.createElement("h2");
  tunaNigiriTitle.innerHTML ="Tuna Nigiri";
  menuDiv.appendChild(tunaNigiriTitle);
  let tunaNigiriContent = document.createElement("p");
  tunaNigiriContent.innerHTML = "Tuna on rice. Everyones favorite. $2";
  menuDiv.appendChild(tunaNigiriContent);
  let ebiNigiriTitle = document.createElement("h2");
  ebiNigiriTitle.innerHTML ="Ebi Nigiri";
  menuDiv.appendChild(ebiNigiriTitle);
  let ebiNigiriContent = document.createElement("p");
  ebiNigiriContent.innerHTML = "Ebi on rice. Everyones favorite. $2";
  menuDiv.appendChild(ebiNigiriContent);
  contentDiv.appendChild(menuDiv);
}

export {renderMenu}