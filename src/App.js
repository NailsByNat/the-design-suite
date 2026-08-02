import { useState } from "react";

const C = {
  bg:       "#FDFAF5",
  surface:  "#F7F2EA",
  card:     "#FFFFFF",
  border:   "#EDE5D8",
  text:     "#1A1510",
  muted:    "#9A8E82",
  gold:     "#B8955A",
  gold2:    "#D4B07A",
  champagne:"#E8D8B8",
  ivory:    "#FAF6EE",
  warm:     "#F0E8D8",
  dark:     "#1A1510",
};

// ── LIVE SITE CAROUSEL ───────────────────────────────────
const portfolioSites = [
  {
    name:     "Push Dreams Exotic",
    category: "Luxury Car Rentals",
    desc:     "Exotic car rental site with live availability checking, booking flow & conflict-free scheduling.",
    url:      "https://push-dreams-exotic.vercel.app",
    color:    "#FFF0F0",
    accent:   "#D90429",
    emoji:    "🚗",
  },
  {
    name:     "Selph Made",
    category: "Streetwear & Apparel",
    desc:     "Bold, industrial-style clothing brand site with shop, story & contact sections.",
    url:      "https://selph-made.vercel.app",
    color:    "#F2EFE7",
    accent:   "#B98A2F",
    emoji:    "👕",
  },
  {
    name:     "The Haze Effect",
    category: "Beauty & Wellness",
    desc:     "Mobile nail artistry site with service gallery, booking flow & client reviews.",
    url:      "https://thehazeeffect.vercel.app",
    color:    "#FDF0F3",
    accent:   "#C07080",
    emoji:    "💅",
  },
];

function SiteCarousel() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  const prev = () => { setLoading(true); setActive(i => (i - 1 + portfolioSites.length) % portfolioSites.length); };
  const next = () => { setLoading(true); setActive(i => (i + 1) % portfolioSites.length); };
  const site = portfolioSites[active];

  return (
    <div style={{ width:"100%" }}>
      {/* browser chrome mockup */}
      <div style={{ background:"#2A2520", borderRadius:"16px 16px 0 0", padding:"12px 20px", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ display:"flex", gap:7 }}>
          {["#FF5F56","#FFBD2E","#27C93F"].map((c,i)=><div key={i} style={{ width:12, height:12, borderRadius:"50%", background:c }} />)}
        </div>
        <div style={{ flex:1, background:"#1A1510", borderRadius:6, padding:"6px 14px", display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:10, height:10, borderRadius:"50%", background:`${site.accent}88`, flexShrink:0 }} />
          <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"#888", letterSpacing:.5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
            {site.name.toLowerCase().replace(/\s/g,"")} · thedesignsuite.co/work
          </span>
        </div>
        <div style={{ display:"flex", gap:6 }}>
          {["←","→"].map((a,i)=><div key={i} style={{ width:24, height:24, borderRadius:4, background:"#3A3530", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#888", fontSize:12 }}>{a}</div>)}
        </div>
      </div>

      {/* iframe preview */}
      <div style={{ position:"relative", height:"clamp(260px,50vw,480px)", background:site.color, border:`1px solid ${C.border}`, borderTop:"none", overflow:"hidden", borderRadius:"0 0 16px 16px" }}>
        {loading && (
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:site.color, zIndex:2 }}>
            <div style={{ fontSize:56, marginBottom:16 }}>{site.emoji}</div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:600, color:site.accent, marginBottom:8 }}>{site.name}</div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#999", letterSpacing:1 }}>Loading preview...</div>
            <div style={{ width:40, height:2, background:site.accent, borderRadius:2, marginTop:16, animation:"load 1.5s ease infinite" }} />
            <style>{`@keyframes load { 0%,100%{width:40px} 50%{width:80px} }`}</style>
          </div>
        )}
        <iframe
          src={site.url}
          title={site.name}
          style={{ width:"100%", height:"100%", border:"none", display:"block" }}
          onLoad={() => setLoading(false)}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* carousel controls */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:24 }}>
        {/* dots */}
        <div style={{ display:"flex", gap:8 }}>
          {portfolioSites.map((_,i)=>(
            <button key={i} onClick={()=>{ setLoading(true); setActive(i); }} style={{ width:i===active?28:8, height:8, borderRadius:4, background:i===active?C.gold:C.border, border:"none", cursor:"pointer", transition:"all .3s ease", padding:0 }} />
          ))}
        </div>

        {/* site info */}
        <div style={{ textAlign:"center" }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:600, color:C.text }}>{site.name}</div>
          <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:C.muted, letterSpacing:2, textTransform:"uppercase", marginTop:2 }}>{site.category}</div>
        </div>

        {/* arrows */}
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={prev} style={{ width:44, height:44, borderRadius:"50%", border:`1.5px solid ${C.border}`, background:C.card, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:C.muted, transition:"all .2s" }}
            onMouseEnter={e=>{ e.target.style.borderColor=C.gold; e.target.style.color=C.gold; }}
            onMouseLeave={e=>{ e.target.style.borderColor=C.border; e.target.style.color=C.muted; }}>←</button>
          <button onClick={next} style={{ width:44, height:44, borderRadius:"50%", border:`1.5px solid ${C.border}`, background:C.card, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:C.muted, transition:"all .2s" }}
            onMouseEnter={e=>{ e.target.style.borderColor=C.gold; e.target.style.color=C.gold; }}
            onMouseLeave={e=>{ e.target.style.borderColor=C.border; e.target.style.color=C.muted; }}>→</button>
        </div>
      </div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────
