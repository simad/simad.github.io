import './alpine'

function activateDarkMode() {
    document.querySelector('html').classList.add('dark')
    document.querySelector('#sun-toggle').classList.add("opacity-100");
    document.querySelector('#sun-toggle').classList.remove("opacity-0");
    document.querySelector('#moon-toggle').classList.add("opacity-0");
    document.querySelector('#moon-toggle').classList.remove("opacity-100");
}

function activateLightMode() {
    document.querySelector('html').classList.remove('dark')
    document.querySelector('#sun-toggle').classList.remove("opacity-100");
    document.querySelector('#moon-toggle').classList.add("opacity-100");
    document.querySelector('#moon-toggle').classList.remove("opacity-0");
    document.querySelector('#sun-toggle').classList.add("opacity-0");

}

function activateAutomaticMode() {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) activateDarkMode()
    else activateLightMode()
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    activateAutomaticMode()
});

activateAutomaticMode()
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    if( document.querySelector('html').classList.contains("dark")) {
        activateLightMode()
    } else {
        activateDarkMode()
    }
});