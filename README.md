[index (2).html](https://github.com/user-attachments/files/34865770/index.2.html)[Uplo<!doctype html>
<!--
=====================================================================
 THE AMRKALS GROUP — complete website in ONE file (index.html)
 Premium Tiles · Marble · Granite — supply & installation
=====================================================================
 FEATURES INCLUDED
  Pages (single-page, no reload): Home · Materials · Installation · Our Work · About · Contact ·
    Project Inquiry · Privacy · Terms · Staff dashboard (#/admin)
  Home: hero, group intro, 3 material collections, 8 installation services, project-film slots,
    6 "why us" points, 5-step process, quotation call-to-action with Call + WhatsApp
  Materials: 20 materials with Tiles / Marble / Granite filter, "request a quotation" per item
  Installation: 15 services (Floor, Wall, Staircase, Wet Area, Commercial, Infrastructure, Custom);
    each button pre-fills the inquiry form
  Our Work: 8 filters + video gallery (add films in the PROJECTS list)
  Inquiry: 6-step guided form (Details, Requirement, Project, Files, Location, Review), validation,
    photo/PDF upload (auto-compressed), GPS location sharing, reference number, bot trap,
    WhatsApp hand-off to 7081573977, offline queue with automatic re-send
  Owner dashboard (#/admin): PIN-protected, search, status tracking (New/Contacted/Quoted/Won/Closed),
    customer files, one-tap Call and WhatsApp-the-customer, auto-refresh, lockout after 5 wrong PINs
  Backend: Google Sheet + Drive + email + optional WhatsApp alert — the code is EMBEDDED below
    (id="backend-code") and shown with setup steps inside the dashboard
  Design: dark luxury theme, mobile menu, floating WhatsApp button, scroll animations, SEO tags
 HOW TO CONNECT: open #/admin and follow "Backend code & setup guide", then set endpoint in CFG.
=====================================================================
-->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0B0B0C">
<meta name="description" content="Premium tiles, natural marble and granite supply with professional installation for residential, commercial and large-scale construction projects.">
<title>The Amrkals Group — Building Excellence. Defining Luxury.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0B0B0C; --panel:#131314; --panel2:#1a1a1c; --line:rgba(255,255,255,.1);
  --gold:#C9A96A; --gold2:#E4CB93; --text:#EDE8DF; --muted:#9B968C; --ok:#6FCF97; --err:#EB7B6B;
  --serif:'Cormorant Garamond',Georgia,serif; --sans:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:var(--sans);font-weight:300;line-height:1.65;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
a,button,.opt,.chip{touch-action:manipulation;-webkit-tap-highlight-color:transparent}
img,svg{max-width:100%}
.wrap{width:min(1200px,100% - 40px);margin-inline:auto}
section{padding:96px 0}
.eyebrow{font-size:.72rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);font-weight:500;margin-bottom:18px;display:flex;align-items:center;gap:14px}
.eyebrow::before{content:"";width:36px;height:1px;background:var(--gold)}
h1,h2,h3{font-family:var(--serif);font-weight:500;line-height:1.1;letter-spacing:-.005em}
h1{font-size:clamp(2.8rem,7vw,5.6rem)}
h2{font-size:clamp(2rem,4.2vw,3.2rem);margin-bottom:20px}
h3{font-size:1.5rem;margin-bottom:8px}
h1 em,h2 em{color:var(--gold);font-style:italic}
p.lead{color:var(--muted);font-size:1.05rem;max-width:62ch}
.btn{display:inline-flex;align-items:center;gap:10px;padding:14px 28px;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;font-weight:500;border:1px solid var(--gold);cursor:pointer;transition:.3s;font-family:var(--sans);background:transparent;color:var(--text)}
.btn.solid{background:var(--gold);color:#0B0B0C}
.btn.solid:hover{background:var(--gold2)}
.btn:hover{background:rgba(201,169,106,.12)}
.btn.solid:hover{background:var(--gold2)}
.btn.ghost{border-color:var(--line)}
.btn.ghost:hover{border-color:var(--gold)}
.btn[disabled]{opacity:.4;pointer-events:none}
.row{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.grid{display:grid;gap:22px}
.g2{grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))}
.g3{grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}
.g4{grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.card{background:var(--panel);border:1px solid var(--line);padding:32px;transition:.35s;position:relative}
.card:hover{border-color:rgba(201,169,106,.5);transform:translateY(-3px)}
.card .num{font-family:var(--serif);color:var(--gold);font-size:1.1rem;letter-spacing:.1em;margin-bottom:18px;display:block}
.card p{color:var(--muted);font-size:.95rem}
.alt{background:linear-gradient(180deg,#0e0e0f,#121213)}
.head-split{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;margin-bottom:48px}
.head-split h2{margin:0;max-width:18ch}

/* Header */
header.top{position:fixed;inset:0 0 auto 0;z-index:50;transition:.35s}
header.top.solid{background:rgba(11,11,12,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.bar{display:flex;align-items:center;justify-content:space-between;height:78px;gap:20px}
.logo{font-family:var(--serif);font-size:1.5rem;letter-spacing:.04em;font-weight:600}
.logo span{color:var(--gold)}
nav.main{display:flex;gap:30px}
nav.main a{font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);transition:.25s;padding:6px 0;border-bottom:1px solid transparent}
nav.main a:hover,nav.main a.on{color:var(--text);border-color:var(--gold)}
.top-right{display:flex;align-items:center;gap:22px}
.top-right .tel{font-size:.85rem;color:var(--muted)}
.top-right .tel:hover{color:var(--gold)}
.top-right .btn{padding:10px 20px;font-size:.7rem}
.burger{display:none;background:none;border:1px solid var(--line);color:var(--text);width:44px;height:44px;cursor:pointer;font-size:1.2rem}
@media(max-width:980px){
  nav.main{position:absolute;top:100%;left:0;right:0;background:#0B0B0C;flex-direction:column;gap:0;padding:10px 20px 24px;border-bottom:1px solid var(--line);transform:translateY(-12px);opacity:0;visibility:hidden;transition:transform .3s,opacity .3s,visibility .3s}
  nav.main.open{transform:none;opacity:1;visibility:visible}
  nav.main a{padding:16px 0;border-bottom:1px solid var(--line);font-size:.8rem}
  .burger{display:block}
  .top-right .tel,.top-right .btn{display:none}
}

/* Hero */
.hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding:140px 0 90px;
  background:radial-gradient(ellipse at 18% 12%,rgba(201,169,106,.17),transparent 52%),radial-gradient(ellipse at 92% 85%,rgba(255,255,255,.07),transparent 46%),repeating-linear-gradient(115deg,transparent 0 70px,rgba(255,255,255,.014) 70px 71px),var(--bg)}
.hero svg.veins{position:absolute;inset:0;width:100%;height:100%;opacity:.35;pointer-events:none}
.hero .wrap{position:relative}
.hero .tag{font-size:.74rem;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-bottom:26px}
.hero p.lead{margin-top:28px;font-size:1.15rem}
.pills{display:flex;flex-wrap:wrap;gap:12px 34px;margin-top:64px;padding-top:28px;border-top:1px solid var(--line);font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;color:var(--muted)}
.pills span::before{content:"◆";color:var(--gold);margin-right:12px;font-size:.55rem;vertical-align:middle}
.scroll{position:absolute;right:0;bottom:0;font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;color:var(--muted);writing-mode:vertical-rl}

/* Page hero */
.page-hero{padding:170px 0 70px;background:radial-gradient(ellipse at 15% 0%,rgba(201,169,106,.13),transparent 55%),var(--bg);border-bottom:1px solid var(--line)}
.page-hero h1{font-size:clamp(2.4rem,5.4vw,4.2rem);max-width:20ch}
.page-hero p.lead{margin-top:22px}

/* Material category cards */
.cat{padding:0;overflow:hidden}
.cat .art{height:190px;position:relative;border-bottom:1px solid var(--line)}
.cat.tiles .art{background:linear-gradient(0deg,rgba(0,0,0,.25),transparent),repeating-linear-gradient(0deg,transparent 0 59px,rgba(0,0,0,.35) 59px 61px),repeating-linear-gradient(90deg,#b9b2a6 0 59px,rgba(0,0,0,.35) 59px 61px),#b9b2a6}
.cat.marble .art{background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.7),transparent 40%),linear-gradient(115deg,#ecebe8 0 40%,#cfcdc8 41% 42%,#f3f2ef 43% 70%,#bdbab4 71% 72%,#ecebe8 73%)}
.cat.granite .art{background:radial-gradient(circle at 20% 30%,rgba(255,255,255,.12) 0 2px,transparent 3px) 0 0/22px 22px,radial-gradient(circle at 70% 60%,rgba(201,169,106,.25) 0 1.5px,transparent 2.5px) 0 0/31px 31px,#1b1b1d}
.cat .body{padding:28px 30px 32px}
.cat ul{list-style:none;margin:16px 0 22px;display:flex;flex-wrap:wrap;gap:8px}
.cat li{font-size:.72rem;border:1px solid var(--line);padding:5px 12px;color:var(--muted);letter-spacing:.05em}
.link{font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);border-bottom:1px solid var(--gold);padding-bottom:4px;display:inline-block}
.link:hover{color:var(--gold2)}

/* Install list */
.ilist{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:0;border-top:1px solid var(--line);border-left:1px solid var(--line)}
.ilist div{padding:22px 24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;gap:16px;align-items:baseline;font-family:var(--serif);font-size:1.25rem;transition:.3s}
.ilist div:hover{background:var(--panel)}
.ilist b{font-family:var(--sans);font-size:.7rem;color:var(--gold);font-weight:500;letter-spacing:.1em}
.cap{margin-top:30px;padding:30px;border:1px solid var(--gold);background:rgba(201,169,106,.05)}
.cap .eyebrow{margin-bottom:10px}

/* Films */
.film{aspect-ratio:16/10;background:linear-gradient(135deg,#17171a,#0f0f10);border:1px solid var(--line);display:grid;place-items:center;text-align:center;color:var(--muted);font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;position:relative;overflow:hidden}
.film::before{content:"▶";display:grid;place-items:center;width:58px;height:58px;border:1px solid var(--gold);border-radius:50%;color:var(--gold);font-size:.9rem;margin:0 auto 14px}
.film span{display:block}
.film video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}

/* Steps */
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:0;margin-top:48px;border-top:1px solid var(--gold)}
.step{padding:30px 22px 10px 0;position:relative}
.step::before{content:"";position:absolute;top:-5px;left:0;width:9px;height:9px;background:var(--gold);transform:rotate(45deg)}
.step .num{font-family:var(--serif);font-size:2.6rem;color:var(--gold);opacity:.8;line-height:1}
.step h3{font-size:1.35rem;margin-top:10px}
.step p{color:var(--muted);font-size:.92rem}

/* CTA */
.cta{background:radial-gradient(ellipse at 50% 0%,rgba(201,169,106,.15),transparent 60%),var(--panel);border-block:1px solid var(--line)}
.cta .box{display:grid;grid-template-columns:1.3fr 1fr;gap:56px;align-items:center}
@media(max-width:860px){.cta .box{grid-template-columns:1fr}}
.direct{border:1px solid var(--line);padding:28px;background:var(--bg)}
.direct a{display:block;padding:16px 0;border-bottom:1px solid var(--line)}
.direct a:last-of-type{border:0}
.direct small{display:block;color:var(--muted);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase}
.direct strong{font-family:var(--serif);font-size:1.6rem;font-weight:500}
.direct a:hover strong{color:var(--gold)}
.direct p{font-size:.8rem;color:var(--muted);margin-top:14px}

/* Filters */
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:34px}
.chip{background:none;border:1px solid var(--line);color:var(--muted);padding:9px 20px;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;font-family:var(--sans);transition:.25s}
.chip:hover{border-color:var(--gold);color:var(--text)}
.chip.on{background:var(--gold);border-color:var(--gold);color:#0B0B0C;font-weight:500}
.count{color:var(--muted);font-size:.85rem;margin-bottom:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;align-items:center}
.mat .badge{font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;display:block}
.mat h3{font-size:1.55rem}
.mat .go{margin-top:20px}
.svc .grp{font-size:.66rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);display:block;margin-bottom:12px}
.svc .acts{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}
.svc .acts .btn{padding:10px 16px;font-size:.66rem}
.empty{border:1px dashed var(--line);padding:70px 30px;text-align:center;color:var(--muted)}
.empty h2{font-size:2rem}

/* Form */
.form-shell{max-width:820px;margin:0 auto}
.feat{display:flex;flex-wrap:wrap;gap:10px 28px;color:var(--muted);font-size:.85rem;margin-top:26px}
.feat span::before{content:"✓";color:var(--gold);margin-right:10px}
.stepper{display:flex;gap:0;margin-bottom:40px;border-bottom:1px solid var(--line);overflow-x:auto}
.stepper div{flex:1;min-width:92px;padding:0 6px 16px;font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap}
.stepper div b{display:block;font-family:var(--serif);font-size:1.3rem;font-weight:500}
.stepper div.on{color:var(--gold);border-color:var(--gold)}
.stepper div.done{color:var(--text)}
.field{margin-bottom:22px}
.field label{display:block;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.field label i{color:var(--gold);font-style:normal}
.field input,.field select,.field textarea{width:100%;background:var(--panel);border:1px solid var(--line);color:var(--text);padding:15px 16px;font:inherit;font-size:.95rem;outline:none;transition:.25s;border-radius:0}
.field textarea{min-height:130px;resize:vertical}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--gold)}
.field.bad input,.field.bad select{border-color:var(--err)}
.field .msg{color:var(--err);font-size:.78rem;margin-top:6px;display:none}
.field.bad .msg{display:block}
.two{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:620px){.two{grid-template-columns:1fr}}
.opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px}
.opt{border:1px solid var(--line);background:var(--panel);padding:22px;cursor:pointer;transition:.25s}
.opt:hover{border-color:rgba(201,169,106,.6)}
.opt.on{border-color:var(--gold);background:rgba(201,169,106,.08)}
.opt strong{font-family:var(--serif);font-size:1.3rem;font-weight:500;display:block}
.opt small{color:var(--muted)}
.note{font-size:.8rem;color:var(--muted);padding:14px 16px;border-left:2px solid var(--gold);background:rgba(201,169,106,.05);margin:18px 0}
.nav-row{display:flex;justify-content:space-between;gap:14px;margin-top:34px}
.consent{font-size:.78rem;color:var(--muted);margin-top:22px}
.consent a{color:var(--gold);border-bottom:1px solid}
.review{border:1px solid var(--line);background:var(--panel)}
.review dl{display:grid;grid-template-columns:170px 1fr;font-size:.92rem}
.review dt,.review dd{padding:14px 20px;border-bottom:1px solid var(--line)}
.review dt{color:var(--muted);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;padding-top:17px}
.review dd{word-break:break-word}
@media(max-width:560px){.review dl{grid-template-columns:1fr}.review dt{border:0;padding-bottom:0}}
.files{list-style:none;margin-top:12px;font-size:.85rem;color:var(--muted)}
.files li{padding:6px 0;border-bottom:1px solid var(--line)}
.success{text-align:center;border:1px solid var(--gold);padding:60px 28px;background:rgba(201,169,106,.05)}
.success .ref{font-family:var(--serif);font-size:2.2rem;color:var(--gold);margin:14px 0}

/* Prose */
.prose{max-width:760px}
.prose h2{font-size:1.9rem;margin:40px 0 10px}
.prose p,.prose li{color:var(--muted);margin-bottom:12px}
.prose ul{padding-left:20px}

/* Footer */
footer{background:#080809;border-top:1px solid var(--line);padding:70px 0 30px}
.fgrid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px}
@media(max-width:860px){.fgrid{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.fgrid{grid-template-columns:1fr}}
footer h4{font-size:.7rem;letter-spacing:.24em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;font-weight:500}
footer li{list-style:none;margin-bottom:10px;font-size:.9rem;color:var(--muted)}
footer li a:hover{color:var(--gold)}
footer .logo{font-size:1.9rem;line-height:1.05;margin-bottom:14px;display:block}
footer p{color:var(--muted);font-size:.9rem;max-width:36ch}
footer .tagline{font-family:var(--serif);font-style:italic;color:var(--gold);font-size:1.2rem;margin-top:16px}
.fbase{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:54px;padding-top:24px;border-top:1px solid var(--line);font-size:.75rem;color:var(--muted);letter-spacing:.06em}
.wa-float{position:fixed;right:20px;bottom:20px;z-index:40;background:#25D366;color:#073b1b;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;box-shadow:0 8px 28px rgba(0,0,0,.5);font-weight:700;font-size:.7rem;letter-spacing:.04em}
.only-m{display:none}
@media(max-width:980px){.only-m{display:block}}
.admin-bar{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:24px}
.admin-bar input,.admin-bar select,.lead-top select{background:var(--panel);border:1px solid var(--line);color:var(--text);padding:12px 14px;font:inherit;font-size:.9rem;outline:none;border-radius:0}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:12px;margin-bottom:24px}
.stat{border:1px solid var(--line);background:var(--panel);padding:16px}
.stat b{font-family:var(--serif);font-size:2rem;color:var(--gold);display:block;line-height:1;font-weight:500}
.stat small{font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.lead{border:1px solid var(--line);background:var(--panel);padding:22px 24px;margin-bottom:16px}
.lead.new{border-left:3px solid var(--gold)}
.lead-top{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-bottom:14px}
.lead-top b{font-family:var(--serif);font-size:1.5rem;font-weight:500}
.lead-top small{display:block;color:var(--muted);font-size:.78rem}
.lead dl{display:grid;grid-template-columns:150px 1fr;font-size:.9rem}
.lead dt{color:var(--muted);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;padding:7px 0}
.lead dd{padding:4px 0;word-break:break-word}
@media(max-width:560px){.lead dl{grid-template-columns:1fr}.lead dt{padding-bottom:0}}
.lead .acts{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}
.lead .acts .btn{padding:10px 18px;font-size:.68rem}
.setup{border:1px solid var(--line);background:var(--panel);padding:18px 22px;margin-top:30px}
.setup summary{cursor:pointer;font-family:var(--serif);font-size:1.3rem;color:var(--gold)}
.setup ol{margin:16px 0 18px 20px;color:var(--muted);font-size:.9rem}
.setup li{margin-bottom:8px}
.setup textarea{width:100%;margin-top:14px;background:#08080a;color:#cfc8b8;border:1px solid var(--line);padding:12px;font:12px/1.5 ui-monospace,Menlo,Consolas,monospace}
.banner{border:1px solid var(--err);background:rgba(235,123,107,.08);padding:14px 18px;font-size:.88rem;margin-bottom:22px}
.fx{background:none;border:0;color:var(--err);cursor:pointer;font-size:.75rem;margin-left:10px;font-family:inherit}
.reveal{opacity:0;transform:translateY(24px);transition:opacity .8s,transform .8s}
.reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}html{scroll-behavior:auto}}
</style>
</head>
<body>

<header class="top" id="top">
  <div class="wrap bar">
    <a href="#/" class="logo">Amrkals<span>Group</span></a>
    <nav class="main" id="nav">
      <a href="#/materials" data-r="materials">Materials</a>
      <a href="#/services" data-r="services">Installation</a>
      <a href="#/portfolio" data-r="portfolio">Our Work</a>
      <a href="#/about" data-r="about">About</a>
      <a href="#/contact" data-r="contact">Contact</a>
      <a href="#/inquiry" data-r="inquiry" class="only-m">Start an Inquiry</a>
    </nav>
    <div class="top-right">
      <a class="tel" href="tel:7081721056">7081721056</a>
      <a class="btn solid" href="#/inquiry">Start an Inquiry</a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
    </div>
  </div>
</header>

<main id="app"></main>

<footer>
  <div class="wrap">
    <div class="fgrid">
      <div>
        <a href="#/" class="logo">The Amrkals<br><span>Group</span></a>
        <p>Premium tiles, natural marble and granite — supplied and installed for residential, commercial and large-scale construction projects.</p>
        <div class="tagline">Building Excellence. Defining Luxury.</div>
      </div>
      <div><h4>Explore</h4><ul>
        <li><a href="#/materials">Materials</a></li>
        <li><a href="#/services">Installation Services</a></li>
        <li><a href="#/portfolio">Our Work &amp; Projects</a></li>
        <li><a href="#/about">About The Group</a></li></ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="#/inquiry">Request a Quotation</a></li>
        <li><a href="#/contact">Contact</a></li>
        <li><a href="#/privacy">Privacy Policy</a></li>
        <li><a href="#/terms">Terms &amp; Conditions</a></li></ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="tel:7081721056">Call 7081721056</a></li>
        <li><a data-wa href="#" target="_blank" rel="noopener">WhatsApp 7081573977</a></li></ul></div>
    </div>
    <div class="fbase"><span>© <span id="yr"></span> The Amrkals Group. All rights reserved.</span><span>Tiles · Marble · Granite · Installation</span></div>
  </div>
</footer>
<a class="wa-float" data-wa href="#" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-5 4V4a1 1 0 0 1 0-1zm4 5v2h8V8H8zm0 3.500v2h5v-2H8z"/></svg></a>

<script type="text/plain" id="backend-code">
/**
 * The Amrkals Group — inquiry backend (Google Apps Script)
 * Create it from your Google Sheet: Extensions → Apps Script → paste this whole file.
 * Full steps are in SETUP.md.
 *
 * Script properties to set (Project Settings → Script properties):
 *   ADMIN_PIN        required — at least 6 characters; opens the dashboard at  your-site/#/admin
 *   OWNER_EMAIL      optional — gets an email for every new inquiry
 *   CALLMEBOT_PHONE  optional — your WhatsApp number with country code, e.g. 917081573977
 *   CALLMEBOT_KEY    optional — API key from callmebot.com (free WhatsApp-to-yourself alerts)
 */

const SHEET_NAME = 'Inquiries';
const HEADERS = ['Ref', 'Received', 'Status', 'Name', 'Mobile', 'Address', 'Email', 'Company', 'Requirement', 'Material', 'Project type', 'Area', 'Timeline', 'Notes', 'Map link', 'Landmark', 'Coordinates', 'Files'];
const STATUSES = ['New', 'Contacted', 'Quoted', 'Won', 'Closed'];
const MAX_FILES = 5;
const MAX_FILE_BYTES = 4 * 1024 * 1024;

function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k) || ''; }
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function clean_(v, max) { return String(v == null ? '' : v).trim().slice(0, max || 500); }

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.getRange(1, 1, sh.getMaxRows(), HEADERS.length).setNumberFormat('@'); // plain text: stops "=..." being run as a formula
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function folder_() {
  const it = DriveApp.getFoldersByName('Amrkals Inquiry Files');
  return it.hasNext() ? it.next() : DriveApp.createFolder('Amrkals Inquiry Files');
}

/** Run this once from the editor to create the sheet and grant permissions. */
function setup() {
  sheet_();
  folder_();
  MailApp.getRemainingDailyQuota();
  Logger.log('Setup done. Now set ADMIN_PIN in Script properties, then Deploy → New deployment → Web app.');
}

function doGet() { return out_({ ok: true, service: 'Amrkals inquiries' }); }

function doPost(e) {
  try {
    const b = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (b.action === 'submit') return out_(submit_(b));
    if (b.action === 'list' || b.action === 'status') {
      const bad = auth_(b.pin);
      if (bad) return out_(bad);
      return out_(b.action === 'list' ? list_() : setStatus_(b));
    }
    return out_({ ok: false, permanent: true, message: 'Unknown action.' });
  } catch (err) {
    console.error(err);
    return out_({ ok: false, message: 'Server error.' });
  }
}

function auth_(pin) {
  const cache = CacheService.getScriptCache();
  const fails = Number(cache.get('fails') || 0);
  if (fails >= 5) return { ok: false, error: 'locked' };
  const real = prop_('ADMIN_PIN');
  if (real.length >= 6 && String(pin || '') === real) return null;
  cache.put('fails', String(fails + 1), 600);
  return { ok: false, error: 'unauthorized' };
}

function saveFiles_(files, ref) {
  const out = [];
  if (!Array.isArray(files) || !files.length) return out;
  const folder = folder_();
  files.slice(0, MAX_FILES).forEach(function (f, i) {
    try {
      const type = f.type === 'application/pdf' ? 'application/pdf' : (String(f.type).indexOf('image/') === 0 ? 'image/jpeg' : '');
      if (!type) return;
      const bytes = Utilities.base64Decode(String(f.data || ''));
      if (!bytes.length || bytes.length > MAX_FILE_BYTES) return;
      const nm = ref + '_' + (i + 1) + '_' + String(f.name || 'file').replace(/[^\w.\- ]/g, '_').slice(0, 60);
      const file = folder.createFile(Utilities.newBlob(bytes, type, nm)); // stays private to the owner's Drive
      out.push({ name: clean_(f.name || nm, 80), url: file.getUrl() });
    } catch (err) { console.error(err); }
  });
  return out;
}

function submit_(b) {
  if (b.website) return { ok: true }; // honeypot: bots fill this hidden field
  const name = clean_(b.name, 100);
  const mobile = String(b.mobile || '').replace(/[^\d+]/g, '').slice(0, 15);
  const address = clean_(b.address, 300);
  if (!name || !address || !/^(\+?91)?[6-9]\d{9}$/.test(mobile)) {
    return { ok: false, permanent: true, message: 'Please check your name, mobile number and address.' };
  }
  const cache = CacheService.getScriptCache();
  const hourCount = Number(cache.get('hour') || 0);
  if (hourCount >= 60) return { ok: false, permanent: true, message: 'Too many inquiries right now. Please call us directly.' };

  const ref = /^AG-\d{6}-[A-Z0-9]{4}$/.test(String(b.ref || ''))
    ? b.ref
    : 'AG-' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyMMdd') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  let row;
  try {
    const sh = sheet_();
    const last = sh.getLastRow();
    if (last > 1 && sh.getRange(2, 1, last - 1, 1).getValues().some(function (r) { return r[0] === ref; })) {
      return { ok: true, duplicate: true, ref: ref };
    }
    const files = saveFiles_(b.files, ref);
    row = [ref, Utilities.formatDate(new Date(), 'Asia/Kolkata', "yyyy-MM-dd'T'HH:mm:ssXXX"), 'New', name, mobile, address,
      clean_(b.email, 120), clean_(b.company, 120), clean_(b.requirement, 60), clean_(b.material, 120), clean_(b.projectType, 80),
      clean_(b.area, 20), clean_(b.timeline, 40), clean_(b.notes, 1500), clean_(b.mapLink, 300), clean_(b.landmark, 150),
      clean_(b.coords, 40), JSON.stringify(files)];
    const r = last + 1;
    if (r > sh.getMaxRows()) sh.insertRowsAfter(sh.getMaxRows(), 100);
    const rng = sh.getRange(r, 1, 1, HEADERS.length);
    rng.setNumberFormat('@');
    rng.setValues([row]);
    cache.put('hour', String(hourCount + 1), 3600);
  } finally { lock.releaseLock(); }

  notify_(row);
  return { ok: true, ref: ref };
}

function notify_(row) {
  const text = 'New inquiry ' + row[0] + '\n' + row[3] + ' · ' + row[4] + '\n' + row[8] + (row[9] ? ' — ' + row[9] : '') + '\n' + row[5] + (row[13] ? '\nNotes: ' + row[13] : '');
  try {
    const to = prop_('OWNER_EMAIL');
    if (to) MailApp.sendEmail(to, 'New inquiry ' + row[0] + ' — ' + row[3], text + '\n\nOpen your dashboard to reply.');
  } catch (err) { console.error(err); }
  try {
    const ph = prop_('CALLMEBOT_PHONE'), key = prop_('CALLMEBOT_KEY');
    if (ph && key) UrlFetchApp.fetch('https://api.callmebot.com/whatsapp.php?phone=' + encodeURIComponent(ph) + '&text=' + encodeURIComponent(text) + '&apikey=' + encodeURIComponent(key), { muteHttpExceptions: true });
  } catch (err) { console.error(err); }
}

function list_() {
  const sh = sheet_();
  const last = sh.getLastRow();
  if (last < 2) return { ok: true, rows: [] };
  const vals = sh.getRange(2, 1, last - 1, HEADERS.length).getValues();
  const rows = vals.map(function (v) {
    let files = [];
    try { files = JSON.parse(v[17] || '[]'); } catch (e) {}
    return { ref: v[0], received: v[1], status: v[2] || 'New', name: v[3], mobile: v[4], address: v[5], email: v[6], company: v[7],
      requirement: v[8], material: v[9], projectType: v[10], area: v[11], timeline: v[12], notes: v[13], mapLink: v[14], landmark: v[15], coords: v[16], files: files };
  }).reverse().slice(0, 500);
  return { ok: true, rows: rows };
}

function setStatus_(b) {
  if (STATUSES.indexOf(b.status) < 0) return { ok: false, message: 'Bad status.' };
  const sh = sheet_();
  const last = sh.getLastRow();
  if (last < 2) return { ok: false, message: 'Not found.' };
  const refs = sh.getRange(2, 1, last - 1, 1).getValues();
  for (let i = 0; i < refs.length; i++) {
    if (refs[i][0] === b.ref) { sh.getRange(i + 2, 3).setValue(b.status); return { ok: true }; }
  }
  return { ok: false, message: 'Not found.' };
}

</script>
<script>
/* ============ CONFIG — edit these ============ */
const CFG = {
  phone: '7081721056',
  wa: '917081573977',          // WhatsApp number with country code
  waDisplay: '7081573977',
  endpoint: ''                 // Paste your Google Apps Script Web App URL here (see SETUP.md). Needed for the owner dashboard.
};
/* Add project films here when ready. cats: any of the filter names used on the Our Work page. */
const PROJECTS = [
  // { title:'Marble flooring — Villa', cats:['Marble Installation','Residential','Completed'], video:'videos/villa.mp4', poster:'' }
];
/* ============================================= */

const WA_TEXT = 'Hello The Amrkals Group, I would like to enquire about premium tiles / marble / granite supply and installation.';
const waLink = (t) => `https://wa.me/${CFG.wa}?text=${encodeURIComponent(t || WA_TEXT)}`;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const MATERIALS = [
  ['tiles','Floor Tiles','Tiles for internal and external floors, supplied in the size and finish confirmed for the project.'],
  ['tiles','Wall Tiles','Wall tiles for bathrooms, kitchens and feature walls.'],
  ['tiles','Vitrified Tiles','Dense, low-porosity vitrified tiles for high-traffic floors.'],
  ['tiles','Porcelain Tiles','Porcelain tiles for interiors and exteriors, including wet areas.'],
  ['tiles','Ceramic Tiles','Ceramic tiles for wall and light-traffic floor applications.'],
  ['tiles','Large Format Tiles','Large-format tiles for continuous surfaces with minimal joints.'],
  ['tiles','Premium Designer Tiles','Designer-pattern tiles for feature areas and hospitality interiors.'],
  ['tiles','Commercial Tiles','Specification tiles for offices, retail, hospitals and institutions.'],
  ['marble','Natural Marble','Natural stone marble for flooring, cladding and staircases.'],
  ['marble','Italian Marble','Imported Italian marble selected for veining, tone and finish.'],
  ['marble','Indian Marble','Indian marble in a range of tones for residential and commercial work.'],
  ['marble','White Marble','White marble for bright floors, wall cladding and feature surfaces.'],
  ['marble','Designer Marble','Patterned and book-matched marble for statement interiors.'],
  ['marble','Premium Flooring Marble','Flooring-grade marble slabs prepared and laid by our installation teams.'],
  ['granite','Black Granite','Dark granite for counters, flooring and wet areas.'],
  ['granite','White Granite','Light granite for flooring, stairs and kitchen platforms.'],
  ['granite','Red Granite','Red-toned granite for staircases, plinths and exterior work.'],
  ['granite','Premium Granite','Selected granite slabs for premium residential and commercial work.'],
  ['granite','Commercial Granite','Durable granite for high-traffic commercial installations.'],
  ['granite','Custom Granite Applications','Cut-to-size granite for counters, cladding, steps and custom details.']
];
const SERVICES = [
  ['Floor','Tile Installation','Floor and wall tile installation with levelled substrates, controlled joints and clean finishing.'],
  ['Floor','Marble Installation','Marble laying, jointing and polishing for floors, walls and feature surfaces.'],
  ['Floor','Granite Installation','Granite platform, flooring and cladding installation cut to size on site.'],
  ['Floor','Floor Installation','Full floor installation across rooms, corridors and large commercial areas.'],
  ['Wall','Wall Installation','Wall cladding and tiling for interiors, exteriors and feature walls.'],
  ['Staircase','Staircase Installation','Treads, risers and landings in marble, granite or tile with precise edge detailing.'],
  ['Wet Area','Bathroom Installation','Bathroom floors, walls, niches and slope work for drainage.'],
  ['Wet Area','Kitchen Installation','Kitchen flooring, backsplashes and platform work in granite or tile.'],
  ['Commercial','Hotel Flooring','Guest rooms, lobbies, corridors and banquet areas installed to hospitality standards.'],
  ['Commercial','Mall Flooring','High-traffic mall floors installed in phases to keep the site operational.'],
  ['Commercial','Office Flooring','Corporate office flooring, reception areas and meeting spaces.'],
  ['Commercial','Hospital Flooring','Hygienic, low-joint flooring for healthcare environments.'],
  ['Commercial','Commercial Building Installation','Multi-floor commercial installations with sequenced material deliveries.'],
  ['Infrastructure','Large Construction Project Installation','Project-scale installation contracts for construction and infrastructure work.'],
  ['Custom','Custom Installation Projects','Non-standard installation scopes evaluated and quoted individually.']
];
const CAT_LABEL = { tiles:'Tiles', marble:'Marble', granite:'Granite' };
const REQS = [
  ['Purchase Only','Material supply, delivered to site'],
  ['Installation Services','Our crews install your material'],
  ['Purchase + Installation','Supply and install in one contract']
];

const inq = (req, mat) => '#/inquiry' + (req || mat ? '?' + new URLSearchParams({ ...(req && { requirement: req }), ...(mat && { material: mat }) }).toString() : '');

/* ---------------- Page templates ---------------- */
const pages = {};

pages.home = () => `
<section class="hero">
  <svg class="veins" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#C9A96A" stroke-width=".6" aria-hidden="true">
    <path d="M-20 220C220 160 300 360 520 300S860 60 1240 200"/><path d="M-20 520C180 470 360 640 600 560S980 380 1240 520"/>
    <path d="M300 -20C340 160 260 300 380 440S520 700 480 820" opacity=".6"/><path d="M820 -20C780 140 900 260 860 420S960 660 1000 820" opacity=".5"/>
  </svg>
  <div class="wrap">
    <div class="tag">Supply · Installation · Project Contracts</div>
    <h1>Building Excellence.<br><em>Defining Luxury.</em></h1>
    <p class="lead">Premium Tiles, Marble &amp; Granite Supply and Professional Installation Solutions.</p>
    <div class="row">
      <a class="btn solid" href="#/materials">Explore Our Materials</a>
      <a class="btn" href="#/inquiry">Request a Project Consultation</a>
    </div>
    <div class="pills"><span>Premium Tiles</span><span>Natural Marble</span><span>Granite</span><span>Professional Installation</span></div>
  </div>
  <div class="scroll">Scroll</div>
</section>

<section class="alt"><div class="wrap">
  <div class="eyebrow reveal">The Group</div>
  <h2 class="reveal">A single accountable partner for <em>stone and installation.</em></h2>
  <p class="lead reveal">The Amrkals Group operates at the intersection of material supply and craftsmanship. We curate tiles, natural marble and granite, then install them with our own site teams — so architects, builders and homeowners deal with one accountable partner from selection through handover.</p>
  <div class="grid g3" style="margin-top:44px">
    <div class="card reveal"><span class="num">01</span><h3>Material Supply</h3><p>Tiles, natural marble and granite selected, sourced and delivered to site.</p></div>
    <div class="card reveal"><span class="num">02</span><h3>Professional Installation</h3><p>Floor, wall, staircase, bathroom, kitchen and commercial flooring crews.</p></div>
    <div class="card reveal"><span class="num">03</span><h3>Project Contracts</h3><p>Residential, hospitality, healthcare, retail and infrastructure-scale supply.</p></div>
  </div>
  <div class="row"><a class="link" href="#/about">About The Amrkals Group →</a></div>
</div></section>

<section><div class="wrap">
  <div class="head-split"><div><div class="eyebrow reveal">Our Materials</div><h2 class="reveal">Stone selected for the <em>lifetime</em> of a building.</h2></div>
  <a class="btn" href="#/materials">Full Material Library</a></div>
  <div class="grid g3">
    ${[['tiles','Tiles',['Floor Tiles','Wall Tiles','Vitrified Tiles','Porcelain Tiles','Large Format']],
       ['marble','Marble',['Italian Marble','Indian Marble','White Marble','Designer Marble','Flooring Marble']],
       ['granite','Granite',['Black Granite','White Granite','Red Granite','Premium Granite','Custom Applications']]]
      .map(([k,t,l]) => `<div class="card cat ${k} reveal"><div class="art"></div><div class="body"><h3>${t}</h3>
        <ul>${l.map(x => `<li>${x}</li>`).join('')}</ul><a class="link" href="#/materials?category=${k}">View Collection →</a></div></div>`).join('')}
  </div>
</div></section>

<section class="alt"><div class="wrap">
  <div class="eyebrow reveal">Installation Services</div>
  <h2 class="reveal">Installed by specialists, <em>to architectural tolerance.</em></h2>
  <div class="ilist reveal" style="margin-top:40px">
    ${['Tile Installation','Marble Installation','Granite Installation','Floor Installation','Wall Installation','Staircase Installation','Bathroom & Kitchen','Commercial & Hotel Flooring']
      .map((s, i) => `<div><b>0${i + 1}</b>${s.replace('&','&amp;')}</div>`).join('')}
  </div>
  <div class="cap reveal"><div class="eyebrow">Site Capability</div><p style="max-width:70ch">Residential villas, hotels, malls, offices, hospitals and large construction contracts — supplied and installed end to end.</p></div>
  <div class="row"><a class="btn" href="#/services">All Installation Services</a><a class="btn solid" href="#/inquiry">Get a Quotation</a></div>
</div></section>

<section><div class="wrap">
  <div class="head-split"><div><div class="eyebrow reveal">Our Work</div><h2 class="reveal">Project films <em>from our sites.</em></h2>
  <p class="lead reveal">Marble flooring, large-format tiling and granite work filmed on site — published by our team as projects complete.</p></div>
  <a class="btn" href="#/portfolio">View Full Showcase</a></div>
  <div class="grid g3">${[0,1,2].map(i => PROJECTS[i] ? filmCard(PROJECTS[i]) : '<div class="film reveal"><span>Project films publishing soon</span></div>').join('')}</div>
</div></section>

<section class="alt"><div class="wrap">
  <div class="eyebrow reveal">Why The Amrkals Group</div>
  <h2 class="reveal">Built on material knowledge <em>and site discipline.</em></h2>
  <div class="grid g3" style="margin-top:40px">
    ${[['Supply & Installation','Material and craft under one contract — no gap between the slab supplier and the site team.'],
       ['Project-Scale Logistics','Bulk quantities, phased deliveries and site sequencing for commercial contracts.'],
       ['Precision Crews','Cutting, laying, jointing and polishing executed by dedicated stone specialists.'],
       ['Itemised Quotations','Material, quantity, installation and transport itemised — every charge approved by staff.'],
       ['Supervised Sites','Progress documented on site, photographed and reported through the project record.'],
       ['Residential to Infrastructure','From a single villa floor to multi-floor commercial and institutional buildings.']]
      .map(([t, d]) => `<div class="card reveal"><h3>${t.replace('&','&amp;')}</h3><p>${d}</p></div>`).join('')}
  </div>
</div></section>

<section><div class="wrap">
  <div class="eyebrow reveal">How we work</div>
  <h2 class="reveal">Our process, <em>from first call to handover.</em></h2>
  <p class="lead reveal">Five stages · One accountable partner</p>
  <div class="steps reveal">
    ${[['Enquiry','Share your requirement, drawings and site details.'],['Site Assessment','Measurements and material suitability reviewed.'],['Quotation','Itemised pricing for supply, installation and transport.'],['Supply & Installation','Materials delivered and laid by our crews.'],['Inspection & Handover','Final finishing, inspection and documented handover.']]
      .map(([t, d], i) => `<div class="step"><div class="num">0${i + 1}</div><h3>${t.replace('&','&amp;')}</h3><p>${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="cta"><div class="wrap box">
  <div>
    <div class="eyebrow">Request a Quotation</div>
    <h2>Tell us about the project.<br><em>We will handle the stone.</em></h2>
    <p class="lead">Share your requirement — tiles, marble, granite, installation or a complete supply-and-install contract. Our team reviews every enquiry and responds with a considered quotation.</p>
    <div class="row"><a class="btn solid" href="#/inquiry">Start Your Inquiry</a><a class="btn" data-wa href="#" target="_blank" rel="noopener">WhatsApp Us</a></div>
  </div>
  <div class="direct"><div class="eyebrow">Direct Lines</div>
    <a href="tel:${CFG.phone}"><small>Call the office</small><strong>${CFG.phone}</strong></a>
    <a data-wa href="#" target="_blank" rel="noopener"><small>WhatsApp</small><strong>${CFG.waDisplay}</strong></a>
    <p>Site visits, material samples and commercial contract discussions are arranged by appointment.</p></div>
</div></section>`;

function filmCard(p) {
  return `<div class="film reveal"><video controls preload="metadata" ${p.poster ? `poster="${esc(p.poster)}"` : ''} src="${esc(p.video)}"></video></div>`;
}

pages.materials = (q) => {
  const cat = ['tiles', 'marble', 'granite'].includes(q.get('category')) ? q.get('category') : 'all';
  const list = MATERIALS.filter(m => cat === 'all' || m[0] === cat);
  return `
<div class="page-hero"><div class="wrap"><div class="eyebrow">Material Library</div>
  <h1>Tiles, marble and granite for <em>considered architecture.</em></h1>
  <p class="lead">Every material is supplied to project specification, with installation available as part of the same contract. Sizes, finishes and availability are confirmed for each requirement.</p></div></div>
<section style="padding-top:50px"><div class="wrap">
  <div class="chips">${[['all','All Materials'],['tiles','Tiles'],['marble','Marble'],['granite','Granite']]
    .map(([k, l]) => `<a class="chip ${k === cat ? 'on' : ''}" href="#/materials${k === 'all' ? '' : '?category=' + k}">${l}</a>`).join('')}</div>
  <div class="count"><span>${list.length} materials</span><a class="link" href="${inq('Purchase + Installation')}">Bulk supply inquiry →</a></div>
  <div class="grid g3">
    ${list.map(m => `<div class="card mat reveal"><span class="badge">${CAT_LABEL[m[0]]} · Enquire for Availability</span><h3>${m[1]}</h3><p>${m[2]}</p>
      <div class="go"><a class="link" href="${inq('Purchase + Installation', m[1])}">Request a quotation →</a></div></div>`).join('')}
  </div>
</div></section>`;
};

pages.services = () => `
<div class="page-hero"><div class="wrap"><div class="eyebrow">Installation Services</div>
  <h1>Precision installation, <em>supervised on site.</em></h1>
  <p class="lead">Our crews install tiles, natural marble and granite across residential, hospitality, healthcare, retail and institutional projects. Request any service below for an itemised quotation.</p>
  <div class="row"><a class="btn solid" href="${inq('Installation Services')}">Request Installation</a><a class="btn" href="${inq('Purchase + Installation')}">Get a Quotation</a></div></div></div>
<section style="padding-top:60px"><div class="wrap">
  <div class="grid g3">
    ${SERVICES.map(s => `<div class="card svc reveal"><span class="grp">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p>
      <div class="acts"><a class="btn" href="${inq('Installation Services', s[1])}">Request Installation</a><a class="btn ghost" href="${inq('Purchase + Installation', s[1])}">Get a Quotation</a></div></div>`).join('')}
  </div>
  <div class="grid g3" style="margin-top:60px">
    <div class="card reveal"><span class="num">A</span><h3>Site measurement</h3><p>Levels, layouts and material quantities verified before work starts.</p></div>
    <div class="card reveal"><span class="num">B</span><h3>Material handling</h3><p>Slabs and tiles protected, sequenced and staged for each floor.</p></div>
    <div class="card reveal"><span class="num">C</span><h3>Finishing</h3><p>Jointing, polishing, skirting and final inspection before handover.</p></div>
  </div>
  <div class="row"><a class="link" href="#/portfolio">See our work →</a></div>
</div></section>`;

const FILTERS = ['All Projects','Tiles Installation','Marble Installation','Granite Installation','Residential','Commercial','Completed','Ongoing'];
pages.portfolio = (q) => {
  const f = FILTERS.includes(q.get('f')) ? q.get('f') : 'All Projects';
  const list = PROJECTS.filter(p => f === 'All Projects' || (p.cats || []).includes(f));
  return `
<div class="page-hero"><div class="wrap"><div class="eyebrow">Our Work &amp; Project Showcase</div>
  <h1>Stone work, <em>filmed on our sites.</em></h1>
  <p class="lead">Published project films and completed work from The Amrkals Group — tiles, marble and granite installation documented as projects progress and complete.</p></div></div>
<section style="padding-top:50px"><div class="wrap">
  <div class="chips">${FILTERS.map(x => `<a class="chip ${x === f ? 'on' : ''}" href="#/portfolio${x === 'All Projects' ? '' : '?f=' + encodeURIComponent(x)}">${x}</a>`).join('')}</div>
  ${list.length ? `<div class="grid g3">${list.map(p => `<div>${filmCard(p)}<h3 style="margin-top:14px;font-size:1.3rem">${esc(p.title)}</h3></div>`).join('')}</div>` :
  `<div class="empty"><div class="eyebrow" style="justify-content:center">Project films</div><h2>Our project films are being published.</h2>
   <p style="max-width:52ch;margin:0 auto 26px">Videos of recent installations appear here as soon as they are published by our team. In the meantime, contact us for references relevant to your project.</p>
   <a class="btn solid" href="#/contact">Talk to Our Team</a></div>`}
</div></section>`;
};

pages.about = () => `
<div class="page-hero"><div class="wrap"><div class="eyebrow">About The Group</div>
  <h1>Stone, supplied with intent. <em>Installed with precision.</em></h1>
  <p class="lead">The Amrkals Group works with architects, builders, contractors and homeowners on tiling, marble and granite requirements across residential and commercial projects.</p></div></div>
<section><div class="wrap"><div class="grid g2" style="align-items:start;gap:56px">
  <div><h2>One partner from material selection to handover.</h2>
    <p class="lead" style="margin-bottom:18px">The Amrkals Group supplies and installs premium tiles, natural marble and granite for residential, commercial and large-scale construction projects.</p>
    <p class="lead" style="margin-bottom:18px">We work as a single accountable partner: material selection and sourcing, project-scale supply, and professional installation by our own site teams. Our work covers homes and villas, hotels and hospitality interiors, shopping malls, offices, hospitals, institutional buildings and large construction contracts.</p>
    <p class="lead">Every requirement is quoted transparently — material, quantity, installation and transport itemised — and every charge is approved by our team before a quotation is issued.</p>
    <div class="row"><a class="btn solid" href="#/inquiry">Request a Quotation</a><a class="btn" href="#/contact">Contact Us</a></div></div>
  <div class="card" style="padding:44px"><div class="eyebrow">Our positioning</div>
    <h2 style="font-size:2.4rem">Building Excellence. <em>Defining Luxury.</em></h2>
    <p>A premium supply and installation partner for projects where material quality and execution cannot be compromised.</p></div>
</div></div></section>
<section class="alt"><div class="wrap"><div class="eyebrow">What we focus on</div><h2>Eight areas of work.</h2>
  <div class="grid g4" style="margin-top:34px">
    ${[['Premium Tiles','Floor, wall, vitrified, porcelain, large-format and designer tiles.'],['Natural Marble','Italian and Indian marble, white and designer marble, premium flooring.'],['Granite','Black, white and red granite, commercial granite and custom applications.'],['Material Supply','Project-scale supply, bulk quantities and phased site deliveries.'],['Professional Installation','Tiles, marble and granite installed by dedicated crews.'],['Commercial Projects','Hotels, malls, offices, hospitals, institutions and infrastructure.'],['Residential Projects','Villas, apartments, staircases, bathrooms and kitchens.'],['Large-Scale Contracts','Multi-floor construction material contracts with site sequencing.']]
      .map(([t, d]) => `<div class="card reveal"><h3 style="font-size:1.35rem">${t}</h3><p>${d}</p></div>`).join('')}
  </div></div></section>`;

pages.contact = () => `
<div class="page-hero"><div class="wrap"><div class="eyebrow">Contact</div>
  <h1>Speak to our team <em>about your project.</em></h1>
  <p class="lead">Call, message or send a full project inquiry. We review every requirement and respond with material options and an itemised quotation.</p>
  <div class="row"><a class="btn solid" href="#/inquiry">Send an Inquiry</a><a class="btn" data-wa href="#" target="_blank" rel="noopener">Chat on WhatsApp</a></div></div></div>
<section><div class="wrap"><div class="grid g2">
  <div class="card"><h3>Call the office</h3><p style="margin-bottom:14px">For quotations, site visits and commercial contract discussions.</p><a class="link" href="tel:${CFG.phone}" style="font-size:1.3rem;letter-spacing:.08em">${CFG.phone}</a></div>
  <div class="card"><h3>WhatsApp</h3><p style="margin-bottom:14px">Send photographs, drawings or a short description of your requirement.</p><a class="link" data-wa href="#" target="_blank" rel="noopener" style="font-size:1.3rem;letter-spacing:.08em">${CFG.waDisplay}</a></div>
</div>
<div class="card" style="margin-top:22px;padding:44px"><div class="eyebrow">Start properly</div><h2 style="font-size:2.2rem">A complete inquiry gets a faster, more accurate quotation.</h2>
  <p class="lead">Share project type, area, material preference, site photos and location in one guided form.</p><div class="row"><a class="btn solid" href="#/inquiry">Open inquiry form</a></div></div>
<p style="margin-top:26px;color:var(--muted);font-size:.85rem">Site visits and material sample viewings are arranged by appointment. Our office address and email are published here once confirmed by the company.</p>
</div></section>`;

const legal = (title, body) => `<div class="page-hero"><div class="wrap"><div class="eyebrow">Legal</div><h1>${title}</h1></div></div>
<section><div class="wrap"><div class="prose">${body}<p style="margin-top:30px;font-size:.8rem">Placeholder text — have it reviewed and finalised by the company before publishing.</p></div></div></section>`;
pages.privacy = () => legal('Privacy Policy', `
<p>The Amrkals Group collects the details you submit through our inquiry form (name, mobile number, address, optional email and company, project details, files and location) only to review and respond to your inquiry.</p>
<h2>How your details are used</h2><ul><li>To contact you about your requirement and prepare an itemised quotation.</li><li>To arrange site visits and material sample viewings.</li></ul>
<h2>Who can see them</h2><p>Your details are never shown publicly and are accessible only to authorised staff of The Amrkals Group.</p>
<h2>Contact</h2><p>Questions about your data: call ${CFG.phone} or WhatsApp ${CFG.waDisplay}.</p>`);
pages.terms = () => legal('Terms &amp; Conditions', `
<p>All information on this website is for general guidance. Material availability, sizes, finishes and prices are confirmed individually for each project.</p>
<h2>Quotations</h2><p>Quotations itemise material, quantity, installation and transport, and are issued after review by our team. They are valid for the period stated on the quotation.</p>
<h2>Site visits &amp; samples</h2><p>Arranged by appointment.</p>
<h2>Natural stone</h2><p>Marble and granite are natural products; variation in colour, veining and texture is inherent.</p>`);

pages.inquiry = () => `
<div class="page-hero"><div class="wrap"><div class="eyebrow">Project Inquiry</div>
  <h1>Tell us what <em>the project needs.</em></h1>
  <p class="lead">Six short steps. Your inquiry is reviewed by our team before we respond with material options and an itemised quotation.</p>
  <div class="feat"><span>Material supply and installation in one contract</span><span>Attach site photos, drawings and plans</span><span>Share the site location for a faster site visit</span></div></div></div>
<section style="padding-top:60px"><div class="wrap"><div class="form-shell" id="form"></div></div></section>`;

pages.notfound = () => `<div class="page-hero"><div class="wrap"><div class="eyebrow">404</div><h1>Page not found.</h1><div class="row"><a class="btn solid" href="#/">Back to home</a></div></div></div>`;

/* ---------------- Inquiry wizard ---------------- */
const STEPS = ['Your Details', 'Requirement', 'Project', 'Files', 'Location', 'Review'];
const PROJECT_TYPES = ['Residential villa / home', 'Apartment', 'Hotel / hospitality', 'Shopping mall / retail', 'Office building', 'Hospital / healthcare', 'Institutional building', 'Infrastructure / large construction', 'Other'];
const TIMELINES = ['Immediately', 'Within 1 month', '1–3 months', '3+ months', 'Just exploring'];
let data, step, files = [];

function initInquiry(q) {
  const requirement = REQS.some(r => r[0] === q.get('requirement')) ? q.get('requirement') : '';
  data = { name:'', mobile:'', address:'', email:'', company:'', requirement, material: q.get('material') || '', projectType:'', area:'', timeline:'', notes:'', mapLink:'', landmark:'', coords:'' };
  step = 0; files = [];
  renderStep();
}

function renderStep(errors = {}) {
  const f = $('#form'); if (!f) return;
  const fld = (k, label, req, type = 'text', ph = '') => `<div class="field ${errors[k] ? 'bad' : ''}"><label>${label}${req ? ' <i>*</i>' : ' <span style="opacity:.6">Optional</span>'}</label>
    <input data-k="${k}" type="${type}" value="${esc(data[k])}" placeholder="${ph}"><div class="msg">${errors[k] || ''}</div></div>`;
  let body = '';
  if (step === 0) body = `<div class="two">${fld('name','Full name',1)}${fld('mobile','Mobile number',1,'tel','10-digit mobile')}</div>${fld('address','Full project address',1)}
    <div class="two">${fld('email','Email address',0,'email')}${fld('company','Company / organisation',0)}</div>
    <div class="note">Your details are used only to review and respond to this inquiry. They are never shown publicly and only authorised staff of The Amrkals Group can access them.</div>`;
  if (step === 1) {
    const mats = `<optgroup label="Materials">${MATERIALS.map(m => `<option>${m[1]}</option>`).join('')}</optgroup><optgroup label="Installation">${SERVICES.map(s => `<option>${s[1]}</option>`).join('')}</optgroup>`;
    body = `<div class="field ${errors.requirement ? 'bad' : ''}"><label>What do you need? <i>*</i></label><div class="opts">${REQS.map(r => `<div class="opt ${data.requirement === r[0] ? 'on' : ''}" data-req="${r[0]}"><strong>${r[0]}</strong><small>${r[1]}</small></div>`).join('')}</div><div class="msg">${errors.requirement || ''}</div></div>
    <div class="field"><label>Material or service <span style="opacity:.6">Optional</span></label><select data-k="material"><option value="">Not sure yet</option>${mats}</select></div>`;
  }
  if (step === 2) body = `<div class="two"><div class="field"><label>Project type</label><select data-k="projectType"><option value="">Select</option>${PROJECT_TYPES.map(x => `<option>${x}</option>`).join('')}</select></div>
    <div class="field"><label>Approx. area (sq ft)</label><input data-k="area" type="text" inputmode="numeric" value="${esc(data.area)}" placeholder="e.g. 2500"></div></div>
    <div class="field"><label>When do you need it?</label><select data-k="timeline"><option value="">Select</option>${TIMELINES.map(x => `<option>${x}</option>`).join('')}</select></div>
    <div class="field"><label>Notes</label><textarea data-k="notes" placeholder="Colour, finish, sizes, rooms, special requirements…">${esc(data.notes)}</textarea></div>`;
  if (step === 3) body = `<div class="field"><label>Site photos and drawings (photos or PDF, up to ${MAX_FILES} files)</label><input id="fileIn" type="file" multiple accept="image/*,application/pdf"></div>
    ${fileMsg ? `<div class="note" style="border-color:var(--err)">${esc(fileMsg)}</div>` : ''}
    <ul class="files">${files.map((x, i) => `<li>${esc(x.name)} <span style="opacity:.6">(${Math.max(1, Math.round(x.size / 1024))} KB)</span> <button class="fx" type="button" data-rm="${i}">Remove</button></li>`).join('')}</ul>
    <div class="note">Photos are compressed automatically and sent with your inquiry. Other file types (such as CAD drawings) can be sent on WhatsApp ${CFG.waDisplay}.</div>`;
  if (step === 4) body = `<div class="field"><label>Google Maps link</label><input data-k="mapLink" type="url" value="${esc(data.mapLink)}" placeholder="https://maps.google.com/…"></div>
    <div class="field"><label>Landmark / area</label><input data-k="landmark" type="text" value="${esc(data.landmark)}" placeholder="Near…"></div>
    <button class="btn" type="button" id="geo">📍 Share my current location</button><p id="geomsg" style="margin-top:12px;font-size:.85rem;color:var(--muted)">${data.coords ? 'Location captured: ' + esc(data.coords) : ''}</p>`;
  if (step === 5) {
    const rows = [['Name', data.name], ['Mobile', data.mobile], ['Address', data.address], ['Email', data.email], ['Company', data.company], ['Requirement', data.requirement], ['Material / service', data.material], ['Project type', data.projectType], ['Area', data.area && data.area + ' sq ft'], ['Timeline', data.timeline], ['Notes', data.notes], ['Files', files.map(x => x.name).join(', ')], ['Location', [data.mapLink, data.landmark, data.coords].filter(Boolean).join(' · ')]];
    body = `<div class="review"><dl>${rows.filter(r => r[1]).map(r => `<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl></div>
    <input id="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0"><p class="consent">By submitting this inquiry you consent to being contacted about your requirement. Read our <a href="#/privacy">Privacy Policy</a> and <a href="#/terms">Terms &amp; Conditions</a>.</p>`;
  }
  f.innerHTML = `<div class="stepper">${STEPS.map((s, i) => `<div class="${i === step ? 'on' : i < step ? 'done' : ''}"><b>0${i + 1}</b>${s}</div>`).join('')}</div>${body}
    <div class="nav-row"><button class="btn ghost" type="button" id="back" ${step === 0 ? 'disabled' : ''}>Back</button>
    <button class="btn solid" type="button" id="next">${step === 5 ? 'Submit Inquiry' : 'Continue'}</button></div>`;
  $$('select[data-k]', f).forEach(s => { s.value = data[s.dataset.k]; });
}

function validate() {
  const e = {};
  if (step === 0) {
    if (!data.name.trim()) e.name = 'Please enter your name.';
    if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(data.mobile.replace(/[\s-]/g, ''))) e.mobile = 'Enter a valid 10-digit mobile number.';
    if (!data.address.trim()) e.address = 'Please enter the project address.';
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Enter a valid email address.';
  }
  if (step === 1 && !data.requirement) e.requirement = 'Please choose one option.';
  return e;
}

/* ---------------- Storage + server helpers ---------------- */
const backendCode = () => ($('#backend-code') ? $('#backend-code').textContent.trim() : '');
const lsGet = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (_) { return d; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (_) { return false; } };

async function api(body, ms = 30000) {
  const c = new AbortController(); const t = setTimeout(() => c.abort(), ms);
  try {
    const r = await fetch(CFG.endpoint, { method: 'POST', body: JSON.stringify(body), signal: c.signal });
    return await r.json();
  } finally { clearTimeout(t); }
}

/* Inquiries that could not be delivered are kept and retried automatically on the next visit. */
let flushing = false;
async function flushOutbox() {
  if (!CFG.endpoint || flushing) return;
  const box = lsGet('amrkals_outbox', []);
  if (!box.length) return;
  flushing = true;
  const left = [];
  try {
    for (const p of box) {
      try { const j = await api(p, 45000); if (!(j && (j.ok || j.permanent))) left.push(p); }
      catch (_) { left.push(p); }
    }
    // keep anything queued while we were sending
    const now = lsGet('amrkals_outbox', []).filter(x => !box.some(b => b.ref === x.ref));
    lsSet('amrkals_outbox', left.concat(now));
  } finally { flushing = false; }
}
window.addEventListener('online', flushOutbox);

/* ---------------- Files (photos / PDFs) ---------------- */
const MAX_FILES = 5, MAX_PDF = 3 * 1024 * 1024;
let fileMsg = '';
const readB64 = (blob) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = rej; r.readAsDataURL(blob); });
async function shrinkImage(file) {
  const bmp = await createImageBitmap(file);
  const s = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
  const c = document.createElement('canvas'); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
  c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height);
  const blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .8));
  return { name: file.name.replace(/\.[^.]+$/, '') + '.jpg', type: 'image/jpeg', size: blob.size, data: await readB64(blob) };
}
async function addFiles(list) {
  fileMsg = '';
  for (const f of list) {
    if (files.length >= MAX_FILES) { fileMsg = `Maximum ${MAX_FILES} files per inquiry.`; break; }
    try {
      if (f.type.startsWith('image/')) files.push(await shrinkImage(f));
      else if (f.type === 'application/pdf' && f.size <= MAX_PDF) files.push({ name: f.name, type: f.type, size: f.size, data: await readB64(f) });
      else fileMsg = 'Only photos and PDFs up to 3 MB can be attached here — send other files on WhatsApp.';
    } catch (_) { fileMsg = `Could not read ${f.name}. Try a JPG/PNG photo, or send it on WhatsApp.`; }
  }
  renderStep();
}

