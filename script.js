const adviceTitle = document.getElementById("title-advice");
const adviceText = document.getElementById("text-advice");
const button = document.getElementById("btn");

// Fetching advice when the page loads
window.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", onClick);
  getAdvice();
});

// Adiciona o efeito ao pressionar (clique rápido ou toque)
button.addEventListener("mousedown", () => {
  button.style.boxShadow = "0 0 30px 1px var(--primary-green)";
  button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseup", () => {
  button.style.boxShadow = "none";
  button.style.transform = "scale(1)";
});

// Adiciona o efeito ao pressionar
button.addEventListener("touchstart", () => {
  button.style.boxShadow = "0 0 30px 2px var(--primary-green)";
  button.style.transform = "scale(1.05)";
});

// Remove o efeito ao soltar
button.addEventListener("touchend", () => {
  button.style.boxShadow = "none";
  button.style.transform = "scale(1)";
});

async function getAdvice() {
  adviceText.innerHTML = "Loading..."; // Display loading message while fetching data
  adviceTitle.innerHTML = ""; // Clear the title

  // Fetching advice from the API
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  // Updating the HTML elements with the response data
  adviceTitle.innerHTML = `ADVICE #${data.slip.id}`;
  adviceText.innerHTML = `"${data.slip.advice}"`;
}

function onClick() {
  button.disabled = true; // Disable the button to prevent multiple clicks
  getAdvice();
  setTimeout(() => {
    button.disabled = false; // Re-enable the button after 2 second
  }, 2000);
}
