const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  

  const name = form.elements.name.value;

  const email = form.elements.email.value;

  const message = form.elements.message.value;

  

  const xhr = new XMLHttpRequest();

  

  xhr.open('POST', 'contact.php');

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  

  xhr.onreadystatechange = function() {

    if (xhr.readyState === XMLHttpRequest.DONE) {

      console.log(xhr.responseText);

    }

  };

  

  xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);

});


