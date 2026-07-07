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

// Angry-birds fling: hover knocks a sticker toward mid-page and off the bottom.
// CSS :hover can't drive this (the box leaves the cursor and the animation
// would snap back), so JS sets the flight path and hides it on landing.
const flingArmedAt = performance.now() + 1800; // let the entrance finish; also stops a parked cursor flinging a sticker on load
const stickers = [...document.querySelectorAll('.boxes')];
let fallen = 0;
stickers.forEach(box => {
    box.addEventListener('mouseenter', () => {
        if (box.classList.contains('flung') || performance.now() < flingArmedAt) return;
        const r = box.getBoundingClientRect();
        const dx = window.innerWidth / 2 - (r.left + r.width / 2);
        box.style.setProperty('--dx', `${Math.round(dx)}px`);
        box.style.setProperty('--spin', dx > 0 ? '540deg' : '-540deg');
        box.classList.add('flung');
    });
    box.addEventListener('animationend', e => {
        if (e.animationName !== 'fling-off') return;
        box.style.visibility = 'hidden';
        if (++fallen === stickers.length) {
            const container = box.parentElement;
            container.style.position = 'relative';
            const okThen = document.createElement('p');
            okThen.className = 'ok-then';
            okThen.textContent = 'ok then.';
            container.appendChild(okThen);
        }
    });
});