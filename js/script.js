// Select all span elements inside the categories section
const spans = document.querySelectorAll(".categories span");
// console.log(spans);

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".popup .close");

// Add click event to each span
spans.forEach((span) => {
  span.addEventListener("click", function () {
    // Show the popup & img & close tab
    popup.style.display = "block";
    closeBtn.style.display = "block";
    popupImg.style.display = "block";
  });
});

// When the user clicks on the close button, hide the popup
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

//Hide the popup if the user clicks outside the image
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
