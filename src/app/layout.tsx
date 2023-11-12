import '../utils/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import montserrat from '@/utils/fonts/montserrat'
import ThemeProviders from '@/utils/providers/Themes'

const APP_NAME = 'Is Gonzalo Fired'
const APP_DEFAULT_TITLE = 'IGF'
const APP_TITLE_TEMPLATE = 'IGF | %s'
const APP_DESCRIPTION = 'Page that advise you if Gonzalo is fired yet'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  )
}
