document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentActive = 0;

    function updateProgress() {
        circles.forEach((circle, index) => {
            if (index <= currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });

        if (currentActive === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (currentActive === circles.length - 1) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    nextButton.addEventListener('click', () => {
        currentActive++;
        if (currentActive > circles.length - 1) {
            currentActive = circles.length - 1;
        }
        updateProgress();
    });

    prevButton.addEventListener('click', () => {
        currentActive--;
        if (currentActive < 0) {
            currentActive = 0;
        }
        updateProgress();
    });

    updateProgress();
});