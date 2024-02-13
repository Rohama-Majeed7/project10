function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("main-content").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-300px";
  document.getElementById("main-content").style.marginLeft = "0";
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
