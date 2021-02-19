const texts = document.querySelectorAll(".inner")
const faces = document.querySelectorAll(".face")

faces.forEach(function(face, index) {
    face.addEventListener("click", function() {
        clear()

        this.classList.add("active")

        texts[index].classList.add("active")
        console.log(texts[index])
    })
})

function clear() {
    texts.forEach((text) => text.classList.remove("active"));
    faces.forEach((face) => face.classList.remove("active"));
    console.log("cleared")
}