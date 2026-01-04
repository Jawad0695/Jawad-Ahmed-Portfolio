/* Preloader Animation Logic - Geometric */
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    // The animation is handled purely by CSS (stroke-dashoffset)
    // We just need to wait for it to finish (approx 2.5s) + some hold time

    setTimeout(() => {
        // Fade out wrapper
        if (preloader) {
            preloader.style.opacity = "0";
            preloader.style.pointerEvents = "none";

            setTimeout(() => {
                preloader.remove();
            }, 1000);
        }
    }, 3500); // 2s draw + 0.5s fill + 1s hold
});
