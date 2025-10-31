const englishEl = document.getElementById("english");
const chineseEl = document.getElementById("chinese");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

function showRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const s = sentences[randomIndex];
  englishEl.textContent = s.en;
  chineseEl.textContent = s.cn;
  chrome.storage.local.set({ dailySentence: s });
}

function speakSentence(text) {
  chrome.tts.speak(text, { rate: 0.9, lang: "en-US" });
}

playBtn.addEventListener("click", () => {
  speakSentence(englishEl.textContent);
});

nextBtn.addEventListener("click", showRandomSentence);

// 初始化显示当天句子
chrome.storage.local.get("dailySentence", (data) => {
  if (data.dailySentence) {
    englishEl.textContent = data.dailySentence.en;
    chineseEl.textContent = data.dailySentence.cn;
  } else {
    showRandomSentence();
  }
});
