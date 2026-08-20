<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## File boundaries

- The project root is the directory containing this AGENTS.md file.
- Do not create, modify, or delete files outside the project root, except in `D:\Temp\agent-scratch`.
- Use `D:\Temp\agent-scratch` for all temporary/scratch files; never use `%TEMP%`, `%TMP%`, or any location on `C:`.
- If a build or tool requires logs, caches, temp files, or outputs outside these locations, configure it to use the project root or `D:\Temp\agent-scratch`; otherwise ask the user first.

## Design rules

- All UI/design work must follow `DESIGN-SPEC.md` (palette, type scale, ban list, component recipes).
- No gradients, glow, blur, colored shadows, or decorative flourishes — see the ban list in `DESIGN-SPEC.md`.
- Light mode only. If a change would violate the spec, stop and ask the user.
