const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const title = document.getElementById("tit").value
  const course = document.getElementById("course").value
  const insti = document.getElementById("insti").value
  const cont = document.getElementById("content").value
  const eg = document.getElementById("example").value
  
  console.log(title)

  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  fetch("http://127.0.0.1:3000/addnote?Title="+title+"&InstituteName="+insti+"&CourseName="+course+"&content="+cont+"&examples="+eg, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  window.location.href = "http://localhost:3000/dashboard";
})