# Emir Gülşen — Photography Portfolio

Static HTML/CSS/JS site. Vercel'e deploy için hiçbir framework veya build step gerekmez.

---

## Klasör yapısı

```
portfolio/
├── index.html          → Ana sayfa (Work / Projects)
├── about.html          → Hakkında sayfası
├── vercel.json         → Vercel ayarları
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/             → Fotoğraflarını buraya ekle
    ├── portrait-01.jpg
    ├── portrait-02.jpg
    ├── street-01.jpg
    ├── street-02.jpg
    ├── commercial-01.jpg
    └── commercial-02.jpg
```

---

## Fotoğraf ekleme

`images/` klasörüne fotoğraflarını yükle. Önerilen boyutlar:
- **En az:** 1600px genişlik
- **Oran:** 16:9 (proje kartları için)
- **Format:** JPG, kalite %80–85

`index.html` içindeki `<img src="images/...">` yollarını kendi dosya adlarınla güncelle.

---

## Vercel'e deploy

### Yöntem 1 — GitHub üzerinden (önerilen)
1. Bu klasörü bir GitHub reposuna yükle
2. [vercel.com](https://vercel.com) → **Add New Project**
3. GitHub reposunu seç
4. Framework: **Other** seç
5. **Deploy** — bitti!

### Yöntem 2 — Vercel CLI
```bash
npm i -g vercel
cd portfolio
vercel
```

---

## Kişiselleştirme

| Ne | Nerede |
|---|---|
| İsim / e-posta | `index.html` ve `about.html` içinde ara-bul |
| Instagram linki | `index.html` → contact section |
| About fotoğrafı | `about.html` → `about-placeholder-box` div'ini `<img>` ile değiştir |
| Yeni proje kartı ekle | `index.html` → projects section içindeki `<article>` bloklarını kopyala |
| Renk değiştir | `css/style.css` → `:root` token'ları |

---

## Özel domain

Vercel dashboard → Project → Settings → Domains → custom domain ekle.
