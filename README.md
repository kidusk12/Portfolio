# Kidus Kidanewold | Developer Portfolio

Personal portfolio website and one-page résumé for **Kidus Kidanewold**, a Computer Science student in Addis Ababa, Ethiopia, building backend systems and full-stack products. Open to internships and junior roles.

**Live site:** [YOUR-SITE.netlify.app](https://YOUR-SITE.netlify.app)

## Features

- Single-page portfolio: projects, skills, experience, about, hobbies and contact
- Dark theme by default with a light-mode toggle (remembers the choice)
- ATS-friendly one-page A4 résumé at `/resume`, with print styles for saving as PDF
- Contact form that sends messages to my inbox through Web3Forms
- Responsive layout, keyboard-friendly, with a skip link and reduced-motion support
- All content lives in one file, `src/data.js`

## Tech stack

React 18, Vite, Tailwind CSS 3.4, react-icons, Web3Forms, deployed on Netlify.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. To check the production build:

```bash
npm run build
npm run preview
```

## Customize

- Edit text, links, projects and skills in `src/data.js`.
- Put images in `public/`: `profile.jpg` for the photo, and screenshots in `public/screenshots/`.
- Make the résumé PDF by opening `/resume`, choosing Print / Save as PDF, and saving it as `public/resume.pdf`.
- Set your own Web3Forms access key in `formKey` in `src/data.js`.

## Deploy

On Netlify, use the build command `npm run build` and the publish directory `dist`. The file `public/_redirects` makes the `/resume` route work.

## Contact

- Email: kidakidanwoled@gmail.com
- GitHub: [github.com/kidusk12](https://github.com/kidusk12)
- LinkedIn: [Kidus Kidanewold](https://www.linkedin.com/in/kidus-kidanewold-78b243341/)
