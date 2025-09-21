(function() {
    emailjs.init("ZOYvRrE8ONR6Xu7TA"); // Your Public Key
})();

function sendMail(form) {
    emailjs.sendForm("service_4acey1c", "template_9h9rnh9", form)
        .then(function () {
            document.getElementById("form-status").innerText = "✅ Message sent successfully!";
        }, function (error) {
            document.getElementById("form-status").innerText = "❌ Failed to send: " + error.text;
        });
}
