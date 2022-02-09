import { NextResponse, NextRequest } from 'next/server';

import routes from 'lib/routes';
import order from 'lib/getExercises/order';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if ([routes.home, routes.exercises].includes(pathname)) {
    return NextResponse.redirect(routes.exercise(order[0]));
  }
  return NextResponse.next();
}
