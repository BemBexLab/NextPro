const fs = require('fs');
const path = require('path');

// Load services data
const servicesModulePath = path.join(__dirname, '..', 'src', 'data', 'services.ts');

function loadServices() {
  // Importing a TS file directly at runtime isn't straightforward; attempt a simple parse fallback.
  try {
    const ts = fs.readFileSync(servicesModulePath, 'utf8');
    const match = ts.match(/export const services = \[([\s\S]*?)\];/m);
    if (!match) return [];
    const arrayText = '[' + match[1] + ']';
    // Very small, forgiving transform to convert TS object shorthand to valid JSON-ish
    const jsonLike = arrayText
      .replace(/(\n|\r)/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/(\w+):/g, '"$1":') // key: -> "key":
      .replace(/(\'|\`)??\/?([\w\-\/\.]+?)(\'|\`)/g, '"$2"') // 'strings' -> "strings"
      .replace(/,\s*\}/g, '}')
      .replace(/,\s*\]/g, ']');

    // Very naive eval fallback — only run locally in trusted environment
    // eslint-disable-next-line no-eval
    const services = eval(jsonLike);
    return services.map(s => ({ id: s.id }));
  } catch (e) {
    console.error('Failed to parse services.ts, falling back to empty list', e.message);
    return [];
  }
}

const domain = 'https://www.webfoundersusa.com';

function buildSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) => `  <url>\n    <loc>${domain}${u}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;
}

function main() {
  const services = loadServices();

  const staticUrls = ['/', '/about-us/', '/contact-us/', '/service/'];
  const serviceUrls = services.map((s) => `/service/${s.id}/`);

  const urls = staticUrls.concat(serviceUrls);
  const xml = buildSitemap(urls);

  const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log('Generated sitemap.xml with', urls.length, 'URLs');
}

main();
