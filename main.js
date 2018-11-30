'use strict'

let errors = []

function validateForm() {
  let name1 = document.forms.myForm.firstName1.value
  let lastName1 = document.forms.myForm.lastName1.value
  let email1 = document.forms.myForm.email1.value
  let phone1 = document.forms.myForm.phone1.value
  let errors = []
  var child = document.getElementById('myList')
  if (child){
    child.parentNode.removeChild(child)
  }

    if (name1 === '') {
      let errorMessageLink = document.createElement('a')
      errorMessageLink.setAttribute('href', '#firstname1')
      errorMessageLink.innerHTML = 'First name must be filled out'
      errors.push(errorMessageLink)
    }
    if (lastName1 === ''){
      let errorMessageLink = document.createElement('a')
      errorMessageLink.setAttribute('href', '#lastname1')
      errorMessageLink.innerHTML = 'Last name must be filled out'
      errors.push(errorMessageLink)
    }
    if (email1 === '') {
      let errorMessageLink = document.createElement('a')
      errorMessageLink.setAttribute('href', '#email1')
      errorMessageLink.innerHTML = 'Email must be filled out'
      errors.push(errorMessageLink)
    }
    if (phone1 === '') {
      let errorMessageLink = document.createElement('a')
      errorMessageLink.setAttribute('href', '#phone1')
      errorMessageLink.innerHTML = 'Phone must be filled out'
      errors.push(errorMessageLink)
    }


  if (document.forms.myForm.submit.value === 'Submit' && errors.length){
    let errorDiv = document.getElementById('errors')
    errorDiv.style.display = 'block'
    let errorMessage = document.getElementById('errorMessage')
    errorMessage.focus()

    var list = document.createElement('ul')
    list.setAttribute('id', 'myList')
    var myList = errorMessage.appendChild(list)
    for (let i = 0; i < errors.length; i++){
    var li = document.createElement('li')
    myList.appendChild(li)
    li.appendChild(errors[i])
    }

  }
else if (document.forms.myForm.submit.value === 'Submit' && errors.length<1){
  let thankYouDiv = document.getElementById('thankYou')
  thankYouDiv.style.display = 'block'
  let errorDiv = document.getElementById('errors')
  errorDiv.style.display = 'none'
  let form = document.getElementById("myForm")
  form.style.display='none'
}
return false
}

function clearForm(){
  //set the error display style back to 'none'
  let errorDiv = document.getElementById('errors')
  errorDiv.style.display = 'none'
  //set the thankYou div style back to 'none'
  let thankYouDiv = document.getElementById('thankYou')
  thankYouDiv.style.display = 'none'
  //reset the errors array to empty array
  errors = []
  //remove ul and li elements from their parent element
  var child = document.getElementById('myList')
  if (child){
    child.parentNode.removeChild(child)
  }
  //reset the values of input fields to empty strings
  for (let i = 0; i < document.forms.myForm.length - 2; i++){
    document.forms.myForm[i].value = ''
  }
  return false
}

