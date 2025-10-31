chrome.alarms.create("dailySentence", { periodInMinutes: 1440 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailySentence") {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const s = sentences[randomIndex];
    chrome.storage.local.set({ dailySentence: s });
  }
});