const services = [
  { icon:"✦", name:"Website Design & Build", price:"From $600", desc:"Custom websites built from the ground up. Beautiful, fast, and built for your goals.", features:["Custom Design","Mobile First","Booking/Contact","Animations & Polish"] },
  { icon:"◈", name:"Brand & Visual Identity", price:"From $350", desc:"Your logo, colors, and typography — a complete visual identity that tells your story.", features:["Logo Concepts","Color System","Typography","Brand Guidelines"] },
  { icon:"◇", name:"E-Commerce Setup",        price:"From $900", desc:"Full online store setup so you can start selling with confidence.", features:["Product Pages","Cart & Checkout","Payment Setup","Inventory Management"] },
  { icon:"◉", name:"Site Refresh",            price:"From $250", desc:"Already have a site that needs a glow-up? Let's modernize what you have.", features:["Design Update","Speed Boost","Mobile Fix","New Sections"] },
];

const process = [
  { num:"I",   title:"Discovery",   desc:"We connect and talk through your vision, goals, and what success looks like for your business." },
  { num:"II",  title:"Design",      desc:"I craft a custom design concept for your approval before a single line of code is written." },
  { num:"III", title:"Build",       desc:"Your site comes to life. You review, give feedback, we refine — until it's exactly right." },
  { num:"IV",  title:"Launch",      desc:"We go live together. I stay close for questions and tweaks so you're never left on your own." },
];

const faqs = [
  { q:"How long does a website take?",       a:"Most sites are completed within 1–3 weeks depending on scope. Rush delivery is available." },
  { q:"Do I need to know how to code?",      a:"Not at all. I handle every technical detail. You bring your vision — I bring it to life." },
  { q:"What do you need from me to start?",  a:"Just your brand info, any existing assets, and an idea of what you want. We'll figure out the rest together." },
  { q:"Can you redesign my existing site?",  a:"Absolutely. Site refreshes are one of my most popular services. We work with what you have." },
  { q:"Do you offer payment plans?",         a:"All projects require full payment upfront before work begins. I accept all major payment methods." },
];

