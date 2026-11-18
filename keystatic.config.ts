import { config, fields, singleton, collection } from '@keystatic/core';

const text = (label: string, opts: { multiline?: boolean; description?: string } = {}) =>
  fields.text({ label, multiline: opts.multiline, description: opts.description });

const list = (label: string, itemLabel = 'Item') =>
  fields.array(fields.text({ label: itemLabel }), { label, itemLabel: (p) => p.value || itemLabel });

const eyebrowTitle = {
  eyebrow: text('Label boven de kop'),
  title: text('Kop'),
};

/** One language version of the home page. Both languages use the same shape. */
const homeSchema = {
  seo: fields.object(
    { title: text('Paginatitel (browser / Google)'), description: text('Omschrijving voor Google', { multiline: true }) },
    { label: 'SEO' }
  ),
  nav: fields.object(
    {
      how: text('Hoe het werkt'),
      styles: text('Stijlen'),
      formats: text('Formaten'),
      paper: text('Papier'),
      faq: text('Vragen'),
      cta: text('Knop rechtsboven'),
    },
    { label: 'Menu' }
  ),
  hero: fields.object(
    {
      eyebrow: text('Label boven de kop'),
      title: text('Kop', { multiline: true }),
      sub: text('Introtekst', { multiline: true }),
      cta1: text('Knop 1'),
      cta2: text('Knop 2'),
      checks: list('Pluspunten (kersjes)', 'Pluspunt'),
    },
    { label: 'Hero' }
  ),
  strip: fields.array(
    fields.object({ k: text('Kop'), v: text('Tekst') }),
    { label: 'Donkere balk met drukkwaliteit', itemLabel: (p) => p.fields.k.value }
  ),
  how: fields.object(
    {
      ...eyebrowTitle,
      steps: fields.array(
        fields.object({ tag: text('Statuslabel'), title: text('Titel'), body: text('Tekst', { multiline: true }) }),
        { label: 'Stappen', itemLabel: (p) => p.fields.title.value }
      ),
    },
    { label: 'Hoe het werkt' }
  ),
  styles: fields.object(
    {
      ...eyebrowTitle,
      sub: text('Introtekst', { multiline: true }),
      coverTag: text('Ondertitel op de voorbeeldcovers'),
      groupAll: text('Filter: alle'),
      groupLux: text('Filter: luxe'),
      groupSummer: text('Filter: zomers & fris'),
      groupPlayful: text('Filter: speels'),
      groupBasic: text('Filter: basic'),
    },
    { label: 'Stijlen (kop en filters)' }
  ),
  features: fields.object(
    {
      ...eyebrowTitle,
      items: fields.array(
        fields.object({ title: text('Titel'), body: text('Tekst', { multiline: true }) }),
        { label: 'Genummerde punten (max. 4)', itemLabel: (p) => p.fields.title.value }
      ),
      extras: list('Extra pluspunten', 'Pluspunt'),
    },
    { label: 'Alles klopt (features)' }
  ),
  panel: fields.object(
    {
      section: text('Sectienaam op de voorbeeldkaart'),
      legend: text('Allergenenregel'),
      nix: text('NIX18-regel'),
      drinks: fields.array(
        fields.object({
          name: text('Naam'),
          price: text('Prijs'),
          desc: text('Beschrijving (max. 90 tekens)', { multiline: true }),
          ingr: text('Ingrediënten'),
          allergen: text('Allergeencode (bijv. E)'),
          zero: fields.checkbox({ label: 'Alcoholvrij (0.0)' }),
          photo: fields.image({ label: 'Foto', directory: 'public/images/drinks', publicPath: '/images/drinks/' }),
        }),
        { label: 'Drankjes op de voorbeeldkaart', itemLabel: (p) => p.fields.name.value }
      ),
    },
    { label: 'Voorbeeldkaart (close-up)' }
  ),
  formats: fields.object(
    {
      ...eyebrowTitle,
      sub: text('Introtekst', { multiline: true }),
      folded: text('Label: gevouwen'),
      flat: text('Label: plano'),
      good: text('Label: ideaal voor'),
      items: fields.array(
        fields.object({
          kind: fields.select({
            label: 'Vouwschema',
            options: [
              { label: 'A4 (geen vouw)', value: 'a4' },
              { label: 'Lang gevouwen (1 vouw)', value: 'bifold' },
              { label: 'Wikkelvouw (2 vouwen)', value: 'trifold' },
            ],
            defaultValue: 'a4',
          }),
          name: text('Naam'),
          panels: text('Panelen'),
          body: text('Tekst', { multiline: true }),
          trim: text('Gevouwen maat'),
          flatSize: text('Plano maat'),
          good: text('Ideaal voor'),
        }),
        { label: 'Formaten', itemLabel: (p) => p.fields.name.value }
      ),
    },
    { label: 'Formaten' }
  ),
  paper: fields.object(
    {
      ...eyebrowTitle,
      recommended: text('Label: aanbevolen'),
      papers: fields.array(
        fields.object({ name: text('Naam'), body: text('Tekst', { multiline: true }), rec: fields.checkbox({ label: 'Aanbevolen' }) }),
        { label: 'Papiersoorten', itemLabel: (p) => p.fields.name.value }
      ),
      finishLabel: text('Label: afwerking'),
      finishes: list('Afwerkingen', 'Afwerking'),
      qtyLabel: text('Label: oplage'),
      qtys: list('Oplages', 'Oplage'),
      specLabel: text('Label: drukspecificatie'),
      spec: text('Drukspecificatie'),
    },
    { label: 'Papier & afwerking' }
  ),
  faq: fields.object(
    {
      ...eyebrowTitle,
      items: fields.array(
        fields.object({ q: text('Vraag'), a: text('Antwoord', { multiline: true }) }),
        { label: 'Vragen', itemLabel: (p) => p.fields.q.value }
      ),
    },
    { label: 'Veelgestelde vragen' }
  ),
  cta: fields.object(
    {
      title: text('Kop'),
      sub: text('Tekst', { multiline: true }),
      bar: text('Veld: naam zaak'),
      city: text('Veld: plaats'),
      email: text('Veld: e-mail'),
      format: text('Veld: formaat'),
      formatOptions: list('Keuzes formaat', 'Keuze'),
      message: text('Veld: opmerking'),
      submit: text('Knoptekst'),
      note: text('Privacyregel onder de knop'),
    },
    { label: 'Aanvraagformulier' }
  ),
  thanks: fields.object(
    { title: text('Kop'), body: text('Tekst', { multiline: true }), back: text('Terugknop') },
    { label: 'Bedankpagina' }
  ),
  footer: fields.object({ nix: text('NIX18-regel'), credits: text('Fotocredits-label') }, { label: 'Footer' }),
};

