


const slides = [
    { image: "img/image.png" },
    { image: "img/image2.jpg" },
    { image: "img/image3.jpg" }
];

function loadSlide(index) {
    document.getElementById('slide-image').src = slides[index].image;
}
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector(".pop-up");
    var contactButton = document.getElementById("contactbutton");

    contactButton.addEventListener("click", function() {
        popup.style.display = "flex";
    });

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

// function loadSlide(index) {
//     var slides = [
//         "img/image1.png",
//         "img/image2.png",
//         "img/image3.png"
//     ];

//     var slideImage = document.getElementById("slide-image");
//     slideImage.src = slides[index];
// }
document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url'); // Get the URL from data-url attribute
            window.open(url, '_blank'); // Open the URL in a new tab
        });
    });
