export const templates=[
['split-right','Split Image Right','Split image','Professional services','Make room for your next big chapter.','#eacf94'],
['split-left','Split Image Left','Split image','Property & construction','Spaces built around your ambitions.','#eacf94'],
['background','Centred Background Image','Background','Hospitality & events','Some places stay with you.','#eacf94'],
['background-left','Left-Aligned Background','Background','Property & tourism','A new perspective on extraordinary.','#eacf94'],
['below','Image Below Headline','Product & SaaS','SaaS & agencies','Your best work. One beautiful workspace.','#eacf94'],
['product','Product Showcase Split','Product & SaaS','Manufacturers','Precision made. Purpose built.','#eacf94'],
['callouts','Product Feature Callouts','Product & SaaS','Solar & security','Power your tomorrow, today.','#eacf94'],
['proof','Static Testimonial Strip','Social proof','Consultants & clinics','Good work speaks for itself.','#eacf94'],
['rotating','Rotating Testimonial Strip','Social proof','Professional services','Your success is our best story.','#eacf94'],
['gradient','Animated Gradient Hero','Creative','Startups & agencies','Big ideas deserve a bold beginning.','#eacf94'],
['video','Full-Background Video','Video','Hospitality & construction','A story worth stepping into.','#eacf94'],
['split-card','Floating Image Card','Split image','Agencies & consultants','A fresh perspective. An exceptional result.','#eacf94'],
['background-bottom','Bottom-Left Background','Background','Restaurants & lodges','Find your own kind of escape.','#eacf94'],
['proof-featured','Featured Client Quote','Social proof','Studios & advisers','Built on relationships. Proven by results.','#eacf94'],
['mesh','Mesh Gradient','Creative','Digital brands','Where the next great idea takes shape.','#eacf94'],
['minimal','Minimal Typography','Creative','Studios & personal brands','Less noise. More meaning.','#eacf94'],
['video-split','Split Video Panel','Video','Manufacturing & services','See the care behind every detail.','#eacf94'],
['video-cinematic','Cinematic Video','Video','Tourism & premium property','Extraordinary begins with a different view.','#eacf94']
].map(([id,name,category,market,headline,accent],i)=>({id,name,category,market,headline,accent,index:i}));
export const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeUrl(s){return /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(s)&&!/^\/\//.test(s)?s:'#';}
export function createConfig(t){return {version:1,component:t.id,theme:'dark',layout:t.id,content:{eyebrow:t.market,headline:t.headline,description:'Thoughtfully crafted solutions for ambitious South African businesses. A better experience starts here.',primaryCta:{label:t.id==='product'?'Request a quote':'Let’s get started',href:'#contact'},secondaryCta:{label:'Explore our work',href:'#work'}},media:{type:t.category==='Video'?'video':'image',src:'',poster:'',alt:'Your business, beautifully presented'},proof:{badges:['Made for your business','Built on trust','South Africa'],testimonials:['The team understood our vision and brought it to life. — Demo client, Business owner','A thoughtful process and an exceptional result for our business. — Demo client, Director','From the first call to launch, every detail was taken care of. — Demo client, Founder','A fresh perspective that made all the difference to our brand. — Demo client, Partner']},style:{background:'#10100f',text:'#ffffff',accent:t.accent,radius:'18px',padding:'64px',font:'Arial'},animation:{enabled:true,reducedMotion:true}};}
export const price=(base,extras)=>base+extras.reduce((sum,x)=>sum+x,0);
