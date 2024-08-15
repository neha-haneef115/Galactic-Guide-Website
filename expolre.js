document.addEventListener('DOMContentLoaded', () => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let listItemsDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');

    nextDom.onclick = function() {
        showSlider('next');
    };

    prevDom.onclick = function() {
        showSlider('prev');
    };

    let timeRunning = 3000;
    let runTimeOut;

    function showSlider(type) {
        let itemSlider = document.querySelectorAll('.carousel .list .items');
        let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .items");

        if (type === 'next') {
            listItemsDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');
        } else {
            let positionLastItem = itemSlider.length - 1;
            listItemsDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    }
});
