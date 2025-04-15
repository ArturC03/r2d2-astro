const astroConfig = { "base": "/", "root": "file:///home/rutra/Documentos/CODE/PAP/r2d2-astro/", "srcDir": "file:///home/rutra/Documentos/CODE/PAP/r2d2-astro/src/", "build": { "assets": "_astro" }, "markdown": { "shikiConfig": { "langs": [] } } };
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
  ecConfigFileOptions = (await import("./ec-config_D_goxUqj.mjs")).default;
} catch (e) {
  console.error('*** Failed to load Expressive Code config file "file:///home/rutra/Documentos/CODE/PAP/r2d2-astro/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}
export {
  astroConfig,
  ecConfigFileOptions,
  ecIntegrationOptions
};
