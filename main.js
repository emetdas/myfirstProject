let gallery_manue = document.querySelector(".gallery-link-manue");
let gallery_link = document.querySelectorAll(".gallery-link");
let mobile_icon = document.querySelector(".mobile-icon");
// mobile-manue
mobile_icon.addEventListener("click", () => {
  mobile_icon.classList.toggle("active");
});
// mobile-manue
// mobile-manue
// active gallery manue
gallery_manue.addEventListener("click", (e) => {
  const clicked = e.target.closest(".gallery-link");
  if (!clicked) {
    return;
  }
  gallery_link.forEach((r) => {
    r.classList.remove("active-gallery");
  });
  if (clicked) {
    clicked.classList.add("active-gallery");
  }
});

// active gallery manue
