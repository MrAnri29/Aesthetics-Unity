let mouseCursor = document.querySelector('.cursor')

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

// Nav hovers ;D

const navLinksA = document.querySelectorAll('.nav-links li a');

navLinksA.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
    });
})

const logo = document.querySelector('.logo a')

logo.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
});
logo.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
});

// Page 1 (banner) hovers brah

const h1Txt = document.querySelector('.banner .Give-up')

h1Txt.addEventListener("mouseover", () => {
    mouseCursor.classList.add("txt-grow");
});
h1Txt.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("txt-grow");
});

// Page 2 hovers

const introductions = document.getElementById('introduction')

introductions.addEventListener("mouseover", () => {
    mouseCursor.classList.add("txt-grow");
});
introductions.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("txt-grow");
});

const introductionp = document.getElementById('introduction-p')

introductionp.addEventListener("mouseover", () => {
    mouseCursor.classList.add("txt-grow");
});
introductionp.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("txt-grow");
});

const zyzz = document.querySelector('.zyzz')

zyzz.addEventListener("mouseover", () => {
    mouseCursor.classList.add("zyzz-grow");
});
zyzz.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("zyzz-grow");
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const mobNav = document.querySelector('.mobile-menu-bg');

    burger.addEventListener("mouseover", () => {
        mouseCursor.classList.add("burger-grow");
        burger.classList.add("hovered-link");
    });
    burger.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("burger-grow");
        burger.classList.remove("hovered-link");
    });

    burger.addEventListener('click', () => {
        //Toggle Nav
        // nav.classList.toggle('nav-active');
        mobNav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

navSlide();

//Typewriter animation
var i = 0;
var txt = "NEVER";
var speed = 750;

function type() {
    document.querySelector('.never').innerHTML += txt.charAt(i++);
    i + 0.1;
    setTimeout(type, speed);
}

type();