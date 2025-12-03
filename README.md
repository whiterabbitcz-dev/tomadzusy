# Toma Džusy - Oficiální Web

Moderní webová stránka pro značku Toma Džusy postavená na Astro s React komponentami, Tailwind CSS a Decap CMS.

## 🚀 Tech Stack

- **Core**: Astro 4.x
- **Styling**: Tailwind CSS
- **Interactivity**: React + Framer Motion
- **CMS**: Decap CMS (Netlify CMS)
- **Deployment**: Optimalizováno pro Netlify

## 📁 Struktura Projektu

```
/
├── public/
│   ├── images/          # Stažené obrázky z originálu
│   ├── admin/           # Decap CMS admin rozhraní
│   │   ├── config.yml   # CMS konfigurace
│   │   └── index.html   # CMS admin stránka
│   ├── favicon.svg      # Favicon
│   └── logo-toma.svg    # Logo
├── src/
│   ├── components/      # React a Astro komponenty
│   │   ├── HeroSlider.tsx     # Hero slider s animacemi
│   │   ├── Navigation.astro   # Navigační menu
│   │   └── Footer.astro       # Footer
│   ├── data/            # JSON data soubory
│   │   ├── home.json    # Homepage obsah
│   │   └── products.json # Produkty a kategorie
│   ├── layouts/
│   │   └── Layout.astro # Hlavní layout
│   ├── lib/
│   │   └── utils.ts     # Utility funkce (cn)
│   ├── pages/           # Stránky
│   │   ├── index.astro         # Homepage
│   │   ├── nase-vyrobky.astro  # Kategorie produktů
│   │   ├── kontakt.astro       # Kontaktní formulář
│   │   └── [slug].astro        # Dynamické produkty
│   └── styles/
│       └── global.css   # Globální styly
└── ref-structure-*.html # HTML reference z originálu
```

## 🎨 Funkce

### ✅ Homepage
- ✨ Animovaný Hero Slider s Framer Motion
- 📖 O nás sekce s textem o značce
- 🎯 CTA tlačítko na produkty

### ✅ Produkty
- 🏷️ 4 kategorie (1L, Píťička, Na cestě, Gastro)
- 🔗 Dynamické URL pro všechny produkty
- 🖼️ Responzivní grid layout
- 🎨 Hover animace

### ✅ Kontakt
- 📧 Netlify formulář
- 🖼️ Galerie obrázků
- 📱 Plně responzivní

### ✅ CMS Administrace
- ✏️ Editace homepage obsahu
- 📦 Správa produktů a kategorií
- 🖼️ Upload obrázků
- 🔐 Netlify Identity autentizace

## 🛠️ Příkazy

```bash
# Vývoj
npm run dev              # Spustí dev server na localhost:4321

# Build
npm run build            # Vytvoří produkční build

# Preview
npm run preview          # Náhled produkčního buildu

# Type check
npm run astro check      # Kontrola TypeScript typů
```

## 🎯 Deployment na Netlify

### 1. Pushněte na GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Deploy na Netlify

1. Připojte GitHub repository
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Environment variables: žádné potřeba
4. Deploy!

### 3. Aktivujte Netlify Identity

1. V Netlify dashboardu: **Identity** → **Enable Identity**
2. **Settings** → **Registration** → **Invite only**
3. **External providers** (volitelné): Google, GitHub
4. Pozvěte uživatele přes **Invite users**

### 4. Git Gateway

1. **Settings** → **Identity** → **Services**
2. **Enable Git Gateway**

### 5. Přístup k CMS

- Admin: `https://vase-domena.netlify.app/admin/`
- Přihlaste se pomocí Netlify Identity

## 📝 Editace Obsahu

### Homepage
1. Přejděte na `/admin/`
2. **Homepage** → **Homepage Content**
3. Editujte texty, slider obrázky
4. **Save** → **Publish**

### Produkty
1. **Produkty** → **Produkty a Kategorie**
2. Editujte kategorie nebo produkty
3. Přidejte nové příchutě
4. **Save** → **Publish**

## 🎨 Barvy Značky

```css
--toma-orange: #FF6B00
--toma-yellow: #FFD600
--toma-green: #00A651
--toma-blue: #0066CC
```

## 📦 Obrázky

Všechny obrázky jsou v `public/images/` a byly staž eny pomocí `download-images.js` skriptu.

### Mapování obrázků:
- `home-1.png` až `home-11.png` - Hero slider a homepage
- `portfolio-1.jpg` až `portfolio-5.webp` - Kategorie
- `portfolio-*-pomeranc-1.png` - Produktové obrázky
- `kontakt-1.png` až `kontakt-4.png` - Kontakt galerie

## 🔧 Troubleshooting

### CMS nefunguje
- Zkontrolujte Netlify Identity
- Ověřte Git Gateway
- Zkontrolujte `public/admin/config.yml`

### Obrázky se nenačítají
- Ujistěte se, že jsou v `public/images/`
- Zkontrolujte cesty v JSON souborech
- Build a znovu spusťte server

### TypeScript chyby
```bash
npm run astro check
```

## 📚 Další Kroky

1. ✅ Nahraďte placeholder logo skutečným logem
2. ✅ Přidejte favicon (již je placeholder)
3. ✅ Nakonfigurujte Netlify Forms pro kontakt
4. ✅ Nastavte SEO meta tagy
5. ✅ Přidejte Google Analytics (volitelné)

## 💻 Development

Vytvořeno pomocí metodiky **White Rabbit** - reverse engineering z originálního Framer webu.

---

**Vytvořeno s ❤️ pro Toma Džusy**


