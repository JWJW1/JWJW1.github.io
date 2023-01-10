const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
// JS에 html element 생성 
bgImage.src=`img/${chosenImage}`;
//body에 html 추가 prepend는 가장 위에 오게
document.body.appendChild(bgImage);