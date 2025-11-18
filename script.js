const textarea = document.getElementById('diary');
const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');
const status = document.getElementById('status');
const broBtn = document.getElementById('bro-mon-btn');

// загрузка сохранённого текста
window.addEventListener('load', () => {
    const saved = localStorage.getItem('pinkDiary');
    if (saved) {
        textarea.value = saved;
        showStatus('♡ твой секретик загружен ~');
    }
});

saveBtn.addEventListener('click', () => {
    localStorage.setItem('pinkDiary', textarea.value);
    showStatus('♡ сохранено в сердечко! ･ﾟ✧');
});

clearBtn.addEventListener('click', () => {
    if (confirm('точно очистить дневничок? (´；ω；`)')) {
        textarea.value = '';
        localStorage.removeItem('pinkDiary');
        showStatus('очищено… но я всё равно тебя люблю ♡');
    }
});

broBtn.addEventListener('click', () => {
    window.open('https://chromewebstore.google.com/detail/bro-mon-%F0%9F%90%BE-browser-monste/oedkbkpngfmjfbmmmijkogojlcddmcgf', '_blank');
    showStatus('иди лови монстриков по всему интернету! ♡');
});

function showStatus(text) {
    status.textContent = text;
    status.style.opacity = '1';
    setTimeout(() => status.style.opacity = '0', 3000);
}

console.log("ЧЁ ЧИТАЕШЬ?");
