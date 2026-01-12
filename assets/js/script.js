let words = document.querySelectorAll(".word");

// Only run word animation if words exist (home page)
if (words.length > 0) {
    words.forEach((word) => {
        let letters = word.innerText.split("");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter"; 
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, i * 80);
        });

        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    setInterval(changeText, 3000);
}


// Mobile Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

if (menuIcon && navlist) {
    menuIcon.addEventListener('click', () => {
        navlist.classList.toggle('active');
        menuIcon.classList.toggle('bi-x');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.navlist li a').forEach(link => {
        link.addEventListener('click', () => {
            navlist.classList.remove('active');
            menuIcon.classList.remove('bi-x');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target) && !navlist.contains(e.target)) {
            navlist.classList.remove('active');
            menuIcon.classList.remove('bi-x');
        }
    });
}

//circle skill ///////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add("marked");
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset by header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle hash in URL on page load (for links from other pages)
    if (window.location.hash) {
        setTimeout(function() {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});