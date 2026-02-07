const messages = [
  "¿Segura?",
  "Piénsalo bien",
  "Yapoooo",
  "Pesada...",
  "Igual te amo",
  "Ese Sí está lindo",
  "Leonor, para",
  "Ni se te ocurra"
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
