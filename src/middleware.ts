import { type NextRequest, NextResponse } from 'next/server';
import { getSession } from './libs/session/manager';

export const config = {
  matcher: ['/auth/:path*', '/dash/:path*', '/su/:path*'],
}
export async function middleware(req: NextRequest) {
  const session = await getSession();
  const route = req.nextUrl.pathname;

  switch (route.split('/')[1]) {
    // Auth Page redirects if user already logged in
    case "auth":
      if (session.isLoggedIn)
        return NextResponse.redirect(new URL('/', req.url), 302);
      break;

    // Protected Pages ask you to login first then redirect you back
    case "dash":
      if (!session.isLoggedIn)
        return NextResponse.redirect(
          new URL(
            '/auth/login?' +
              new URLSearchParams({ redirect: new URL(req.url).pathname }),
            req.url
          ),
          302
        );
      break;

    // Admin Pages
    case "su":
      const userIsAdmin = false; // Check if user is admin - TODO
      if (!userIsAdmin)
        return NextResponse.json({
          message: 'You do not have permission to see this page. If you think this is a mistake, please contact the Support.'
        }, { status: 401 });
      break;

    default:
      break;
  }
  return NextResponse.next();
}