# TikTask

Tiktask is a task management application allowing users to add new tasks, manage active and completed tasks. 

Tiktask is completely respensive on different screen sizes. The tasks are stored into localstorage so the users won't lose their tasks after closing their browsers. It includes a drag and drop feature letting users to quickly move a task from one column to another.

I used this project to practice Typescript - a strongly typed programming language that builts on top of Javascript. Learning how to use Typescript is one of the first tasks that I want to do after going through my bootcamp. After completing this project, I'm even more motivated to dig deeper into this programming language.

Please click here for the live website: https://tiktask.vercel.app/

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## Project Screenshot
**Interface**
![App Screenshot](https://firebasestorage.googleapis.com/v0/b/personal-e4e76.appspot.com/o/Tiktask%2FTikTask.png?alt=media&token=49459eec-c09e-437d-870f-cc07dc2fc615)


## Project Demo
![App Demo](https://firebasestorage.googleapis.com/v0/b/personal-e4e76.appspot.com/o/Tiktask%2FTiktask.gif?alt=media&token=f8923290-c05e-4ed3-9234-907e1645f7ad)

## Tech Stacks
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)


## Installation

1. Clone this repository.
```$ https://github.com/henryluan95/Tiktask.git```


2. Run `npm install` from inside the client directory.


```bash
$ cd my-happy-place
$ npm install
```

3. Start React App
```$ npm start```

## Author
Henry Luan [@henryluan](https://github.com/henryluan95)

## Acknowledgements
Followed a tutorial by Piyush from freecodecamp.org which you can [check out here](https://www.youtube.com/watch?v=FJDVKeh7RJI&t). 

## Features that I fixed/added
- When moving task from one column to another. The tutorial mutates states directly leading to incorrect rerendering. I created a copy of the objects and worked my logic on it.
- Added a feature to undo a completed task.
- Added conditional rendering for some of the icons on the task cards.
- Changed the logic when switching between two columns, so the application could scale up to 3 or more columns.
