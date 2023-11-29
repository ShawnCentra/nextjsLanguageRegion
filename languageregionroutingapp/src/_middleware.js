// pages/_middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware running")
  const { pathname } = request.nextUrl;

  // // If the pathname is already in the correct format, do nothing
  // if (/^\/(en|zh|fr)\/(bc|ab)\/.+/.test(pathname)) {
  //   return NextResponse.next();
  // }

  // // If the pathname doesn't contain a language and region, redirect to the default
  // if (!pathname.startsWith('/api/') && !pathname.includes('.')) { // Ignore API routes and files
  //   const defaultLocale = 'en';
  //   const defaultRegion = 'bc';
  //   const newPathname = `/${defaultLocale}/${defaultRegion}${pathname}`;
  //   return NextResponse.redirect(new URL(newPathname, request.url));
  // }

  // Continue with the response for API routes and files
  return NextResponse.next();
}

// Apply the middleware to all routes
export const config = {
  matcher: '/',
};