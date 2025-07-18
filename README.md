#  Mood-Based Music Player

A simple and interactive music player that serves playlists based on your mood. Built with **Node.js** and **Express.js** for the backend API, and vanilla **HTML/CSS/JavaScript** for the frontend.

---

## Features

- Get mood categories dynamically from the backend
- Display playlists (with song titles and embedded YouTube players)
- Navigate through songs with a **Next** button
- Responsive and clean UI with mood buttons
- Lightweight JSON data storage (`moods.json`)

---

## Tech Stack

- Node.js
- Express.js
- Vanilla JavaScript (Frontend)
- HTML & CSS
- JSON for data storage

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/mood-music-player.git

Navigate into the project directory: cd mood-music-player
Install dependencies: npm install
- Running the Application
Start the server in development mode with nodemon (optional):
npm run dev
Or start normally:
npm start
Open your browser and go to:
http://localhost:3000
You will see the Mood-Based Music Player UI with mood buttons. Click any mood to start playing songs.

Project Structure

mood-music-player/
├── moods.json        # Playlist data (mood -> songs)
├── public/           # Frontend files (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js         # Express server code
├── package.json
└── package-lock.json

-API Endpoints
Method	Endpoint	Description
GET	/api/moods	Get list of all moods
GET	/api/playlist/:mood	Get playlist (songs) for a mood

Contributing
Feel free to open issues or submit pull requests to improve this project.

License
This project is open-source and free to use.

Acknowledgments
Inspired by the idea of combining Node.js APIs with interactive frontend experiences.
Thanks for checking out the project! 

