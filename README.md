```
# Firebase Project - CSC 130 Website

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)
- Firebase CLI (if deploying to Firebase Hosting)

## Getting Started

1. **Clone the repository** (if applicable):

   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

   (Dont need to do this in most cases)

2. **Install dependencies:**

   ```sh
   npm install
   ```
   (This will create a node_modules folder for the project)


3. **Run the project locally:**

    To run this locally instead of using live server write this into command promte in vscode terminal will give you a Localhost:5000 link that is set up for local use
   ```sh
   firebase serve
   ```
   (Use this in most in most cases)

   Or, use a simple local server (if Firebase Hosting is not configured):

   ```sh
   npx http-server .
   ```

## Project Structure

/project-folder
│── public/
│   │── index.html         # Main HTML file
│   │── style.css          # CSS styles
│   │── script.js          # Main JavaScript file
│   │── firebase-config.js # Firebase configuration
│── package.json       # Dependencies
│── .firebaserc        # Firebase project settings
└── firebase.json      # Firebase Hosting configuration
## Deployment (Firebase Hosting)

Github commits should automatically be added to the live URL if not



1. **Initialize Firebase Hosting** (only once per project):

    To deploy the project onto the url live 

   ```sh
   firebase init hosting
   ```

   Follow the prompts to set up your hosting environment.

2. **Deploy to Firebase:**

   ```sh
   firebase deploy
   ```

The Website will be live at the Firebase-provided URL.





## Notes

- Modify `firebase-config.js` to include your own Firebase credentials.
- For more details, refer to the [Firebase documentation](https://firebase.google.com/docs).
```
