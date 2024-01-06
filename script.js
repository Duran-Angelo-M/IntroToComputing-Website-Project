document.addEventListener("DOMContentLoaded", function () {
  var myBtn = document.getElementById("myBtn");

  // Show/hide the scroll button based on scroll position
  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myBtn.style.display = "block";
          myBtn.style.right = "20px"; // Show from the right
      } else {
          myBtn.style.display = "none";
          myBtn.style.right = "-50px"; // Hide off the screen
      }
  };

  // Smooth scroll to top on button click
  window.topFunction = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

let currentIndex = 0;

    function displayTitle() {
      const titles = document.querySelectorAll('.title li.concept');
      
      // Hide all titles
      titles.forEach(title => title.classList.remove('active'));

      // Display the current title
      titles[currentIndex].classList.add('active');
    }

    function nextTitle() {
      currentIndex = (currentIndex + 1) % 7;
      displayTitle();
    }

    function previousTitle() {
      currentIndex = (currentIndex - 1 + 7) % 7;
      displayTitle();
    }

    // Display the initial title
    displayTitle();

    function showFeedback() {
        // Check if the name, email, and message fields are empty
        var nameField = document.getElementById('name');
        var emailField = document.getElementById('email');
        var messageField = document.getElementById('message');
  
        if (nameField.value.trim() === '' || emailField.value.trim() === '' || messageField.value.trim() === '') {
          alert('Error: Please fill in all fields before submitting.');
          return false; // Prevent the form from submitting
        }
  
        // Display success message
        alert('Form submitted! We will return to you shortly...'); // Change this message as needed
  
        window.location.reload(true);

        // Prevent the form from actually submitting (for demonstration purposes)
        return false;
      }


    function goToPageWithId() {

      var nextPageUrl = 'service.html';
      var targetId = 'specific-section';

      var fullUrl = nextPageUrl + '#' + targetId;

      window.location.href = fullUrl;
    }

    function goToPageWithId2() {
      var myPage = 'service.html';
      var myTargetId = 'thisId';

      var fulladd = myPage + '#' + myTargetId;

      window.location.href = fulladd;
    }