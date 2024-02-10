const windowLogo = document.querySelector(".win-logo");
const windowLogoPopup = document.querySelector(".window-logo-popup");
windowLogo.addEventListener("click",() =>{
    windowLogoPopup.classList.toggle("active");
})


const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

function dateTime() {
    setInterval(() => {
        let time = new Date();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let ampm = "AM";

        if(hour === 0) {
            hour = 12;
        }
        if(hour > 12) {
            hour = hour - 12;
            ampm = "PM";
        }
        else{
            ampm = "AM";
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        timeEl.innerHTML = `${hour}:${minutes} ${ampm}`;
        
        let date = new Date();
        let month =  date.getMonth();
        month = month + 1;
        let day = date.getDate();
        let year = date.getFullYear();
        dateEl.innerHTML = `${month}/${day}/${year}`;
    },1000);
}
dateTime();

const catBoyURL = "https://api.catboys.com/img";

const profileEl = document.querySelector(".profile_picture");

fetch(catBoyURL).then(res => res.json()).then(data => {
    profileEl.src = data.url;
})
.catch(err => {
    console.log(err);
})


const moonBtnEl = document.querySelector(".fa-moon-o");
const taskbarEl = document.getElementById("taskbar");
const boxEl = document.querySelectorAll(".box");

function themeSwitch(){
    windowLogoPopup.classList.toggle("dark");
    taskbarEl.classList.toggle("dark");
    boxEl.forEach(boxes => {
        boxes.classList.toggle("dark");
    })
}
moonBtnEl.addEventListener("click", () => {
    themeSwitch();
});