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
  },
  {
    name: "Havoc",
    era: "Queens / 1990s-2000s",
    wikiTitle: "Havoc_(musician)",
    topic: "Havoc topic: Mobb Deepのメンバー。冷たい質感のビートと硬派なラップで、Queensサウンドを支えました。"
  },
  {
    name: "Sheek Louch",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "Sheek_Louch",
    topic: "Sheek Louch topic: The LOXの一員。Yonkersの荒い空気を感じるグループサウンドで知られます。"
  },
  {
    name: "Styles P",
    era: "Yonkers / 1990s-2000s",
    wikiTitle: "Styles_P",
    topic: "Styles P topic: The LOXの一員。ストリート感の強い語り口と、ソロ活動でも続く安定感が魅力です。"
  },
  {
    name: "Beanie Sigel",
    era: "Philadelphia / 1990s-2000s",
    wikiTitle: "Beanie_Sigel",
    topic: "Beanie Sigel topic: Philadelphia出身。Roc-A-Fella周辺で、重い声と実直なストリート表現を見せました。"
  },
  {
    name: "Freeway",
    era: "Philadelphia / 2000s",
    wikiTitle: "Freeway_(rapper)",
    topic: "Freeway topic: Philadelphia出身。Roc-A-Fella期の2000年代East Coastサウンドで、独特な高い声が印象的です。"
  },
  {
    name: "Mos Def",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Mos_Def",
    topic: "Mos Def topic: Brooklyn出身。Black Starやソロ活動で、社会性と詩的な表現を持つMCとして評価されました。"
  },
  {
    name: "Talib Kweli",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Talib_Kweli",
    topic: "Talib Kweli topic: Brooklynを拠点に、Black Starとしても活動。言葉の意味を大切にするリリックで知られます。"
  },
  {
    name: "Guru",
    era: "Boston / New York / 1990s-2000s",
    wikiTitle: "Guru_(rapper)",
    topic: "Guru topic: Gang StarrのMC。落ち着いた声とジャズの香りがある作品で、East Coastの知的な面を広げました。"
  },
  {
    name: "Masta Ace",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Masta_Ace",
    topic: "Masta Ace topic: Brooklyn出身。物語性のあるアルバム作りと、長く評価される職人的なラップで知られます。"
  },
  {
    name: "O.C.",
    era: "Brooklyn / 1990s",
    wikiTitle: "O.C._(rapper)",
    topic: "O.C. topic: D.I.T.C.周辺のMC。1994年の『Word...Life』で、落ち着いた技巧派として存在感を示しました。"
  },
  {
    name: "AZ",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "AZ_(rapper)",
    topic: "AZ topic: Brooklyn出身。Nasの『Illmatic』参加でも知られ、滑らかなフロウと都会的な表現が特徴です。"
  },
  {
    name: "GZA",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "GZA",
    topic: "GZA topic: Wu-Tang Clanの一員。緻密で知的な言葉選びから、グループ内でも特に技巧派として知られます。"
  },
  {
    name: "RZA",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "RZA",
    topic: "RZA topic: Wu-Tang Clanの中心的プロデューサー兼MC。ざらついた音作りで90年代NYに大きな影響を与えました。"
  },
  {
    name: "Inspectah Deck",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Inspectah_Deck",
    topic: "Inspectah Deck topic: Wu-Tang Clanの一員。鋭く整理されたバースで、グループの名曲に強い印象を残しました。"
  },
  {
    name: "Masta Killa",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Masta_Killa",
    topic: "Masta Killa topic: Wu-Tang Clanの一員。寡黙で落ち着いたスタイルが、グループの中で独自の味になっています。"
  },
  {
    name: "Cappadonna",
    era: "Staten Island / 1990s-2000s",
    wikiTitle: "Cappadonna",
    topic: "Cappadonna topic: Wu-Tang周辺で活動し、1997年の『Wu-Tang Forever』期にも強い存在感を見せました。"
  },
  {
    name: "Ol' Dirty Bastard",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Ol'_Dirty_Bastard",
    topic: "Ol' Dirty Bastard topic: Wu-Tang Clanの一員。予測不能な声とキャラクターで、90年代NYに強烈な個性を残しました。"
  },
  {
    name: "Foxy Brown",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Foxy_Brown_(rapper)",
    topic: "Foxy Brown topic: Brooklyn出身。1990年代後半に、力強い声と存在感で女性MCのシーンを広げました。"
  },
  {
    name: "Lil' Kim",
    era: "Brooklyn / 1990s-2000s",
    wikiTitle: "Lil'_Kim",
    topic: "Lil' Kim topic: Brooklyn出身。Junior M.A.F.I.A.から登場し、ファッションとラップの両面で大きな影響を与えました。"
  },
  {
    name: "Canibus",
    era: "New York / 1990s-2000s",
    wikiTitle: "Canibus",
    topic: "Canibus topic: 1990年代後半に注目された技巧派MC。複雑な言葉選びとバトル色の強いスタイルで知られます。"
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
const audioStatus = document.querySelector("#audioStatus");
const drawButton = document.querySelector("#drawButton");
const previewAudio = new Audio();
const previewCache = new Map();
let previewTimer = null;
let remainingRapperIndexes = [];
let lastRapperIndex = null;

function shuffleIndexes(indexes) {
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }

  return indexes;
}

