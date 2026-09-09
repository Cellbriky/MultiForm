// token/semantics/shadow.ts

import { shadows as primitiveShadows } from "../primitives/shadow";

export const shadow = {
  none: primitiveShadows.none,

  subtle: primitiveShadows.xs,

  card: primitiveShadows.sm,

  elevated: primitiveShadows.md,

  dropdown: primitiveShadows.lg,

  modal: primitiveShadows.xl,

  overlay: primitiveShadows["2xl"],
} as const;
