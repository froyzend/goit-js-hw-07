document.querySelector('.login-form').addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
  const formElements = this.elements;
  let allFieldsFilled = true;
  let formData = {};

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type === 'submit' || element.type === 'button') {
            continue;
        }
        if (element.value.trim() === '') {
            allFieldsFilled = false;
            break;
      }
      formData[element.name] = element.value.trim();
    }

    if (!allFieldsFilled) {
        alert('All form fields must be filled in.');
        
    } else {
       console.log(formData);
        this.reset();
    }
});