function refillRapperDeck() {
  remainingRapperIndexes = shuffleIndexes(rappers.map((_, index) => index));

  if (lastRapperIndex !== null && remainingRapperIndexes[0] === lastRapperIndex) {
    [remainingRapperIndexes[0], remainingRapperIndexes[1]] = [
      remainingRapperIndexes[1],
      remainingRapperIndexes[0]
    ];
  }
}

function drawNextRapper() {
  if (remainingRapperIndexes.length === 0) {
    refillRapperDeck();
  }

  lastRapperIndex = remainingRapperIndexes.pop();
  return rappers[lastRapperIndex];
}

function stopPreview() {
  if (previewTimer) {
    clearTimeout(previewTimer);
    previewTimer = null;
  }

  previewAudio.pause();
  previewAudio.removeAttribute("src");
  previewAudio.load();
}

function normalizeArtistName(name) {
  return name
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getArtistAliases(rapper) {
  const aliases = [rapper.name, rapper.name.replace(/^The\s+/i, "")];

  if (rapper.name === "Mos Def") {
    aliases.push("Yasiin Bey");
  }

  if (rapper.name === "The Notorious B.I.G.") {
    aliases.push("Notorious B.I.G.", "Biggie Smalls");
  }

  return new Set(aliases.map(normalizeArtistName));
}

function isFeaturedTrack(trackName = "") {
  return /\b(feat\.?|featuring|ft\.?)\b/i.test(trackName);
}

async function getPreview(rapper) {
  if (previewCache.has(rapper.name)) {
    return previewCache.get(rapper.name);
  }

  const searchUrl = new URL("https://itunes.apple.com/search");
  searchUrl.search = new URLSearchParams({
    term: rapper.name,
    country: "US",
    media: "music",
    entity: "song",
    limit: "12"
  }).toString();

  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error("Preview request failed");
  }

  const data = await response.json();
  const artistAliases = getArtistAliases(rapper);
  const mainArtistResults = data.results.filter((item) => {
    const itemArtist = normalizeArtistName(item.artistName || "");
    return item.previewUrl && artistAliases.has(itemArtist);
  });
  const result =
    mainArtistResults.find((item) => !isFeaturedTrack(item.trackName)) ||
    mainArtistResults[0];

  const preview = result
    ? {
        previewUrl: result.previewUrl,
        trackName: result.trackName,
        artistName: result.artistName,
        trackUrl: result.trackViewUrl
      }
    : null;

  previewCache.set(rapper.name, preview);
  return preview;
}

async function playPreview(rapper) {
  stopPreview();
  audioStatus.textContent = "本人メインの公式プレビューを探しています...";

  try {
    const preview = await getPreview(rapper);
    if (!preview) {
      audioStatus.textContent = "本人メインの公式プレビューは見つかりませんでした。";
      return;
    }

    previewAudio.src = preview.previewUrl;
    previewAudio.volume = 0.45;
    await previewAudio.play();
    audioStatus.innerHTML = `数秒だけ再生中: <a href="${preview.trackUrl}" target="_blank" rel="noreferrer">${preview.artistName} - ${preview.trackName}</a>（提供: iTunes）`;

    previewTimer = setTimeout(() => {
      stopPreview();
      audioStatus.innerHTML = `プレビュー停止: <a href="${preview.trackUrl}" target="_blank" rel="noreferrer">${preview.artistName} - ${preview.trackName}</a>（提供: iTunes）`;
    }, 4200);
  } catch {
    audioStatus.textContent = "公式プレビューを再生できませんでした。";
  }
}

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
  const rapper = drawNextRapper();

  rapperName.textContent = rapper.name;
  rapperEra.textContent = rapper.era;
  messageElement.textContent = rapper.topic;
  audioStatus.textContent = "本人メインの公式プレビューを準備しています...";
  drawButton.disabled = true;
  drawButton.textContent = "写真を読み込み中...";
  playPreview(rapper);

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
