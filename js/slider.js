const totalImg = ['./imge/img1.jpg', './imge/img2.jpg', './imge/img3.jpg'];
const imgElements = document.getElementById("img");
let countImg = 0;

// change img with btn
const changeImg = (posImg) => {
    if (posImg === 'next') {
        countImg++;
        if (totalImg.length <= countImg) {
            countImg = 0;
        }
        // console.log(countImg);
        imgElements.src = totalImg[countImg];
    } else {
        countImg--;
        if (0 > countImg) {
            countImg = totalImg.length - 1;
        }
        // console.log(countImg);
        imgElements.src = totalImg[countImg];
    }
}

// change img each 1 sec
const setIntVal = setInterval(function () {
    countImg++;
    if (totalImg.length <= countImg) {
        countImg = 0;
    }
    imgElements.src = totalImg[countImg]
    // console.log(countImg);
}, 3000);