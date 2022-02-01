const HomeLoad = (() => {
  const content = document.querySelector('#content');
  const createHome = () => {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const child1 = document.createElement('div');
    child1.classList.add('div1');
    const child1Title = document.createElement('h2');
    child1Title.innerHTML = `Welcome to <span class='name-changer'>Tamada</span>`;
    child1.appendChild(child1Title);

    const child1SecondTitle = document.createElement('p');
    child1SecondTitle.textContent = 'Authentic Georgian Cuisine';
    child1.appendChild(child1SecondTitle);

    const child2 = document.createElement('div');
    child2.classList.add('div2');
    const child2Title = document.createElement('h2');
    child2Title.textContent = 'happy to serve';
    const child2Text = document.createElement('p');
    child2Text.textContent =
      'Food for Georgians is not just an eating process. It is the best place for conversation, expression of emotions and relationships. It is a well-known fact that Georgia is famous for its hospitality. The phenomenon of respect for the visitor is originally expressed in the genes of the Georgians, and so our team!';
    child2.appendChild(child2Title);
    child2.appendChild(child2Text);

    const child3 = document.createElement('div');
    child3.classList.add('div3');
    const child3Text = document.createElement('p');
    child3Text.textContent = 'რესტორანი';
    child3.appendChild(child3Text);

    const child4 = document.createElement('div');
    child4.classList.add('div4');
    const child4Title = document.createElement('h2');
    child4Title.textContent = 'about us';
    const child4Text = document.createElement('p');
    child4Text.innerHTML = `Tamada is a small island of Georgian hospitality in Copenhagen, one of the most beautiful cities in Europe. <br/><br/> Warm and pleasant atmosphere, original interior, hall decorated with traditional Georgian elements and sophisticated bar wait for you. The experienced and qualified staff of the restaurant is focused on premium quality of service, all international and hygiene standards are kept, dishes are prepared with ecologically natural ingredients that are purchased daily on the local market by our cooks, who put their whole heart in preparation.`;
    const child4Button = document.createElement('button');
    child4Button.textContent = 'read more';
    child4.appendChild(child4Title);
    child4.appendChild(child4Text);
    child4.appendChild(child4Button);

    homeContainer.appendChild(child1);
    homeContainer.appendChild(child2);
    homeContainer.appendChild(child3);
    homeContainer.appendChild(child4);

    content.appendChild(homeContainer);
  };
  return { createHome };
})();

export { HomeLoad };
