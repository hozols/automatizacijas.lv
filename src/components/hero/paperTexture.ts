/*
  Draws the sheet that sits in the typewriter platen. Pure canvas 2D so it
  can be unit tested (layoutLines) and redrawn when the theme changes.
*/

export interface PaperColors {
  paper: string;
  ink: string;
  rule: string;
}

export function readPaperColors(): PaperColors {
  const s = getComputedStyle(document.documentElement);
  const hsl = (name: string) => `hsl(${s.getPropertyValue(name).trim()})`;
  return { paper: hsl('--card'), ink: hsl('--foreground'), rule: hsl('--border') };
}

export function layoutLines(text: string, maxChars: number): string[] {
  if (!text) return [''];
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const w of words) {
    const candidate = current ? `${current} ${w}` : w;
    if ([...candidate].length > maxChars && current) {
      lines.push(current);
      current = w;
    } else {
      current = candidate;
    }
  }
  lines.push(current);
  return lines;
}

export const PAPER_W = 1024;
export const PAPER_H = 768;
export const PAPER_FONT_PX = 58;
const RULE_GAP = 72;
const MARGIN_X = 96;
/* the print line sits low on the sheet, just above the machine; earlier rules read as already-typed space */
const FIRST_BASELINE = 560;

export function drawPaper(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  text: string,
  colors: PaperColors,
  font: string,
): void {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = colors.paper;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = colors.rule;
  ctx.lineWidth = 2;
  for (let y = FIRST_BASELINE + 14; y > 40; y -= RULE_GAP) {
    ctx.beginPath();
    ctx.moveTo(MARGIN_X - 24, y);
    ctx.lineTo(w - MARGIN_X + 24, y);
    ctx.stroke();
  }
  ctx.fillStyle = colors.ink;
  ctx.font = font;
  ctx.textBaseline = 'alphabetic';
  const lines = layoutLines(text, 24);
  lines.forEach((line, i) => {
    ctx.fillText(line, MARGIN_X, FIRST_BASELINE + i * RULE_GAP);
  });
}
