'use strict';

/* Map */

var container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스

var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(35.82626220490655, 128.81856295258535), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var imageSrc = "./images/marker_red.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(64, 54), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 54)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(35.82626220490655, 128.81856295258535); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="\thttps://map.kakao.com/link/map/90820395" target="_blank">' +
    '    <span class="title">태봉정밀</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다
var position = new kakao.maps.LatLng(35.82626220490655, 128.81856295258535);

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1
});


/* Slider */
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");

function slide() {
    const currnetSlide = document.querySelector(`.${SHOWING_CLASS}`);

    if (currnetSlide){
        currnetSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currnetSlide.nextElementSibling;
        if( nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

slide()
setInterval(slide, 3000);

/* Mail */

const name = document.querySelector(".contact__email__name"),
    message = document.querySelector(".contact__email__message"),
    send = document.querySelector(".contact__email__send");

function sendEmail(event){
    event.preventDefault();
    window.open(`mailto:myf8335@naver.com?subject=${ "From Web: "+ name.value}&body=${message.value}`);
}

send.addEventListener("click", sendEmail);


/* AutoScroll */

const nav = document.querySelector('#nav'),
    navMenu = document.querySelector('.nav__menu');

function handleMenu(event){
    event.preventDefault();
    const link = event.target.dataset.link;
    if(link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

nav.addEventListener("click", handleMenu);


// Show Arrow up Button when scrolling down

const intro = document.querySelector('#intro');
const introHeight = intro.getBoundingClientRect().height;
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > introHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener("click", () => {
    intro.scrollIntoView({behavior: "smooth"});
});

// navbar toggle button for small screen

const navBtn = document.querySelector('.nav__toggle-btn');
navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});