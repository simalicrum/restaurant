const renderHome = () => {
  const contentDiv = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'tab-content');
  const homeTitle = document.createElement('h1');
  homeTitle.innerHTML = 'Welcome to Yummy Sushi!';
  homeDiv.appendChild(homeTitle);
  const homeImage = document.createElement('img');
  homeImage.setAttribute(
    'src',
    'https://www.nippon.com/en/ncommon/contents/japan-data/169591/169591.jpg',
  );
  homeDiv.appendChild(homeImage);
  const homeCopy = document.createElement('p');
  homeCopy.innerHTML = "Our sushi is pretty great. It's made with fish and rice. You should come have some now.";
  homeDiv.appendChild(homeCopy);
  contentDiv.appendChild(homeDiv);
};

export { renderHome };
