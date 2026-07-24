const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

function openImage(imageSrc){

    lightbox.style.display = "flex";

    lightboxImg.src = imageSrc;

}

closeBtn.onclick = function(){

    lightbox.style.display = "none";

}

lightbox.onclick = function(e){

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

}
// Scroll Animation

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
function toggleMenu(){

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}
// Scroll To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
// Premium Loader
window.addEventListener("load", function(){

    setTimeout(function(){

        const loader = document.getElementById("loader");

        if(loader){
            loader.style.opacity = "0";

            setTimeout(function(){
                loader.style.display = "none";
            },1000);
        }

    },3000);

});

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    const btn = document.getElementById("theme-toggle");

    if(document.body.classList.contains("light-mode")){
        btn.innerHTML="☀️";
    }else{
        btn.innerHTML="🌙";
    }

}
/*==============================
      PARTICLES BACKGROUND
==============================*/

tsParticles.load("particles-js", {
    background: {
        color: {
            value: "#0d0d0d"
        }
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 60
        },
        color: {
            value: "#FFD700"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: {
                min: 1,
                max: 4
            }
        },
        move: {
            enable: true,
            speed: 1
        },
        links: {
            enable: true,
            distance: 150,
            color: "#FFD700",
            opacity: 0.25,
            width: 1
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            }
        },
        modes: {
            grab: {
                distance: 180,
                links: {
                    opacity: 0.7
                }
            }
        }
    }
});
/*==================================
      SCROLL PROGRESS BAR
==================================*/

window.addEventListener("scroll", function(){

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});
/*==============================
      BOOKING IMAGE SLIDER
==============================*/

const bookingImages = [

    "images/booking1.jpg",
    "images/booking2.jpg",
    "images/booking3.jpg",
    "images/booking4.jpg"

];

let bookingIndex = 0;

setInterval(function(){

    bookingIndex++;

    if(bookingIndex >= bookingImages.length){

        bookingIndex = 0;

    }

    document.getElementById("booking-slider").src =
    bookingImages[bookingIndex];

},3000);
// EmailJS Initialize
(function () {
    emailjs.init("7hSR3jVuW83ojYCoM"); 
})();


// Booking Form Submit
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

   const btn = document.getElementById("bookBtn");

if (btn) {
    btn.innerHTML = "Sending...";
    btn.disabled = true;
}

    emailjs.sendForm(
        "service_2vykevx",
        "template_uhyfera",
        this
    )
    .then(() => {

        alert("✅ Booking request sent successfully!");

        document.getElementById("bookingForm").reset();

        if (btn) {
    btn.innerHTML = "✨ Book Now";
    btn.disabled = false;
}

    })
     .catch((error) => {

        console.log("EmailJS Error:", error);

        alert(
            "Status: " + error.status +
            "\nText: " + error.text
        );

        btn.innerHTML = "✨ Book Now";
        btn.disabled = false;

    });
console.log("JS Connected");
});