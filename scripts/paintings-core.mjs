import path from 'node:path';

export function validateManifest(entries) {
  const errors = [];
  const seen = new Set();
  for (const e of entries) {
    if (!e.slug || typeof e.slug !== 'string') errors.push('entry without slug');
    else if (seen.has(e.slug)) errors.push(`duplicate slug ${e.slug}`);
    else seen.add(e.slug);
    if (!Number.isInteger(e.metObjectId)) errors.push(`${e.slug ?? '?'}: metObjectId must be an integer`);
    const f = e.focus ?? {};
    if (typeof f.x !== 'number' || typeof f.y !== 'number' || f.x < 0 || f.x > 1 || f.y < 0 || f.y > 1) {
      errors.push(`${e.slug ?? '?'}: focus must be {x, y} within 0..1`);
    }
  }
  return errors;
}

export function creditLine(obj) {
  const artist = obj.artistDisplayName?.trim() || 'Unknown artist';
  const date = obj.objectDate?.trim();
  return `${artist}, *${obj.title}*${date ? `, ${date}` : ''}. The Metropolitan Museum of Art, Open Access (CC0), object ${obj.objectID}.`;
}

export function outputNames(slug, dir) {
  return {
    wide: path.join(dir, `${slug}-1600.webp`),
    square: path.join(dir, `${slug}-800.webp`),
  };
}
