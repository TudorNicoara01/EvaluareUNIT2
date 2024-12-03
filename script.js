document.getElementById("monitorizare-resurse").addEventListener("dblclick", function () {
    const images = document.querySelectorAll("#slideshow-container img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = "block";
    }
    setInterval(showNextImage, 3000);
});
