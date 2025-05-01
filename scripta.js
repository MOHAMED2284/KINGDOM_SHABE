document.addEventListener("scroll", function() {
    let containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        let position = container.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            container.classList.add("show");
            container.querySelector(".text").classList.add("show");
            container.querySelector(".image").classList.add("show");
        } else {
            container.classList.remove("show");
            container.querySelector(".text").classList.remove("show");
            container.querySelector(".image").classList.remove("show");
        }
    });
});
