
function applyTheme(theme) {

    let oldTheme = document.getElementById('custom-theme');
    if (oldTheme) oldTheme.remove();

    let link = document.createElement('link');
    link.id = 'custom-theme';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.runtime.getURL(`themes/${theme}.css`);
    document.head.appendChild(link);
}


chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.theme) {
        applyTheme(changes.theme.newValue);
    }
});

chrome.storage.local.get('theme', (data) => {
    if (data.theme) applyTheme(data.theme);
});