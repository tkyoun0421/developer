const images = [
    "antelope-canyon-1128815_1920.jpg",
    "big-ben-2393098_1920.jpg",
    "cathedral-7237718_1920.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./css/images/${chosenImage}`;

document.body.appendChild(bgImage);