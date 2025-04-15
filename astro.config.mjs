// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "R2D2 Documentation",
      social: {
        github: "https://github.com/ArturC03/r2d2",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", link: "/" },
            { label: "Installation", link: "/guides/installation/" },
            { label: "Quick Start", link: "/guides/quick-start/" },
          ],
        },
        {
          label: "Language Guide",
          items: [
            { label: "Basic Concepts", link: "/guides/basics/" },
            { label: "Types & Variables", link: "/reference/types/" },
            { label: "Functions", link: "/reference/functions/" },
            { label: "Modules & Interfaces", link: "/reference/modules/" },
            { label: "Control Flow", link: "/reference/control-flow/" },
            { label: "Error Handling", link: "/reference/error-handling/" },
          ],
        },
        {
          label: "Advanced Topics",
          items: [
            { label: "Advanced Features", link: "/guides/advanced/" },
            { label: "JavaScript Interop", link: "/guides/js-interop/" },
            { label: "Memory Management", link: "/guides/memory/" },
            { label: "Performance", link: "/guides/performance/" },
            { label: "Design Patterns", link: "/guides/patterns/" },
          ],
        },
        {
          label: "Standard Library",
          items: [
            { label: "Overview", link: "/reference/stdlib/" },
            { label: "Core Types", link: "/reference/stdlib/core/" },
            { label: "Collections", link: "/reference/stdlib/collections/" },
            { label: "IO & System", link: "/reference/stdlib/io/" },
            { label: "Async", link: "/reference/stdlib/async/" },
          ],
        },
        {
          label: "Tools & Ecosystem",
          items: [
            { label: "Package Manager", link: "/tools/package-manager/" },
            { label: "Build Tools", link: "/tools/build/" },
            { label: "IDE Support", link: "/tools/ide/" },
            { label: "Testing", link: "/tools/testing/" },
          ],
        },
        {
          label: "Examples",
          items: [
            { label: "Basic Examples", link: "/examples/" },
            { label: "Web Applications", link: "/examples/web/" },
            { label: "Node.js Apps", link: "/examples/node/" },
            { label: "Libraries", link: "/examples/libraries/" },
          ],
        },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});

