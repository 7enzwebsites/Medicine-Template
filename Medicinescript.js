 // navbar script

  function toggleMenu() {
    var navbar = document.getElementById("mylinks");
    navbar.classList.toggle("show");

    var menuIcon = document.querySelector(".menu-icon");
    var closeIcon = document.querySelector(".close-icon");

    // Toggle visibility of menu and close icons
    if (navbar.classList.contains("show")) {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }
  
  // second Section Animation script

  document.addEventListener("DOMContentLoaded", function() {
    var triggerPoints = document.querySelectorAll('.trigger-point');
    var animatedTexts = document.querySelectorAll('.animated-text');

    function checkScroll() {
        triggerPoints.forEach(function(triggerPoint, index) {
            var triggerPosition = triggerPoint.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (triggerPosition < windowHeight / 1) {
                animatedTexts[index].classList.add('text-animation-active');
                // Remove the event listener after the animation is triggered
                window.removeEventListener('scroll', checkScroll);
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
});


// Third Section Animation script

document.addEventListener("DOMContentLoaded", function() {
  var triggerPoints = document.querySelectorAll('.trigger-point2');
  var animatedTexts = document.querySelectorAll('.animated-text2');

  function checkScroll() {
      triggerPoints.forEach(function(triggerPoint2, index) {
          var triggerPosition = triggerPoint2.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;

          if (triggerPosition < windowHeight / 1) {
              animatedTexts[index].classList.add('text-animation-active');
              // Remove the event listener after the animation is triggered
              window.removeEventListener('scroll', checkScroll);
          }
      });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});


// forth Section image Animation script

document.addEventListener("DOMContentLoaded", function() {
  var triggerPoints = document.querySelectorAll('.trigger-point3');
  var animatedTexts = document.querySelectorAll('.animated-text3');

  function checkScroll() {
      triggerPoints.forEach(function(triggerPoint3, index) {
          var triggerPosition = triggerPoint3.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;

          if (triggerPosition < windowHeight / 1) {
              animatedTexts[index].classList.add('text-animation-active');
              // Remove the event listener after the animation is triggered
              window.removeEventListener('scroll', checkScroll);
          }
      });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});


// forth Section right image Animation script

document.addEventListener("DOMContentLoaded", function() {
  var triggerPoints = document.querySelectorAll('.trigger-point4');
  var animatedTexts = document.querySelectorAll('.animated-text4');

  function checkScroll() {
      triggerPoints.forEach(function(triggerPoint4, index) {
          var triggerPosition = triggerPoint4.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;

          if (triggerPosition < windowHeight / 1) {
              animatedTexts[index].classList.add('text-animation-active');
              // Remove the event listener after the animation is triggered
              window.removeEventListener('scroll', checkScroll);
          }
      });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});

// Fifth Section left Animation script

document.addEventListener("DOMContentLoaded", function() {
  var triggerPoints = document.querySelectorAll('.trigger-point5');
  var animatedTexts = document.querySelectorAll('.animated-text5');

  function checkScroll() {
      triggerPoints.forEach(function(triggerPoint5, index) {
          var triggerPosition = triggerPoint5.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;

          if (triggerPosition < windowHeight / 1) {
              animatedTexts[index].classList.add('text-animation-active');
              // Remove the event listener after the animation is triggered
              window.removeEventListener('scroll', checkScroll);
          }
      });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});


// Fifth Section left Animation script

document.addEventListener("DOMContentLoaded", function() {
  var triggerPoints = document.querySelectorAll('.trigger-point52');
  var animatedTexts = document.querySelectorAll('.animated-text52');

  function checkScroll() {
      triggerPoints.forEach(function(triggerPoint52, index) {
          var triggerPosition = triggerPoint52.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;

          if (triggerPosition < windowHeight / 1) {
              animatedTexts[index].classList.add('text-animation-active');
              // Remove the event listener after the animation is triggered
              window.removeEventListener('scroll', checkScroll);
          }
      });
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});


