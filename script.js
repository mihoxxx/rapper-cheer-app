const messages = [
  "You are doing better than you think.",
  "Take one small step. That is enough for today.",
  "Your effort is growing into real strength.",
  "You do not have to be perfect to move forward.",
  "Breathe slowly. You can handle this moment.",
  "A gentle start still counts as a start.",
  "Your pace is valid. Keep going.",
  "Today is a good day to try again.",
  "You have already made progress.",
  "Be kind to yourself. You are learning."
];

const messageElement = document.querySelector("#message");
const drawButton = document.querySelector("#drawButton");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
});
