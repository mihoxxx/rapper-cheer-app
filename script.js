const rappers = [
  {
    name: "The Notorious B.I.G.",
    era: "Brooklyn / 1990s",
    wikiTitle: "The_Notorious_B.I.G.",
    topic: "Biggie topic: Brooklyn出身。1994年のアルバム『Ready to Die』で、90年代NYヒップホップの象徴的存在になりました。"
  },
  {
    name: "Nas",
    era: "Queensbridge / 1990s-2000s",
    wikiTitle: "Nas",
    topic: "Nas topic: Queensbridge出身。1994年の『Illmatic』は、East Coastヒップホップを語るうえで外せない作品です。"
  },
  {
    name: "Jay-Z",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Jay-Z",
    topic: "Jay-Z topic: Brooklyn出身。1996年の『Reasonable Doubt』から、ラッパー兼ビジネスパーソンとして大きな影響を持ちました。"
  },
  {
    name: "DMX",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "DMX",
    topic: "DMX topic: Yonkersを代表する存在。荒々しい声と感情の強さで、1998年以降のシーンを大きく動かしました。"
  },
  {
    name: "Busta Rhymes",
    era: "New York / 1990s-2000s",
    wikiTitle: "Busta_Rhymes",
    topic: "Busta topic: Leaders of the New School出身。高速で表情豊かなラップと派手な映像表現で知られます。"
  },
  {
    name: "Method Man",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Method_Man",
    topic: "Method Man topic: Wu-Tang Clanの中心人物の一人。低く渋い声と滑らかな存在感で人気を広げました。"
  },
  {
    name: "Ghostface Killah",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Ghostface_Killah",
    topic: "Ghostface topic: Wu-Tang Clanの一員。映画のように細かい描写と、感情のこもった語り口が特徴です。"
  },
  {
    name: "Raekwon",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Raekwon",
    topic: "Raekwon topic: 1995年の『Only Built 4 Cuban Linx...』で、NYのストリート物語を濃く描いたラッパーです。"
  },
  {
    name: "Big Pun",
    era: "The Bronx / 1990s",
    wikiTitle: "Big_Pun",
    topic: "Big Pun topic: Bronx出身。ラテン系ラッパーとして初めてソロでプラチナ認定アルバムを持つ重要人物です。"
  },
  {
    name: "Fat Joe",
    era: "The Bronx / 1990s-2000s",
    wikiTitle: "Fat_Joe",
    topic: "Fat Joe topic: Bronxを代表するラッパー。Terror Squadを率い、90年代から2000年代まで長く活躍しました。"
  },
  {
    name: "Prodigy",
    era: "Queens / 1990s-2000s",
    wikiTitle: "Prodigy_(rapper)",
    topic: "Prodigy topic: Mobb Deepのメンバー。Queensの冷たい空気を感じるような硬派な表現で知られます。"
  },
  {
    name: "LL Cool J",
    era: "Queens / 1990s-2000s",
    wikiTitle: "LL_Cool_J",
    topic: "LL Cool J topic: Queens出身。80年代から活躍し、90年代以降もラップと俳優業の両方で存在感を示しました。"
  },
  {
    name: "Rakim",
    era: "Long Island / 1990s",
    wikiTitle: "Rakim",
    topic: "Rakim topic: Long Island出身。複雑で落ち着いたライム構成により、多くのラッパーに影響を与えました。"
  },
  {
    name: "KRS-One",
    era: "The Bronx / 1990s-2000s",
    wikiTitle: "KRS-One",
    topic: "KRS-One topic: Bronxを代表するMC。ヒップホップを学びや文化として伝える姿勢でも知られています。"
  },
  {
    name: "Redman",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Redman_(rapper)",
    topic: "Redman topic: New Jersey出身。ユーモアと荒い質感のあるスタイルで、90年代East Coastの個性派として人気です。"
  },
  {
    name: "Jadakiss",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "Jadakiss",
    topic: "Jadakiss topic: YonkersのグループThe LOXの一員。鋭い声とパンチラインで、90年代後半から強い支持を集めました。"
  },
  {
    name: "Cam'ron",
    era: "Harlem / 1990s-2000s",
    wikiTitle: "Cam'ron",
    topic: "Cam'ron topic: Harlem出身。Dipsetの中心人物として、2000年代前半のNYサウンドとファッションに影響を与えました。"
  },
  {
    name: "Big L",
    era: "Harlem / 1990s",
    wikiTitle: "Big_L",
    topic: "Big L topic: Harlem出身。短い活動期間ながら、鋭い言葉選びと技巧で今も語り継がれるMCです。"
  },
  {
    name: "Queen Latifah",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Queen_Latifah",
    topic: "Queen Latifah topic: New Jersey出身。ラップ、映画、テレビで活躍し、女性MCの道を広げた重要人物です。"
  },
  {
    name: "Lauryn Hill",
    era: "New Jersey / 1990s-2000s",
    wikiTitle: "Lauryn_Hill",
    topic: "Lauryn Hill topic: New Jersey出身。Fugeesとソロ作品を通じて、ラップと歌を深く結びつけたアーティストです。"
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
    src: data.originalimage?.source || data.thumbnail?.source || fallbackPhoto,
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
  messageElement.textContent = rapper.topic;
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
