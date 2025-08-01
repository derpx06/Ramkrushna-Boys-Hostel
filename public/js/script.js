document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.color = 'green';
        form.reset();
      } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
      }
    });
  }
});