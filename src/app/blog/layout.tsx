import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Blog | Tareq",
    template: "%s | Tareq Blog"
  },
  description: "Latest insights on business management, client communication, and growth strategies for one-person businesses.",
  openGraph: {
    title: "Tareq Blog - Business Management Insights",
    description: "Latest insights on business management, client communication, and growth strategies.",
    type: "website",
    url: "https://tareqosama.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="">
        {children}
      </div>
    </div>
  )
}