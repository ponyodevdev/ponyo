/**
 * 2023.11.23
 * 소멘텀 메인에 뜨는 배경화면
 * 랜덤으로 나오게 한다. 
 */

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];
const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover";
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.zIndex = "-1"; // Ensure the image is behind other elements

document.body.appendChild(bgImage);