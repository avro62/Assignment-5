// ====== Selectors ======
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// ====== Heart Icon Functionality ======
document.querySelectorAll(".card button:first-child").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// ====== Copy Number ======
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert(`Copied: ${number}`);
    copyCount++;
    copyCountEl.textContent = copyCount;
  });
}

// ====== Call Number ======
function callNumber(serviceName, number) {
  if (coinCount < 20) {
    alert("Not enough coins! You need at least 20 coins to make a call.");
    return;
  }

  // Deduct coins
  coinCount -= 20;
  coinCountEl.textContent = coinCount;

  // Alert user
  alert(`Calling ${serviceName} at ${number}`);

  // Add to history
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.textContent = `${serviceName} (${number}) - Called at ${time}`;
  historyList.appendChild(li);
}

// ====== Clear History ======
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
