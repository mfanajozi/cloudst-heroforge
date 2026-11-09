import {escapeHtml as e,safeUrl} from './model.js';

const placeholderSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640"><defs><radialGradient id="gold"><stop stop-color="#eacf94"/><stop offset="1" stop-color="#27241d"/></radialGradient></defs><rect width="960" height="640" fill="url(#gold)"/><path d="M480 170 Q490 310 620 320 Q490 330 480 470 Q470 330 340 320 Q470 310 480 170" fill="#eacf94" opacity=".6"/></svg>';
export const placeholderImage = 'data:image/svg+xml,' + encodeURIComponent(placeholderSvg);

export const heroCss=`
.hf-hero{box-sizing:border-box;position:relative;isolation:isolate;overflow:hidden;padding:var(--hf-padding,64px);background:var(--hf-bg);color:var(--hf-text);font-family:var(--hf-font,Arial),sans-serif;min-height:420px;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;border-radius:var(--hf-radius)}.hf-hero *{box-sizing:border-box}.hf-copy{position:relative;z-index:2}.hf-hero h1{font-size:clamp(30px,4vw,58px);letter-spacing:-.055em;line-height:1.08;margin:20px 0}.hf-hero p{opacity:.75;line-height:1.7;font-size:15px}.hf-eyebrow{color:var(--hf-accent);text-transform:uppercase;font-size:11px;font-weight:700;letter-spacing:2px}.hf-actions{display:flex;gap:12px;flex-wrap:wrap;margin:28px 0}.hf-cta{display:inline-block;padding:14px 20px;background:var(--hf-accent);color:#211b10;text-decoration:none;border-radius:7px;font-size:13px;font-weight:bold}.hf-secondary{background:transparent;color:inherit;border:1px solid currentColor}.hf-badges{display:flex;gap:14px;flex-wrap:wrap;font-size:10px;opacity:.7}.hf-art{position:relative;min-height:280px;border-radius:18px;overflow:hidden;background:radial-gradient(ellipse at 65% 20%,var(--hf-accent),transparent 65%),linear-gradient(135deg,#3b3427,#191918);display:grid;place-items:center}.hf-art:empty:before{content:'✦';font-size:150px;color:#ffffff55;transform:rotate(-15deg);text-shadow:30px 30px 0 #ffffff12}.hf-art img,.hf-art video{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}.hf-split-left .hf-art{order:-1}.hf-background,.hf-background-left,.hf-video{grid-template-columns:1fr;min-height:500px;background:linear-gradient(120deg,#0b1120,var(--hf-accent))}.hf-background .hf-copy,.hf-video .hf-copy{max-width:650px;margin:auto;text-align:center}.hf-background .hf-actions,.hf-video .hf-actions,.hf-background .hf-badges,.hf-video .hf-badges{justify-content:center}.hf-backdrop{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2}.hf-scrim{position:absolute;inset:0;background:#0b1120c9;z-index:-1}.hf-below,.hf-proof,.hf-rotating,.hf-gradient{grid-template-columns:1fr;text-align:center}.hf-below .hf-copy,.hf-proof .hf-copy,.hf-rotating .hf-copy,.hf-gradient .hf-copy{max-width:670px;margin:auto}.hf-below .hf-actions,.hf-proof .hf-actions,.hf-rotating .hf-actions,.hf-gradient .hf-actions,.hf-gradient .hf-badges{justify-content:center}.hf-below .hf-art{min-height:220px;margin:0 10%}.hf-gradient{background:radial-gradient(at 10% 10%,var(--hf-accent),transparent 65%),radial-gradient(at 90% 90%,#685337,transparent 60%),var(--hf-bg)}.hf-animated.hf-gradient{background-size:160% 160%;animation:hf-mesh 15s ease infinite alternate}@keyframes hf-mesh{to{background-position:100% 100%}}.hf-quotes{display:flex;gap:14px;text-align:left}.hf-quote{flex:1;background:#ffffff09;border:1px solid #ffffff20;border-radius:12px;padding:22px;line-height:1.7;font-size:13px}.hf-callout{position:absolute;bottom:20px;left:20px;background:#0b1120dc;color:white;padding:15px;border:1px solid #ffffff30;border-radius:8px;font-size:12px}.hf-toggle{background:transparent;color:inherit;text-decoration:underline;padding:10px}.hf-video-control{position:absolute;right:16px;bottom:14px;z-index:4}.hf-light{--hf-text:#152033!important}.hf-light .hf-quote{background:#00000008;border-color:#00000020}@media(max-width:650px){.hf-hero{grid-template-columns:1fr;padding:32px 24px;gap:24px}.hf-split-left .hf-art{order:0}.hf-hero h1{font-size:36px}.hf-quotes{flex-direction:column}.hf-art{min-height:240px}.hf-below .hf-art{margin:0}}@media(prefers-reduced-motion:reduce){.hf-hero{animation:none!important}}
.hf-split-card .hf-art{transform:rotate(-4deg);border:8px solid #ffffff18;box-shadow:0 25px 45px #0005}.hf-split-card{gap:60px}.hf-background-bottom{align-items:end;min-height:560px;padding-top:180px}.hf-background-bottom .hf-copy{max-width:650px}.hf-proof-featured{grid-template-columns:1fr 1fr;text-align:left}.hf-proof-featured .hf-actions{justify-content:flex-start}.hf-proof-featured .hf-quote{font-family:Georgia,serif;font-size:25px;padding:40px;border-left:3px solid var(--hf-accent)}.hf-mesh{background:radial-gradient(ellipse at 15% 20%,var(--hf-accent),transparent 45%),radial-gradient(ellipse at 85% 10%,#806446,transparent 50%),radial-gradient(ellipse at 50% 95%,#806b4c,transparent 50%),var(--hf-bg);min-height:540px}.hf-minimal{background:var(--hf-bg);text-align:left;min-height:520px}.hf-minimal .hf-copy{max-width:950px;margin:0}.hf-minimal h1{font-family:Georgia,serif;font-size:clamp(48px,7vw,92px);font-weight:400}.hf-minimal .hf-actions,.hf-minimal .hf-badges{justify-content:flex-start}.hf-video-split{grid-template-columns:1fr 1fr;text-align:left;background:var(--hf-bg)}.hf-video-split .hf-copy{grid-column:1;margin:0;text-align:left}.hf-video-split .hf-actions,.hf-video-split .hf-badges{justify-content:flex-start}.hf-video-split .hf-backdrop{left:auto;right:3%;width:43%;height:80%;top:10%;border-radius:18px;z-index:0}.hf-video-split .hf-scrim{display:none}.hf-video-cinematic{min-height:600px;align-items:end;border-top:30px solid #000;border-bottom:30px solid #000}.hf-video-cinematic .hf-copy{text-align:left;margin:0;max-width:720px}.hf-video-cinematic .hf-actions,.hf-video-cinematic .hf-badges{justify-content:flex-start}@media(max-width:650px){.hf-proof-featured,.hf-video-split{grid-template-columns:1fr}.hf-video-split .hf-backdrop{position:relative;inset:auto;width:100%;height:240px;grid-row:2}.hf-video-split .hf-copy{grid-row:1}.hf-split-card .hf-art{transform:none}.hf-proof-featured .hf-quote{font-size:21px}.hf-minimal h1{font-size:48px}}
`;
export function heroMarkup(c){const variant=c.component;const id=({'split-card':'split-right','background-bottom':'background-left','proof-featured':'proof','mesh':'gradient','minimal':'gradient','video-split':'video','video-cinematic':'video'})[variant]||variant;const content=c.content;const media=c.media;const image=`${!media.src?'<!-- Replace the placeholder src with your image URL or file path. -->':''}<img src="${e(media.src?safeUrl(media.src):placeholderImage)}" alt="${e(media.alt)}" width="960" height="640" decoding="async">`;const background=['background','background-left','video'].includes(id);const video=id==='video'&&media.src?`<video ${c.animation.enabled?'autoplay':''} muted loop playsinline preload="none" poster="${e(safeUrl(media.poster))}" class="hf-backdrop"><source src="${e(safeUrl(media.src))}"></video><button class="hf-toggle hf-video-control" type="button" data-video>Pause / play video</button>`:'';return `<section class="hf-hero hf-${e(id)} hf-${e(variant)} ${c.theme==='light'?'hf-light':''} ${c.animation.enabled?'hf-animated':''}" data-component="${e(variant)}" style="--hf-bg:${e(c.style.background)};--hf-text:${e(c.style.text)};--hf-accent:${e(c.style.accent)};--hf-radius:${e(c.style.radius)};--hf-padding:${e(c.style.padding)};--hf-font:${e(c.style.font)}">${background?(video|| `<img class="hf-backdrop" src="${e(media.src?safeUrl(media.src):placeholderImage)}" alt="${e(media.alt)}" width="960" height="640">`)+'<div class="hf-scrim"></div>':''}<div class="hf-copy"><span class="hf-eyebrow">${e(content.eyebrow)}</span><h1>${e(content.headline)}</h1><p>${e(content.description)}</p><div class="hf-actions"><a class="hf-cta" href="${e(safeUrl(content.primaryCta.href))}">${e(content.primaryCta.label)} ↗</a>${content.secondaryCta.label?`<a class="hf-cta hf-secondary" href="${e(safeUrl(content.secondaryCta.href))}">${e(content.secondaryCta.label)}</a>`:''}</div><div class="hf-badges">${c.proof.badges.map(b=>`<span>✓ ${e(b)}</span>`).join('')}</div></div>${['proof','rotating'].includes(id)?`<div class="hf-quotes">${(variant==='proof-featured'?c.proof.testimonials.slice(0,1):c.proof.testimonials).map((q,i)=>`<div class="hf-quote" ${id==='rotating'&&i>0?'hidden':''}>★★★★★<br>${e(q)}</div>`).join('')}</div>${id==='rotating'?'<button class="hf-toggle" data-rotate type="button" aria-pressed="false">Play testimonials</button>':''}`:!background&&id!=='gradient'?`<div class="hf-art">${image}${id==='callouts'?'<span class="hf-callout">✦ Built to specification<br>Quality you can count on</span>':''}</div>`:''}</section>`;}
export const runtime=`document.querySelectorAll('[data-video]').forEach(b=>b.onclick=()=>{const v=b.parentElement.querySelector('video');v.paused?v.play():v.pause()});document.querySelectorAll('.hf-hero video').forEach(v=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(max-width:650px)').matches)v.pause()});document.querySelectorAll('[data-rotate]').forEach(b=>{let timer,index=0;const quotes=b.parentElement.querySelectorAll('.hf-quote');const stop=()=>{clearInterval(timer);timer=null;b.textContent='Play testimonials';b.setAttribute('aria-pressed','false')};b.onclick=()=>{if(timer)return stop();b.textContent='Pause testimonials';b.setAttribute('aria-pressed','true');timer=setInterval(()=>{quotes[index].hidden=true;index=(index+1)%quotes.length;quotes[index].hidden=false},6000)};b.parentElement.onmouseenter=stop;b.parentElement.addEventListener('focusin',e=>{if(e.target!==b)stop()})});`;
export const heroDocument=c=>`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${e(c.content.headline)}</title><style>body{margin:0}${heroCss}</style></head><body>${heroMarkup(c)}<script>${runtime}</script></body></html>`;

