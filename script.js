const messages = [
  "MC Nova: 今日の一歩が、君のビートを強くする。",
  "Big Leo: あせらなくていい。自分のリズムで進めば勝ちだ。",
  "DJ Miles: 深呼吸して、次の小節からまた始めよう。",
  "Lil Sunny: 小さな成功も、ちゃんと拍手に値するよ。",
  "King Ray: 胸を張って。君は今日もステージに立ってる。",
  "Ace Cole: 完璧じゃなくていい。リアルな一歩がかっこいい。",
  "Fresh Jay: 迷った日は、やさしい選択をドロップしよう。",
  "Mr. Blue: 休むことも作戦。次の出番に備えよう。",
  "Young Cruz: 君の努力は、見えないところで韻を踏んでる。",
  "Captain Flow: 今日の君なら大丈夫。流れはここから変わる。"
];

const messageElement = document.querySelector("#message");
const drawButton = document.querySelector("#drawButton");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
});
