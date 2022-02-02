const ContactLoad = (() => {
  const content = document.querySelector('#content');

  const createContact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    contactContainer.innerHTML = `
    
    <div class="container">  
    <form id="contact" action="" method="post">
      <h3>Tamada Restaurant</h3>
      <h4>Send us a message!</h4>
      <fieldset>
        <input placeholder="Full Name" type="text" tabindex="1" required autofocus>
      </fieldset>
      <fieldset>
        <input placeholder="Email Address" type="email" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Phone Number (optional)" type="tel" tabindex="3" required>
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message...." tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>

    `;
    contactContainer.classList.toggle('new-page');
    content.insertBefore(contactContainer, content.childNodes[1]);
  };
  return { createContact };
})();

export { ContactLoad };
