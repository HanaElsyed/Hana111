let p = document.querySelectorAll(".pp");
let btn = document.querySelector('button');

p.forEach((el) => {
    el.addEventListener("click", (e) => {
        // console.log(el)
    
        var ele = el.textContent;
        +el.textContent++


    })


})

let read1 = document.querySelector(".f");
let btn1 = document.querySelector("#f");

let read2 = document.querySelector(".dd");
let btn2 = document.querySelector("#d");

let read3 = document.querySelector(".u");
let btn3 = document.querySelector("#u");


let read4 = document.querySelector(".k");
let btn4 = document.querySelector("#kk");


let read5 = document.querySelector(".molk");
let btn5 = document.querySelector("#molk");

btn1.addEventListener("click", (e) => {
    e.preventDefault()
    read1.style.transform = `translateX(0)`
    console.log(22)
})

btn2.addEventListener("click", (e) => {
    e.preventDefault()
    read2.style.transform = `translateX(0)`
    console.log(22)
})
btn3.addEventListener("click", (e) => {
    e.preventDefault()
    read3.style.transform = `translateX(0)`
    console.log(22)
})

btn4.addEventListener("click", (e) => {
    e.preventDefault()
    read4.style.transform = `translateX(0)`
})

btn5.addEventListener("click", (e) => {
    e.preventDefault()
    read5.style.transform = `translateX(0)`
    console.log(22)
})

let close = document.querySelectorAll(".close");
console.log(close)

close.forEach((close) => {
    close.addEventListener("click", (e) => {
        close.parentElement.style.transform = "translateX(200%)";
    })
})

let zero = document.querySelector(".zero");
zero.addEventListener("click", (e) => {
    window.location.reload()
})

let tracks = document.querySelectorAll('audio');
tracks.forEach((track) => {
    track.addEventListener("play", (e) => {
        tracks.forEach((track) => {
            if(track !== e.target ) {
                track.pause();
            }
        })
    })
})

let tracks1 = document.querySelectorAll('video');
tracks1.forEach((track) => {
    track.addEventListener("play", (e) => {
        tracks1.forEach((track) => {
            if(track !== e.target ) {
                track.pause();
            }
        })
    })
})