import { NextResponse } from "next/server";

export const middleware = async (req) => {
  // Parse the URL from the request to get the pathname
  /*
  url: NextURL {
      href: '/x',
      origin: '',
      protocol: '',
      username: '',
      password: '',
      host: '',
      hostname: '',
      port: '',
      pathname: '/x',
      search: '',
      searchParams: URLSearchParams {},
      hash: ''
    }
  */
  const url = req.url;
  let pathname = url.pathname;
  console.log("pathname", url);
  // Check and skip redirection for system paths and assets like images, stylesheets, scripts
  // if (
  //   pathname.startsWith("/_next") || // Next.js system path
  //   pathname.includes("/api/") || // API routes
  //   /\.(jpe?g|png|gif|webp|svg|css|js|woff|data|webm|unityweb|wasm)$/i.test(
  //     pathname
  //   ) // File extensions for various assets
  // ) {
  //   // Skip any further processing and continue with the Next.js workflow
  //   return NextResponse.next();
  // }

  // // Retrieve cookies for language and province preferences
  // const provinceCookie = req.cookies.get("PROVINCE");
  // const languageCookie = req.cookies.get("NEXT_LOCALE");

  // // Initialize segments for language and province to be added to the URL
  // let languageSegment = "";
  // let provinceSegment = "";

  // // Determine if the language segment needs to be added to the URL
  // if (
  //   languageCookie &&
  //   languageCookie !== "en" && // Check if the language is not English
  //   !pathname.startsWith(`/${languageCookie}`) // Check if the URL already has the language segment
  // ) {
  //   // Prepare the language segment
  //   languageSegment = `/${languageCookie}`;
  // }

  // // Determine and process the province segment
  // if (provinceCookie === "AB") {
  //   // If the province is Alberta and '/AB' is not in the URL
  //   if (!pathname.includes("/AB")) {
  //     // Append '/AB' to the province segment
  //     provinceSegment = "/AB";
  //     if (pathname.includes("/windows/picture-product")) {
  //       pathname = "/windows/fixed-picture";
  //     }
  //     if (pathname.includes("/services/strata-installations")) {
  //       pathname = "/services/multi-family-installations";
  //     }

  //     if (pathname.includes("/doors/french")) {
  //       pathname = "/doors/garden-doors";
  //     }
  //     if (pathname.includes("/doors/french/traditional")) {
  //       pathname = "/doors/garden-doors/traditional";
  //     }
  //   }
  // } else if (provinceCookie === "BC") {
  //   // If the province is British Columbia
  //   if (pathname.includes("/AB")) {
  //     // Remove '/AB' if it's present
  //     pathname = pathname.replace(/\/AB\/?/, "/");
  //     provinceSegment = "";
  //     if (pathname.includes("/windows/fixed-picture")) {
  //       pathname = "/windows/picture-product";
  //     }
  //     if (pathname.includes("/services/multi-family-installations")) {
  //       pathname = "/services/strata-installations";
  //     }
  //     if (pathname.includes("/doors/garden-doors")) {
  //       pathname = "/doors/french";
  //     }
  //     if (pathname.includes("/doors/garden-doors/traditional")) {
  //       pathname = "/doors/french/traditional";
  //     }
  //   }
  // }

  // // Construct the new pathname by combining language and province segments with the original pathname
  // let newPathname = `${languageSegment}${provinceSegment}${pathname}`;

  // // Redirect to the new pathname if it differs from the original pathname
  // if (newPathname !== url.pathname) {
  //   return NextResponse.redirect(new URL(newPathname, url.origin));
  // }

  // No redirection required, continue with the Next.js workflow
  return NextResponse.next();
};

export const config = {
  // Configuration for the middleware
  source: "/|/((?!.*\\.).*)",
};
