// Get references to the elements
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userLocation = document.getElementById('user-location');
const userBio = document.getElementById('user-bio-text');

// Function to update user profile
function updateUserProfile() {
    const nameInput = prompt('Enter your name:');
    const emailInput = prompt('Enter your email:');
    const locationInput = prompt('Enter your location:');
    const bioInput = prompt('Tell us about yourself:');

    if (nameInput && emailInput && locationInput && bioInput) {
        userAvatar.alt = nameInput;
        userName.textContent = nameInput;
        userEmail.textContent = emailInput;
        userLocation.textContent = locationInput;
        userBio.textContent = bioInput;
    } else {
        alert('Please fill out all fields.');
    }
}

// Add event listener to the user-info section to trigger profile update
const userInfoSection = document.querySelector('.user-info');
userInfoSection.addEventListener('click', updateUserProfile);

const facebookInput = document.getElementById('facebook');
const twitterInput = document.getElementById('twitter');
// Add references for other social media input fields

// Function to update social media links
function updateSocialMediaLinks() {
    const facebookLink = facebookInput.value;
    const twitterLink = twitterInput.value;
    const instagramLink = instagramInput.value;
    // Get values from other input fields

    // Update the links with user-provided values
    const facebookLinkElement = document.getElementById('facebook-link');
    const twitterLinkElement = document.getElementById('twitter-link');
    const instagramLinkElement = document.getElementById('instagram-Link');
    // Get references for other link elements

    if (facebookLink) {
        facebookLinkElement.href = facebookLink;
    }

    if (twitterLink) {
        twitterLinkElement.href = twitterLink;
    }

    if (instagramLink) {
        instagramLinkElement.href = instagramLink;
    }

    // Update other links
}

// Add event listener to trigger social media link update
const socialLinksSection = document.querySelector('.social-links');
socialLinksSection.addEventListener('input', updateSocialMediaLinks);

