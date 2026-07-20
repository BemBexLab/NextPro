const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
  });

  await page.goto("http://localhost:3015/service-testing/", {
    waitUntil: "networkidle",
  });

  const data = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const imgs = Array.from(document.querySelectorAll("img")).map((img, i) => ({
      i,
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
      rect: img.getBoundingClientRect().toJSON(),
      opacity: getComputedStyle(img).opacity,
      display: getComputedStyle(img).display,
      visibility: getComputedStyle(img).visibility,
    }));

    return {
      h1: h1 ? h1.getBoundingClientRect().toJSON() : null,
      imgs,
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
