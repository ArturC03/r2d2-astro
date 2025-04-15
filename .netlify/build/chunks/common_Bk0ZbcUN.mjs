import { p as createAstro, a as createComponent, v as maybeRenderHead, u as unescapeHTML, b as renderTemplate, J as renderSlot, r as renderComponent, w as addAttribute, K as renderScript, F as Fragment, O as defineStyleVars, f as AstroUserError, s as spreadAttributes, P as renderHead } from "./astro/server_D8491iH5.mjs";
import { p as printHref } from "./index.f9f29e0a_CsX5mfSS.mjs";
import { c as $$Icon, d as $$LinkButton, e as $$Badge } from "./Code_BzKIzj_O.mjs";
import { s as starlightConfig, a as stripTrailingSlash, b as stripLeadingSlash, c as arrayType, o as objectType, d as stringType, r as recordType, e as enumType, f as unionType, h as booleanType, i as undefinedType, j as stripHtmlExtension, k as ensureHtmlExtension, l as ensureTrailingSlash, p as project, B as BuiltInDefaultLocale, m as getCollection, n as getCollectionPathFromRoot, q as pickLang, t as stripLeadingAndTrailingSlashes, v as ensureLeadingSlash, w as stripExtension, x as renderEntry, y as getEntry, u as useTranslations } from "./translations_Cbjl86mM.mjs";
import { $ as $$Image } from "./_astro_assets_Dnivtj3x.mjs";
const $$Astro$t = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-lfzdotvv">${unescapeHTML(banner.content)}</div>`}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Banner.astro", void 0);
const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-fpwayq6n"> <div class="sl-container astro-fpwayq6n">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);
const $$Astro$s = createAstro();
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-cvn2alyj"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-cvn2alyj" })} <span class="astro-cvn2alyj">${label}</span> </p> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);
const $$Astro$r = createAstro();
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);
const $$Astro$q = createAstro();
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);
const $$Astro$p = createAstro();
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl } = Astro2.locals.starlightRoute;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex print:hidden astro-rjmnvgik">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-rjmnvgik" })}${Astro2.locals.t("page.editLink")}</a>`}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);
const $$Astro$o = createAstro();
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.locals.starlightRoute;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${Astro2.locals.t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);
const $$Astro$n = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { dir, pagination } = Astro2.locals.starlightRoute;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links print:hidden astro-f7d5qm3g"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-f7d5qm3g"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-f7d5qm3g" })} <span class="astro-f7d5qm3g"> ${Astro2.locals.t("page.previousLink")} <br class="astro-f7d5qm3g"> <span class="link-title astro-f7d5qm3g">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-f7d5qm3g"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-f7d5qm3g" })} <span class="astro-f7d5qm3g"> ${Astro2.locals.t("page.nextLink")} <br class="astro-f7d5qm3g"> <span class="link-title astro-f7d5qm3g">${next.label}</span> </span> </a>`} </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);
const $$Astro$m = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-ckipz53l"> <div class="meta sl-flex astro-ckipz53l"> ${renderComponent($$result, "EditLink", $$EditLink, { "class": "astro-ckipz53l" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { "class": "astro-ckipz53l" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { "class": "astro-ckipz53l" })} ${starlightConfig.credits} </footer> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Footer.astro", void 0);
const version = "0.32.6";
const base = stripTrailingSlash("/");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}
const HeadConfigSchema = () => arrayType(
  objectType({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: enumType(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: recordType(unionType([stringType(), booleanType(), undefinedType()])).default({}),
    /** Content to place inside the tag (optional). */
    content: stringType().default("")
  })
).default([]);
const HeadSchema = HeadConfigSchema();
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(({ attrs }) => attrs.rel === "canonical");
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}
const $$Astro$l = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Head;
  const { entry, lang, siteTitle } = Astro2.locals.starlightRoute;
  const { data } = entry;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonical?.href } },
    { tag: "meta", attrs: { name: "generator", content: Astro2.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonical?.href } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (Astro2.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  if (starlightConfig.social?.twitter) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(starlightConfig.social.twitter.url).pathname
      }
    });
  }
  const head = createHead(headDefaults, starlightConfig.head, data.head);
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Head.astro", void 0);
const $$Astro$k = createAstro();
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-2gfzqyqe"> <span class="sr-only astro-2gfzqyqe">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-2gfzqyqe" })} <select${addAttribute(Astro2.props.value, "value")} autocomplete="off" class="astro-2gfzqyqe"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-2gfzqyqe">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-2gfzqyqe" })} </label> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Select.astro", void 0);
const $$Astro$j = createAstro();
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  return renderTemplate`${starlightConfig.isMultilingual}${renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$i = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  const dataAttributes = { "data-translations": JSON.stringify(pagefindTranslations) };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n<\/script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "class": (Astro2.props.class ?? "") + " astro-pvlkgj4l", ...dataAttributes }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-pvlkgj4l"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-pvlkgj4l" })} <span class="sl-hidden md:sl-block astro-pvlkgj4l" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-pvlkgj4l" style="display: none;"> <kbd class="astro-pvlkgj4l">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-pvlkgj4l">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-pvlkgj4l"> <div class="dialog-frame sl-flex astro-pvlkgj4l">  <button data-close-modal class="sl-flex md:sl-hidden astro-pvlkgj4l"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-pvlkgj4l"> <div id="starlight__search" class="astro-pvlkgj4l"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Search.astro", void 0);
const logos = {};
const $$Astro$h = createAstro();
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-lqumgxgw"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-lqumgxgw" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-lqumgxgw"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-lqumgxgw"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-lqumgxgw"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);
const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = Object.entries(starlightConfig.social || {});
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-wrcb4ogi" }, { "default": ($$result2) => renderTemplate`${links.map(([platform, { label, url }]) => renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} rel="me" class="sl-flex astro-wrcb4ogi"><span class="sr-only astro-wrcb4ogi">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": platform, "class": "astro-wrcb4ogi" })}</a>`)}` })}`}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$g = createAstro();
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-woi4alwz"> <div class="title-wrapper sl-flex astro-woi4alwz"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { "class": "astro-woi4alwz" })} </div> <div class="sl-flex print:hidden astro-woi4alwz"> ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { "class": "astro-woi4alwz" })}`} </div> <div class="sl-hidden md:sl-flex print:hidden right-group astro-woi4alwz"> <div class="sl-flex social-icons astro-woi4alwz"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-woi4alwz" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-woi4alwz" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-woi4alwz" })} </div> </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Header.astro", void 0);
const PAGE_TITLE_ID = "_top";
const $$Astro$f = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-5yzgwnfv"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-5yzgwnfv"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-5yzgwnfv" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-5yzgwnfv">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-5yzgwnfv"> <div class="sl-flex copy astro-5yzgwnfv"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-5yzgwnfv">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-5yzgwnfv">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-5yzgwnfv"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-5yzgwnfv"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Hero.astro", void 0);
const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);
const $$Astro$e = createAstro();
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-mdzk6q42" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-mdzk6q42"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "astro-mdzk6q42" })} </button> ` })} ${renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);
const $$Astro$d = createAstro();
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-7aajswjt"> <header class="header astro-7aajswjt">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-7aajswjt"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-7aajswjt" })} <div id="starlight__sidebar" class="sidebar-pane astro-7aajswjt"> <div class="sidebar-content sl-flex astro-7aajswjt"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-7aajswjt">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);
const $$Astro$c = createAstro();
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-doqn267l"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-doqn267l"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-doqn267l"${addAttribute($$definedVars, "style")}> <span class="astro-doqn267l"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-doqn267l" })}`} </li>`)} </ul> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);
const $$Astro$b = createAstro();
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-yq47kxqf" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-yq47kxqf"><details id="starlight__mobile-toc" class="astro-yq47kxqf"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-yq47kxqf"><div class="toggle sl-flex astro-yq47kxqf">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-yq47kxqf", "size": "1rem" })}</div><span class="display-current astro-yq47kxqf"></span></summary><div class="dropdown astro-yq47kxqf">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-yq47kxqf" })}</div></details></nav>` })}`}${renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);
const $$Astro$a = createAstro();
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);
const $$Astro$9 = createAstro();
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-na3ps6sg" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-na3ps6sg">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-na3ps6sg" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-na3ps6sg"><div class="sl-container astro-na3ps6sg">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-na3ps6sg" })}</div></div>` })}`}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);
const $$Astro$8 = createAstro();
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-5r5qzoub">${Astro2.locals.starlightRoute.entry.data.title}</h1> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);
const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-gzez225z"> <div class="sl-flex social-icons astro-gzez225z"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-gzez225z" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-gzez225z" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-gzez225z" })} </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);
const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}
const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});
function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}
function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.slice(0, -6) : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}
validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", project)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}
const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", project);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale);
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-3olo4h3u" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);
const $$Astro$6 = createAstro();
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);
const $$Astro$5 = createAstro();
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-6bvccjcp"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-6bvccjcp"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-6bvccjcp"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-6bvccjcp">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-6bvccjcp", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-6bvccjcp"> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-6bvccjcp" })} <summary class="astro-6bvccjcp"> <div class="group-label astro-6bvccjcp"> <span class="large astro-6bvccjcp">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-6bvccjcp", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-6bvccjcp", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-6bvccjcp" })} </details>`} </li>`)} </ul> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);
const $$Astro$4 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, {})} </div>`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);
const $$Astro$3 = createAstro();
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-ptykd4kn">${Astro2.locals.t("skipLink.label")}</a> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);
const $$Astro$2 = createAstro();
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-7z7isedm"> ${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-7z7isedm"> <div class="right-sidebar astro-7z7isedm"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-7z7isedm">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);
const $$Astro$1 = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-4eqvvxnp" })}> <head>${renderComponent($$result, "Head", $$Head, { "class": "astro-4eqvvxnp" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-4eqvvxnp" })}<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">${renderHead()}</head> <body class="astro-4eqvvxnp"> ${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-4eqvvxnp" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-4eqvvxnp" }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-4eqvvxnp" }, { "default": ($$result3) => renderTemplate`  <main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-4eqvvxnp" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>  ${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-4eqvvxnp" })} ${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-4eqvvxnp" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-4eqvvxnp" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-4eqvvxnp" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { "class": "astro-4eqvvxnp" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-4eqvvxnp" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-4eqvvxnp" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-4eqvvxnp" })} ${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-4eqvvxnp" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-4eqvvxnp" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-4eqvvxnp" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-4eqvvxnp" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { "class": "astro-4eqvvxnp" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-4eqvvxnp" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-4eqvvxnp" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-4eqvvxnp" })}`}` })} </body></html>`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/components/Page.astro", void 0);
function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}
const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};
const api = makeAPI([["src/content/docs/examples/index.mdx", 1744753016e3], ["src/content/docs/guides/advanced.mdx", 1744753016e3], ["src/content/docs/guides/basics.mdx", 1744753016e3], ["src/content/docs/guides/installation.mdx", 1744753016e3], ["src/content/docs/guides/js-interop.mdx", 1744753016e3], ["src/content/docs/guides/quick-start.mdx", 1744753016e3], ["src/content/docs/index.mdx", 1744753016e3], ["src/content/docs/reference/control-flow.mdx", 1744753016e3], ["src/content/docs/reference/error-handling.mdx", 1744753016e3], ["src/content/docs/reference/functions.mdx", 1744753016e3], ["src/content/docs/reference/introduction.mdx", 1744753016e3], ["src/content/docs/reference/modules.mdx", 1744753016e3], ["src/content/docs/reference/stdlib.mdx", 1744753016e3], ["src/content/docs/reference/types.mdx", 1744753016e3], ["src/content/docs/guides/example.md", 1743935635e3], ["src/content/docs/reference/example.md", 1743935635e3]]);
const getNewestCommitDate = api.getNewestCommitDate;
async function useRouteData(context) {
  const route = "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
  const { Content, headings } = await renderEntry(route.entry);
  const routeData = generateRouteData({ props: { ...route, headings }, url: context.url });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  url
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}
function klona(x) {
  if (typeof x !== "object") return x;
  var k, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    if (x.constructor !== Object && typeof x.constructor === "function") {
      tmp = new x.constructor();
      for (k in x) {
        if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
          tmp[k] = klona(x[k]);
        }
      }
    } else {
      tmp = {};
      for (k in x) {
        if (k === "__proto__") {
          Object.defineProperty(tmp, k, {
            value: klona(x[k]),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          tmp[k] = klona(x[k]);
        }
      }
    }
    return tmp;
  }
  if (str === "[object Array]") {
    k = x.length;
    for (tmp = Array(k); k--; ) {
      tmp[k] = klona(x[k]);
    }
    return tmp;
  }
  if (str === "[object Date]") {
    return /* @__PURE__ */ new Date(+x);
  }
  if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
    tmp.lastIndex = x.lastIndex;
    return tmp;
  }
  return x;
}
const routeMiddleware = [];
async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}
const $$Astro = createAstro();
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  await attachRouteDataAndRunMiddleware(Astro2, await useRouteData(Astro2));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "/home/rutra/Documentos/CODE/PAP/r2d2-astro/node_modules/.pnpm/@astrojs+starlight@0.32.6_astro@5.7.0_@netlify+blobs@8.1.2_jiti@1.21.7_rollup@4.40.0_typescript@5.8.3_yaml@2.7.1_/node_modules/@astrojs/starlight/routes/common.astro", void 0);
export {
  $$Common as $,
  paths as p,
  slugToLocale$1 as s
};
