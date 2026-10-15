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
