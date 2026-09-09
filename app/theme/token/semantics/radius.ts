// token/semantics/radius.ts

import { radius as primitiveRadius } from "../primitives/radius";

export const radius = {
  none: primitiveRadius.none,

  control: primitiveRadius.md,
  input: primitiveRadius.md,
  button: primitiveRadius.md,

  card: primitiveRadius.lg,
  panel: primitiveRadius.lg,

  modal: primitiveRadius.xl,

  badge: primitiveRadius.full,
  avatar: primitiveRadius.full,
  pill: primitiveRadius.full,
} as const;
