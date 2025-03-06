// Toggle Sidebar for Mobile View
function toggleMenu() {
    var sidebar = document.querySelector('.sidenav');
    sidebar.classList.toggle('active');
}



// Detect Mobile and Adjust Styles
function checkMobile() {
    if (window.innerWidth <= 768) {
        document.querySelector('.sidenav').style.width = "100%";
        document.querySelector('.main-content').style.width = "100%";
        document.querySelector('.main-content').style.marginLeft = "0";
    } else {
        document.querySelector('.sidenav').style.width = "20vw";
        document.querySelector('.main-content').style.width = "80vw";
        document.querySelector('.main-content').style.marginLeft = "20vw";
    }
}

// Run on page load & resize
window.onload = checkMobile;
window.onresize = checkMobile;

