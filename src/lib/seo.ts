/* Search title: the brand suffix only when the whole title stays within 60 characters. */
const BRAND_SUFFIX = ' | automatizacijas.lv';
export const searchTitle = (base: string): string =>
  base.length + BRAND_SUFFIX.length <= 60 ? base + BRAND_SUFFIX : base;

/* Meta description: at most 155 characters, cut at a sentence or word boundary. */
export const trimDescription = (text: string): string => {
  if (text.length <= 155) return text;
  const cut = text.slice(0, 155);
  const sentence = cut.lastIndexOf('. ');
  if (sentence > 80) return cut.slice(0, sentence + 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:]$/, '') + '.';
};
