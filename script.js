let index = 0
let images = [
    'images/10882284_728925703896536_5552759047096215221_n.jpg',
    'images/11079660_415584115276142_1811429545474709699_n.jpg',
    'images/11082504_972606649470797_2252322768514609044_n.jpg'
]
let duration = 3000

function imageSlider() {
    document.slide.src = images[index];

    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }

    setTimeout("imageSlider()", duration)
}

window.onload = imageSlider