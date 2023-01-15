# Luis Tellez Developer Portfolio

Welcome to my developer portfolio! This portfolio was built using React, a JavaScript library for building user interfaces.

## Features

- Responsive design for easy viewing on any device
- Dynamic routing for easy navigation
- Clean, modern design
- Showcase of my projects, with links to their Github repository and live website (if available)
- About me section, including my skills and contact information

## Installation

1. Clone the repository

`git clone https://github.com/aegisnull/luistellez.git`

2.  Install dependencies

`npm install`

3. Start the development server

`npm start`

The development server will start on port 3000. Navigate to `http://localhost:3000/` to view the application in the browser.

## Deployment

To deploy the application, run the following command:

`npm run build`

This will create a production-ready build of the portfolio in the `build` folder. You can then deploy the contents of this folder to a hosting service of your choice.

## Customization

Feel free to customize the portfolio to suit your needs. You can change the content, design, and functionality as you see fit.

You can add your own projects by editing the src/utils/cardData.js file, with the following format:

{
image:
'https://user-images.githubusercontent.com/27663011/212429268-38a790be-a69f-4219-b336-2d709a7038b9.gif',
tags: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
title: 'News Explorer',
description: 'News Reader Full Stack App',
live: 'https://aegisnews.students.nomoredomainssbs.ru',
github: 'https://github.com/aegisnull/news-explorer-frontend',
}
