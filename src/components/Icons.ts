/** Brand SVG snippets (whiskey-sour glass and cherry), used with set:html. */
export const glassFull = (size = 34) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M12.3 19.2h15.4l-1.1 11.4c-.1 1-.9 1.6-1.9 1.6H15.3c-1 0-1.8-.6-1.9-1.6z" fill="#d67f48"/><path d="M11.7 15.4h16.6l-.35 4.1H12.05z" fill="#f5ead8"/><circle cx="16.2" cy="17.5" r=".95" fill="#8c491a"/><circle cx="20" cy="17.5" r=".95" fill="#8c491a"/><circle cx="23.8" cy="17.5" r=".95" fill="#8c491a"/><path d="M10.8 11.5h18.4l-1.7 19.6c-.15 1.7-1.5 2.9-3.2 2.9h-8.6c-1.7 0-3.05-1.2-3.2-2.9z" stroke="#f5ead8" stroke-width="1.9" stroke-linejoin="round"/><path d="M26.6 9.2c.4-2.6 2-4.6 4.6-5.2" stroke="#7a8a5e" stroke-width="1.6" stroke-linecap="round"/><circle cx="26.2" cy="11.2" r="3.1" fill="#b2622d"/><circle cx="25.2" cy="10.2" r=".8" fill="#ffc6a5"/></svg>`;

export const glassOutline = (size: number, color: string, stroke = 0.6, extra = '') =>
  `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" aria-hidden="true" ${extra}><path d="M10.8 11.5h18.4l-1.7 19.6c-.15 1.7-1.5 2.9-3.2 2.9h-8.6c-1.7 0-3.05-1.2-3.2-2.9z" stroke="${color}" stroke-width="${stroke}" stroke-linejoin="round"/><path d="M11.9 17.4h16.2" stroke="${color}" stroke-width="${stroke}"/><circle cx="16.2" cy="19.6" r=".7" fill="${color}"/><circle cx="20" cy="19.6" r=".7" fill="${color}"/><circle cx="23.8" cy="19.6" r=".7" fill="${color}"/><path d="M26.6 9.2c.4-2.6 2-4.6 4.6-5.2" stroke="#56633f" stroke-width="${stroke + 0.1}" stroke-linecap="round"/><circle cx="26.2" cy="11.2" r="3.1" stroke="#8c491a" stroke-width="${stroke + 0.1}"/></svg>`;

export const glassMini = (fill: string) =>
  `<svg width="44" height="44" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M10.8 11.5h18.4l-1.7 19.6c-.15 1.7-1.5 2.9-3.2 2.9h-8.6c-1.7 0-3.05-1.2-3.2-2.9z" stroke="#8c491a" stroke-width="2.2" stroke-linejoin="round"/><path d="M12.3 19.2h15.4l-1.1 11.4c-.1 1-.9 1.6-1.9 1.6H15.3c-1 0-1.8-.6-1.9-1.6z" fill="${fill}"/><path d="M26.6 9.2c.4-2.6 2-4.6 4.6-5.2" stroke="#7a8a5e" stroke-width="2" stroke-linecap="round"/><circle cx="26.2" cy="11.2" r="3.1" fill="#b2622d"/></svg>`;

export const cherry = (w = 16, h = 19) =>
  `<svg width="${w}" height="${h}" viewBox="0 0 18 21" fill="none" aria-hidden="true" class="cherry"><path d="M9.6 10c.4-3.8 2.7-6.9 6.2-7.9" stroke="#7a8a5e" stroke-width="1.9" stroke-linecap="round"/><circle cx="8.4" cy="14" r="5.6" fill="#b2622d"/><circle cx="6.7" cy="12.3" r="1.4" fill="#ffc6a5"/></svg>`;

/** Number badge shaped like a cherry with a stem. */
export const cherryBadge = (w: number, h: number, highlight = true) =>
  `<svg width="${w}" height="${h}" viewBox="0 0 52 54" fill="none" aria-hidden="true"><path d="M28 14c1.2-6.6 6-11 12.6-12.4" stroke="#7a8a5e" stroke-width="3.2" stroke-linecap="round"/><circle cx="22" cy="32" r="21" fill="#8c491a"/>${highlight ? '<circle cx="13" cy="23" r="3.6" fill="#d67f48"/>' : ''}</svg>`;

export const arrow = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

export const plus = `<svg class="faq-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8c491a" stroke-width="2.75" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`;
