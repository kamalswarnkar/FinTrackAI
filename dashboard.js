// dashboard.js
document.addEventListener("DOMContentLoaded", () => {
  const transactionList = document.getElementById("transactionList");
  const addTransactionBtn = document.getElementById("addTransactionBtn");
  const transactionCountDisplay = document.getElementById("transactionCount");

  let transactionCount = transactionList.children.length;

  const randomTransaction = () => {
    const amount = (Math.random() * 200 - 100).toFixed(2); // random from -100 to +100
    const today = new Date().toLocaleDateString("en-GB").replaceAll("/", "/");
    return `<li><span>${today}</span><span>₹${amount}</span></li>`;
  };

  addTransactionBtn.addEventListener("click", () => {
    transactionList.insertAdjacentHTML("afterbegin", randomTransaction());
    transactionCount++;
    transactionCountDisplay.textContent = `${transactionCount} Transactions`;
  });
});
