document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const animatedDiv = document.getElementById('animatedDiv');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            animatedDiv.classList.add('hidden');
        } else {
            // Scrolling up
            animatedDiv.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});