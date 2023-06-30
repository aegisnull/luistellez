const cardData = [
  {
    id: 1,
    image:
      'https://user-images.githubusercontent.com/27663011/212429268-38a790be-a69f-4219-b336-2d709a7038b9.gif',
    tags: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    title: 'News Explorer',
    description: 'News Reader Full Stack App',
    live: 'http://news-explorer.projects.luistellez.com',
    github: 'https://github.com/aegisnull/news-explorer-frontend',
  },
  {
    id: 2,
    image:
      'https://camo.githubusercontent.com/11f092ff9112bb0d096bb3f11331ce72976dc2623c96d57a255365470f4b8ad9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f464c38324852634f7352383239704e4e51762f67697068792e676966',
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Moody',
    description: 'Hackathon Project Landing Page',
    live: 'https://moody-app.netlify.app',
    github: 'https://github.com/aegisnull/moody',
  },
  {
    id: 3,
    image:
      'https://github.com/aegisnull/react-around-api-full_es/assets/27663011/b8f431c5-49c0-4b16-ad33-9a25f34032ee',
    tags: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    title: 'Around The U.S.',
    description: 'Instagram like app',
    live: 'http://aroundus.projects.luistellez.com',
    github: 'https://github.com/aegisnull/react-around-api-full_es',
  },
  {
    id: 4,
    image:
      'https://private-user-images.githubusercontent.com/27663011/250006518-039d88a9-12af-4db3-8dae-ba995b36e6a0.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4MTA0NjM3LCJuYmYiOjE2ODgxMDQzMzcsInBhdGgiOiIvMjc2NjMwMTEvMjUwMDA2NTE4LTAzOWQ4OGE5LTEyYWYtNGRiMy04ZGFlLWJhOTk1YjM2ZTZhMC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYzMFQwNTUyMTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZGFkZmVhZmMyMDc3OTdmZjM2NmU4YzJjZGFmMDdhZTMxNDYxZTg2ZWI0MzM4YzNhMDY5OTkwMTAwMTU5NzE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.9e6p54mW33t09mKrP6kt9Cjoa7jW5W7PWts-D1MyjBw',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS'],
    title: 'GMG Manufacturing',
    description: 'Local Manufacturing  Website',
    live: 'https://web.archive.org/web/20221208215442/https://gmgmanufacturing.com/',
  },
  {
    id: 5,
    image:
      'https://private-user-images.githubusercontent.com/27663011/250007044-01082e82-0433-44ec-8633-d51b6befb431.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4MTA0ODIzLCJuYmYiOjE2ODgxMDQ1MjMsInBhdGgiOiIvMjc2NjMwMTEvMjUwMDA3MDQ0LTAxMDgyZTgyLTA0MzMtNDRlYy04NjMzLWQ1MWI2YmVmYjQzMS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYzMFQwNTU1MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZjFlYTNiOWMxYWRkMTliZDVhMGFiNWVkYTNlZjk5NDg5NDYwZWZmMWE5OThjYzkzNWEwMGQwZmU5NGNjMDdiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cMjmEfe2k31jrlvdsvhVeFyLQ8iB-ArrYaehzwrvhoo',
    tags: ['HTML', 'CSS', 'jQuery'],
    title: 'Circulo Café',
    description: 'Coffee Shop Website',
    live: 'https://circulocafe.com',
  },
  {
    id: 6,
    image:
      'https://github.com/aegisnull/prepara-tu-conta/assets/27663011/e5d2fcee-dcd5-4853-9e3d-b594a9017cdf',
    tags: ['HTML', 'CSS', 'jQuery'],
    title: 'Prepara tu Conta',
    description: 'Accounting Website',
    live: 'https://aegisnull.github.io/prepara-tu-conta/',
  },
  {
    id: 7,
    image:
      'https://github.com/aegisnull/practicum-art-gallery/assets/27663011/871f2efe-e37d-4327-b8d3-b91735791d48',
    tags: ['HTML', 'CSS', 'CSS Grid'],
    title: 'Practicum Art Gallery',
    description: 'Art Gallery Website',
    live: 'https://aegisnull.github.io/practicum-art-gallery/',
    github: 'https://github.com/aegisnull/practicum-art-gallery',
  },
  {
    id: 8,
    image:
      'https://github.com/aegisnull/aprender-a-aprender/assets/27663011/c5e9f257-75f0-4b2e-9d53-74df9b206627',
    tags: ['HTML', 'CSS', 'BEM'],
    title: 'Aprender a Aprender',
    description: 'Learning Info Website',
    live: 'https://aegisnull.github.io/aprender-a-aprender/',
    github: 'https://github.com/aegisnull/aprender-a-aprender',
  },
  {
    id: 9,
    image:
      'https://github.com/aegisnull/memorama/assets/27663011/7fcc9d01-3f21-49c0-ad76-7e7aa6df5768',
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Memorama Game',
    description: 'Memory Game Website',
    live: 'https://aegisnull.github.io/memorama/',
    github: 'https://github.com/aegisnull/memorama',
  },
  {
    id: 10,
    image:
      'https://private-user-images.githubusercontent.com/27663011/250008214-0e0cc633-206a-44c4-977c-931ce16de248.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4MTA1MjcwLCJuYmYiOjE2ODgxMDQ5NzAsInBhdGgiOiIvMjc2NjMwMTEvMjUwMDA4MjE0LTBlMGNjNjMzLTIwNmEtNDRjNC05NzdjLTkzMWNlMTZkZTI0OC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYzMFQwNjAyNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZDY0ZDRjYTEyMDQ3ZDg1NGY2OTI2NWEyNDA2YjNkNDdlNWIxZjNiYmE1YWY5MTA1ZTU5ZjVhYzRhNDQ4ZmI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.OPEm4OH0TZ7w_TJ_hlUr9PFNccUvUUG7-0FOzS3zfB8',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS'],
    title: 'Intelegal',
    description: 'Website for Law Firm',
    live: 'https://intelegal.com.mx',
  },
  {
    id: 11,
    image:
      'https://github.com/aegisnull/odin-landing-page/assets/27663011/6cd6ac23-bb35-4f02-bc07-ce34838c55b3',
    tags: ['HTML', 'CSS'],
    title: 'Odin Landing Page',
    description: 'Simple Landing Page',
    live: 'https://aegisnull.github.io/odin-landing-page/',
    github: 'https://github.com/aegisnull/odin-landing-page',
  },
  {
    id: 12,
    image:
      'https://private-user-images.githubusercontent.com/27663011/250008748-fd556730-3fa8-4c36-89da-5ffd2ac9f948.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg4MTA1NDU1LCJuYmYiOjE2ODgxMDUxNTUsInBhdGgiOiIvMjc2NjMwMTEvMjUwMDA4NzQ4LWZkNTU2NzMwLTNmYTgtNGMzNi04OWRhLTVmZmQyYWM5Zjk0OC5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYzMFQwNjA1NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYjY1ODdkNmRjYTNlNjRiNGYyOTZhYTMxMjNkNzAwZDUwMWUzOTcyODJjN2JkNmZlMTVjOTUyMDc1YzM3OThlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.h57zqZV_e7W_9DlS90wdVM4RD6ICbZAHeHoJmsmg2HE',
    tags: ['WordPress', 'PHP', 'HTML', 'CSS'],
    title: 'Intelegal Landing Page',
    description: 'Landing Page for Real Estate',
    live: '#',
  },
];

export default cardData;

// images should be 330x201 pixels
