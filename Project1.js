const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        nav.classList.add('active_nav');
    }else {
        nav.classList.remove('active_nav');
    }
})
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert("Copied to clipboard");
}


