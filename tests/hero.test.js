import test from 'node:test';import assert from 'node:assert/strict';import {templates,createConfig,safeUrl,price} from '../src/model.js';import {heroDocument} from '../src/hero.js';
test('all eighteen catalogue templates generate distinct portable output',()=>{assert.equal(templates.length,18);assert.equal(new Set(templates.map(x=>x.id)).size,18);for(const t of templates){const c=createConfig(t);const html=heroDocument(c);assert.ok(html.includes(`hf-${t.id}`));assert.ok(html.includes(t.headline));assert.equal(c.style.accent,'#eacf94');assert.ok(html.includes('prefers-reduced-motion'))}});
test('user content is escaped and script URLs cannot become links',()=>{const c=createConfig(templates[0]);c.content.headline='<script>alert(1)</script>';c.content.primaryCta.href='javascript:alert(1)';const html=heroDocument(c);assert.ok(html.includes('&lt;script&gt;'));assert.ok(!html.includes('href="javascript:'));for(const u of ['javascript:alert(1)','//evil.test','data:text/html,x'])assert.equal(safeUrl(u),'#');assert.equal(safeUrl('https://example.com'),'https://example.com')});
test('package estimates add selected extras only',()=>{assert.equal(price(4950,[]),4950);assert.equal(price(11500,[1500,2000]),15000)});

test('exports an indented embeddable split-left section with a real placeholder image',async()=>{
  const {heroSnippet}=await import('../src/hero.js');
  const output=heroSnippet(createConfig(templates.find(t=>t.id==='split-left')));
  assert.doesNotMatch(output, /<!doctype|<html|<head>|<body|body\s*\{/i);
  assert.match(output, /\n  <div class="hf-copy">\n    <span/);
  assert.match(output, /\n    <h1>[^<]+<\/h1>\n    <p>/);
  assert.match(output, /<img src="data:image\/svg\+xml,/);
  assert.match(output, /width="960" height="640"/);
  assert.match(output, /\.hf-hero \{\n    box-sizing:border-box;/);
  assert.doesNotMatch(output, /<script>/);
});

test('exports configured images and only required executable behaviour',async()=>{
  const {heroSnippet}=await import('../src/hero.js');
  const c=createConfig(templates[0]);c.media.src='https://example.com/photo.webp';
  assert.match(heroSnippet(c), /<img src="https:\/\/example.com\/photo.webp"/);
  for(const id of ['video','video-split','video-cinematic','rotating']){
    const output=heroSnippet(createConfig(templates.find(t=>t.id===id)));
    const script=output.match(/<script>\n([\s\S]*?)<\/script>/)?.[1];
    assert.ok(script, `${id} includes required behaviour`);
    assert.doesNotThrow(()=>new Function(script));
    if(id!=='rotating')assert.doesNotMatch(script,/setInterval/);
  }
});

test('every category has three variations and lead capture is removed',()=>{
  const counts = Object.groupBy(templates,t=>t.category);
  assert.equal(Object.keys(counts).length,6);
  for(const group of Object.values(counts)) assert.equal(group.length,3);
  assert.ok(!templates.some(t=>t.id==='form'||t.category==='Lead capture'));
  for(const t of templates) assert.doesNotMatch(heroDocument(createConfig(t)), /<form|hf-form/);
});
