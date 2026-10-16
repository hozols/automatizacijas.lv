import objects from '../../../docs/objects.json';

export interface ObjectEntry {
  slug: string;
  title: string;
  alt: string;
  wide?: boolean;
}

/* The Meshy-generated office objects, drawn as white line-work on black. docs/objects.json is the source. */
export const OBJECTS: ObjectEntry[] = objects as ObjectEntry[];
export const OBJECT_ALT: Record<string, string> = Object.fromEntries(OBJECTS.map((o) => [o.slug, o.alt]));
export const objectSrc = (slug: string, size: 400 | 800) => `/objects/${slug}-${size}.webp`;
