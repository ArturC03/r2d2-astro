import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from "./astro/server_D8491iH5.mjs";
import { $ as $$CardGrid, a as $$Card } from "./Code_BzKIzj_O.mjs";
const frontmatter = {
  "title": "R2D2 Programming Language",
  "description": "A modern, safe, and expressive programming language for building reliable applications",
  "template": "splash",
  "hero": {
    "tagline": "A modern, unsafe, and expressive programming language for building unreliable applications",
    "image": {
      "file": "../../assets/rexDino.svg"
    },
    "actions": [{
      "text": "Get Started",
      "link": "/guides/quick-start/",
      "icon": "right-arrow",
      "variant": "primary"
    }, {
      "text": "View on GitHub",
      "link": "https://github.com/ArturC03/r2d2",
      "icon": "github",
      "variant": "secondary"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-r2d2",
    "text": "Why R2D2?"
  }, {
    "depth": 2,
    "slug": "quick-example",
    "text": "Quick Example"
  }, {
    "depth": 2,
    "slug": "get-started",
    "text": "Get Started"
  }];
}
function _createMdxContent(props) {
  const { Fragment: Fragment$1 } = props.components || {};
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": '<h2 id="why-r2d2">Why R2D2?</h2>\n'
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Safe by Design",
        icon: "shield-check",
        "set:html": "<p>Built-in error handling, null safety, and strong type system help prevent common programming mistakes.</p>"
      }), createVNode($$Card, {
        title: "Modern Features",
        icon: "rocket",
        "set:html": "<p>Async/await, pattern matching, and first-class functions make complex tasks simple.</p>"
      }), createVNode($$Card, {
        title: "Expressive Syntax",
        icon: "pencil",
        "set:html": "<p>Clean, readable syntax that focuses on developer productivity and code maintainability.</p>"
      }), createVNode($$Card, {
        title: "Reliable Performance",
        icon: "speedometer",
        "set:html": "<p>Efficient compilation and runtime optimizations ensure your code runs fast.</p>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": '<h2 id="quick-example">Quick Example</h2>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.tm3va.css"><script type="module" src="/_astro/ec.8zarh.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">module</span><span style="--0:#D6DEEB;--1:#403F53"> hello {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">fn </span><span style="--0:#82AAFF;--1:#3B61B0">greet</span><span style="--0:#D6DEEB;--1:#403F53">(name string) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">match </span><span style="--0:#82AAFF;--1:#3B61B0">validate_name</span><span style="--0:#D6DEEB;--1:#403F53">(name) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#82AAFF;--1:#3B61B0">ok</span><span style="--0:#D6DEEB;--1:#403F53">(valid_name) </span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--0:#D6DEEB;--1:#403F53"> console</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">log</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">Hello,</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, valid_name),</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#82AAFF;--1:#3B61B0">error</span><span style="--0:#D6DEEB;--1:#403F53">(msg) </span><span style="--0:#C792EA;--1:#8844AE">=></span><span style="--0:#D6DEEB;--1:#403F53"> console</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">error</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">Error:</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, msg)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">fn </span><span style="--0:#82AAFF;--1:#3B61B0">validate_name</span><span style="--0:#D6DEEB;--1:#403F53">(name string) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">if</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">length</span><span style="--0:#D6DEEB;--1:#403F53">() </span><span style="--0:#C792EA;--1:#8844AE">==</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">error</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">Name cannot be empty</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">ok</span><span style="--0:#D6DEEB;--1:#403F53">(name);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">\n</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">fn </span><span style="--0:#82AAFF;--1:#3B61B0">main</span><span style="--0:#D6DEEB;--1:#403F53">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#82AAFF;--1:#3B61B0">greet</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#984E4D">R2D2</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">);  </span><span style="--0:#919F9F;--1:#5D6376">// Prints: Hello, R2D2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#82AAFF;--1:#3B61B0">greet</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">""</span><span style="--0:#D6DEEB;--1:#403F53">);      </span><span style="--0:#919F9F;--1:#5D6376">// Prints: Error: Name cannot be empty</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="module hello {  fn greet(name string) {    match validate_name(name) {      ok(valid_name) => console.log(&#x22;Hello,&#x22;, valid_name),      error(msg) => console.error(&#x22;Error:&#x22;, msg)    }  }  fn validate_name(name string) {    if name.length() == 0 {      return error(&#x22;Name cannot be empty&#x22;);    }    return ok(name);  }  fn main() {    greet(&#x22;R2D2&#x22;);  // Prints: Hello, R2D2    greet(&#x22;&#x22;);      // Prints: Error: Name cannot be empty  }}"><div></div></button></div></figure></div>\n<h2 id="get-started">Get Started</h2>\n<p>Ready to try R2D2? Follow our quick start guide to write your first program:</p>\n'
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Installation",
        icon: "download",
        "set:html": '<p>Learn how to install R2D2 on your system.\n<a href="/guides/installation/">Install Now →</a></p>'
      }), createVNode($$Card, {
        title: "Quick Start",
        icon: "open-book",
        "set:html": '<p>Write your first R2D2 program in minutes.\n<a href="/guides/quick-start/">Start Learning →</a></p>'
      }), createVNode($$Card, {
        title: "Examples",
        icon: "document",
        "set:html": '<p>Explore example projects and code snippets.\n<a href="/examples/">View Examples →</a></p>'
      }), createVNode($$Card, {
        title: "Documentation",
        icon: "document",
        "set:html": '<p>Dive into the comprehensive language reference.\n<a href="/reference/introduction/">Read Docs →</a></p>'
      })]
    })]
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
const url = "src/content/docs/index.mdx";
const file = "/home/rutra/Documentos/CODE/PAP/r2d2-astro/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment, ...props.components }
});
Content[Symbol.for("mdx-component")] = true;
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/rutra/Documentos/CODE/PAP/r2d2-astro/src/content/docs/index.mdx";
__astro_tag_component__(Content, "astro:jsx");
export {
  Content,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  url
};
