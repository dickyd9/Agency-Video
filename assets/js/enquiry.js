const nama = document.getElementById("nama");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <b>Name: </b>${nama.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <b> Message: </b>${message.value}
    `;

  Email.send({
    SecureToken: "4bff15fd-f160-4086-90b6-dfc1e7d19f68",
    To: "connect@limaempat.com",
    From: `connect@limaempat.com`,
    Subject: "Enquiry Client-" + email.value,
    Body: ebody,
  }).then((message) => alert(message));
});
