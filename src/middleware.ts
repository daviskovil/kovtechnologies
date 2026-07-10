import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * The old WordPress site was hacked and flooded Google's index with ~195k spam
 * URLs (e.g. /zpes.php?s=..., /wp-*, xmlrpc). Our new site uses none of these,
 * so we return HTTP 410 Gone for them — this tells Google to DROP them fast
 * (faster than a 404). Everything else passes through untouched.
 */
const SPAM_PATTERNS: RegExp[] = [
  /\.php\b/i, // any .php URL: zpes.php, xmlrpc.php, wp-login.php, etc.
  /^\/wp-/i, // /wp-admin, /wp-content, /wp-includes, /wp-json, /wp-login...
  /^\/wordpress\b/i,
  /^\/xmlrpc\b/i,
  /^\/(cgi-bin|vendor|\.env)\b/i, // common exploit-scan paths
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (SPAM_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse("410 Gone — this page no longer exists.", {
      status: 410,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Run on all requests except Next internals and the favicon.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
