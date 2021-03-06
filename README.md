# abnamrotvmaze
TV Show Maze

## Quick Overview

```
 git clone git clone https://github.com/msikka93/abnamrotvmaze.git                     <== clone the repo
 cd abnamrotvmaze                                                                      <== go to the folder
 npm i                                                                                   <== install dependencies
 npm run build:client                                                                    <== build client 
 npm run build:server
 and server side code 
 npm start                                                                               <== start the app in local dev (in a new terminal)
```
Then open [http://localhost:30001](http://localhost:30001) to see abnamrotvmaze in action 😎

## Installation

### 0. Check prerequisites

**You’ll need to have Node >= 10 (LTS version) on your local development machine** You can download it here [NodeJs](https://nodejs.org/en/) (macOS/Linux/windows)

**You’ll also need git** You can download it here [git download](https://git-scm.com/downloads) (macOS/Linux/windows) 

You can use any editor of your choice but we recommend using the latest version of [VS Code](https://code.visualstudio.com).

### 1. Clone repo

Clone the repo (or alternatively you can download the repo):

```
 git clone https://github.com/msikka93/abnamrotvmaze.git

 These two are two separate public repositories (statefull components) for DIALOG and SNACKBAR which are included in package.json
 You can also clone these two respositories also to check the code for dialog and snackbar
 "react-redux-popup": "git+https://github.com/msikka93/react-redux-popup.git"
 "react-redux-snackbar": "git+https://github.com/msikka93/react-redux-snackbar.git"
```

It will create a directory called `tvshowmazeui` inside the current folder.<br>

### 2. Install dependencies

Next step is to install the project dependencies.
Once the cloning is done, you can open your project folder and run this command:

```
 npm install
```

You're all set to run the app.👏

### 3. Run The App
After successfull installation, you're ready to run the app. Run these commands in separate command windows:

```
 npm run build:client
```
```
 npm run build:server
```

```
 npm start
```

Open [http://localhost:30001](http://localhost:30001) to see the app.
