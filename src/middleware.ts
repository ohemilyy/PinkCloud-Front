import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    if (req.nextUrl.pathname === '/sign-in') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  } else if (req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  return res
}

export const config = {
  matcher: ['/sign-in', '/dashboard/:path*'],
}