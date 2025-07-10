document.addEventListener("DOMContentLoaded", () => {
  const users = [
    { name: "Kamal Swarnkar", email: "kamal@example.com", role: "Admin" },
    { name: "Ankit Sharma", email: "ankit@example.com", role: "Editor" },
    { name: "Sneha Patel", email: "sneha@example.com", role: "User" },
  ];

  const logs = [
    "User Kamal uploaded SBI.pdf at 3:32 PM",
    "Sneha submitted a feedback form",
    "Ankit updated pricing.html",
  ];

  const userTable = document.getElementById("userTableBody");
  const logsList = document.getElementById("logsList");
  const addUserBtn = document.getElementById("addUserBtn");

  const renderUsers = () => {
    userTable.innerHTML = "";
    users.forEach(user => {
      const row = `
        <tr>
          <td class="px-4 py-2">${user.name}</td>
          <td class="px-4 py-2">${user.email}</td>
          <td class="px-4 py-2">${user.role}</td>
          <td class="px-4 py-2">
            <button class="text-red-600 hover:underline text-sm">Remove</button>
          </td>
        </tr>`;
      userTable.insertAdjacentHTML("beforeend", row);
    });
  };

  logs.forEach(log => {
    logsList.insertAdjacentHTML("beforeend", `<li>🔹 ${log}</li>`);
  });

  renderUsers();

  // Add user functionality (static dummy data for now)
  addUserBtn.addEventListener("click", () => {
    const randomId = Math.floor(Math.random() * 1000);
    users.push({
      name: `User${randomId}`,
      email: `user${randomId}@example.com`,
      role: "User"
    });
    renderUsers();
  });
});
