import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider"
import { GoogleAnalytics } from '@next/third-parties/google'
import { robotoMono } from "@/app/lib/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nynvr.io'),
  applicationName: 'NYNVR Website',
  title: "NYNVR - Noy Novera | Curious Software Engineer, Builder",
  description: "NYNVR - Noy Novera | Curious Software Engineer, Builder - Building products that enhance health, protect the environment, digitalize government operations and services, advance education and innovate finance",
  referrer: 'origin-when-cross-origin',
  keywords: [
    // personal brand
    'nynvr software engineer noynovera software engineer Noy Novera Software Engineer Mervin Novera Software Engineer in the Philippines Software Engineer Philippines Top Software Engineer in the Philippines Top Software Engineer Philippines',

    // industry with experience
    'startup start-up marketing ecommerce e-commerce edutech elearning e-learning payments fintech finance biotech biotechnology healthtech healthcare',

    // industry to gain experience
    'egov e-gov egovernment e-government envirotech environment sustainabiliy renewable',

    // management, leadearship
    '',

    // concepts, principles
    'System Design Clean Architecture TDD Shift-Left Security Shift Left Security',

    // technical skills - general
    'Web Development Software Development Application Development',

    // frontend
    'TypeScript JavaScript Node NodeJS Express ExpressJS React ReactJS Next NextJs Next.js Python Tailwind CSS TailWindCSS',

    // backend and data
    'Python Django Django Rest Framework FastAPI Flask PostgreSQL MongoDB',

    // devsecops
    'Docker AWS',
  ],
  authors: [{ name: 'Noy Novera', url: 'https://www.linkedin.com/in/noynovera/' }, { name: 'Mervin Novera', url: 'https://www.linkedin.com/in/noynovera/' }],
  creator: 'Noy Novera',
  publisher: 'Noy Novera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.GOOGLEANALYTICS_ID || ''} />
      </body>
    </html>
  );
}