export default config({
  // Production (Netlify) edits via GitHub; locally edits files on disk.
  // Run `PUBLIC_KEYSTATIC_STORAGE=github npm run dev` once to set up the GitHub App.
  storage: import.meta.env.PROD || import.meta.env.PUBLIC_KEYSTATIC_STORAGE === 'github'
    ? { kind: 'github', repo: { owner: 'nijemeis', name: 'cocktailcrew-website' } }
    : { kind: 'local' },
  ui: {
    brand: { name: 'CocktailCrew website' },
    navigation: {
      Pagina: ['homeNl', 'homeEn'],
      Inhoud: ['styles', 'settings'],
    },
  },
  singletons: {
    homeNl: singleton({
      label: 'Homepage (Nederlands)',
      path: 'src/content/home/nl',
      format: { data: 'json' },
      schema: homeSchema,
    }),
    homeEn: singleton({
      label: 'Homepage (English)',
      path: 'src/content/home/en',
      format: { data: 'json' },
      schema: homeSchema,
    }),
    settings: singleton({
      label: 'Instellingen',
      path: 'src/content/settings/site',
      format: { data: 'json' },
      schema: {
        email: text('E-mailadres'),
        phone: text('Telefoonnummer'),
        heroPhoto: fields.image({ label: 'Hero-achtergrondfoto', directory: 'public/images/site', publicPath: '/images/site/' }),
        heroStyles: fields.array(fields.relationship({ label: 'Stijl', collection: 'styles' }), {
          label: 'Drie stijlen in de hero (links, midden, rechts)',
          itemLabel: (p) => p.value ?? 'Stijl',
        }),
        heroBars: list('Namen op de hero-covers (zelfde volgorde)', 'Naam'),
        sampleBar: text('Naam op de stijlvoorbeelden'),
        photoCredits: text('Fotografen (credits)', { multiline: true }),
      },
    }),
  },
  collections: {
    styles: collection({
      label: 'Menustijlen',
      slugField: 'name',
      path: 'src/content/styles/*',
      format: { data: 'json' },
      columns: ['name', 'group'],
      schema: {
        name: fields.slug({ name: { label: 'Naam (NL)' } }),
        nameEn: text('Naam (EN)'),
        order: fields.integer({ label: 'Volgorde', defaultValue: 1 }),
        look: fields.select({
          label: 'Ontwerp (kleuren, lettertypes, vormen)',
          description: 'De vormgeving zelf staat in de code; hier kies je welke look deze stijl gebruikt.',
          options: ['noir', 'ivory', 'emerald', 'citrus', 'riviera', 'mint', 'tropicana', 'neon', 'spritz', 'basic'].map((v) => ({ label: v, value: v })),
          defaultValue: 'basic',
        }),
        group: fields.select({
          label: 'Groep',
          options: [
            { label: 'Luxe', value: 'lux' },
            { label: 'Zomers & fris', value: 'summer' },
            { label: 'Speels', value: 'playful' },
            { label: 'Basic', value: 'basic' },
          ],
          defaultValue: 'basic',
        }),
        descNl: text('Omschrijving (NL)', { multiline: true }),
        descEn: text('Omschrijving (EN)', { multiline: true }),
        photo: fields.image({ label: 'Coverfoto', directory: 'public/images/styles', publicPath: '/images/styles/' }),
      },
    }),
  },
});
