const keepPingerAAlive = () => {
  fetch("https://pinger-a.onrender.com", { mode: "no-cors" }) // Replace with the actual URL of Pinger A
    .then(() => {
      document.getElementById(
        "status-pinger-a"
      ).innerText = `Contacted Pinger A. Last attempt: ${new Date().toLocaleTimeString()}`;
    })
    .catch((error) => {
      document.getElementById(
        "status-pinger-a"
      ).innerText = `Error: ${error}. Last attempt: ${new Date().toLocaleTimeString()}`;
    });
};

// Send a request every 12 minutes (720,000 milliseconds)
setInterval(keepPingerAAlive, 720000);

// Initial call to start the process immediately
keepPingerAAlive();
