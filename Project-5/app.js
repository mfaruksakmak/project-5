const loadingText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let int = setInterval(bluring, 30)

function bluring() {
    load++

    if (load > 99) {
        // clearInterval means stop the process.
        clearInterval(int);
    }
    // console.log(load)

    loadingText.innerText = `${load}%`
    // 0, 100 (first part) part is the percentage value, that is, the style part. Values ​​1, 0 (second part) determine the opacity.
    loadingText.style.opacity = scale(load, 0 , 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


// from stackoverflow 
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
