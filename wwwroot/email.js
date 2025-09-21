(function () {
    emailjs.init("ZOYvREr8ONR6Xu7TA"); // your Public Key
})();

function sendEmail(form) {
    return emailjs.sendForm("service_4acey1c", "template_9h9rnh9", form);
}
