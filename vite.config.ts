// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_BASE is set by the GitHub Pages workflow when the site is served from
// a project subpath (e.g. https://user.github.io/repo/). Empty for root domains.
const base = process.env["STATIC_BASE"] || "/";
const isStatic = process.env["STATIC_BUILD"] === "true";

export default defineConfig({
  vite: { base },
  // GitHub Pages is static hosting: skip the Cloudflare/nitro server bundle.
  ...(isStatic ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this. Skipped for the static build, where the
    // prerenderer boots its own preview server.
    ...(isStatic
      ? {
          // Prerender every page to static HTML for GitHub Pages hosting.
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/", prerender: { enabled: true } }],
        }
      : { server: { entry: "server" } }),
  },
});
