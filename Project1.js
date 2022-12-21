var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})


// const nav = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 50) {
//         nav.classList.add('active_nav');
//     } else {
//         nav.classList.remove('active_nav');
//     }
// })

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copied to clipboard");
}
function payment(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    // document.execCommand("copy");
    $temp.remove();
    alert("Payment facility will be added soon");
}


