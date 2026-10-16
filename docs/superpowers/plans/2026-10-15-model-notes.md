# Hero typewriter model notes

## Meshy tasks (2026-10-15)

| Step | Task id | Model | Credits |
| --- | --- | --- | --- |
| text-to-image design | 01a14068-3659-7131-adc1-52b39a2686c4 | nano-banana-pro | 9 |
| image-to-3d textured (PBR, remesh 40k) | 01a14068-dd9a-7175-b60c-54dc3e0ff98e | meshy-7.1 | 30 |

Route: image first (reviewable design), then image-to-3d; instead of the
spec's text-to-3d + refine. Total 39 credits, under the 60 cap.

## Optimisation

`gltf-transform optimize --compress meshopt --texture-compress webp --texture-size 1024 --simplify false`

| | Raw | Optimised |
| --- | --- | --- |
| File size | 12,815,476 B | 1,140,900 B |
| Triangles | 38,729 | 38,729 (not simplified) |
| Textures | base colour 2048 jpeg, metallic/roughness 2048 jpeg, normal 2048 png | three 1024 WebP |

Extensions required: EXT_meshopt_compression, EXT_texture_webp, KHR_mesh_quantization
(drei's `useGLTF` wires the meshopt decoder by default).

Review of the thumbnail: silhouette reads as a typewriter at 300 px, four key
rows present, navy body, cream keys, carmine spools, chrome lever. Keys are
slightly soft but acceptable at hero size. Accepted on the first try.

## Scene tuning (final values)

- Model normalised to width 2.4; bounds after normalisation: 2.4 × 1.01 × 2.04, sits on y=0.
- PlatenSheet: position [0, 1.24, -0.62], rotation.x -0.3, width 1.4, charStep 0.03.
- Print line baseline at 560/768 of the sheet texture (low on the sheet, just above the machine).
- Camera [0, 1.75, 5.3], fov 30, lookAt (0, 0.85, 0). Rig base rotation (0.08, -0.35, 0).
- Lights: key (-3,5,3) 2.1 warm; fill (3,2,-2) 0.6; rim (0,3,-4) 1.8 bone; amber rim (-4,1.5,-3) 1.1.
- Palette: PALETTE_OVERRIDE stays false; the Meshy texture (navy, cream keys, carmine spools) reads
  correctly against the night-navy page with the rim light. Fallback WebP: 46,862 bytes.

## Office objects (2026-10-16)

Seven objects for the services room, the blueprint panel and the inner-page
vignettes, replacing the Met paintings. Route: nano-banana-pro design image
(9) → image-to-3d meshy-7.1 textured (30) = 39 credits each, 273 in total;
task ids in `docs/objects.json`. Textures are discarded: the web draws the
objects as hidden-line wireframes (black fill, white edges at 0.6).

`scripts/objects-build.mjs` strips textures, welds, simplifies towards 9k
triangles (loosening the error bound stepwise) and meshopt-compresses to
`public/objects/<slug>.glb`. Thin-sheet models (invoices, card-index,
filing-cabinet) stop at 42–58k triangles because separate sheets cannot
collapse further; their files are 0.8–1.1 MB and load lazily after idle on
desktop only. `scripts/objects-render.mjs` renders each still at its own
size in headless Chromium so the 1px lines stay crisp.
