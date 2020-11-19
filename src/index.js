document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.target.classList.toggle("img-circle");
  });
});
