# AxiomRCM — marketing site (Vercel)

Public marketing pages only (no authenticated app). Deploy this repository to **Vercel** and point your apex or `www` domain at the deployment.

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_APP_ORIGIN` | Recommended when the signed-in app is separate | Origin of the tenant app (e.g. `https://app.axiomrcm.ai` or `https://demo.axiomrcm.ai`). Sign-in links and `/login` redirect go to `{ORIGIN}/login`. |
| `NEXT_PUBLIC_API_BASE` | Optional | Only if marketing pages call your API from the browser. |

See `.env.example`.

## Create the Git repository

```bash
cd axiomrcm-marketing
git init
git add .
git commit -m "Initial marketing site"
git branch -M main
git remote add origin https://github.com/YOUR_ORG/axiomrcm-marketing.git
git push -u origin main
```

## Vercel

1. Import the GitHub repo.
2. **Root Directory**: leave default (repo root).
3. **Framework**: Next.js (auto).
4. Add env vars above.
5. Attach domains: e.g. `www.axiomrcm.ai` and `axiomrcm.ai`.

## Relationship to other repos

- **Backend API**: separate repo (`axiomrcm-backend`) on GCP / AWS.
- **Tenant workspace UI** (dashboard, login, uploads): deploy from `axiomrcm/frontend` in the main monorepo or a future `axiomrcm-workspace` repo; use a wildcard host like `*.axiomrcm.ai`. See `../HOSTING.md` in the parent project.
