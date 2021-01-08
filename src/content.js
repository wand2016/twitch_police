console.log('twitch-police loaded');

window.addEventListener('load', () => {
  var working = false;
  console.log('twitch-police ready');
  document.querySelector('textarea[data-test-selector="chat-input"]')
    .addEventListener('input', (e) => {
      if (!working) {
        working = true;
        console.log('twitch-police working');
      }
      e.target.value = e.target.value
        .replaceAll(/レギュレーション/g,'カテゴリ')
        .replaceAll(/レギュ/g,'カテゴリ')
        .replaceAll(/コメント/g,'チャット')
    }
  );
});
