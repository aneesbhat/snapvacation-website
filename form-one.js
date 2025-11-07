const form = document.getElementById("leadForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  
  if(form.website.value !== "") return; 

  const formData = new FormData(form);

  fetch("https://formsubmit.co/jollyholidays595@gmail.com", { 
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if(response.ok) {
      
      form.reset();
    } else {
      throw new Error("FormSubmit returned an error");
    }
  })
  .catch(error => {
   
    Swal.fire({
      title: 'Oops!',
      text: 'We could not receive your lead. Please call us directly.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Call Now',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.isConfirmed) {
        
        window.location.href = "tel:+918899257845"; 
      }
    });
    console.error("Form submission error:", error);
  });
});