// script.js

document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('myVideo');
    const buttons = document.querySelectorAll('.video-button');
    
    // Define the main video source
    const mainVideoSrc = 'main.mp4';

    // Function to play a video for a given duration and then switch back to the main video
    function playTemporaryVideo(tempVideoSrc, duration) {
        // Set the temporary video source
        videoElement.src = tempVideoSrc;
        
        // Play the video
        videoElement.play();
        
        // Set a timeout to switch back to the main video after the specified duration
        setTimeout(() => {
            videoElement.src = mainVideoSrc;
            videoElement.play();
        }, duration);
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the video source from the button's data attribute
            const videoSrc = button.getAttribute('data-video');
            
            // Play the selected video for 5 seconds
            playTemporaryVideo(videoSrc, 5000); // 5000 ms = 5 seconds
        });
    });
});
