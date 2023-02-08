# Luis Tellez Developer Portfolio

<img width="500" alt="luistellez.com" src="https://user-images.githubusercontent.com/27663011/213899549-b1f201c7-7d63-4e7b-8f4c-e4849f007182.png">

Welcome to my developer portfolio! This portfolio was built using React, a JavaScript library for building user interfaces.

## Features

- Responsive design for easy viewing on any device
- Dynamic routing for easy navigation
- Clean, modern design
- Showcase of my projects, with links to their Github repository and live website (if available)
- About me section, including my skills and contact information

## Lighthouse Report

<img width="442" alt="Lighthouse Report" src="https://user-images.githubusercontent.com/27663011/213899577-1f029e54-3da4-4652-83cd-54680acace44.png">

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

You can add your own projects by editing the src/utils/Projects.js file, with the following format:

```Javascript
{
    image:
      'https://user-images.githubusercontent.com/27663011/213897954-0a5e1b49-773b-4790-9ded-ee9c7a02ed15.webm',
    tags: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    title: 'News Explorer',
    description: 'News Reader Full Stack App',
    live: 'http://news-explorer.projects.luistellez.com',
    github: 'https://github.com/aegisnull/news-explorer-frontend',
  },
```

You can add your own skills by editing the src/utils/Skills.js file, with the following format:

```Javascript
 {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Photoshop', 'Cyberduck'],
  },
```

In both cases, Cards will be dinamically generated.
