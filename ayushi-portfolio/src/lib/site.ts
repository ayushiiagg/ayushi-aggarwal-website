/** Production site URL — set NEXT_PUBLIC_SITE_URL in Netlify env vars if needed. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  // Netlify sets URL automatically for production deploys
  if (process.env.URL) {
    return process.env.URL.replace(/\/$/, "");
  }
  return "https://ayushiaggarwal.netlify.app";
}