/* ---------------- Submit ---------------- */
function summaryText(ref) {
  const L = [`Hello The Amrkals Group, I have submitted inquiry ${ref}.`, `Name: ${data.name}`, `Mobile: ${data.mobile}`, `Address: ${data.address}`, `Requirement: ${data.requirement}`];
  if (data.material) L.push(`Material/Service: ${data.material}`);
  if (data.projectType) L.push(`Project: ${data.projectType}`);
  if (data.area) L.push(`Area: ${data.area} sq ft`);
  if (data.timeline) L.push(`Timeline: ${data.timeline}`);
  if (data.notes) L.push(`Notes: ${data.notes}`);
  if (data.mapLink) L.push(`Map: ${data.mapLink}`);
  if (data.coords) L.push(`GPS: ${data.coords}`);
  if (files.length) L.push(`Files attached on website: ${files.map(x => x.name).join(', ')}`);
  return L.join('\n');
}

async function submitInquiry() {
  const btn = $('#next'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  const d = new Date();
  const ref = 'AG-' + String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0') + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  const payload = { action: 'submit', ref, submittedAt: d.toISOString(), ...data, files: files.map(({ name, type, data: b64 }) => ({ name, type, data: b64 })), website: ($('#hp') || {}).value || '' };
  let delivered = false, rejected = '';
  if (CFG.endpoint) {
    try {
      const j = await api(payload, 45000);
      if (j && j.ok) delivered = true;
      else if (j && j.permanent) rejected = j.message || 'The server could not accept this inquiry.';
    } catch (_) { /* network problem: queue below */ }
    if (!delivered && !rejected) {
      const box = lsGet('amrkals_outbox', []); box.push(payload);
      if (!lsSet('amrkals_outbox', box)) { box.pop(); box.push({ ...payload, files: [] }); lsSet('amrkals_outbox', box); }
    }
  }
  const local = lsGet('amrkals_inquiries', []);
  local.unshift({ ref, received: d.toISOString(), status: 'New', delivered, ...data, files: files.map(x => x.name) });
  lsSet('amrkals_inquiries', local.slice(0, 200));

  const wa = waLink(summaryText(ref));
  const first = esc(data.name.split(' ')[0]);
  const state = delivered
    ? `<h2>Thank you, ${first}.</h2><div class="ref">${ref}</div><p class="lead" style="margin:0 auto">Your inquiry has reached our team's dashboard. Quote this reference number — we will respond with material options and an itemised quotation. For a faster reply, also send the details on WhatsApp.</p>`
    : rejected
      ? `<h2>We could not send this.</h2><p class="lead" style="margin:16px auto">${esc(rejected)}</p>`
      : `<h2>One more step, ${first}.</h2><div class="ref">${ref}</div><p class="lead" style="margin:0 auto">${CFG.endpoint ? 'We could not reach our server just now. Your inquiry is saved on this device and will be re-sent automatically.' : 'Tap the button below to send your inquiry to our team on WhatsApp.'} Sending it on WhatsApp now gets it to us immediately.</p>`;
  $('#form').innerHTML = `<div class="success"><div class="eyebrow" style="justify-content:center">${delivered ? 'Inquiry received' : 'Inquiry prepared'}</div>${state}
    <div class="row" style="justify-content:center"><a class="btn solid" href="${wa}" target="_blank" rel="noopener">Send on WhatsApp ${CFG.waDisplay}</a><a class="btn" href="#/">Back to home</a></div></div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- Owner dashboard (#/admin) ---------------- */
const STATUSES = ['New', 'Contacted', 'Quoted', 'Won', 'Closed'];
let adminTimer = null;
const toWaNum = (m) => { const d = String(m || '').replace(/\D/g, ''); return d.length === 10 ? '91' + d : d; };
const safeUrl = (u) => /^https?:\/\//i.test(String(u || '')) ? String(u) : '';
const fmtDate = (s) => { const t = new Date(s); return isNaN(t) ? '' : t.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }); };

pages.admin = () => `<div class="page-hero"><div class="wrap"><div class="eyebrow">Staff only</div><h1>Inquiry <em>dashboard.</em></h1></div></div>
<section style="padding-top:50px"><div class="wrap" id="admin"></div></section>`;

function initAdmin() {
  const root = $('#admin'); if (!root) return;
  const st = { pin: '', rows: [], filter: 'All', q: '', err: '', busy: false, local: !CFG.endpoint };
  try { st.pin = sessionStorage.getItem('amrkals_pin') || ''; } catch (_) {}

  async function load(silent) {
    if (st.local) { st.rows = lsGet('amrkals_inquiries', []).map(r => ({ status: 'New', ...r })); draw(); return; }
    if (!st.pin) { draw(); return; }
    if (!silent) { st.busy = true; draw(); }
    try {
      const j = await api({ action: 'list', pin: st.pin });
      if (j && j.ok) { st.rows = j.rows || []; st.err = ''; }
      else {
        st.err = j && j.error === 'locked' ? 'Too many wrong attempts. Try again in 10 minutes.' : 'Wrong PIN.';
        st.pin = ''; try { sessionStorage.removeItem('amrkals_pin'); } catch (_) {}
      }
    } catch (_) { if (!silent) st.err = 'Could not reach the server. Check your internet connection and the endpoint URL.'; }
    st.busy = false; draw();
  }


  const setupHtml = () => `<details class="setup" ${CFG.endpoint ? '' : 'open'}><summary>Backend code &amp; setup guide (10 minutes, free)</summary>
    <ol>
      <li>Create a blank Google Sheet. Open <b>Extensions → Apps Script</b>, delete the sample code, paste the code below, Save.</li>
      <li>Choose function <b>setup</b>, press Run, and approve the permissions.</li>
      <li><b>Project Settings → Script properties</b>: add <b>ADMIN_PIN</b> (6+ characters, required). Optional: <b>OWNER_EMAIL</b>, and <b>CALLMEBOT_PHONE</b> + <b>CALLMEBOT_KEY</b> for free WhatsApp alerts (callmebot.com).</li>
      <li><b>Deploy → New deployment → Web app</b>: Execute as <b>Me</b>, access <b>Anyone</b>. Copy the Web app URL.</li>
      <li>In this file's script, set <b>endpoint: ''</b> to your URL, save, and upload the file to your hosting. Open <b>your-site/#/admin</b> and sign in with your PIN.</li>
    </ol>
    <button class="btn solid" id="copyCode" type="button">Copy backend code</button> <span id="copyMsg" style="font-size:.85rem;color:var(--muted)"></span>
    <textarea id="codeBox" readonly rows="12" spellcheck="false">${esc(backendCode())}</textarea></details>`;

  function frame() {
    if (!st.local && !st.pin) {
      root.innerHTML = `<form id="login" class="form-shell" style="max-width:420px;margin:0"><div class="field ${st.err ? 'bad' : ''}"><label>Owner PIN</label>
        <input id="pin" type="password" autocomplete="current-password" placeholder="Enter your PIN"><div class="msg">${esc(st.err)}</div></div>
        <button class="btn solid" type="submit">${st.busy ? 'Checking…' : 'Open dashboard'}</button></form>`;
      return false;
    }
    root.innerHTML = `${st.local ? `<div class="banner">Preview mode: no server is connected yet, so this only shows inquiries made on <b>this device</b>. Connect the Google Sheet backend (see SETUP.md) to receive every customer's inquiry here.</div>` : ''}
      ${st.err ? `<div class="banner">${esc(st.err)}</div>` : ''}
      <div class="stats" id="stats"></div>
      <div class="admin-bar"><input id="q" type="search" placeholder="Search name, mobile, material…" value="${esc(st.q)}" style="flex:1;min-width:200px">
        <select id="flt"><option>All</option>${STATUSES.map(s => `<option ${s === st.filter ? 'selected' : ''}>${s}</option>`).join('')}</select>
        <button class="btn" id="refresh" type="button">Refresh</button>${st.local ? '' : '<button class="btn ghost" id="logout" type="button">Log out</button>'}</div>
      <div id="leads"></div>${setupHtml()}`;
    return true;
  }
  const draw = () => { if (frame()) drawList(); };

  function drawList() {
    const cnt = (s) => st.rows.filter(r => (r.status || 'New') === s).length;
    $('#stats').innerHTML = `<div class="stat"><b>${st.rows.length}</b><small>Total</small></div>` + STATUSES.map(s => `<div class="stat"><b>${cnt(s)}</b><small>${s}</small></div>`).join('');
    const q = st.q.trim().toLowerCase();
    const rows = st.rows.filter(r => (st.filter === 'All' || (r.status || 'New') === st.filter) &&
      (!q || [r.name, r.mobile, r.ref, r.material, r.address, r.requirement, r.company].join(' ').toLowerCase().includes(q)));
    $('#leads').innerHTML = st.busy ? '<p style="color:var(--muted)">Loading…</p>' : rows.length ? rows.map(card).join('') :
      '<div class="empty"><h2>No inquiries yet.</h2><p>New customer inquiries will appear here.</p></div>';
  }

  function card(r) {
    const status = r.status || 'New';
    const files = (r.files || []).map(f => typeof f === 'string' ? `<span>${esc(f)}</span>` : (safeUrl(f.url) ? `<a class="link" target="_blank" rel="noopener" href="${esc(safeUrl(f.url))}">${esc(f.name)}</a>` : esc(f.name))).join(' · ');
    const row = (k, v) => v ? `<dt>${k}</dt><dd>${esc(v)}</dd>` : '';
    const map = safeUrl(r.mapLink);
    const msg = `Hello ${r.name}, this is The Amrkals Group regarding your inquiry ${r.ref}.`;
    return `<article class="lead ${status === 'New' ? 'new' : ''}"><div class="lead-top"><div><b>${esc(r.name)}</b><small>${esc(r.ref)} · ${esc(fmtDate(r.received || r.submittedAt))}</small></div>
      <select data-st="${esc(r.ref)}">${STATUSES.map(s => `<option ${s === status ? 'selected' : ''}>${s}</option>`).join('')}</select></div>
      <dl>${row('Mobile', r.mobile)}${row('Requirement', r.requirement)}${row('Material / service', r.material)}${row('Address', r.address)}${row('Project', [r.projectType, r.area && r.area + ' sq ft', r.timeline].filter(Boolean).join(' · '))}
      ${row('Company', r.company)}${row('Email', r.email)}${row('Notes', r.notes)}${row('Landmark', r.landmark)}${row('GPS', r.coords)}
      ${map ? `<dt>Map</dt><dd><a class="link" target="_blank" rel="noopener" href="${esc(map)}">Open map link</a></dd>` : ''}${files ? `<dt>Files</dt><dd>${files}</dd>` : ''}</dl>
      <div class="acts"><a class="btn solid" target="_blank" rel="noopener" href="https://wa.me/${esc(toWaNum(r.mobile))}?text=${encodeURIComponent(msg)}">WhatsApp customer</a><a class="btn" href="tel:${esc(String(r.mobile || '').replace(/[^\d+]/g, ''))}">Call</a></div></article>`;
  }

  root.addEventListener('submit', async (e) => {
    if (e.target.id !== 'login') return;
    e.preventDefault();
    const pin = $('#pin').value.trim(); if (!pin) return;
    st.pin = pin; st.err = '';
    try { sessionStorage.setItem('amrkals_pin', pin); } catch (_) {}
    await load();
  });
  root.addEventListener('input', (e) => { if (e.target.id === 'q') { st.q = e.target.value; drawList(); } });
  root.addEventListener('change', async (e) => {
    if (e.target.id === 'flt') { st.filter = e.target.value; drawList(); return; }
    const ref = e.target.dataset && e.target.dataset.st; if (!ref) return;
    const status = e.target.value; const row = st.rows.find(r => r.ref === ref); if (!row) return;
    const prev = row.status; row.status = status;
    if (st.local) { const all = lsGet('amrkals_inquiries', []); const x = all.find(r => r.ref === ref); if (x) x.status = status; lsSet('amrkals_inquiries', all); drawList(); return; }
    try { const j = await api({ action: 'status', pin: st.pin, ref, status }); if (!(j && j.ok)) throw 0; }
    catch (_) { row.status = prev; st.err = 'Could not save the status change. Try again.'; }
    draw();
  });
  root.addEventListener('click', (e) => {
    if (e.target.id === 'copyCode') {
      const box = $('#codeBox'), msg = $('#copyMsg'); let done = false;
      try { box.focus(); box.select(); done = document.execCommand('copy'); } catch (_) {}
      const finish = (ok) => { msg.textContent = ok ? 'Copied — paste it into Apps Script.' : 'Select all the code in the box and copy it manually.'; };
      if (!done && navigator.clipboard) navigator.clipboard.writeText(backendCode()).then(() => finish(true), () => finish(false)); else finish(done);
    }
    if (e.target.id === 'refresh') load();
    if (e.target.id === 'logout') { st.pin = ''; st.rows = []; try { sessionStorage.removeItem('amrkals_pin'); } catch (_) {} draw(); }
  });
  adminTimer = setInterval(() => { if (!st.local && st.pin && document.visibilityState === 'visible') load(true); }, 60000);
  load();
}

document.addEventListener('input', e => {
  const k = e.target.dataset && e.target.dataset.k;
  if (k && data && e.target.closest('#form')) data[k] = e.target.value;
});
document.addEventListener('change', e => {
  if (e.target.id === 'fileIn') addFiles([...e.target.files]);
});
document.addEventListener('click', e => {
  const t = e.target;
  if (t.dataset && t.dataset.rm !== undefined) { files.splice(+t.dataset.rm, 1); renderStep(); return; }
  const opt = t.closest('.opt');
  if (opt) { data.requirement = opt.dataset.req; renderStep(); return; }
  if (t.id === 'back') { step = Math.max(0, step - 1); renderStep(); window.scrollTo({ top: 120, behavior: 'smooth' }); }
  if (t.id === 'next') {
    const errs = validate();
    if (Object.keys(errs).length) { renderStep(errs); return; }
    if (step === 5) { submitInquiry(); return; }
    step++; renderStep(); window.scrollTo({ top: 120, behavior: 'smooth' });
  }
  if (t.id === 'geo') {
    const m = $('#geomsg');
    if (!navigator.geolocation) { m.textContent = 'Location is not available on this device.'; return; }
    m.textContent = 'Requesting location…';
    navigator.geolocation.getCurrentPosition(p => { data.coords = p.coords.latitude.toFixed(5) + ', ' + p.coords.longitude.toFixed(5); m.textContent = 'Location captured: ' + data.coords; },
      () => { m.textContent = 'Could not get your location — paste a Google Maps link instead.'; });
  }
});

/* ---------------- Router ---------------- */
const TITLES = {
  home: 'The Amrkals Group — Building Excellence. Defining Luxury.', materials: 'Materials — Tiles, Marble & Granite | The Amrkals Group',
  services: 'Installation Services | The Amrkals Group', portfolio: 'Our Work & Project Showcase | The Amrkals Group',
  about: 'About The Amrkals Group', contact: 'Contact The Amrkals Group', inquiry: 'Project Inquiry | The Amrkals Group',
  admin: 'Staff dashboard | The Amrkals Group', privacy: 'Privacy Policy | The Amrkals Group', terms: 'Terms & Conditions | The Amrkals Group', notfound: 'Page not found | The Amrkals Group'
};
/* Click-driven router: works even where the browser blocks hash/address-bar changes (in-app previews, sandboxed frames). */
let CURRENT = location.hash || '#/';
function go(hash) {
  CURRENT = hash;
  try { history.pushState(null, '', hash); } catch (_) { /* preview may forbid it — the page still switches */ }
  route();
}
const syncFromLocation = () => { const h = location.hash || '#/'; if (h !== CURRENT) { CURRENT = h; route(); } };
window.addEventListener('hashchange', syncFromLocation);
window.addEventListener('popstate', syncFromLocation);
document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href^="#/"]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault(); go(a.getAttribute('href'));
});
let lastKey = '';
function route() {
  if (adminTimer) { clearInterval(adminTimer); adminTimer = null; }
  const raw = CURRENT.replace(/^#\/?/, '');
  const [pathRaw, qs = ''] = raw.split('?');
  const path = pathRaw.replace(/\/$/, '') || 'home';
  const key = pages[path] ? path : 'notfound';
  const q = new URLSearchParams(qs);
  $('#app').innerHTML = pages[key](q);
  document.title = TITLES[key];
  $$('nav.main a').forEach(a => a.classList.toggle('on', a.dataset.r === key));
  $('#nav').classList.remove('open');
  if (key === 'inquiry') initInquiry(q);
  if (key === 'admin') initAdmin();
  let rb = $('meta[name=robots]'); if (key === 'admin') { if (!rb) { rb = document.createElement('meta'); rb.name = 'robots'; document.head.appendChild(rb); } rb.content = 'noindex,nofollow'; } else if (rb) rb.remove();
  $$('[data-wa]').forEach(a => a.href = waLink());
  const same = key === lastKey && (key === 'materials' || key === 'portfolio'); lastKey = key;
  if (!same) window.scrollTo(0, 0);
  observe();
  flushOutbox();
}
let io;
function observe() {
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
}
window.addEventListener('scroll', () => $('#top').classList.toggle('solid', scrollY > 30), { passive: true });
$('#burger').addEventListener('click', () => { const o = $('#nav').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o); });
$('#yr').textContent = new Date().getFullYear();
route();
flushOutbox();
</script>
</body>
</html>
ading index (2).html…]()
