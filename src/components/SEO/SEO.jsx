import Head from 'next/head';

const SITE_NAME = 'Luis Tellez';
const SITE_URL = 'https://luistellez.com';
const DEFAULT_DESCRIPTION =
  'Portfolio of Luis Tellez — front-end developer building polished websites and web applications.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/avatar.webp`;

function SEO({ title, description = DEFAULT_DESCRIPTION, path = '/', image = DEFAULT_OG_IMAGE }) {
  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='canonical' href={canonicalUrl} />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  );
}

export default SEO;
