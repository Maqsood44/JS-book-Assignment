// // TASK 1
const imageContainers = document.getElementsByClassName('image-container');

for (let i = 0; i < imageContainers.length; i++) {
    const imageContainer = imageContainers[i];
    const image = imageContainer.getElementsByClassName('image')[0];
    const modal = imageContainer.getElementsByClassName('modal')[0];
    const modalContent = imageContainer.getElementsByClassName('modal-content')[0];
    const closeBtn = imageContainer.getElementsByClassName('close')[0];

    image.addEventListener('click', function () {
        modal.style.display = 'block';
        modalContent.src = image.src;
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

// //TASK 2
var para = document.getElementById('para')
var fontSize = 10
document.getElementById("zoomin").addEventListener("click", () => {
    fontSize += 10
    para.style.fontSize = `${fontSize}px`
})
document.getElementById("zoomout").addEventListener("click", () => {
    if (fontSize > 15)
        fontSize -= 10
        para.style.fontSize = `${fontSize}px`
})
