function sendMail() {
    var payload = {
      name: document.getElementById("name").value,
      mail: document.getElementById("mail").value,
      
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    emailjs.send("service_x7wi6cl", "template_01ovtlw", payload).then(
      function (response) {
        alert("Mail has been sent successfully");
      },
      function (error) {
        alert("Couldn't send the mail due to some error");
      }
    );
  }