import React from 'react'
import Head from 'next/head'

type SeoProps = {
    title: string,
    description: string,
    image?: string,
    type?: string,
    twitter?: string,
    author?: string,
    published?: string,
    modified?: string,
    keywords?: string,
}


export default function Seo({ title, description, image, type, twitter, author, published, modified, keywords }: SeoProps) {
    
    const url = 'https://vincidao.com'
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {image && <meta name="image" content={image} />}
            <meta name="url" content={url} />
            <meta name="type" content={type} />

            {/* Twitter card */}

            <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
            <meta name="twitter:site" content={url} />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && (<><meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={description} /></>)}

            {/* Facebook card */}

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:site_name" content="Vinci DAO" />
            {image && (<><meta property="og:image" content={image} />
            <meta property="og:image:alt" content={description} /></>)}

            {/* Article */}

            {author && <meta property="article:author" content={author} />}
            {published && <meta property="article:published_time" content={published} />}
            {modified && <meta property="article:modified_time" content={modified} />}
            {keywords && <meta name="keywords" content={keywords} />}
        </Head>
    )
}
