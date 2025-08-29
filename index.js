 
    const heartCount = document.getElementById("heartCount");
    const coinCount = document.getElementById("coinCount");
    const copyCount = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");
    const clearHistory = document.getElementById("clearHistory");

    // ❤️ Heart Button
    document.querySelectorAll(".heart-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        heartCount.textContent = parseInt(heartCount.textContent) + 1;
      });
    });

    // 📋 Copy Button
    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const number = card.querySelector("p.font-bold").innerText.replace("📞 ", "");
        navigator.clipboard.writeText(number);
        alert(`Number ${number} copied!`);
        copyCount.textContent = parseInt(copyCount.textContent) + 1;
      });
    });

    // 📞 Call Button
    document.querySelectorAll(".call-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const serviceName = card.querySelector("h2").innerText;
        const number = card.querySelector("p.font-bold").innerText.replace("📞 ", "");

        let coins = parseInt(coinCount.textContent);
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        // Deduct coins
        coinCount.textContent = coins - 20;

        // Alert
        alert(`Calling ${serviceName} at ${number}`);

        // Add to history with time
        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.textContent = `${serviceName} - ${number} (at ${time})`;
        historyList.appendChild(li);
      });
    });

    // 🗑️ Clear History
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });