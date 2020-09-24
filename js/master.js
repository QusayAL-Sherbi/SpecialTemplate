// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null){

  // Set Color On Root
  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors Of List Items
  document.querySelectorAll('.colors-list li').forEach(element => {

    element.classList.remove('active');

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors){

      // Add Active Class
      element.classList.add("active");

    }

  });

}

// Random Background Option
let backgroundOption = true,

    // Variable To Control The Background Interval
    backgroundInterval,

    // Check If There's Local Storage Random Background Item
    backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {


  if (backgroundLocalItem === 'true'){

    backgroundOption = true;

  } else {

    backgroundOption = false;

  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true'){

      document.querySelector(".random-backgrounds .yes").classList.add('active');

  } else {

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings").onclick = function (){

  // Toggle Class Fa-spin For Rotation on Self
  document.querySelector(".gear-icon").classList.toggle("fa-spin");

  // Toggle Class Show Main Settings Box
  document.querySelector(".settings-box").classList.toggle('show');

};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
  
  // Click On Every List Item
  li.addEventListener("click", (e) => {
    
    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem('color_option', e.target.dataset.color);

    activeHandle(e);

  });

});

// Switch Random Background Option
const randomBackgEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackgEl.forEach(span => {
  
  // Click On Every Span
  span.addEventListener("click", (e) => {

    // Remove Active Class From All Spans
    activeHandle(e);

    if (e.target.dataset.background === 'ON'){

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);

    } else {

      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);

    }

  });

});

// Select 'Landing Page' Element
let landingPage = document.querySelector(".landing-page"),

    // Get Array Images
    imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.png"];

// Function To Randomize Images
function randomizeImgs(){

  if(backgroundOption === true){

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url
      landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
    
    }, 2000);

  }

}

// Show/Hide Settings Box
let settingsBox = document.querySelector('.gear-box-icon');


randomizeImgs();


// Select Skills Selectors
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop,

      // Skills Outer Height
      skillsOuterHeight = ourSkills.offsetHeight,

      // Window Height
      windowHeight = this.outerHeight;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >= skillsOffsetTop) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }

};


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

      // Ceate Overlay Element
      let overlay = document.createElement("div");

      // Add Class On Overlay Element
      overlay.className = 'popup-overlay';

      // Append Overlay To Body
      document.body.appendChild(overlay);

      // Create Popup Box
      let popupBox = document.createElement("div");

      // Add Class On Popup Box
      popupBox.className = 'popup-box';

      if (img.alt !== null){

        // Create Heading
        let imgHeading = document.createElement("h3");
      
        // Create Text For Heading
        let imgText = document.createTextNode(img.alt);
      
        // Append The Text On The Heading
        imgHeading.appendChild(imgText);
      
        // Append Heading On Popup Box
        popupBox.appendChild(imgHeading);
      
      }

      // Create The Popup Image
      let popupImage = document.createElement("img");

      // Set Image Source
      popupImage.src = img.src;

      // Add Popup Image To Popup Box
      popupBox.appendChild(popupImage);

      // Append Popup Box On Body
      document.body.appendChild(popupBox);

      // Create Close Window Button
      let closeButton = document.createElement("span");

      // Create Close Window Button Text
      let closeButtonText = document.createTextNode("X");

      // Append Close Window Button Text On The Button
      closeButton.appendChild(closeButtonText);

      // Add Class On Close Button
      closeButton.className = 'close-button';

      // Append Close Button On Popup Box
      popupBox.appendChild(closeButton);

    });

});


// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSections(elements) {

  elements.forEach(element => {

    element.addEventListener("click", (e) => {

      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior: 'smooth'

      });

    });

  });

};

scrollToSections(allBullets);

scrollToSections(allLinks);


// Handle Active State
function activeHandle(ev) {

  // Remove Active Class From All Childerns
  ev.target.parentElement.querySelectorAll('.active').forEach(element => {

    element.classList.remove('active');

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block') {

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

  }

}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';

      localStorage.setItem("bullets_option", 'block');

    } else {

      bulletsContainer.style.display = 'none';

      localStorage.setItem("bullets_option", 'none');

    }

    activeHandle(e);

  });

});


// Reset Option
document.querySelector(".reset-options").onclick = function() {

  localStorage.removeItem("background_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("bullets_option");

  // Reload Page
  window.location.reload();

}


// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

// Click AnyWhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});


// Stop Propagation On Menu
tLinks.onclick = function (e) {

  e.stopPropagation();

};