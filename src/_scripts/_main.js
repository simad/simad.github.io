import './alpine'

function activateDarkMode() {
    document.querySelector('html').classList.add('dark')
    document.querySelector('#auto-toggle').classList.add("opacity-0");
    document.querySelector('#auto-toggle').classList.remove("opacity-100");
    document.querySelector('#sun-toggle').classList.add("opacity-0");
    document.querySelector('#sun-toggle').classList.remove("opacity-100");
    document.querySelector('#moon-toggle').classList.add("opacity-100");
    document.querySelector('#moon-toggle').classList.remove("opacity-0");
    localStorage.setItem("theme", "dark");
}

function activateAutoMode() {
    const sunToggle = document.querySelector('#sun-toggle');
    const moonToggle = document.querySelector('#moon-toggle');
    const autoToggle = document.querySelector('#auto-toggle');
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) document.querySelector('html').classList.add('dark')
    else document.querySelector('html').classList.remove('dark')
    autoToggle.classList.add('opacity-100');
    autoToggle.classList.remove('opacity-0');
    sunToggle.classList.add("opacity-0");
    sunToggle.classList.remove("opacity-100");
    moonToggle.classList.add("opacity-0");
    moonToggle.classList.remove("opacity-100");
    localStorage.removeItem("theme");
}

function activateLightMode() {
    document.querySelector('html').classList.remove('dark')
    document.querySelector('#auto-toggle').classList.add("opacity-0");
    document.querySelector('#auto-toggle').classList.remove("opacity-100");
    document.querySelector('#sun-toggle').classList.add("opacity-100");
    document.querySelector('#sun-toggle').classList.remove("opacity-0");
    document.querySelector('#moon-toggle').classList.add("opacity-0");
    document.querySelector('#moon-toggle').classList.remove("opacity-100");
    localStorage.setItem("theme", "light");
}

function checkUserPreferences() {
    const hasChosen = localStorage.getItem("theme");
    if (hasChosen) {
        if (hasChosen === "dark") activateDarkMode()
        else activateLightMode()
        return
    }
    activateAutoMode()
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    checkUserPreferences()
});

checkUserPreferences()

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    const hasChosen = localStorage.getItem("theme");
    if (hasChosen === "dark") activateLightMode();
    else if (hasChosen === "light") activateAutoMode();
    else activateDarkMode()
});