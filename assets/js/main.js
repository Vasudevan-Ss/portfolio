// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
// Get the image element
const image = document.getElementById('home_img');

// Add click event listener
image.addEventListener('click', function() {
    // Clone the image
    const zoomedImage = image.cloneNode(true);
    zoomedImage.id = 'zoomed_img'; // Set a unique id for the zoomed image
    zoomedImage.classList.remove('home_img'); // Remove the home_img class to avoid hover effect on zoomed image
    zoomedImage.style.width = '400px'; // Set the zoomed image size
    zoomedImage.style.height = 'auto';
    zoomedImage.style.cursor = 'auto'; // Change cursor style
    zoomedImage.style.opacity = '1'; // Reset opacity
    zoomedImage.style.transition = 'none'; // Remove transition effect

    // Append the zoomed image to the zoomedImage container
    const zoomedImageContainer = document.getElementById('zoomedImage');
    zoomedImageContainer.innerHTML = ''; // Clear previous zoomed image
    zoomedImageContainer.appendChild(zoomedImage);

    // Show the zoomed image container
    zoomedImageContainer.style.display = 'block';
});

// Close the zoomed image on click outside
document.addEventListener('click', function(event) {
    const zoomedImageContainer = document.getElementById('zoomedImage');
    const zoomedImage = document.getElementById('zoomed_img');
    if (event.target !== zoomedImage && !zoomedImage.contains(event.target)) {
        zoomedImageContainer.style.display = 'none';
    }
});
