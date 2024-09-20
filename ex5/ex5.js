const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  console.log("button event", event);
  const body = document.querySelector("body");
  body.classList.toggle("theme");
});
