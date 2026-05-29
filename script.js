const messages = [
  "大吉。今日は小さな一歩が、大きな自信につながります。",
  "中吉。あせらなくて大丈夫。あなたのペースで進めばOKです。",
  "吉。迷ったら、いちばんやさしい選択をしてみましょう。",
  "小吉。今日のあなたには、ちゃんと味方がいます。",
  "末吉。できたことを1つ数えるだけで、流れがよくなります。",
  "大吉。思いついたことをメモすると、未来の自分が助かります。",
  "中吉。深呼吸をひとつ。落ち着けば、道は見えてきます。",
  "吉。今日は完璧より、まずやってみる日です。",
  "小吉。小さな休憩も、前に進むための大事な力です。",
  "大吉。あなたのがんばりは、ちゃんと積み上がっています。"
];

const messageElement = document.querySelector("#message");
const drawButton = document.querySelector("#drawButton");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
});
