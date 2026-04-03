# moreleads-romania

Landing page More Leads — marketing medical pentru clinici și medici din România.

## Stack
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **CSS global** (fără Tailwind — stiluri în `globals.css`)
- **Vercel** pentru deploy

---

## Setup local

```bash
# 1. Instalează dependențele
npm install

# 2. Pornește dev server
npm run dev
# → http://localhost:3000
```

---

## Deploy pe Vercel

### Varianta 1 — prin GitHub (recomandată)

```bash
# Inițializează repo Git
git init
git add .
git commit -m "feat: initial landing page moreleads romania"

# Creează repo nou pe github.com, apoi:
git remote add origin https://github.com/USERNAME/moreleads-romania.git
git branch -M main
git push -u origin main
```

Apoi pe [vercel.com](https://vercel.com):
1. New Project → Import Git Repository
2. Selectează `moreleads-romania`
3. Framework: **Next.js** (detectat automat)
4. Deploy ✓

### Varianta 2 — Vercel CLI

```bash
npm i -g vercel
vercel
# urmează instrucțiunile din terminal
```

---

## Personalizări necesare înainte de lansare

### 1. Video YouTube
În `src/components/Hero.tsx`, linia 7:
```ts
const YOUTUBE_VIDEO_ID = 'VIDEO_ID' // ← înlocuiește cu ID-ul real
```
ID-ul e ultimele caractere din link: `youtube.com/watch?v=`**`dQw4w9WgXcQ`**

### 2. Imagini reale
Pune imaginile în `/public/images/` și înlocuiește placeholder-ele emoji:

**Pain points** (`src/components/StaticComponents.tsx`):
```tsx
// Înlocuiește:
<div className="pain-img-ph p1">💸</div>
// Cu:
<img src="/images/pain-reclame.jpg" alt="Reclame fara rezultate" className="pain-img" style={{width:'100%',height:150,objectFit:'cover'}} />
```

**For whom** (același fișier):
```tsx
// Înlocuiește:
<div className="fw-img-ph clinic-bg">🏥</div>
// Cu:
<img src="/images/clinica.jpg" alt="Clinică medicală" style={{width:'100%',height:190,objectFit:'cover'}} />
```

### 3. Fotografia ta (secțiunea Trust)
Adaugă în `TrustSection` din `StaticComponents.tsx` o imagine reală a ta sau a echipei.

### 4. Link-uri reale
- `office@moreleads.ro` — deja corect
- `https://moreleads.ro` — deja corect
- Verifică toate href-urile din Footer și Nav

### 5. Numărul de locuri disponibile
Căutați `3 locuri disponibile în mai 2026` în:
- `src/components/StickyBar.tsx`
- `src/components/StaticComponents.tsx` (OffersSection)

Actualizează lunar manual sau conectează la un API.

---

## Structura proiectului

```
moreleads-romania/
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← metadata SEO + fonts
│   │   ├── page.tsx         ← pagina principală
│   │   └── globals.css      ← toate stilurile
│   └── components/
│       ├── StickyBar.tsx    ← bara fixă de sus (scroll-triggered)
│       ├── Navbar.tsx       ← navigație fixă
│       ├── Hero.tsx         ← hero cu video + offer pills
│       ├── FaqSection.tsx   ← accordion FAQ interactiv
│       ├── CalendarSection.tsx ← calendar rezervare interactiv
│       └── StaticComponents.tsx ← Pain, Offers, How, ForWhom, Proof, Trust, Footer
├── public/
│   └── images/             ← pune imaginile reale aici
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json
└── .gitignore
```

---

## Comenzi utile

```bash
npm run dev      # development cu hot reload
npm run build    # build producție
npm run start    # pornește build-ul local
npm run lint     # verifică erorile TypeScript/ESLint
```
