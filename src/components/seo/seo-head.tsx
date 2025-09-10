import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noindex?: boolean
  schema?: object
}

export default function SEOHead({
  title = "Tareq - All-in-One Client Portal",
  description = "Transform your one-person business with Tareq's complete client management platform.",
  canonical,
  ogImage = "https://tareqosama.com/og-image.jpg",
  ogType = "website",
  noindex = false,
  schema
}: SEOProps) {
  const fullTitle = title.includes('Tareq') ? title : `${title} | Tareq`
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
              <meta property="og:url" content={canonical || "https://tareqosama.com"} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  )
}