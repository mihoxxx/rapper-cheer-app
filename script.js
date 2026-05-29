const messages = [
  "ルナ先輩: 今日の一歩、ちゃんと未来につながってるよ。",
  "カイト: 失敗しても大丈夫。次のシーンで巻き返せばいい！",
  "ミオ: 深呼吸して。君なら落ち着いて進めるよ。",
  "ソラ: 完璧じゃなくていい。まず動いた君がえらい！",
  "ナギ: 小さな休憩も、冒険には大事な作戦だよ。",
  "アオイ: 迷ったら、やさしい方を選んでみよう。",
  "レン: 今日のがんばりは、ちゃんと経験値になってる。",
  "ヒナ: 笑顔をひとつ。そこから流れが変わるかも。",
  "ユウ: 自分のペースでいい。主人公は君だから。",
  "セナ: まだ途中でも大丈夫。物語はここから面白くなる！"
];

const messageElement = document.querySelector("#message");
const drawButton = document.querySelector("#drawButton");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
});
