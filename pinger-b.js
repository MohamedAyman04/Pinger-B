const keepPingerAAlive = () => {
  fetch("https://pinger-a.onrender.com") // Replace with the actual URL of Pinger A
    .then((response) => {
      if (response.ok) {
        document.getElementById(
          "status-pinger-a"
        ).innerText = `Pinger A is alive. Last check: ${new Date().toLocaleTimeString()}`;
      } else {
        document.getElementById(
          "status-pinger-a"
        ).innerText = `Failed to contact Pinger A. Last attempt: ${new Date().toLocaleTimeString()}`;
      }
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
