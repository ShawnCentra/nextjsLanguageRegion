import { NextResponse } from "next/server";

export const middleware = async (req) => {
  // Parse the URL from the request to get the pathname

  console.log("running middleware");
  // Check and skip redirection for system paths and assets like images, stylesheets, scripts

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/:path*"],
};