// Format generated code without changing string literals or attribute values.
function formatCode(source) {
  let indent = 0, line = '', quote = '', escaped = false;
  const lines = [];
  const flush = () => {
    if (line.trim()) lines.push('  '.repeat(indent) + line.trim());
    line = '';
  };
  for (const char of source.trim()) {
    if (quote) {
      line += char;
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if ('"\'`'.includes(char)) { quote = char; line += char; }
    else if (char === '{') { line += ' {'; flush(); indent++; }
    else if (char === '}') { flush(); indent = Math.max(0, indent - 1); line = '}'; flush(); }
    else if (char === ';') { line += ';'; flush(); }
    else line += char;
  }
  flush();
  return lines.join('\n');
}

function formatMarkup(markup) {
  const tokens = markup.match(/<!--[\s\S]*?-->|<(span|h1|p|a|strong|small|textarea|button)\b[^>]*>[^<]*<\/\1>|<[^>]+>|[^<]+/g) || [];
  const voidTag = /^<(img|input|br|source|hr|meta|link)\b/i;
  let depth = 0;
  return tokens.map(token => {
    if (/^<\//.test(token)) depth = Math.max(0, depth - 1);
    const line = '  '.repeat(depth) + token;
    if (/^<[a-z]/i.test(token) && !voidTag.test(token) && !/<\/[a-z][a-z0-9]*>$/.test(token)) depth++;
    return line;
  }).join('\n');
}

export function heroSnippet(config) {
  const blocks = runtime.split(/(?=document\.querySelectorAll)/).filter(Boolean);
  const needed = blocks.filter(block =>
    (config.component.startsWith('video') && (block.startsWith("document.querySelectorAll('[data-video]')") || block.startsWith("document.querySelectorAll('.hf-hero video')"))) ||
    (config.component === 'rotating' && block.startsWith("document.querySelectorAll('[data-rotate]')"))
  ).join('\n');
  return [
    '<!-- Hero section: paste into your existing page body. -->',
    formatMarkup(heroMarkup(config)), '',
    '<!-- Styles: move into your stylesheet or existing head if preferred. -->', '<style>',
    formatCode(heroCss).split('\n').map(line => '  ' + line).join('\n'), '</style>',
    ...(needed ? ['', '<!-- Behaviour: place after the section or before your closing body tag. -->', '<script>', '  (() => {', formatCode(needed).split('\n').map(line => '    ' + line).join('\n'), '  })();', '</script>'] : [])
  ].join('\n') + '\n';
}
