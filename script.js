const rappers = [
  {
    name: "The Notorious B.I.G.",
    era: "Brooklyn / 1990s",
    wikiTitle: "The_Notorious_B.I.G.",
    flow: "Biggie flow: 動きは落ち着いて、言葉は重く。今日の一歩をクラシックにしよう。"
  },
  {
    name: "Nas",
    era: "Queensbridge / 1990s-2000s",
    wikiTitle: "Nas",
    flow: "Nas flow: 街のノイズも、君の物語のイントロになる。自分の視点を信じよう。"
  },
  {
    name: "Jay-Z",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Jay-Z",
    flow: "Jay-Z flow: 今日は小さく始めていい。続ける人が、最後に大きな景色を見る。"
  },
  {
    name: "DMX",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "DMX",
    flow: "DMX flow: 声が震えても進め。強さは、止まらない心から生まれる。"
  },
  {
    name: "Busta Rhymes",
    era: "New York / 1990s-2000s",
    wikiTitle: "Busta_Rhymes",
    flow: "Busta flow: テンポを上げよう。迷いをビートに変えて、今日を動かせ。"
  },
  {
    name: "Method Man",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Method_Man",
    flow: "Method Man flow: 渋く、深く、あわてずに。君のペースが一番タフだ。"
  },
  {
    name: "Ghostface Killah",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Ghostface_Killah",
    flow: "Ghostface flow: 色の濃い一日でも大丈夫。君の言葉で場面を変えよう。"
  },
  {
    name: "Raekwon",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Raekwon",
    flow: "Raekwon flow: 焦らず仕込め。いい一手は、静かな準備から生まれる。"
  },
  {
    name: "Big Pun",
    era: "The Bronx / 1990s",
    wikiTitle: "Big_Pun",
    flow: "Big Pun flow: 言葉を詰め込みすぎなくていい。今日の核心を一発で決めよう。"
  },
  {
    name: "Fat Joe",
    era: "The Bronx / 1990s-2000s",
    wikiTitle: "Fat_Joe",
    flow: "Fat Joe flow: 仲間を大事に、自分も大事に。今日の勝ちはそこから始まる。"
  },
  {
    name: "Prodigy",
    era: "Queens / 1990s-2000s",
    wikiTitle: "Prodigy_(rapper)",
    flow: "Prodigy flow: 静かな集中は強い。余計な音を切って、一歩だけ前へ。"
  },
  {
    name: "LL Cool J",
    era: "Queens / 1990s-2000s",
    wikiTitle: "LL_Cool_J",
    flow: "LL Cool J flow: 自信は声に出して育てるもの。今日は胸を張っていこう。"
  },
  {
    name: "Rakim",
    era: "Long Island / 1990s",
    wikiTitle: "Rakim",
    flow: "Rakim flow: 派手さより精度。ひとつの言葉を、まっすぐ届けよう。"
  },
  {
    name: "KRS-One",
    era: "The Bronx / 1990s-2000s",
    wikiTitle: "KRS-One",
    flow: "KRS-One flow: 学びは武器になる。今日わかったことを、明日の力にしよう。"
  },
  {
    name: "Redman",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Redman_(rapper)",
    flow: "Redman flow: 肩の力を抜いていい。楽しむ余裕が、君のフロウを太くする。"
  },
  {
    name: "Jadakiss",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "Jadakiss",
    flow: "Jadakiss flow: 短くても鋭い一言でいい。今日の決め手を見つけよう。"
  },
  {
    name: "Cam'ron",
    era: "Harlem / 1990s-2000s",
    wikiTitle: "Cam'ron",
    flow: "Cam'ron flow: 自分の色を隠さないで。少し派手なくらいがちょうどいい。"
  },
  {
    name: "Big L",
    era: "Harlem / 1990s",
    wikiTitle: "Big_L",
    flow: "Big L flow: 今日の一行を大切に。切れ味は、積み重ねで磨かれる。"
  },
  {
    name: "Queen Latifah",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Queen_Latifah",
    flow: "Queen Latifah flow: 自分への敬意を忘れないで。堂々と進む姿が一番強い。"
  },
  {
    name: "Lauryn Hill",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Lauryn_Hill",
    flow: "Lauryn Hill flow: 心の声を急がせないで。深く響くものは、静かに育つ。"
  }
];

const fallbackPhoto =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#1f6f64"/>
      <circle cx="620" cy="120" r="170" fill="#efc36f" opacity="0.6"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="54" font-weight="900" fill="#fffaf1">
        EAST COAST
      </text>
    </svg>
  `);

const photoCache = new Map();
const photoElement = document.querySelector("#rapperPhoto");
const photoCredit = document.querySelector("#photoCredit");
const rapperName = document.querySelector("#rapperName");
const rapperEra = document.querySelector("#rapperEra");
const messageElement = document.querySelector("#message");
const drawButton = document.querySelector("#drawButton");

async function getPhoto(rapper) {
  if (photoCache.has(rapper.wikiTitle)) {
    return photoCache.get(rapper.wikiTitle);
  }

  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${rapper.wikiTitle}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Photo request failed");
  }

  const data = await response.json();
  const photo = {
    src: data.thumbnail?.source || fallbackPhoto,
    page: data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${rapper.wikiTitle}`
  };

  photoCache.set(rapper.wikiTitle, photo);
  return photo;
}

async function showRapper() {
  const randomIndex = Math.floor(Math.random() * rappers.length);
  const rapper = rappers[randomIndex];

  rapperName.textContent = rapper.name;
  rapperEra.textContent = rapper.era;
  messageElement.textContent = rapper.flow;
  drawButton.disabled = true;
  drawButton.textContent = "写真を読み込み中...";

  try {
    const photo = await getPhoto(rapper);
    photoElement.src = photo.src;
    photoElement.alt = `${rapper.name}の写真`;
    photoElement.hidden = false;
    photoCredit.innerHTML = `Photo: <a href="${photo.page}" target="_blank" rel="noreferrer">Wikipedia / Wikimedia</a>`;
  } catch {
    photoElement.src = fallbackPhoto;
    photoElement.alt = "East Coastの文字入り画像";
    photoElement.hidden = false;
    photoCredit.textContent = "写真を読み込めませんでした。ネット接続を確認してください。";
  } finally {
    drawButton.disabled = false;
    drawButton.textContent = "今日のラッパーを出す";
  }
}

drawButton.addEventListener("click", showRapper);
