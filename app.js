console.log("hello world");

const clickMe = document.getElementById("click-me");
const image = document.getElementById("benny-pic");

clickMe.addEventListener("click", () => {
  // alert("BENNY IS CUTE!!");
  image.classList.toggle("rotate");
});

const sayHello = () => {
  console.log("i am a function that says hello");
  console.log("HELLO!");
  console.log("BONJOUR!");
  console.log("HOLA!");
};

sayHello();
sayHello();
