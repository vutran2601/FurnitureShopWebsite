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

/// Handle switch for customer review
const customerReviewSliderButtons = document.querySelectorAll(
    ".customer-reviews > div:nth-child(2) > div:last-child> button"
);
for (let button of customerReviewSliderButtons) {
    button.addEventListener("click", function () {
        // Deselect all other buttons
        customerReviewSliderButtons.forEach(function (otherButton) {
            if (otherButton !== this) {
                otherButton.classList.remove("selected");
            }
        });

        // Select this button
        this.classList.add("selected");
    });
}
const customerReviewSlider = document.querySelector(
    ".customer-reviews > div:nth-child(2)"
);
const review1_Button = document.getElementById("review1");
review1_Button.addEventListener("click", function () {
    customerReviewSlider.style.marginLeft = "1300px";
});
const review2_Button = document.getElementById("review2");
review2_Button.addEventListener("click", function () {
    customerReviewSlider.style.marginLeft = "0px";
});
const review3_Button = document.getElementById("review3");
review3_Button.addEventListener("click", function () {
    customerReviewSlider.style.marginLeft = "-1300px";
});
// END


// Handle bottom review slider
const bottomCustomerReviewContent = document.querySelector(".bottom-customer-review-content > div")
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
rightArrow.addEventListener("click", function () {
    const screenWidth = window.innerWidth
    const currentMarginLeft = parseInt(bottomCustomerReviewContent.style.marginLeft);
    if (currentMarginLeft === (screenWidth > 420 ? -1078 : -539)) return
    bottomCustomerReviewContent.style.marginLeft = (currentMarginLeft - (screenWidth > 420 ? 539 : 297)) + 'px'
})
leftArrow.addEventListener("click", function () {
    const screenWidth = window.innerWidth
    const currentMarginLeft = parseInt(bottomCustomerReviewContent.style.marginLeft);
    if (currentMarginLeft === 0) return
    bottomCustomerReviewContent.style.marginLeft = (currentMarginLeft + (screenWidth > 420 ? 539 : 297)) + 'px'
})
// END
