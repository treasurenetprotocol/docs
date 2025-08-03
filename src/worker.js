/**
 * Cloudflare Worker for serving static Docusaurus site
 * This worker handles routing and serves static assets
 */

export default {
  async fetch(request, env) {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Try to get the asset from the ASSETS binding
    const asset = await env.ASSETS.fetch(request);
    
    // If asset exists, return it
    if (asset.status !== 404) {
      return asset;
    }
    
    // For SPA routing, serve index.html for navigation requests
    if (request.method === "GET" && url.pathname !== "/" && !url.pathname.includes(".")) {
      const indexRequest = new Request(new URL("/", request.url), request);
      return env.ASSETS.fetch(indexRequest);
    }
    
    // Return the 404 response from assets
    return asset;
  }
};