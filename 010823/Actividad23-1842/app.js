const card = document.querySelector('.card');
const colors = document.querySelectorAll('.colors div');

let hexCodes = ['#ea25b5', '#0d3f7c', '#cdeae8', '#00214a', '#ff82f4', '#04bbec'];

colors.forEach((item, i) => {
    item.addEventListener('click', () => {
        const root = document.querySelector(':root');

        root.style.setProperty('--product-img', `url(img/${item.className}.png)`);
        root.style.setProperty('--bg-color', hexCodes[i]);
    })
})

card.addEventListener('click', () => {
    card.classList.add('active');
})

window.addEventListener('click', (e) => {
    if(e.target.className == ''){
        card.classList.remove('active');
    }
})