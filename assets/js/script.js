// Handle scale branch logo
const amazonLogo = document.getElementById("amazon-logo");
amazonLogo.addEventListener("mouseover", function () {
    this.style.removeProperty("filter");
    this.style.removeProperty("opacity");
});
amazonLogo.addEventListener("mouseout", function () {
    this.style.filter = "brightness(75%) saturate(0)";
    this.style.opacity = "0.5";
});

const googleLogo = document.getElementById("google-logo");
googleLogo.addEventListener("mouseover", function () {
    this.style.filter = "";
    this.style.opacity = "";
});
googleLogo.addEventListener("mouseout", function () {
    this.style.filter = "brightness(75%) saturate(0)";
    this.style.opacity = "0.5";
});

const cocacolaLogo = document.getElementById("cocacola-logo");
cocacolaLogo.addEventListener("mouseover", function () {
    this.style.filter = "";
    this.style.opacity = "";
});
cocacolaLogo.addEventListener("mouseout", function () {
    this.style.filter = "brightness(75%) saturate(0)";
    this.style.opacity = "0.5";
});

const airbnbLogo = document.getElementById("airbnb-logo");
airbnbLogo.addEventListener("mouseover", function () {
    this.style.filter = "";
    this.style.opacity = "";
});
airbnbLogo.addEventListener("mouseout", function () {
    this.style.filter = "brightness(75%) saturate(0)";
    this.style.opacity = "0.5";
});

const samsungLogo = document.getElementById("samsung-logo");
samsungLogo.addEventListener("mouseover", function () {
    this.style.filter = "";
    this.style.opacity = "";
});
samsungLogo.addEventListener("mouseout", function () {
    this.style.filter = "brightness(75%) saturate(0)";
    this.style.opacity = "0.5";
});
// END

// Handle click furniture gallery button
const furnitureGalleryButtons = document.querySelectorAll(
    ".furniture-gallery-button > button"
);
for (let button of furnitureGalleryButtons) {
    button.addEventListener("click", function () {
        // Deselect all other buttons
        furnitureGalleryButtons.forEach(function (otherButton) {
            if (otherButton !== this) {
                otherButton.classList.remove("selected");
            }
        });

        // Select this button
        this.classList.add("selected");
    });
}
// END

const firstBottomCustomerReviewContent = document.querySelector(".bottom-customer-review-item:first-child")
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
leftArrow.addEventListener("click", function () {
    const currentMarginLeft = firstBottomCustomerReviewContent.style.marginLeft;
   console.log(currentMarginLeft);
})
