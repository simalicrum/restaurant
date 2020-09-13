const renderAboutUs = () => {
  let aboutUsPage = document.getElementById("content");
  let aboutUsDiv = document.createElement("div");
  aboutUsDiv.setAttribute("class", "tab-content");
  let aboutUsTitle = document.createElement("h1");
  aboutUsTitle.innerHTML = "About us and our amazing sushi.";
  aboutUsDiv.appendChild(aboutUsTitle);
  let aboutUsBlurb = document.createElement("p");
  aboutUsBlurb.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequatur saepe delectus. Perferendis sint expedita maxime, veritatis quae a illum officiis nihil possimus accusamus quam quia eligendi sed nobis vero rem delectus sapiente distinctio tempora mollitia exercitationem, suscipit iste tempore rerum. Cumque voluptatibus eum voluptatem nulla suscipit necessitatibus fuga delectus sint ratione beatae optio nam, earum corporis eaque cum. Debitis labore quaerat laudantium perspiciatis fugiat vel, quos natus ad tenetur nesciunt? Voluptatum enim odio eaque, aspernatur eius laudantium eveniet, at provident eos ipsam tempore nisi suscipit voluptatem harum corrupti voluptatibus debitis beatae est sapiente dolores error minus. Fuga, quis perferendis!";
  aboutUsDiv.appendChild(aboutUsBlurb);
  aboutUsPage.appendChild(aboutUsDiv);
};

export { renderAboutUs };