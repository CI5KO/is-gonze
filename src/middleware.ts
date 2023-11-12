import { NextResponse } from 'next/server'

let locales = ['en', 'es']

function getLocale(request: any) {
  return request.nextUrl.locale || 'en'
}

export function middleware(request: any) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/']
}
