// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const nameInput = form.querySelector("input[type='text']");
  const emailInput = form.querySelector("input[type='email']");
  const messageInput = form.querySelector("textarea");
  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    setTimeout(() => {
      alert("Message sent successfully!");
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
      form.reset();
    }, 1500);
  });
});
