import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server_D8491iH5.mjs";
const frontmatter = {
  "title": "Installing R2D2",
  "description": "Learn how to install and set up R2D2 on your system"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "system-requirements",
    "text": "System Requirements"
  }, {
    "depth": 2,
    "slug": "installation-steps",
    "text": "Installation Steps"
  }, {
    "depth": 3,
    "slug": "1-install-via-npm",
    "text": "1. Install via npm"
  }, {
    "depth": 3,
    "slug": "2-verify-installation",
    "text": "2. Verify Installation"
  }, {
    "depth": 3,
    "slug": "3-create-a-new-project",
    "text": "3. Create a New Project"
  }, {
    "depth": 3,
    "slug": "4-project-setup",
    "text": "4. Project Setup"
  }, {
    "depth": 2,
    "slug": "ide-support",
    "text": "IDE Support"
  }, {
    "depth": 2,
    "slug": "next-steps",
    "text": "Next Steps"
  }, {
    "depth": 2,
    "slug": "troubleshooting",
    "text": "Troubleshooting"
  }, {
    "depth": 3,
    "slug": "common-issues",
    "text": "Common Issues"
  }, {
    "depth": 4,
    "slug": "permission-errors",
    "text": "Permission Errors"
  }, {
    "depth": 4,
    "slug": "path-issues",
    "text": "Path Issues"
  }, {
    "depth": 3,
    "slug": "getting-help",
    "text": "Getting Help"
  }];
}
function _createMdxContent(props) {
  const { Fragment: Fragment2 } = props.components || {};
  if (!Fragment2) _missingMdxReference("Fragment");
  return createVNode(Fragment2, {
    "set:html": '<h2 id="system-requirements">System Requirements</h2>\n<p>Before installing R2D2, ensure your system meets these requirements:</p>\n<ul>\n<li>Node.js 16.0 or higher</li>\n<li>npm 7.0 or higher</li>\n<li>Git (for version control)</li>\n</ul>\n<h2 id="installation-steps">Installation Steps</h2>\n<h3 id="1-install-via-npm">1. Install via npm</h3>\n<p>The easiest way to install R2D2 is through npm:</p>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.tm3va.css"><script type="module" src="/_astro/ec.8zarh.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">r2d2-lang</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -g r2d2-lang"><div></div></button></div></figure></div>\n<h3 id="2-verify-installation">2. Verify Installation</h3>\n<p>Check that R2D2 was installed correctly:</p>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">r2d2</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--version</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="r2d2 --version"><div></div></button></div></figure></div>\n<h3 id="3-create-a-new-project">3. Create a New Project</h3>\n<p>Create a new R2D2 project:</p>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">r2d2</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">my-project</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3B61B0">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">my-project</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="r2d2 new my-projectcd my-project"><div></div></button></div></figure></div>\n<p>This will create a new directory with the following structure:</p>\n<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="plaintext"><code><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">my-project/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">├── src/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">│   └── main.r2d2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">├── package.json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">├── r2d2.config.json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#d6deeb;--1:#403f53">└── README.md</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="my-project/├── src/│   └── main.r2d2├── package.json├── r2d2.config.json└── README.md"><div></div></button></div></figure></div>\n<h3 id="4-project-setup">4. Project Setup</h3>\n<p>Install project dependencies:</p>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install"><div></div></button></div></figure></div>\n<h2 id="ide-support">IDE Support</h2>\n<p>R2D2 provides excellent IDE support through language server extensions:</p>\n<ul>\n<li>VS Code: <a href="vscode:extension/r2d2-lang">R2D2 Language Support</a></li>\n<li>Vim/Neovim: Use with <a href="https://github.com/r2d2-lang/coc-r2d2">coc-r2d2</a></li>\n<li>Other editors: Generic LSP support</li>\n</ul>\n<h2 id="next-steps">Next Steps</h2>\n<p>Once you have R2D2 installed, you can:</p>\n<ol>\n<li>Follow the <a href="/guides/getting-started/">Getting Started</a> guide</li>\n<li>Try the <a href="/guides/tutorial/">Interactive Tutorial</a></li>\n<li>Browse <a href="/examples/">Example Projects</a></li>\n</ol>\n<h2 id="troubleshooting">Troubleshooting</h2>\n<h3 id="common-issues">Common Issues</h3>\n<h4 id="permission-errors">Permission Errors</h4>\n<p>If you encounter permission errors during global installation:</p>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">sudo</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">r2d2-lang</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sudo npm install -g r2d2-lang"><div></div></button></div></figure></div>\n<h4 id="path-issues">Path Issues</h4>\n<p>If the <code dir="auto">r2d2</code> command is not found, ensure your npm global bin directory is in your PATH.</p>\n<h3 id="getting-help">Getting Help</h3>\n<p>If you run into problems:</p>\n<ol>\n<li>Check our <a href="/guides/faq/">FAQ</a></li>\n<li>Visit our <a href="https://github.com/ArturC03/r2d2/issues">GitHub Issues</a></li>\n<li>Join our <a href="https://discord.gg/r2d2-lang">Discord Community</a></li>\n</ol>'
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/guides/installation.mdx";
const file = "/home/rutra/Documentos/CODE/PAP/r2d2-astro/src/content/docs/guides/installation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rutra/Documentos/CODE/PAP/r2d2-astro/src/content/docs/guides/installation.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
