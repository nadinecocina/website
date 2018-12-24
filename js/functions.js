// test

$(document).ready(function(){

  // This sets all the background images of the projects
  // For each project you need a .jpg-file in the images folder that is named: "project" + the number (see examples)
  var projects = $('.projects section');
  for (var i = 1; i <= projects.length; i++) {
    var currentSection = $('.projects section:nth-child(' + i + ')');
    // If the section does not have the class no-image, do shit.
    if(currentSection.hasClass("no-image") == false) {
      currentSection.css('background-image', 'url("images/project' + i + '.jpg")');
    }
    if(currentSection.hasClass("project1 about") == true) {   //help...

    }
  }

  // This sets the height and color of the gradient bar
  var g = "linear-gradient(to bottom,";
  for (var i = 1; i <= projects.length; i++) {
    g += $('.projects section:nth-child(' + i + ') p.project-color').text();
    g += (projects.length > i) ? ',' : ')';
  }
  $('.gradient-bar').css('background', g);
  $('.gradient-bar').css('height', projects.length * 100 + 'vh');


  // This sets the height and color of the gradient bar SECOND
  var g = "linear-gradient(to bottom,";
  for (var i = 1; i <= projects.length; i++) {
    g += $('.projects section:nth-child(' + i + ') p.project-color').text();
    g += (projects.length > i) ? ',' : ')';
  }
  $('.gradient-bar-second').css('background', g);
  $('.gradient-bar-second').css('height', projects.length * 100 + 'vh');

});

// Fluid gradient on title element (left to right gradient, changes depending on mouse x position)
// $(document).on('mousemove', function(event) {
//   $('.title').css('background-position', event.pageX + 'px');
// })

// Changes text depending on scroll height of the title element
// Lots of math, just trust me on this one
$(window).scroll(function(){
  var i = Math.ceil($('.title').offset().top / $( window ).height());
  $('.title').text($('section.project' + i + ' p.project-name').text());
});

// Fix scoll height of about page (so it can't scroll down more than 2 full slides)
$('.link-about').click(function(){
  var about = $('.about section');
  $('.projects').css('height', about.length * 100 + 'vh');
  $('.gradient-bar').css('height', about.length * 100 + 'vh');
  $('.gradient-bar-second').css('height', about.length * 100 + 'vh');
});

$('.link-projects').click(function(){
  var projects = $('.projects section');
  $('.projects').css('height', projects.length * 100 + 'vh');
  $('.gradient-bar').css('height', projects.length * 100 + 'vh');
  $('.gradient-bar-second').css('height', projects.length * 100 + 'vh');
});

// This controls the transition from work to about
$('.link-about').click(function(){
  $('.projects').css('left', '-100vw');
  $('.about').css('left', '0');
  $('.title').css('left', '11rem');  // it was '-50vw' > name disappeared completely
  $('.link-about').css('right', '-100px');
  $('.link-projects').css('left', '20px');
  $('.gradient-bar').css('left', '-20px');  // trying to make a gradient transition - it worked, bitch!
  $('.gradient-bar-second').css('right', '0px');  // trying to get gradient second to the right side
});

// This controls the transition from about to work
$('.link-projects').click(function(){
  $('.projects').css('left', '0');
  $('.about').css('left', '100vw');
  $('.title').css('left', '50vw');
  $('.link-projects').css('left', '-100px');
  $('.link-about').css('right', '20px');
  $('.gradient-bar').css('left', '0px'); //gradient bar appears again in works
  $('.gradient-bar-second').css('right', '-20px');
});
