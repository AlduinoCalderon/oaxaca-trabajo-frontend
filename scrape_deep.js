const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('/Users/adrialdo/Desktop/oaxaca_raw.html', 'utf8');
const $ = cheerio.load(html);

console.log("--- Fonts ---");
$('link[rel="stylesheet"]').each((i, el) => {
  const href = $(el).attr('href');
  if (href && (href.includes('font') || href.includes('fonts.googleapis.com'))) {
    console.log(href);
  }
});

console.log("\n--- Texts and Headings ---");
$('h1, h2, h3, h4').each((i, el) => {
  console.log($(el).prop('tagName') + ": " + $(el).text().trim());
});

console.log("\n--- News/Articles ---");
$('.noticia, article, .post, .entry-content').each((i, el) => {
  const title = $(el).find('h1, h2, h3').first().text().trim();
  const summary = $(el).find('p').first().text().trim();
  const img = $(el).find('img').attr('src');
  if (title || summary) {
    console.log(`[ARTICLE] Title: ${title} | Summary: ${summary} | Img: ${img}`);
  }
});

console.log("\n--- Images not matched as logos ---");
$('img').each((i, el) => {
  const src = $(el).attr('src');
  if (src && !src.includes('logo') && !src.includes('icon')) {
    console.log(src);
  }
});
