// main.js
function loadHeaderAndFooter() {
    // Load the header
    const headerContainer = document.getElementById("header-container"); //gọi đến id để hiển thị
    const headerRequest = new XMLHttpRequest(); //Yêu cầu HTTP tải file Header
    headerRequest.open("GET", "Base/Header.html", true); // sử dụng Get để hiển thị file Header lên giao diện
    headerRequest.onreadystatechange = function () { // đặt sự kiện để theo dõi thay đổi trạng thái của header
        if (headerRequest.readyState === 4 && headerRequest.status === 200) {
            headerContainer.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.send();

    // Load the footer
    const footerContainer = document.getElementById("footer-container");
    const footerRequest = new XMLHttpRequest();
    footerRequest.open("GET", "Base/Footer.html", true);
    footerRequest.onreadystatechange = function () {
        if (footerRequest.readyState === 4 && footerRequest.status === 200) {
            footerContainer.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.send();
}

window.addEventListener("load", loadHeaderAndFooter);






let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 4000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};


// Slider 2
let currentIndex = 0;
const slides = document.querySelectorAll(".image");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % (slides.length - 1);
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length - 1) % (slides.length - 1);
    showSlide(currentIndex);
}

showSlide(currentIndex);

setInterval(nextSlide, 3000); // Tự động chuyển slide sau mỗi 3 giây







