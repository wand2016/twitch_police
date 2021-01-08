window.addEventListener('load', () => {
  document.querySelector('textarea[data-test-selector="chat-input"]')
    .addEventListener('input', (e) => {
      e.target.value = e.target.value
        .replaceAll(/レギュレーション/g,'カテゴリ')
        .replaceAll(/レギュ/g,'カテゴリ')
        .replaceAll(/コメント/g,'チャット')
    }
  );
});
