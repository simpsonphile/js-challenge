import { NextResponse, NextRequest } from 'next/server';

import routes from 'lib/routes';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if ([routes.home, routes.exercises].includes(pathname)) {
    return NextResponse.redirect(routes.exercise('array/map'));
  }
  return NextResponse.next();
}
