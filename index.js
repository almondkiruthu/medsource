// read-more
function readMore() {
let readLess = document.getElementById("readLess");
let readMore = document.getElementById("readMore");
let moreBtn = document.getElementById("morebtn");
if (readLess.style.display === "none") {
readLess.style.display = "inline";
moreBtn.innerHTML = "Read more";
readMore.style.display = "none";
} else {
readLess.style.display = "none";
moreBtn.innerHTML = "Read less";
readMore.style.display = "inline";
}
}


// Counter-up
const getNumber = (counter) => {
    return parseFloat(counter.dataset.countTo);
};
const getSpeed = (counter) => {
    return parseFloat(counter.dataset.duration);
};

const updateTex = (counter, text) => {
    counter.textContent = text;
};

const animate = (counter, countTo, duration) => {
    let startTime = null;

    let currentTime = Date.now();

    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);

        const currentNum = Math.floor(progress * countTo);

        updateTex(counter, currentNum);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    window.requestAnimationFrame(step);
};

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    const countTo = getNumber(counter);
    const animationDuration = getSpeed(counter);
  animate(counter, countTo, animationDuration);
});

// I DON'T KNOW
$(document).ready(function(){
  $('.btn-start').click( function(){
    $('.step-wrapper').toggleClass('move-line');
  });

});

// read more
$("#conent_hide").hide();
$("#re").click(function(){
x=$("#re").text();

$("#conent_hide").slideToggle( function(){

    if(x == "Read More"){
    $("#re").text("Read Less").css({color:"#004730"});
    }
    else{
    $("#re").text("Read More").css({color:"#004730"});
    }
});
});



function showhide() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("toggle");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// go to the top
$(document).ready(function() {
  $('.go-top').hide(0)

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function() {
    event.preventDefault();

    $('html , body').animate({scrollTop: 0}, 1000);
  });
});


/**********************/
	/*	Client carousel   */
	/**********************/
  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



// FAQs SECTION
const accordionBtns = document.querySelectorAll(".item-header");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});


// gallery SECTION
