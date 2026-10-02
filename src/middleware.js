import { NextResponse } from "next/server";

export function middleware(request) {
  // const { pathname } = request.nextUrl;
  // // Paths that should NOT be redirected
  // const isPublicFile =
  //   pathname.includes(".") ||
  //   pathname.startsWith("/_next") ||
  //   pathname.startsWith("/api");
  // const isConstructionPage = pathname === "/construction";
  // if (!isPublicFile && !isConstructionPage) {
  //   return NextResponse.redirect(new URL("/construction", request.url));
  // }
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    */
  //   "/((?!api|_next/static|_next/image|favicon.ico).*)",
  // ],
};
