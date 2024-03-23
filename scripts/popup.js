document.getElementById('theme').addEventListener('change', (event) => {

    chrome.runtime.sendMessage({theme: event.target.value});
});
document.addEventListener('DOMContentLoaded', function() {
    var themeSelect = document.getElementById('theme');


    var selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        themeSelect.value = selectedTheme;
    }
    themeSelect.addEventListener('change', function() {
        localStorage.setItem('selectedTheme', this.value);

    });
});