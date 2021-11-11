/*imageWidth = 850;
imageHeight = 478;
imageProportion = imageHeight/imageWidth;

function resizeJumbo() {
    $("#textover").css({ height: $(window).width() * imageProportion });
}

$(window).on("resize", function() {
    resizeJumbo();
});

$(document).ready(function() {
    resizeJumbo();
});*/
(function () {

  var win = $(window);

  win.resize(function () {

    var win_w = win.width(),
      win_h = win.height(),
      $bg = $("#bg");

    // Load narrowest background image based on 
    // viewport width, but never load anything narrower 
    // that what's already loaded if anything.
    var available = [
      1024, 1280, 1366,
      1400, 1680, 1920,
      2560, 3840, 4860
    ];

    var current = $bg.attr('src').match(/([0-9]+)/) ? RegExp.$1 : null;

    if (!current || ((current < win_w) && (current < available[available.length - 1]))) {

      var chosen = available[available.length - 1];

      for (var i = 0; i < available.length; i++) {
        if (available[i] >= win_w) {
          chosen = available[i];
          break;
        }
      }

      // Set the new image
      $bg.attr('src', '/img/bg/' + chosen + '.jpg');

      // for testing...
      // console.log('Chosen background: ' + chosen);

    }

    // Determine whether width or height should be 100%
    if ((win_w / win_h) < ($bg.width() / $bg.height())) {
      $bg.css({ height: '100%', width: 'auto' });
    } else {
      $bg.css({ width: '100%', height: 'auto' });
    }

  }).resize();

})(jQuery);


window.onscroll = function () { myFunction() };

// Get the navbar
var nav = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
$(".navbar a").on("click", function () {
  $(".navbar").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});


function toggleText() {
  var dots = document.getElementById("dots");
  var showMoreText = document.getElementById("more");
  var buttonText = document.getElementById("textButton");

  if (dots.style.display === "none") {
    showMoreText.style.display = "none";
    dots.style.display = "inline";
    buttonText.innerHTML = "Read more";
  } else {
    showMoreText.style.display = "inline";
    dots.style.display = "none";
    buttonText.innerHTML = "Read less";
  }
}




