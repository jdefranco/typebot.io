import Head from 'next/head'
import React from 'react'

export const SocialMetaTags = ({
  title = 'Chatworth: Sophisticated AI-Powered Chatbot System',
  description = 'Experience the wisdom of Chatworth, a sophisticated AI-powered chatbot system designed to revolutionize customer interactions through intuitive chatbot creation, seamless integration, and real-time data collection. Elevate your customer engagement today.',
  currentUrl,
  imagePreviewUrl = 'https://s3.typebot.io/preview.png',
}: {
  title?: string
  description?: string
  currentUrl: string
  imagePreviewUrl?: string
}) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />
    <meta name="google-site-verification" content="J3xNT6mxZKsTbgkoAGkvVk0BLrMHD5de2c_icciYj7g" />

    <meta property="twitter:url" content={currentUrl} />
    <meta property="og:url" content={currentUrl} />

    <meta name="description" content={description} />
    <meta property="twitter:description" content={description} />
    <meta property="og:description" content={description} />

    <meta property="og:image" content={imagePreviewUrl} />
    <meta property="twitter:image" content={imagePreviewUrl} />

    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta property="fb:app_id" content="2919783058077552" />
  </Head>
)
