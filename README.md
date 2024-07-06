# Catoff: Mini Wagering Game App

This is a mini wagering game app built with React Native and Expo. It features user authentication, a game feed, and a step counter.

## Table of Contents

1. [Setup](#setup)
2. [Running the App](#running-the-app)
3. [App Architecture](#app-architecture)
4. [Key Features](#key-features)

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication in the Firebase console
   - Copy your Firebase configuration
   - Create a file named `firebaseConfig.ts` in the project root and add your Firebase configuration:

     ```typescript
     import { initializeApp } from 'firebase/app';
     import { getAuth } from 'firebase/auth';

     const firebaseConfig = {
       // Your Firebase configuration here
     };

     const app = initializeApp(firebaseConfig);
     export const auth = getAuth(app);
     export default app;
     ```

## Running the App

1. Start the Expo development server:
   ```
   npx expo start
   ```

2. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal.

## App Architecture

This app uses the following technologies and patterns:

- **React Native**: The core framework for building the mobile app
- **Expo**: A platform for universal React applications
- **Expo Router**: For handling navigation and routing in the app
- **Firebase Authentication**: For user sign-up and login functionality
- **Expo Sensors**: For accessing the device's pedometer

The app structure is as follows:

```
app/
├── (auth)/
│   ├── signin.tsx
│   └── signup.tsx
├── gameDetails/
│   └── [id].tsx
├── gameDashboard/
│   └── [id].tsx
├── _layout.tsx
├── gameFeed.tsx
└── index.tsx
components/
└── GameCard.tsx
firebaseConfig.ts
app.json
```

## Key Features

1. **Authentication**: Users can sign up and log in using email and password.
2. **Game Feed**: Displays a list of available games with infinite scroll pagination.
3. **Game Details**: Shows detailed information about a selected game and allows users to join.
4. **Game Dashboard**: Features a step counter using the device's pedometer for each joined game.

The app uses a combination of stack navigation and modal screens to create a smooth user experience. The Expo Router is used for navigation, which allows for a file-system based routing approach.

Firebase is integrated for authentication, providing a secure and scalable solution for user management.

And the pedometer functionality.
