#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();

const pages = [
  {
    dir: 'tripPlan/chuanxi',
    indexFile: 'index.html',
    title: '川西与九寨沟攻略导航',
    eyebrow: 'Trip Plan / Chuanxi',
    summary:
      '这里收纳了当前目录下除本页外的全部四川旅行攻略页面，包含川西小环线、九寨沟自由行、预算清单与包车避坑内容。',
    backHref: '../index.html',
    backLabel: '返回 tripPlan 首页',
  },
];

async function main() {
  for (const page of pages) {
    await generateIndex(page);
  }
}

async function generateIndex(page) {
  const dirPath = path.join(rootDir, page.dir);
  const fileNames = await fs.readdir(dirPath);
  const htmlFiles = fileNames
    .filter((fileName) => fileName.endsWith('.html'))
    .filter((fileName) => !fileName.startsWith('.'))
    .filter((fileName) => fileName !== page.indexFile)
    .sort((left, right) => left.localeCompare(right, 'zh-Hans-CN-u-co-pinyin', { numeric: true }));

  const items = [];
  for (const fileName of htmlFiles) {
    const filePath = path.join(dirPath, fileName);
    const title = await readHtmlTitle(filePath);
    items.push({
      fileName,
      title,
    });
  }

  const html = renderPage(page, items);
  const indexPath = path.join(dirPath, page.indexFile);
  await fs.writeFile(indexPath, html, 'utf8');
}

async function readHtmlTitle(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  const match = content.match(/<title>([\s\S]*?)<\/title>/i);

  if (!match) {
    return path.basename(filePath, '.html');
  }

  return decodeHtml(match[1].trim());
}

function renderPage(page, items) {
  const listMarkup = items
    .map(
      (item) => `        <li>
          <a href="${escapeHtml(item.fileName)}">
            <span class="item-title">${escapeHtml(item.title)}</span>
            <span class="item-file">${escapeHtml(item.fileName)}</span>
          </a>
        </li>`,
    )
    .join('\n');

  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(page.title)}</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f6f1e8;
        --panel: rgba(255, 252, 247, 0.9);
        --text: #1f2a1f;
        --muted: #5d6c61;
        --accent: #1f6f50;
        --accent-2: #b98538;
        --border: rgba(31, 111, 80, 0.18);
        --shadow: 0 20px 60px rgba(44, 62, 45, 0.12);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
          sans-serif;
        color: var(--text);
        background:
          radial-gradient(circle at top, rgba(185, 133, 56, 0.18), transparent 32%),
          linear-gradient(160deg, #f7f3eb 0%, #eef5ef 100%);
      }

      main {
        width: min(960px, calc(100% - 32px));
        margin: 0 auto;
        padding: 48px 0 64px;
      }

      .hero {
        padding: 32px;
        border: 1px solid var(--border);
        border-radius: 28px;
        background: var(--panel);
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
      }

      .eyebrow {
        margin: 0 0 12px;
        color: var(--accent);
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      h1 {
        margin: 0;
        font-size: clamp(32px, 5vw, 54px);
        line-height: 1.05;
      }

      .summary {
        margin: 18px 0 0;
        max-width: 680px;
        color: var(--muted);
        font-size: 17px;
        line-height: 1.7;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 24px;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 18px;
        border-radius: 999px;
        border: 1px solid var(--border);
        color: var(--text);
        text-decoration: none;
        font-weight: 600;
        background: rgba(255, 255, 255, 0.72);
      }

      .button.primary {
        color: #fff;
        background: linear-gradient(135deg, var(--accent), #2d8c67);
      }

      .list {
        margin: 24px 0 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 14px;
      }

      .list a {
        display: block;
        padding: 18px 20px;
        border: 1px solid var(--border);
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.78);
        color: inherit;
        text-decoration: none;
        box-shadow: 0 10px 30px rgba(44, 62, 45, 0.06);
        transition:
          transform 0.18s ease,
          box-shadow 0.18s ease,
          border-color 0.18s ease;
      }

      .list a:hover {
        transform: translateY(-2px);
        border-color: rgba(31, 111, 80, 0.36);
        box-shadow: 0 16px 38px rgba(44, 62, 45, 0.12);
      }

      .item-title {
        display: block;
        font-size: 18px;
        font-weight: 700;
      }

      .item-file {
        display: block;
        margin-top: 6px;
        color: var(--muted);
        font-size: 13px;
      }

      .footer {
        margin-top: 20px;
        color: var(--muted);
        font-size: 14px;
      }

      @media (max-width: 640px) {
        main {
          width: min(100% - 20px, 960px);
          padding-top: 20px;
          padding-bottom: 36px;
        }

        .hero {
          padding: 22px;
          border-radius: 22px;
        }

        .list a {
          padding: 16px;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="summary">
          ${escapeHtml(page.summary)}
        </p>
        <div class="actions">
          <a class="button primary" href="${escapeHtml(page.backHref)}">${escapeHtml(page.backLabel)}</a>
        </div>
      </section>

      <ul class="list">
${listMarkup}
      </ul>

      <p class="footer">共 ${items.length} 个攻略页面。</p>
    </main>
  </body>
</html>
`;
}

function decodeHtml(value) {
  return value
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
