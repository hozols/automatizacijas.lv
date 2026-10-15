import { describe, it, expect } from 'vitest';
import { routesFromSitemap, checkDocument, stripRuntimeScripts, outputPathFor, normalizeStyleAttributes } from './prerender-core.mjs';

describe('routesFromSitemap', () => {
  it('extracts pathnames, dedupes, root first', () => {
    const xml = `<urlset><url><loc>https://automatizacijas.lv/blog</loc></url><url><loc>https://automatizacijas.lv/</loc></url><url><loc>https://automatizacijas.lv/blog</loc></url></urlset>`;
    expect(routesFromSitemap(xml)).toEqual(['/', '/blog']);
  });
});

describe('checkDocument', () => {
  const good = `<html><head><title>T</title><meta name="description" content="d"></head><body><h1>H</h1></body></html>`;
  it('accepts a complete document', () => {
    expect(checkDocument(good, '/x')).toEqual([]);
  });
  it('accepts a title with attributes, as react-helmet renders it', () => {
    expect(checkDocument(good.replace('<title>', '<title data-rh="true">'), '/x')).toEqual([]);
  });
  it('reports missing title, description, h1', () => {
    const errs = checkDocument('<html><head></head><body></body></html>', '/x');
    expect(errs.join(' ')).toMatch(/title/);
    expect(errs.join(' ')).toMatch(/description/);
    expect(errs.join(' ')).toMatch(/h1/);
  });
  it('reports more than one h1', () => {
    expect(checkDocument(good.replace('<h1>H</h1>', '<h1>H</h1><h1>G</h1>'), '/x').join(' ')).toMatch(/one h1/);
  });
});

describe('stripRuntimeScripts', () => {
  it('removes analytics scripts that were not in the shell', () => {
    const html = `<head><script async src="https://www.googletagmanager.com/gtag/js?id=G-1"></script><script src="https://www.clarity.ms/tag/abc"></script></head>`;
    const out = stripRuntimeScripts(html, new Set(['https://www.googletagmanager.com/gtag/js?id=G-1']));
    expect(out).toContain('gtag/js?id=G-1');
    expect(out).not.toContain('clarity.ms');
  });
});

describe('outputPathFor', () => {
  it('maps / to dist/index.html and /a/b to dist/a/b/index.html', () => {
    expect(outputPathFor('/', 'dist')).toBe('dist/index.html');
    expect(outputPathFor('/a/b', 'dist')).toBe('dist/a/b/index.html');
  });
});

describe('normalizeStyleAttributes', () => {
  it("rewrites browser-serialised style attributes into React's name:value form", () => {
    const html = `<div style="pointer-events: none;"><p style="opacity: 1; transition: opacity 300ms ease;">x</p></div>`;
    expect(normalizeStyleAttributes(html)).toBe(
      `<div style="pointer-events:none"><p style="opacity:1;transition:opacity 300ms ease">x</p></div>`,
    );
  });
  it('leaves other attributes alone', () => {
    expect(normalizeStyleAttributes(`<a title="a: b;">y</a>`)).toBe(`<a title="a: b;">y</a>`);
  });
});
