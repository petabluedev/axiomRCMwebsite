# AxiomRCM — marketing site (Vercel only)

Public **marketing** pages only. **Do not** host the customer application here.

- **This repo / Vercel:** `axiomrcm.ai`, `www.axiomrcm.ai` — no links, redirects, or buttons to the customer app. Access is issued out-of-band (contract, email) to URLs like `https://xyzhospital.axiomrcm.ai`.
- **Customer app + API:** [axiomRCM](https://github.com/petabluedev/axiomRCM) — FastAPI backend (Python) on **AWS/GCP**; the signed-in UI (Next.js in `frontend/`) is **not** deployed on Vercel.

## Environment variables

Usually **none** are required. See `.env.example` if you later add browser calls to a public API from marketing.

## Local development

```bash
cd axiomrcm-marketing
npm install && npm run dev   # http://localhost:3000
```

The customer app is developed separately (`axiomrcm/frontend`, port **3007**). This site does not reference it.

## Git remote

```bash
git remote add origin https://github.com/petabluedev/axiomRCMwebsite.git
git push -u origin main
```

## Vercel

1. Import [axiomRCMwebsite](https://github.com/petabluedev/axiomRCMwebsite).
2. Framework: Next.js.
3. Attach `www.axiomrcm.ai` / `axiomrcm.ai`.

See `../HOSTING.md` (parent project) for DNS, subdomains, and API hosting.
