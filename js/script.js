const greetingEl = document.getElementById("greeting");

let userName = prompt("Masukkan nama anda:");

if (!userName) {
  userName = "Guest";
}

greetingEl.textContent = `Hi ${userName}, Welcome To Lezo Creative Website!`;


const form = document.getElementById("contactForm");


const outTime = document.getElementById("out-time");
const outName = document.getElementById("out-name");
const outBirthdate = document.getElementById("out-birthdate");
const outGender = document.getElementById("out-gender");
const outMessage = document.getElementById("out-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message").value.trim();

  if (!name || !birthdate || !gender || !message) {
    alert("Harap isi semua field sebelum submit!");
    return;
  }

  const now = new Date();
  outTime.textContent = now.toString();
  outName.textContent = name;
  outBirthdate.textContent = birthdate;
  outGender.textContent = gender.value;
  outMessage.textContent = message;
});
