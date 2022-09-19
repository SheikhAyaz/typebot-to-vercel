import Head from 'next/head'

export const Seo = ({
  title,
  currentUrl = 'https://typebot-builder-to-vercel-ferila6vg-alihassan4198-tech.vercel.app',
  description = 'Create and publish conversational forms that collect 4 times more answers and feel native to your product',
  imagePreviewUrl = '',
}: {
  title: string
  description?: string
  currentUrl?: string
  imagePreviewUrl?: string
}) => (
  <Head>
    <title>VKYC | {title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />

    <meta property="twitter:url" content={currentUrl} />
    <meta property="og:url" content={currentUrl} />

    <meta name="description" content={description} />
    <meta property="twitter:description" content={description} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={imagePreviewUrl} />
    <meta property="twitter:image" content={imagePreviewUrl} />

    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />
  </Head>
)
