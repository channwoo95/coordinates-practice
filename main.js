const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  coordinates.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.innerHTML = `x: ${x}, y: ${y}`;
});
