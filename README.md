# CocktailCrew website

Marketingsite voor de CocktailCrew Menu Creator. Gebouwd met [Astro](https://astro.build), beheerd met [Keystatic](https://keystatic.com) en gehost op Netlify.

- `/` Nederlands, `/en/` Engels
- `/keystatic` het CMS (teksten, stijlen, foto's, contactgegevens)
- Aanvraagformulier via Netlify Forms (formuliernaam `menu-aanvraag`), bedankpagina's `/bedankt/` en `/en/thanks/`

## Lokaal werken

```bash
npm install
npm run dev          # http://localhost:4321 en http://localhost:4321/keystatic
```

Lokaal schrijft Keystatic direct naar de bestanden in `src/content/` en `public/images/`. Commit en push die wijzigingen om ze live te zetten.

## Waar staat wat

| Pad | Inhoud |
|---|---|
| `src/content/home/nl.json`, `en.json` | Alle teksten van de homepage per taal |
| `src/content/styles/*.json` | De tien menustijlen (naam, groep, omschrijving, coverfoto) |
| `src/content/settings/site.json` | Contact, hero-foto, hero-stijlen, fotocredits |
| `src/lib/looks.ts` | De vormgeving van de voorbeeldcovers (kleuren, letters, vormen) |
| `src/components/` | Pagina-onderdelen |
| `src/styles/global.css` | Huisstijl en layout |

## Live zetten op Netlify

1. Netlify › **Add new site › Import an existing project** › GitHub › `nijemeis/cocktailcrew-website`.
   Build command `npm run build`, publish directory `dist` (staat ook in `netlify.toml`).
2. Na de eerste deploy: **Forms** aanzetten (Site configuration › Forms › Enable form detection) en opnieuw deployen. Stel daar ook een e-mailmelding in voor nieuwe aanvragen.
3. Eigen domein koppelen onder Domain management.

## Keystatic op de live site (GitHub-modus)

In productie bewaart Keystatic wijzigingen als commits in deze GitHub-repo; Netlify bouwt daarna automatisch opnieuw.

1. Draai lokaal `PUBLIC_KEYSTATIC_STORAGE=github npm run dev` en open `http://127.0.0.1:4321/keystatic`.
   Keystatic begeleidt je bij het aanmaken van een GitHub App en schrijft de sleutels naar `.env`.
2. Zet in de GitHub App bij **Callback URL** ook `https://<jouw-domein>/api/keystatic/github/oauth/callback`.
3. Kopieer de vier waarden uit `.env` naar Netlify › Site configuration › Environment variables:
   `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
4. Deploy opnieuw en log in op `https://<jouw-domein>/keystatic` met GitHub.

## Nog in te vullen

- Prijs vanaf en levertijd in de FAQ (`[PRIJS VANAF]`, `[LEVERTIJD]`)
- E-mailadres en telefoonnummer (Instellingen)
- Eigen foto's in plaats van de Unsplash-voorbeeldfoto's
