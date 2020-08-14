const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

addEventListener("load", () => {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    target.style.transform = `translate(${x - targetHalfWidth}px, 
      ${y - targetHalfHeight}px)`;

    coordinates.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
    coordinates.innerHTML = `x: ${x}, y: ${y}`;
  });
});
