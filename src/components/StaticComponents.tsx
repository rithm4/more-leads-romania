// ─── PainSection ──────────────────────────────────────────────────────────────
export function PainSection() {
  const pains = [
    { num: '01', emoji: '💸', cls: 'p1', title: 'Investești în reclame, dar nu știi ce funcționează', desc: 'Plătești o agenție sau rulezi singur campanii, dar nu ai o imagine clară: câți pacienți au venit de acolo și cât a costat fiecare.' },
    { num: '02', emoji: '📉', cls: 'p2', title: 'Lunile bune și lunile proaste — fără să înțelegi de ce', desc: 'Fluxul de pacienți e impredictibil. Depinde de sezon, de recomandări întâmplătoare, de câți bani ai pus luna asta în publicitate.' },
    { num: '03', emoji: '🔍', cls: 'p3', title: 'Concurența ta apare peste tot online. Tu, mai puțin.', desc: 'Cauți serviciile tale pe Google sau Facebook și găsești alte clinici, nu pe a ta. Pacienții pleacă la altcineva înainte să ajungă la tine.' },
    { num: '04', emoji: '📱', cls: 'p4', title: 'Ai o agenție care face postări frumoase, dar fără cereri', desc: 'Conținut estetic, multe like-uri, zero programări. Marketingul tău arată bine pe Instagram, dar pacienții nu cresc.' },
  ]
  return (
    <section className="section pain">
      <div className="section-inner">
        <div className="pain-intro">
          <div className="section-label">Situația majorității clinicilor din România</div>
          <h2 className="section-title">Recunoști <em>cel puțin una</em> din problemele astea?</h2>
          <p>Nu e vorba de lipsă de calitate medicală. E vorba de un sistem de marketing care nu funcționează — sau care lipsește complet.</p>
        </div>
        <div className="pain-grid">
          {pains.map(p => (
            <div className="pain-card" key={p.num}>
              {/* Înlocuiește cu <img> real: <img src="/images/pain-1.jpg" alt="..." className="pain-img" style={{width:'100%',height:150,objectFit:'cover'}} /> */}
              <div className={`pain-img-ph ${p.cls}`}>{p.emoji}</div>
              <div className="pain-body">
                <div className="pain-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── OffersSection ────────────────────────────────────────────────────────────
export function OffersSection() {
  return (
    <section className="offers-section">
      <div className="section-inner">
        <div className="section-label">De ce lucrezi cu noi fără risc</div>
        <h2 className="section-title">Două oferte pe care <em>nimeni altcineva</em><br />nu ți le face în marketing medical.</h2>
        <div className="offers-grid">
          <div className="offer-block green-block">
            <span className="offer-block-tag green-tag">Zero risc financiar</span>
            <h3>Prima lună de colaborare — gratuită.</h3>
            <p>Înțelegem că ai mai investit în marketing fără rezultate. Nu îți cerem să ai încredere oarbă — îți demonstrăm că știm ce facem înainte să plătești ceva pentru munca noastră.</p>
            <ul>
              {['Implementare completă: LP + campanii + CRM','Rulăm campanii active o lună întreagă','Raport complet cu toate rezultatele','Tu plătești doar bugetul de publicitate','Zero comision agenție în prima lună'].map(t=>(
                <li key={t}><div className="chk chk-g" />{t}</li>
              ))}
            </ul>
            <div className="offer-condition"><strong>Condiție:</strong> Parteneriat minim 3 luni, buget publicitate minim 800€/lună. Disponibil pentru un număr limitat de clinici per lună.</div>
            <div className="slots-badge">3 locuri disponibile în mai 2026</div>
          </div>
          <div className="offer-block purple-block">
            <span className="offer-block-tag purple-tag">Fără angajament</span>
            <h3>Plan de creștere personalizat — gratuit.</h3>
            <p>Înainte de orice decizie, primești un document real de 7–10 pagini construit specific pentru clinica sau practica ta.</p>
            <ul>
              {['Analiza concurenței tale directe din oraș','Evaluarea mesajelor tale publicitare actuale','Oportunități neexploatate în nișa ta','Recomandări concrete de canal, buget și mesaj','Estimare de rezultate realiste pentru profilul tău'].map(t=>(
                <li key={t}><div className="chk chk-p" />{t}</li>
              ))}
            </ul>
            <div className="offer-condition"><strong>Cum o primești:</strong> Rezervă o discuție de 30 de minute. Analiza e gata în 48h după call — indiferent dacă colaborăm sau nu.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HowItWorks ───────────────────────────────────────────────────────────────
export function HowItWorks() {
  const steps = [
    { num: 'Pasul 01', icon: '🎯', title: 'Analiză și strategie', desc: 'Analizăm concurența, specialitățile prioritare și publicul țintă. Construim o strategie clară cu oferte și mesaje care convertesc.', result: 'Știi exact ce vei lansa și cu ce mesaj, înainte să cheltuiești un leu.' },
    { num: 'Pasul 02', icon: '⚙️', title: 'Implementare completă', desc: 'Construim landing page-ul, configurăm campaniile Meta și Google, setăm trackingul și CRM-ul. Totul funcțional în 7–10 zile.', result: 'Cererile ajung direct la tine, organizat, în timp real.' },
    { num: 'Pasul 03', icon: '📈', title: 'Optimizare și creștere', desc: 'Monitorizăm zilnic, optimizăm constant. Raport lunar clar: câte cereri, de unde, cât a costat fiecare.', result: 'Flux predictibil. Costul per cerere scade, volumul crește.' },
  ]
  return (
    <section className="how" id="cum-functioneaza">
      <div className="section-inner">
        <div className="section-label">Procesul nostru</div>
        <h2 className="section-title">Tu te ocupi de <em>medicină.</em><br />Noi ne ocupăm de flux.</h2>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <span className="step-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="step-result"><span>Rezultat</span><p>{s.result}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ForWhom ──────────────────────────────────────────────────────────────────
export function ForWhom() {
  return (
    <section className="section for-whom" id="pentru-cine">
      <div className="section-inner">
        <div className="section-label">Pentru cine</div>
        <h2 className="section-title">Construim sisteme pentru <em>clinici și medici</em><br />care vor rezultate reale.</h2>
        <div className="fw-grid">
          <div className="fw-card">
            {/* <img src="/images/clinica.jpg" alt="Clinică" className="fw-img" /> */}
            <div className="fw-img-ph clinic-bg">🏥</div>
            <div className="fw-body">
              <div className="fw-type">Clinici &amp; Centre Medicale</div>
              <h3>Proprietari, directori, manageri de marketing</h3>
              <ul className="fw-list">
                {['Clinica funcționează activ și poate prelua pacienți noi','Bugetul lunar de publicitate e de minim 800–1000€','Vrei să știi exact de unde vine fiecare pacient nou','Ești deschis la optimizări bazate pe date reale','Cauți o colaborare stabilă, orientată spre creștere'].map(t=><li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
          <div className="fw-card">
            {/* <img src="/images/medic.jpg" alt="Medic" className="fw-img" /> */}
            <div className="fw-img-ph doctor-bg">👨‍⚕️</div>
            <div className="fw-body">
              <div className="fw-type">Medici cu Practică Proprie</div>
              <h3>Specialiști care vor pacienți proprii, independent</h3>
              <ul className="fw-list">
                {['Practici activ și poți prelua min. 10 pacienți noi/săptămână','Vrei să nu mai depinzi de recomandările clinicii','Ești dispus să aloci 600–800€/lună pentru publicitate','Vrei un brand personal construit serios online','Înțelegi că rezultatele reale vin în 30–90 de zile'].map(t=><li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── ProofSection ─────────────────────────────────────────────────────────────
export function ProofSection() {
  return (
    <section className="section proof-section">
      <div className="section-inner">
        <div className="section-label">Rezultate reale</div>
        <h2 className="section-title">Cifrele și <em>oamenii</em> din spatele lor.</h2>
        <div className="proof-grid">
          <div className="proof-card">
            <div className="proof-stars">{[...Array(5)].map((_,i)=><div className="star" key={i}/>)}</div>
            <div className="proof-quote">„În sfârșit am pacienți constanți, nu doar valuri sezoniere. CRM-ul este foarte util — știu exact de unde vine fiecare cerere. Faceți treabă bună."</div>
            <div className="proof-author"><div className="author-av">DM</div><div><div className="author-name">Dr. Diana Munteanu</div><div className="author-role">Chirurgie vasculară · Chișinău</div></div></div>
            <div className="proof-stat"><span className="proof-stat-num">137</span><div className="proof-stat-label">Leads în primele 30 zile</div></div>
          </div>
          <div className="proof-card">
            <div className="proof-stars">{[...Array(5)].map((_,i)=><div className="star" key={i}/>)}</div>
            <div className="proof-quote">„Nu a trebuit să mă ocup de nimic tehnic. Cererile veneau direct în telefon și am putut să mă concentrez pe munca cu pacienții. Recomand oricărui medic care vrea vizibilitate corectă online."</div>
            <div className="proof-author"><div className="author-av">MZ</div><div><div className="author-name">Mihaela Zahiu</div><div className="author-role">Psihoterapie · Belgia</div></div></div>
            <div className="proof-stat"><span className="proof-stat-num">3–5</span><div className="proof-stat-label">Cereri noi în fiecare zi</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── TrustSection ─────────────────────────────────────────────────────────────
export function TrustSection() {
  const stats = [
    { num: '11', unit: 'ani', label: 'experiență marketing digital' },
    { num: '100', unit: '%', label: 'specializare medicală exclusivă' },
    { num: '1', unit: '/nișă', label: 'client per specialitate per oraș' },
    { num: '14', unit: 'zile', label: 'până la primele cereri' },
  ]
  const cards = [
    { icon: '🎯', title: 'Specializare 100% medicală', desc: 'Nu suntem o agenție generalistă care face și medical. Suntem o agenție medicală — și nimic altceva.' },
    { icon: '🔒', title: 'Exclusivitate garantată', desc: 'Un singur client per specialitate per oraș. Sistemul tău nu va fi vândut niciodată concurenților tăi direcți.' },
    { icon: '📊', title: 'Transparență totală', desc: 'Ai acces direct la toate datele: campanii, costuri, cereri, conversii. Raport lunar clar, fără jargon.' },
    { icon: '🤝', title: 'Fără contracte rigide la start', desc: 'Prima lună e demonstrativă. Construim relația pe rezultate, nu pe clauze contractuale.' },
  ]
  return (
    <section className="trust-section">
      <div className="section-inner">
        <div className="trust-grid">
          <div className="trust-left">
            <div className="section-label">Despre More Leads</div>
            <h2 className="section-title">Suntem din <em>Republica Moldova.</em><br />Și suntem mândri de asta.</h2>
            <p>Nu evităm subiectul — îl abordăm direct. Suntem o agenție din Chișinău cu 11 ani de experiență în marketing digital, specializată 100% în domeniul medical din România și Moldova.<br /><br /><strong>Clienții noștri nu ne aleg pentru că suntem aproape. Ne aleg pentru că obțin rezultate măsurabile.</strong></p>
            <div className="trust-stats">
              {stats.map(s=>(
                <div className="trust-stat" key={s.label}>
                  <span className="trust-stat-num">{s.num}<span>{s.unit}</span></span>
                  <div className="trust-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="trust-right">
            {cards.map(c=>(
              <div className="trust-card" key={c.title}>
                <div className="trust-icon">{c.icon}</div>
                <div><h4>{c.title}</h4><p>{c.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer>
      <a href="https://moreleads.ro" className="logo">More<span>Leads</span></a>
      <p>© 2026 More Leads · moreleads.ro · Chișinău, Republica Moldova</p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://moreleads.ro">Site principal</a>
        <a href="mailto:office@moreleads.ro">office@moreleads.ro</a>
      </div>
    </footer>
  )
}
