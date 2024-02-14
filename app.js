function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("main-content").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-300px";
  document.getElementById("main-content").style.marginLeft = "0";
}
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("active");
}
// modal
function openModal() {
  document.getElementById("modal-container").style.display = "block";
  document.getElementById("modal-container").style.height = "100%";
}

function closeModal() {
  document.getElementById("modal-container").style.height = "0";
  setTimeout(() => {
    document.getElementById("modal-container").style.display = "none";
  }, 300);
}

const openlink = document.querySelector(
  " #sidebar .custom-dropdown .custom-dropdown-content "
);
function open() {
  openlink.style.display = "block";
}
// less more
const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    toggleBtn.textContent = "Read More";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    toggleBtn.textContent = "hide all";
  }
});

// Show the "Read More" button only if the content exceeds the maximum height
if (content.scrollHeight > content.clientHeight) {
  toggleBtn.style.display = "block";
}

// calendar
const calendar1 = document.getElementById("calendar1");
const calendar2 = document.getElementById("calendar2");
let currentMonth = new Date().getMonth();

function renderCalendar(calendar, month) {
  const daysInMonth = new Date(
    new Date().getFullYear(),
    month + 1,
    0
  ).getDate();
  const firstDay = new Date(new Date().getFullYear(), month, 1).getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  calendar.innerHTML = `
        <div class="header">${monthNames[month]}</div>
        <div class="days">
          <div class="day">Sun</div>
          <div class="day">Mon</div>
          <div class="day">Tue</div>
          <div class="day">Wed</div>
          <div class="day">Thu</div>
          <div class="day">Fri</div>
          <div class="day">Sat</div>
          ${Array.from(
            { length: firstDay },
            (_, index) => `<div class="day"></div>`
          ).join("")}
          ${Array.from(
            { length: daysInMonth },
            (_, index) => `<div class="day">${index + 1}</div>`
          ).join("")}
        </div>
      `;
}

function updateCalendars() {
  renderCalendar(calendar1, currentMonth);
  renderCalendar(calendar2, currentMonth + 1);
}

function nextMonth() {
  currentMonth = (currentMonth + 1) % 12;
  updateCalendars();
}

function prevMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12;
  updateCalendars();
}

// Initial rendering
updateCalendars();
// hero-modal
var images = [
  "./images/s1.jpeg",
  "./images/s2.jpeg",
  "./images/s3.jpeg",
  "./images/s4.jpeg",
  "./images/s5.jpeg",
  "./images/s6.jpeg",
  // Add more image sources as needed
];

// Function to open the gallery modal
document
  .getElementById("openGalleryBtn")
  .addEventListener("click", function () {
    openGallery();
  });

// Function to close the gallery modal
document.getElementById("closeGallery").addEventListener("click", function () {
  closeGallery();
});

// Function to display the next image
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide();
}

// Function to display the previous image
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide();
}

// Function to open the gallery modal and show the first image
function openGallery() {
  currentIndex = 0;
  showSlide();
  document.getElementById("galleryModal").style.display = "block";
}

// Function to close the gallery modal
function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

// Function to display the current image and update the image number
function showSlide() {
  var slider = document.getElementById("imageSlider");
  var imageNumber = document.getElementById("imageNumber");
  var thumbnailContainer = document.getElementById("thumbnailContainer");

  slider.innerHTML = ""; // Clear existing images
  thumbnailContainer.innerHTML = ""; // Clear existing thumbnails

  for (var i = 0; i < images.length; i++) {
    var img = document.createElement("img");
    img.src = images[i];
    img.style.display = i === currentIndex ? "block" : "none";
    slider.appendChild(img);

    // Create thumbnails
    var thumbnail = document.createElement("img");
    thumbnail.src = images[i];
    thumbnail.className = "thumbnail";
    thumbnail.onclick = (function (index) {
      return function () {
        currentIndex = index;
        showSlide();
      };
    })(i);
    thumbnailContainer.appendChild(thumbnail);
  }

  imageNumber.textContent = currentIndex + 1 + " / " + images.length;
}
// header
