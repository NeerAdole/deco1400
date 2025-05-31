document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    emailjs.sendForm("service_oozz0jr", "template_bzmwal5", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });
  