let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const now = new Date();
const moroccoTime = now.toLocaleString("en-US", { timeZone: "Africa/Casablanca" });
const [date, time] = moroccoTime.split(", ");
timeText.textContent = `${time} GMT+1`;

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;