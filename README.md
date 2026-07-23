# Luis Tellez Developer Portfolio

<img width="500" alt="luistellez.com" src="https://user-images.githubusercontent.com/27663011/213899549-b1f201c7-7d63-4e7b-8f4c-e4849f007182.png">

Personal developer portfolio built with **Next.js**, React, and Sass. Includes a Notion-powered blog and an EmailJS contact form.

## Features

- Responsive portfolio layout (home, projects, skills, about, contact)
- Dynamic project and skills cards from local data
- Blog powered by Notion (ISR)
- Contact form via EmailJS
- Vercel Analytics

## Installation

1. Clone the repository

```bash
git clone https://github.com/aegisnull/luistellez.git
cd luistellez
```

2. Install dependencies

```bash
npm install
```

3. Copy environment variables and fill in values

```bash
cp .env.example .env.local
```

4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
| --- | --- |
| `NOTION_TOKEN` | Notion internal integration token |
| `NOTION_DATABASE_ID` | Notion database ID for blog posts |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint |
| `npm run format` | Format source files with Prettier |

## Customization

Add projects in `src/utils/Projects.js`:

```javascript
{
  id: 16,
  image: '/images/projects/example.webp',
  tags: ['React', 'NodeJS'],
  title: 'Example Project',
  description: 'Short description',
  live: 'https://example.com',
  github: 'https://github.com/you/example',
}
```

Add skills in `src/utils/Skills.js`:

```javascript
{
  id: 7,
  title: 'Tools',
  items: ['Git', 'GitHub', 'VS Code'],
}
```

## Deployment

Deploy on Vercel (or any Node host). Set the environment variables above in the hosting dashboard, then run `npm run build`.
