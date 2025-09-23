const leadForm = document.getElementById("leadForm");
const formMsg = document.getElementById("formMsg");

leadForm.addEventListener("submit", function(e){
  e.preventDefault();

  
  if(document.getElementById("website").value !== ""){
    formMsg.textContent = "Spam detected.";
    formMsg.style.color = "red";
    return;
  }

  const name = this.fullname.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();

 
  const nameValid = /^[a-zA-Z ]{3,}$/.test(name);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = /^[0-9]{7,15}$/.test(phone);

  if(!nameValid){formMsg.textContent="Enter valid name";formMsg.style.color="red";return;}
  if(!emailValid){formMsg.textContent="Enter valid email";formMsg.style.color="red";return;}
  if(!phoneValid){formMsg.textContent="Enter valid phone";formMsg.style.color="red";return;}

  formMsg.textContent = "Thank you! Our travel expert will contact you soon.";
  formMsg.style.color = "green";
  this.reset();
});