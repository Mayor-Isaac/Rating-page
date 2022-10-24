'use strict'
const ratedNum = document.querySelector('.rate-number')
document.querySelector(`.number--1`).addEventListener('click', function(){
    ratedNum.textContent = 1
})
document.querySelector(`.number--2`).addEventListener('click', function(){
    ratedNum.textContent = 2
})
document.querySelector(`.number--3`).addEventListener('click', function(){
    ratedNum.textContent = 3
})
document.querySelector(`.number--4`).addEventListener('click', function(){
    ratedNum.textContent = 4
})
document.querySelector(`.number--5`).addEventListener('click', function(){
    ratedNum.textContent = 5
})
document.querySelector('.submit').addEventListener('click', function(){
    document.querySelector('.rate').classList.add("d-none")
    document.querySelector('.thank-you').classList.remove("d-none")
})