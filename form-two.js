  document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  
  if (document.getElementById("website").value !== "") {
    return; // Bot detected, do nothing
  }

  
  const name = this.fullname.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const packageCategory = this.package.value;

  // Extra validation for phone number
  const phoneRegex = /^\d{10,12}$/;
  if (!phoneRegex.test(phone)) {
    Swal.fire({
      title: "Invalid Phone",
      text: "Please enter a valid phone number (10–12 digits).",
      icon: "error",
      confirmButtonText: "OK"
    });
    return;
  }

  
  closePopup();

  
  Swal.fire({
    title: "Thank You, " + name + "!",
    text: "Your request for the " + packageCategory + " package has been received. We will contact you shortly.",
    icon: "success",
    confirmButtonText: "Great!"
  }).then(() => {
    // Reset form after success
    document.getElementById("leadForm").reset();
  });
});





document.addEventListener("DOMContentLoaded", function() { 
  document.querySelectorAll(".leadForm").forEach((form) => {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); 

      
      if (this.website.value !== "") return;

      
      const name = this.fullname.value.trim();
      const phone = this.phone.value.trim();
      const packageCategory = this.package.options[this.package.selectedIndex].text;

      
      const phoneRegex = /^\d{10,12}$/;
      if (!phoneRegex.test(phone)) {
        Swal.fire("Invalid Phone", "Please enter a valid phone number (10–12 digits).", "error");
        return;
      }

      
      const formData = new FormData(form);

      
      fetch("https://formsubmit.co/bisma1055@gmail.com", { // replace with your email
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
      .then(response => {
        if (response.ok) {
          
          Swal.fire({
            title: `Thank You, ${name}!`,
            text: `Your request for the ${packageCategory} has been received.`,
            icon: "success",
            confirmButtonText: "Great!"
          }).then(() => {
            form.reset();
          });
        } else {
          throw new Error("FormSubmit server error");
        }
      })
      .catch(error => {
        
        Swal.fire({
          title: "Oops!",
          text: "We could not receive your lead. Please call us directly.",
          icon: "error",
          showCancelButton: true,
          confirmButtonText: "Call Now",
          cancelButtonText: "Cancel"
        }).then((result) => {
          if (result.isConfirmed) {
           
            window.location.href = "tel:+916005920087"; 
          }
        });
        console.error("Form submission error:", error);
      });
    });
  });
});





  




  

    
  

  

  






