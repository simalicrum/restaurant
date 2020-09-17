const renderMenu = () => {
  const contentDiv = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'tab-content');
  const menuTitle = document.createElement('h1');
  menuTitle.innerHTML = 'Lunch Menu';
  menuDiv.appendChild(menuTitle);
  const salmonNigiriTitle = document.createElement('h2');
  salmonNigiriTitle.innerHTML = 'Salmon Nigiri';
  menuDiv.appendChild(salmonNigiriTitle);
  const salmonNigiriContent = document.createElement('p');
  salmonNigiriContent.innerHTML = 'Salmon on rice. Everyones favorite. $2';
  menuDiv.appendChild(salmonNigiriContent);
  const tunaNigiriTitle = document.createElement('h2');
  tunaNigiriTitle.innerHTML = 'Tuna Nigiri';
  menuDiv.appendChild(tunaNigiriTitle);
  const tunaNigiriContent = document.createElement('p');
  tunaNigiriContent.innerHTML = 'Tuna on rice. Everyones favorite. $2';
  menuDiv.appendChild(tunaNigiriContent);
  const ebiNigiriTitle = document.createElement('h2');
  ebiNigiriTitle.innerHTML = 'Ebi Nigiri';
  menuDiv.appendChild(ebiNigiriTitle);
  const ebiNigiriContent = document.createElement('p');
  ebiNigiriContent.innerHTML = 'Ebi on rice. Everyones favorite. $2';
  menuDiv.appendChild(ebiNigiriContent);
  contentDiv.appendChild(menuDiv);
};

export { renderMenu };
