# mern-typemaster
## Introduction
A full-stack interactive typing game built with the MERN stack - MongoDB, Express.js, React, and Node.js. 
It features real-time interactive gameplay and integration capability to MongoDB for storing and fetching scores.
![image](https://github.com/Trieuh2/mern-typemaster/assets/34781377/c0cd4331-6bd6-4c66-b508-f12512498d31)


## Built with
- Frontend: **React.js, Typescript, HTML/CSS**
- Backend: **Node.js, Express.js**
- Database: **MongoDB, Mongoose**

## Setup
To run this project, use npm to install the dependencies and run the npm '**dev**' scripts.

**Backend:**
```
$ cd ../your-project-directory/backend
$ npm install
$ npm run dev
```
**Frontend:**
```
$ cd ../your-project-directory/frontend
$ npm install
$ npm run dev
```

**Important**: To upload and fetch data from your own MongoDB, modify the '**PORT**' and '**mongoDBURL**' variables in the [config.js](https://github.com/Trieuh2/mern-typing-game/blob/main/backend/config.js) file.

## Features
- **Random Word Generation:** Each game session presents a new set of randomly selected words to type.
- **Difficulty:** Three difficulty options (easy, medium, hard) affect the length of each generated word.
- **Interactive UI:** An automatically scrolling word box and color-responsive text provide real-time feedback.
- **Leaderboard:** Score information is posted to MongoDB after each game ends and the top 10 player scores are displayed on the Leaderboard table.
- **Time-based Typing Challenges:** Test your typing speed and accuracy in a dynamically changing environment.

## How to Play
1. Type a letter to start the timer.
2. Type each word as accurately and quickly as possible.
3. Your score is calculated based on the number of accurately typed words (incorrect letters and extra letters are not considered accurate).
4. Finish typing to see if you've made it to the top 10 scores!
5. Keep practicing to improve your ranking.

## API
**User**
- **GET** /user/
- **GET** /user/:id
- **POST** /user/
- **PUT** /user/:id
- **DELETE** /user/:id
  
**Score**
- **GET** /score/
- **GET** /score/:id
- **POST** /score/
- **PUT** /score/:id
- **DELETE** /score/:id


## Acknowledgements
- Inspired by [MonkeyType](https://monkeytype.com)

## License
[MIT](https://choosealicense.com/licenses/mit/)
