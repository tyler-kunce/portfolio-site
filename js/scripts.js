(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
  
    function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper
  
      // Check and Remove any existing errors
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
  
      // Now add the error if the message isn't empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }
    
    function validateEmail() {
      let value = emailInput.value;
  
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
  
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
      
      showErrorMessage(emailInput, null);
      return true;
    }
    
    function validateForm() {
      let isEmailValid = validateEmail();
      return isEmailValid;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    })
  
    emailInput.addEventListener('input', validateEmail);
  
    // THE RETURN STATEMENT HERE
  })();