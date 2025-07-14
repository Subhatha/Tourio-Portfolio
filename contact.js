
function sendMail() {
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  if (!parms.name || !parms.email || !parms.subject || !parms.message) {
    alert("Please fill out all fields before sending.");
    return;
  }

  emailjs.send("service_spt4rny", "template_j6g0hmg", parms)
    .then(function(response) {
      alert("Email sent successfully!");
      document.querySelector("form").reset();
    })
    .catch(function(error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email. See console for details.");
    });
}
