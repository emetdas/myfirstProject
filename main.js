let gallery_manue = document.querySelector(".gallery-link-manue");
let gallery_link = document.querySelectorAll(".gallery-link");
let mobile_icon = document.querySelector(".mobile-icon");
let gallery_img = document.querySelectorAll(".gallery-img");
// mobile-manue
mobile_icon.addEventListener("click", () => {
  mobile_icon.classList.toggle("active");
});
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
  let filterName = clicked.getAttribute("data-gallery");
  gallery_img.forEach((img) => {
    let filterImages = img.getAttribute("data-gallery");
    if (filterImages == filterName || filterName == "all") {
      img.classList.remove("hide");
      img.classList.add("show");
    } else {
      img.classList.add("hide");
      img.classList.remove("show");
    }
  });
});
// active gallery manue
