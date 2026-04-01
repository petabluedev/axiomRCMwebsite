/**
 * When the marketing site is deployed on its own (e.g. Vercel) and the authenticated
 * Next.js app runs elsewhere (e.g. GCP, Railway), set NEXT_PUBLIC_APP_ORIGIN to that
 * app’s origin (no trailing slash). Sign-in links and /login redirects use it.
 *
 * Leave unset for local / single-deployment setups where /login is served by this app.
 */
export function getAppOrigin(): string | null {
  const raw = process.env.NEXT_PUBLIC_APP_ORIGIN?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

export function getLoginUrl(): string {
  const origin = getAppOrigin();
  if (origin) return `${origin}/login`;
  return "/login";
}

export function isAppHostedExternally(): boolean {
  return getAppOrigin() !== null;
}
