'use strict';

let amountMenit = document.getElementById("amount1");
let amountDetik = document.getElementById("amount2");
let timerDisplayMenit = document.querySelector(".menit");
let timerDisplayDetik = document.querySelector(".detik");

let inputButton = document.querySelector(".btn");
let stopButton = document.querySelector(".stopButton");
let startButton = document.querySelector(".start");
let opening = document.querySelector(".opening");

let timer; // biar bisa di-stop
let waktu; // total waktu dalam detik

inputButton.addEventListener('click', function () {
    // ambil nilai input
    let hitungMenit = parseInt(amountMenit.value) || 0;
    let hitungDetik = parseInt(amountDetik.value) || 0;

    // hitung total detik
    waktu = hitungMenit * 60 + hitungDetik;

    // clear interval sebelumnya (kalau ada)
    clearInterval(timer);

    // mulai interval setiap 1 detik
    timer = setInterval(function () {
        if (waktu <= 0) {
            clearInterval(timer);
            alert("Boom Shakalaka!");
            return;
        }

        waktu--;

        let displayMenit = Math.floor(waktu / 60);
        let displayDetik = waktu % 60;

        // tampilkan di HTML
        timerDisplayMenit.textContent = displayMenit.toString().padStart(2, '0');
        timerDisplayDetik.textContent = displayDetik.toString().padStart(2, '0');

    }, 1000);
});

stopButton.addEventListener('click', function () {
    clearInterval(timer);
});

startButton.addEventListener('click', function () {
    startButton.classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
    opening.style.display = "none";
});