export default function TheDesignSuite() {
  const [page, setPage]     = useState("home");
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm]     = useState({ name:"", email:"", business:"", service:"", message:"" });
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = p => { setPage(p); setMenuOpen(false); window.scrollTo(0,0); };
  const upd = (k,v) => setForm(p=>({...p,[k]:v}));

  const handleContactSubmit = async () => {
    if (sending) return
    setSending(true)

    try {
      // TODO: replace with The Design Suite's own Formspree endpoint (formspree.io/f/YOUR_ID)
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Business: form.business,
          Service: form.service,
          Message: form.message,
        }),
      })
    } catch (err) {
      console.error('Contact form submission failed:', err)
    }

    setSending(false)
    setSent(true)
  }

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:C.bg, minHeight:"100vh", color:C.text, overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        .cg  { font-family:'Cormorant Garamond', serif; }
        .dm  { font-family:'DM Sans', sans-serif; }

        .nl { cursor:pointer; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:${C.muted}; padding:8px 14px; transition:color .2s; }
        .nl:hover { color:${C.text}; }
        .nl.act { color:${C.gold}; }

        .btn-dark { border:none; padding:15px 44px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:3px; text-transform:uppercase; cursor:pointer; transition:all .24s; background:${C.dark}; color:#fff; }
        .btn-dark:hover { background:${C.gold}; transform:translateY(-1px); box-shadow:0 8px 28px rgba(184,149,90,.3); }
        .btn-dark:disabled { opacity:.3; cursor:not-allowed; transform:none; box-shadow:none; }

        .btn-ghost { border:1px solid ${C.border}; padding:13px 40px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:3px; text-transform:uppercase; cursor:pointer; transition:all .24s; background:transparent; color:${C.text}; }
        .btn-ghost:hover { border-color:${C.gold}; color:${C.gold}; }

        .btn-gold { border:none; padding:13px 36px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:3px; text-transform:uppercase; cursor:pointer; transition:all .24s; background:${C.gold}; color:#fff; }
        .btn-gold:hover { background:${C.dark}; transform:translateY(-1px); }
        .btn-gold:disabled { opacity:.3; cursor:not-allowed; transform:none; }

        .svc-card { background:${C.card}; border:1px solid ${C.border}; padding:36px; transition:all .26s; position:relative; overflow:hidden; }
        .svc-card:hover { border-color:${C.gold}; transform:translateY(-3px); box-shadow:0 16px 48px rgba(184,149,90,.1); }

        .proc-num { font-family:'Cormorant Garamond',serif; font-size:64px; font-weight:300; color:${C.champagne}; line-height:1; margin-bottom:16px; font-style:italic; }

        .fld { width:100%; border:1px solid ${C.border}; padding:13px 16px; font-family:'DM Sans',sans-serif; font-size:13px; color:${C.text}; outline:none; transition:border-color .2s; background:${C.card}; }
        .fld:focus { border-color:${C.gold}; }
        .fld::placeholder { color:#C8C0B0; }
        select.fld { appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='%23B8955A' d='M5 7L0 2h10z'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right 14px center; }
        textarea.fld { resize:vertical; min-height:110px; }

        .gold-rule { width:48px; height:1px; background:${C.gold}; }
        .gold-script { font-family:'Cormorant Garamond',serif; font-style:italic; color:${C.gold}; }

        .fu { animation:fu .65s cubic-bezier(.22,1,.36,1) both; }
        @keyframes fu { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .pop { animation:pp .4s cubic-bezier(.22,1,.36,1) both; }
        @keyframes pp { from{opacity:0;transform:scale(.93)} to{opacity:1;transform:scale(1)} }

        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ticker { display:flex; animation:tick 32s linear infinite; white-space:nowrap; }

        .faq-row { border-bottom:1px solid ${C.border}; }
        .faq-q { cursor:pointer; padding:22px 0; display:flex; justify-content:space-between; align-items:center; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; color:${C.text}; transition:color .2s; gap:16px; }
        .faq-q:hover { color:${C.gold}; }

        .shimmer { background:linear-gradient(90deg,${C.gold},${C.gold2},${C.champagne},${C.gold}); background-size:300%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:sh 5s linear infinite; }
        @keyframes sh { from{background-position:0%} to{background-position:300%} }

        /* HAMBURGER */
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:8px; border:none; background:transparent; }
        .hamburger span { display:block; width:20px; height:1.5px; background:${C.text}; border-radius:2px; transition:all .3s; }
        .hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
        .hamburger.open span:nth-child(2) { opacity:0; }
        .hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }

        /* MOBILE MENU */
        .mob-menu { display:none; position:fixed; top:70px; left:0; right:0; background:rgba(253,250,245,.98); backdrop-filter:blur(24px); border-bottom:1px solid ${C.border}; flex-direction:column; padding:16px 20px 24px; gap:4px; z-index:199; }
        .mob-menu.open { display:flex; }
        .mob-menu .ml { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:${C.muted}; padding:14px 16px; cursor:pointer; border:none; background:transparent; text-align:left; width:100%; transition:color .2s; }
        .mob-menu .ml:hover { color:${C.text}; }
        .mob-menu .ml.act { color:${C.gold}; }
        .mob-menu .ml.cta { background:${C.dark}; color:#fff; margin-top:8px; text-align:center; }
        .mob-menu .ml.cta:hover { background:${C.gold}; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links { display:none !important; }
          .hamburger { display:flex !important; }
          .stat-cards { display:none !important; }
          .hero-watermark { display:none !important; }
          .two-col { grid-template-columns:1fr !important; }
          .three-col { grid-template-columns:1fr !important; }
          .four-col { grid-template-columns:repeat(2,1fr) !important; }
          .sec-pad { padding-left:20px !important; padding-right:20px !important; }
          .about-grid { grid-template-columns:1fr !important; }
          .contact-grid { grid-template-columns:1fr !important; }
          .dark-grid { grid-template-columns:1fr 1fr !important; }
          .cta-inner { flex-direction:column !important; gap:20px !important; }
          .footer-inner { flex-direction:column !important; align-items:center !important; text-align:center !important; gap:12px !important; }
          .nav-pad { padding:0 20px !important; }
          .svc-grid { grid-template-columns:1fr !important; }
          .proc-grid { grid-template-columns:1fr 1fr !important; }
          .carousel-iframe { height:260px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="nav-pad" style={{ position:"sticky", top:0, zIndex:200, background:`${C.bg}F8`, backdropFilter:"blur(24px)", borderBottom:`1px solid ${C.border}`, padding:"0 64px", display:"flex", alignItems:"center", justifyContent:"space-between", height:70 }}>
        <div onClick={()=>nav("home")} style={{ cursor:"pointer" }}>
          <div className="cg" style={{ fontSize:22, fontWeight:300, fontStyle:"italic", letterSpacing:1, lineHeight:1 }}>
            The Design Suite
          </div>
          <div className="dm" style={{ fontSize:8, letterSpacing:4, color:C.gold, fontWeight:600, textTransform:"uppercase", marginTop:3 }}>by Makayla</div>
        </div>
        <div className="nav-links" style={{ display:"flex", gap:2, alignItems:"center" }}>
          {[["home","Home"],["work","Work"],["services","Services"],["about","About"]].map(([p,l])=>(
            <span key={p} className={`nl ${page===p?"act":""}`} onClick={()=>nav(p)}>{l}</span>
          ))}
          <div style={{ width:1, height:18, background:C.border, margin:"0 12px" }} />
          <button className="btn-dark" style={{ padding:"10px 24px", fontSize:10 }} onClick={()=>nav("contact")}>Let's Work Together</button>
        </div>
        <button className={`hamburger ${menuOpen?"open":""}`} onClick={()=>setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${menuOpen?"open":""}`}>
        {[["home","Home"],["work","Work"],["services","Services"],["about","About"]].map(([p,l])=>(
          <button key={p} className={`ml ${page===p?"act":""}`} onClick={()=>nav(p)}>{l}</button>
        ))}
        <button className="ml cta" onClick={()=>nav("contact")}>Let's Work Together</button>
      </div>

      {/* ══ HOME ══ */}
      {page==="home" && (
        <div>
          {/* HERO */}
          <div style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", overflow:"hidden", padding:"clamp(60px,8vw,100px) clamp(16px,5vw,64px)" }}>
            {/* background texture */}
            <div style={{ position:"absolute", inset:0, background:`radial-gradient(ellipse at 70% 50%, ${C.champagne}50 0%, transparent 60%)` }} />
            <div style={{ position:"absolute", top:0, right:0, width:"45%", height:"100%", background:`linear-gradient(160deg,${C.warm}60,transparent)`, borderLeft:`1px solid ${C.border}` }} />
            {/* decorative script watermark */}
            <div style={{ position:"absolute", right:-20, top:"50%", transform:"translateY(-50%) rotate(90deg)", fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(60px,12vw,160px)", fontWeight:300, fontStyle:"italic", color:C.champagne, opacity:.4, letterSpacing:8, userSelect:"none", whiteSpace:"nowrap" }}>
              The Design Suite
            </div>

            <div style={{ position:"relative", zIndex:2, maxWidth:680 }}>
              <div className="dm fu" style={{ fontSize:10, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:28, animationDelay:".05s", display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:32, height:1, background:C.gold }} />
                Web Design & Digital Creative
              </div>
              <h1 className="cg fu" style={{ fontSize:"clamp(60px,7vw,100px)", lineHeight:.94, fontWeight:300, marginBottom:32, animationDelay:".12s" }}>
                Websites that make<br />people{" "}
                <em className="shimmer">stop scrolling.</em>
              </h1>
              <p className="dm fu" style={{ fontSize:16, color:C.muted, maxWidth:440, lineHeight:2, fontWeight:300, marginBottom:52, animationDelay:".2s" }}>
                I'm Makayla — a self-taught web designer crafting beautiful, intentional websites for small businesses that deserve to be seen.
              </p>
              <div className="fu" style={{ display:"flex", gap:16, flexWrap:"wrap", animationDelay:".28s" }}>
                <button className="btn-dark" onClick={()=>nav("contact")}>Start a Project</button>
                <button className="btn-ghost" onClick={()=>nav("work")}>View My Work</button>
              </div>
            </div>

            {/* floating stat cards — hidden on mobile */}
            <div className="fu stat-cards" style={{ position:"absolute", right:80, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:14, animationDelay:".3s", zIndex:2 }}>
              {[
                { num:"4+",   label:"Sites Built",   color:C.gold  },
                { num:"100%", label:"Custom Design",  color:C.muted },
                { num:"3",    label:"Industries",     color:C.gold2 },
              ].map((s,i)=>(
                <div key={i} style={{ background:C.card, border:`1px solid ${C.border}`, padding:"18px 24px", textAlign:"center", boxShadow:"0 8px 32px rgba(0,0,0,.06)", minWidth:130 }}>
                  <div className="cg" style={{ fontSize:36, fontWeight:600, color:s.color, lineHeight:1 }}>{s.num}</div>
                  <div className="dm" style={{ fontSize:9, color:C.muted, letterSpacing:2, textTransform:"uppercase", marginTop:4, fontWeight:600 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <style>{`.stat-cards { display:flex !important; } @media(max-width:768px){.stat-cards{display:none !important;}}`}</style>
          </div>

          {/* TICKER */}
          <div style={{ overflow:"hidden", borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, background:C.surface, padding:"11px 0" }}>
            <div className="ticker">
              {Array(2).fill(["WEB DESIGN ✦","BRAND IDENTITY ✦","BOOKING SYSTEMS ✦","E-COMMERCE ✦","MOBILE RESPONSIVE ✦","CUSTOM ANIMATIONS ✦","CLIENT PORTALS ✦","SITE REFRESHES ✦"]).flat().map((t,i)=>(
                <span key={i} className="dm" style={{ fontSize:10, fontWeight:600, letterSpacing:4, marginRight:56, color:C.muted, textTransform:"uppercase" }}>{t}</span>
              ))}
            </div>
          </div>

          {/* WORK PREVIEW */}
          <div style={{ padding:"clamp(60px,8vw,100px) clamp(16px,5vw,64px)" }}>
            <div style={{ maxWidth:1100, margin:"0 auto" }}>
              <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:16 }}>
                <div>
                  <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:24, height:1, background:C.gold }} />Portfolio
                  </div>
                  <h2 className="cg" style={{ fontSize:56, fontWeight:300, lineHeight:.95 }}>
                    Recent <em style={{ fontStyle:"italic", color:C.gold }}>Work</em>
                  </h2>
                </div>
                <button className="btn-ghost" onClick={()=>nav("work")}>View All Projects →</button>
              </div>
              <SiteCarousel />
            </div>
          </div>

          {/* ABOUT STRIP */}
          <div style={{ background:C.dark, padding:"clamp(60px,8vw,100px) clamp(16px,5vw,64px)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:-100, right:-100, width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle,${C.gold}20,transparent 70%)` }} />
            <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:48, alignItems:"center" }}>
              <div>
                <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:24, height:1, background:C.gold }} />About Me
                </div>
                <h2 className="cg" style={{ fontSize:56, fontWeight:300, color:"#fff", lineHeight:.95, marginBottom:28 }}>
                  Hi, I'm <em className="shimmer">Makayla.</em>
                </h2>
                <p className="dm" style={{ fontSize:15, color:"rgba(255,255,255,.55)", lineHeight:2, fontWeight:300, marginBottom:36 }}>
                  I'm a self-taught web designer, bookkeeper, and full-time mom who decided to bet on herself. I specialize in working with small businesses that deserve a premium online presence — without the agency price tag.
                </p>
                <button className="btn-gold" onClick={()=>nav("about")}>My Full Story →</button>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12 }}>
                {[
                  { icon:"💡", title:"Creative First",   desc:"Every design decision is intentional and purposeful." },
                  { icon:"🤝", title:"Client Focused",   desc:"Your vision guides everything I build." },
                  { icon:"📱", title:"Mobile Ready",     desc:"Perfect on every screen, every time." },
                  { icon:"🚀", title:"Always Growing",   desc:"Self-taught and never stopping." },
                ].map((v,i)=>(
                  <div key={i} style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.1)", padding:"24px", transition:"all .2s" }}>
                    <div style={{ fontSize:24, marginBottom:12 }}>{v.icon}</div>
                    <div className="dm" style={{ fontSize:12, fontWeight:600, color:"#fff", marginBottom:6, letterSpacing:.5 }}>{v.title}</div>
                    <div className="dm" style={{ fontSize:12, color:"rgba(255,255,255,.45)", fontWeight:300, lineHeight:1.7 }}>{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SERVICES PREVIEW */}
          <div style={{ padding:"clamp(60px,8vw,100px) clamp(16px,5vw,64px)" }}>
            <div style={{ maxWidth:1100, margin:"0 auto" }}>
              <div style={{ textAlign:"center", marginBottom:60 }}>
                <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16 }}>What I Offer</div>
                <h2 className="cg" style={{ fontSize:56, fontWeight:300 }}>Services</h2>
                <div style={{ width:48, height:1, background:C.gold, margin:"20px auto 0" }} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:1, border:`1px solid ${C.border}` }}>
                {services.map((s,i)=>(
                  <div key={i} className="svc-card" style={{ borderRadius:0, borderColor:"transparent" }}>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, color:C.gold, marginBottom:20, fontStyle:"italic" }}>{s.icon}</div>
                    <div className="cg" style={{ fontSize:22, fontWeight:400, marginBottom:6 }}>{s.name}</div>
                    <div className="dm" style={{ fontSize:11, color:C.gold, fontWeight:600, letterSpacing:1, marginBottom:16 }}>{s.price}</div>
                    <div className="dm" style={{ fontSize:13, color:C.muted, lineHeight:1.85, fontWeight:300 }}>{s.desc}</div>
                    <div style={{ width:32, height:1, background:C.border, margin:"20px 0" }} />
                    <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                      {s.features.map(f=>(
                        <div key={f} className="dm" style={{ fontSize:12, color:C.muted, display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:14, color:C.gold, fontStyle:"italic" }}>✦</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign:"center", marginTop:44 }}>
                <button className="btn-dark" onClick={()=>nav("services")}>View Full Pricing</button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background:C.surface, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:"clamp(60px,8vw,100px) clamp(16px,5vw,64px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, borderRadius:"50%", background:`radial-gradient(circle,${C.champagne}80,transparent 70%)` }} />
            <div style={{ position:"relative" }}>
              <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:20 }}>Ready to Begin?</div>
              <h2 className="cg" style={{ fontSize:64, fontWeight:300, lineHeight:.95, marginBottom:20 }}>
                Let's build something<br /><em className="shimmer">beautiful together.</em>
              </h2>
              <p className="dm" style={{ fontSize:15, color:C.muted, fontWeight:300, marginBottom:40, lineHeight:1.85 }}>Turn your vision into a site people remember.</p>
              <button className="btn-dark" style={{ fontSize:11, padding:"18px 56px" }} onClick={()=>nav("contact")}>Start a Project ✦</button>
            </div>
          </div>

          {/* FOOTER */}
          <div style={{ padding:"28px clamp(16px,4vw,64px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16, borderTop:`1px solid ${C.border}` }}>
            <div className="cg" style={{ fontSize:18, fontWeight:300, fontStyle:"italic", color:C.muted }}>The Design Suite</div>
            <div className="dm" style={{ fontSize:11, color:C.muted, letterSpacing:.5 }}>© 2026 The Design Suite by Makayla · All Rights Reserved</div>
            <div style={{ display:"flex", gap:8 }}>
              {[C.gold,C.champagne,C.gold2,"#E8D8C0"].map((c,i)=>(
                <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:c, opacity:.8 }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ WORK ══ */}
      {page==="work" && (
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px clamp(16px,5vw,64px)" }}>
          <div className="fu" style={{ marginBottom:64 }}>
            <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:24, height:1, background:C.gold }} />Portfolio
            </div>
            <h1 className="cg" style={{ fontSize:72, fontWeight:300, lineHeight:.92 }}>
              My <em style={{ fontStyle:"italic", color:C.gold }}>Work</em>
            </h1>
            <div style={{ width:48, height:1, background:C.gold, marginTop:20 }} />
            <p className="dm" style={{ fontSize:15, color:C.muted, fontWeight:300, marginTop:20, lineHeight:1.85, maxWidth:500 }}>
              Every site below was designed and built from scratch — scroll through to see each one live.
            </p>
          </div>
          <SiteCarousel />
          <div style={{ marginTop:72, background:C.surface, border:`1px solid ${C.border}`, padding:"56px", textAlign:"center" }}>
            <div className="cg" style={{ fontSize:38, fontWeight:300, marginBottom:12 }}>Want something like this?</div>
            <p className="dm" style={{ color:C.muted, fontSize:14, fontWeight:300, marginBottom:28, lineHeight:1.85 }}>Every project is custom built — let's create something uniquely yours.</p>
            <button className="btn-dark" onClick={()=>nav("contact")}>Start a Project</button>
          </div>
        </div>
      )}

      {/* ══ SERVICES ══ */}
      {page==="services" && (
        <div>
          <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px clamp(16px,5vw,64px)" }}>
            <div className="fu" style={{ marginBottom:64 }}>
              <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:24, height:1, background:C.gold }} />Pricing
              </div>
              <h1 className="cg" style={{ fontSize:72, fontWeight:300, lineHeight:.92 }}>Services &<br /><em style={{ fontStyle:"italic", color:C.gold }}>Pricing</em></h1>
              <div style={{ width:48, height:1, background:C.gold, marginTop:20 }} />
              <p className="dm" style={{ fontSize:15, color:C.muted, fontWeight:300, marginTop:20, lineHeight:1.85, maxWidth:480 }}>
                Every project is custom quoted — these are starting points. Let's talk about what you actually need.
              </p>
            </div>

            {/* services grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:1, border:`1px solid ${C.border}`, marginBottom:80 }}>
              {services.map((s,i)=>(
                <div key={i} className="svc-card" style={{ borderRadius:0, borderColor:"transparent" }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:30, color:C.gold, marginBottom:20, fontStyle:"italic" }}>{s.icon}</div>
                  <div className="cg" style={{ fontSize:24, fontWeight:400, marginBottom:8 }}>{s.name}</div>
                  <div className="dm" style={{ fontSize:13, color:C.gold, fontWeight:600, letterSpacing:1, marginBottom:16 }}>{s.price}</div>
                  <div className="dm" style={{ fontSize:13, color:C.muted, lineHeight:1.85, marginBottom:24, fontWeight:300 }}>{s.desc}</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:28 }}>
                    {s.features.map(f=>(
                      <div key={f} className="dm" style={{ fontSize:12, color:C.text, display:"flex", alignItems:"center", gap:10 }}>
                        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:14, color:C.gold, fontStyle:"italic" }}>✦</span> {f}
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold" style={{ width:"100%", fontSize:10 }} onClick={()=>nav("contact")}>Get a Quote</button>
                </div>
              ))}
            </div>

            {/* process */}
            <div style={{ marginBottom:80 }}>
              <div style={{ textAlign:"center", marginBottom:52 }}>
                <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16 }}>How It Works</div>
                <h2 className="cg" style={{ fontSize:52, fontWeight:300 }}>The <em style={{ fontStyle:"italic", color:C.gold }}>Process</em></h2>
                <div style={{ width:48, height:1, background:C.gold, margin:"20px auto 0" }} />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:1, border:`1px solid ${C.border}` }}>
                {process.map((p,i)=>(
                  <div key={i} style={{ padding:"40px 32px", background:C.card, transition:"all .22s", borderRight: i<3?`1px solid ${C.border}`:"none" }}>
                    <div className="proc-num">{p.num}</div>
                    <div className="cg" style={{ fontSize:22, fontWeight:400, marginBottom:12 }}>{p.title}</div>
                    <div className="dm" style={{ fontSize:13, color:C.muted, lineHeight:1.85, fontWeight:300 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <div style={{ marginBottom:40 }}>
                <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:24, height:1, background:C.gold }} />FAQ
                </div>
                <h2 className="cg" style={{ fontSize:52, fontWeight:300 }}>Common <em style={{ fontStyle:"italic", color:C.gold }}>Questions</em></h2>
              </div>
              <div style={{ maxWidth:700 }}>
                {faqs.map((f,i)=>(
                  <div key={i} className="faq-row">
                    <div className="faq-q" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                      {f.q}
                      <span style={{ fontSize:18, color:C.gold, flexShrink:0, transition:"transform .2s", display:"inline-block", transform:openFaq===i?"rotate(45deg)":"rotate(0)" }}>+</span>
                    </div>
                    {openFaq===i && <div className="dm" style={{ fontSize:13, color:C.muted, lineHeight:1.9, paddingBottom:22, fontWeight:300 }}>{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ ABOUT ══ */}
      {page==="about" && (
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"60px clamp(16px,5vw,64px)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:48, alignItems:"start" }}>
            <div className="fu">
              <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:24, height:1, background:C.gold }} />About Me
              </div>
              <h1 className="cg" style={{ fontSize:64, fontWeight:300, lineHeight:.95, marginBottom:28 }}>
                Hi, I'm<br /><em className="shimmer">Makayla.</em>
              </h1>
              <div style={{ width:48, height:1, background:C.gold, marginBottom:32 }} />
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                {[
                  "I'm a self-taught web designer, bookkeeper, and full-time mom who decided to bet on herself. What started as curiosity turned into a genuine passion for building digital experiences.",
                  "I specialize in working with small community businesses — the nail salons, the auto shops, the boutiques — that deserve a professional online presence without agency prices.",
                  "Every site I build is custom. No templates. No cookie-cutter. Just intentional design that tells your story and gets your clients through the door.",
                ].map((p,i)=>(
                  <p key={i} className="dm" style={{ fontSize:15, color:C.muted, lineHeight:2, fontWeight:300 }}>{p}</p>
                ))}
              </div>
              <div style={{ marginTop:40, display:"flex", gap:16, flexWrap:"wrap" }}>
                <button className="btn-dark" onClick={()=>nav("contact")}>Work With Me</button>
                <button className="btn-ghost" onClick={()=>nav("work")}>See My Work</button>
              </div>
            </div>

            <div className="fu" style={{ animationDelay:".15s" }}>
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, height:360, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20, position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:-40, right:-40, width:180, height:180, borderRadius:"50%", background:`radial-gradient(circle,${C.champagne},transparent)` }} />
                <div style={{ textAlign:"center", position:"relative" }}>
                  <div style={{ fontSize:72, marginBottom:12 }}>👩🏾‍💻</div>
                  <div className="cg" style={{ fontSize:20, fontWeight:300, fontStyle:"italic", color:C.muted }}>Makayla</div>
                  <div className="dm" style={{ fontSize:9, letterSpacing:3, color:C.gold, textTransform:"uppercase", marginTop:6 }}>Designer & Developer</div>
                </div>
              </div>
              <div style={{ background:C.card, border:`1px solid ${C.border}`, padding:"24px" }}>
                <div className="dm" style={{ fontSize:9, color:C.muted, fontWeight:600, letterSpacing:3, textTransform:"uppercase", marginBottom:16 }}>Skills & Tools</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {["React","HTML/CSS","Web Design","UI/UX","Booking Systems","Branding","QuickBooks","Client Portals","Animation"].map(s=>(
                    <span key={s} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:2, padding:"5px 12px", fontFamily:"'DM Sans',sans-serif", fontSize:10, color:C.muted, fontWeight:500, letterSpacing:.5 }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ CONTACT ══ */}
      {page==="contact" && (
        <div style={{ maxWidth:1000, margin:"0 auto", padding:"60px clamp(16px,5vw,64px)" }}>
          <div className="fu" style={{ marginBottom:56 }}>
            <div className="dm" style={{ fontSize:10, letterSpacing:4, color:C.gold, textTransform:"uppercase", marginBottom:16, display:"flex", alignItems:"center", gap:12 }}>
              <div style={{ width:24, height:1, background:C.gold }} />Get In Touch
            </div>
            <h1 className="cg" style={{ fontSize:72, fontWeight:300, lineHeight:.92 }}>
              Let's Work<br /><em style={{ fontStyle:"italic", color:C.gold }}>Together</em>
            </h1>
            <div style={{ width:48, height:1, background:C.gold, marginTop:20 }} />
            <p className="dm" style={{ fontSize:15, color:C.muted, fontWeight:300, marginTop:20, lineHeight:1.85 }}>
              Fill out the form below and I'll get back to you within 24–48 hours.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:40 }}>
            <div>
              <div style={{ display:"flex", flexDirection:"column", gap:24, marginBottom:40 }}>
                {[
                  { icon:"◉", label:"Email",         val:"hello@thedesignsuite.co" },
                  { icon:"◈", label:"Response Time", val:"Within 24–48 hours" },
                  { icon:"◇", label:"Location",      val:"Remote — Nationwide" },
                ].map((c,i)=>(
                  <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:C.gold, fontStyle:"italic", flexShrink:0, marginTop:2 }}>{c.icon}</div>
                    <div>
                      <div className="dm" style={{ fontSize:9, color:C.muted, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", marginBottom:5 }}>{c.label}</div>
                      <div className="dm" style={{ fontSize:14, fontWeight:400 }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, padding:"28px" }}>
                <div className="cg" style={{ fontSize:20, fontWeight:400, marginBottom:16 }}>What to expect</div>
                {["Response within 48 hours","Free discovery call to discuss your vision","Custom quote based on your needs","Flexible payment plans available"].map((e,i)=>(
                  <div key={i} className="dm" style={{ fontSize:13, color:C.muted, display:"flex", alignItems:"flex-start", gap:10, marginBottom:12, fontWeight:300, lineHeight:1.7 }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif", color:C.gold, fontStyle:"italic", fontSize:14, flexShrink:0 }}>✦</span>{e}
                  </div>
                ))}
              </div>
            </div>

            {sent ? (
              <div className="pop" style={{ background:C.card, border:`1px solid ${C.border}`, padding:"60px 40px", textAlign:"center", position:"relative" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${C.gold},transparent)` }} />
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:56, color:C.gold, fontStyle:"italic", marginBottom:16 }}>✦</div>
                <h2 className="cg" style={{ fontSize:38, fontWeight:300, marginBottom:12 }}>Message Sent!</h2>
                <div style={{ width:40, height:1, background:C.gold, margin:"0 auto 20px" }} />
                <p className="dm" style={{ color:C.muted, fontSize:14, fontWeight:300, lineHeight:1.85 }}>
                  Thank you, {form.name.split(" ")[0]}! I'll be in touch within 24–48 hours.
                </p>
                <button className="btn-dark" style={{ marginTop:28 }} onClick={()=>{ setSent(false); setForm({name:"",email:"",business:"",service:"",message:""}); }}>Send Another</button>
              </div>
            ) : (
              <div style={{ background:C.card, border:`1px solid ${C.border}`, padding:"36px", position:"relative" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${C.gold},transparent)` }} />
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12 }}>
                    {[["Full Name","Your name","text",form.name,"name"],["Email","you@email.com","email",form.email,"email"]].map(([l,ph,t,v,k])=>(
                      <div key={k}>
                        <label className="dm" style={{ display:"block", fontSize:9, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.muted, marginBottom:8 }}>{l} *</label>
                        <input className="fld" type={t} placeholder={ph} value={v} onChange={e=>upd(k,e.target.value)} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="dm" style={{ display:"block", fontSize:9, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.muted, marginBottom:8 }}>Business Name</label>
                    <input className="fld" placeholder="Your business (if applicable)" value={form.business} onChange={e=>upd("business",e.target.value)} />
                  </div>
                  <div>
                    <label className="dm" style={{ display:"block", fontSize:9, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.muted, marginBottom:8 }}>Service Interested In *</label>
                    <select className="fld" value={form.service} onChange={e=>upd("service",e.target.value)}>
                      <option value="">Select a service...</option>
                      <option>Website Design & Build</option>
                      <option>Brand & Visual Identity</option>
                      <option>E-Commerce Setup</option>
                      <option>Site Refresh</option>
                      <option>Not sure yet — let's talk</option>
                    </select>
                  </div>
                  <div>
                    <label className="dm" style={{ display:"block", fontSize:9, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.muted, marginBottom:8 }}>Tell Me About Your Project *</label>
                    <textarea className="fld" placeholder="What are you building? What's your vision?" value={form.message} onChange={e=>upd("message",e.target.value)} />
                  </div>
                  <button className="btn-dark" disabled={!form.name||!form.email||!form.service||!form.message||sending} onClick={handleContactSubmit}>
                    {sending ? "Sending..." : "Send Message ✦"}
                  </button>
                  <p className="dm" style={{ fontSize:11, color:C.muted, textAlign:"center", fontWeight:300 }}>I respond to every message personally.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SHARED FOOTER */}
      {page !== "home" && (
        <div style={{ borderTop:`1px solid ${C.border}`, padding:"28px clamp(16px,4vw,64px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16, marginTop:40 }}>
          <div className="cg" style={{ fontSize:18, fontWeight:300, fontStyle:"italic", color:C.muted }}>The Design Suite</div>
          <div className="dm" style={{ fontSize:11, color:C.muted }}>© 2026 The Design Suite by Makayla · All Rights Reserved</div>
          <div style={{ display:"flex", gap:7 }}>
            {[C.gold,C.champagne,C.gold2,"#E8D8C0"].map((c,i)=>(
              <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:c, opacity:.8 }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}