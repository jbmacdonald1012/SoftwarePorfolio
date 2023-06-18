# Overview

This project uses a Cloud Data Base and allows the user to Create, Update, and Delete Data Base entries with the use of a simple User Interface. This Data Base has entries that pertain the small business **Homely Treasures by Andy** which makes scented soaps, candles, bath bombs, and aprons that can be used in the home. 

Below is a link to a demo of the interaction with the Firebase Firestore Database via a simple Front End UI. 

[Software Demo Video](https://youtu.be/7bC9l8t8Pvg)

# Cloud Database

The cloud DataBase that I chose to use is Firebase - Firestore from Google. 
The structure of the database is NoSQL. It's based upon Collections, Documents, and Fields. The collections allow you to group documents together which are the individual items
that are in the Database. The fields are the properties of the document that is being entered in the database. 

# Development Environment

The Firebase - Firestore Database is initiated in an internet Browser. 
The UI and Data Base interactions were developed in Visual Studio Code

The Data Base interactions are coded in JavaScript using Node.js as the server that connects with the Firestore DB. Additionally, I have installed webpack, which can be installed with the follwing command: 
`npm install webpack` 

To ensure you can see the UI and the live interactions with the Data Base you will need the Live Server Extension in Visual Studio Code. 
Once installed and the Live Server application is running the webpack build will need to be initiad with the following command: 
`npm run build`

This will initiate the Webpack config file, which will ensure that the correct files and modules are executed to allow live creation, updating, and deleting of Data Base entries.

# Useful Websites

- [Firebase Documentation](https://firebase.google.com/docs?authuser=0&hl=en)
- [W3Schools JavaScript References](https://www.w3schools.com/js/)

# Future Work

- I would like to enhance the UI to show the data that appears in the Database
