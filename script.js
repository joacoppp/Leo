const messages = [
  "¿Seguro?",
  "Piénsalo bien",
  "Oye...",
  "No seas cruel",
  "Mira el otro botón",
  "Ese Sí se ve bonito",
  "Ya sabes la respuesta",
  "Vamos, di que sí"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
