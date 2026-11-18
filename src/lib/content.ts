import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export type Lang = 'nl' | 'en';

export async function loadPage(lang: Lang) {
  const home = lang === 'nl' ? await reader.singletons.homeNl.readOrThrow() : await reader.singletons.homeEn.readOrThrow();
  const settings = await reader.singletons.settings.readOrThrow();
  const all = await reader.collections.styles.all();
  const styles = all
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return { home, settings, styles };
}

export const paths = {
  nl: { home: '/', thanks: '/bedankt/' },
  en: { home: '/en/', thanks: '/en/thanks/' },
};
