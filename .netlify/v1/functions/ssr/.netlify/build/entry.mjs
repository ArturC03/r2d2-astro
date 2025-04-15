import { renderers } from "./renderers.mjs";
import { s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DYQ_v7bF.mjs";
import { manifest } from "./manifest_DTz-wUju.mjs";
import { createExports } from "@astrojs/netlify/ssr-function.js";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/404.astro.mjs");
const _page2 = () => import("./pages/_---slug_.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
  ["node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/routes/static/index.astro", _page2]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "83ecc74e-dd5c-4757-b64a-4ebc1b796741"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
