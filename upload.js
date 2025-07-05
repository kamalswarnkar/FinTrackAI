// upload.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uploadForm");
  const fileInput = document.getElementById("fileInput");
  const uploadBtn = document.getElementById("uploadBtn");
  const successMessage = document.getElementById("uploadSuccess");

  const showAlert = (message) => {
    alert(message);
    successMessage.style.display = "none";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      showAlert("Please select a file to upload.");
      return;
    }

    const maxSizeMB = 5;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

    if (file.size > maxSizeBytes) {
      showAlert(`File size exceeds ${maxSizeMB}MB. Please choose a smaller file.`);
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      showAlert("Invalid file type. Only PDF, JPG, and PNG are allowed.");
      return;
    }

    uploadBtn.disabled = true;
    uploadBtn.textContent = "Uploading...";

    setTimeout(() => {
      uploadBtn.disabled = false;
      uploadBtn.textContent = "Upload";
      successMessage.style.display = "block";
      form.reset();
    }, 1500);
  });
});
