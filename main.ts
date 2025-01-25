const videoElement = document.getElementById("videoPlayer") as HTMLVideoElement;

// Fetch the video URL from the Flask backend
fetch("http://127.0.0.1:5000/video")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch video URL");
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    const videoUrl = data.url; // Extract the video URL from the JSON
    videoElement.src = videoUrl; // Set the video source to the URL
    videoElement.load(); // Ensure the video loads
    videoElement.play(); // Automatically play the video
  })
  .catch((error) => {
    console.error("Error loading video:", error);
  });
