import { spacing } from "../primitives/spacing";

export const padding = {
  page: {
    inline: {
      mobile: spacing[4], // 16px
      largeMobile: spacing[6], // 24px
      tablet: spacing[8], // 32px
      laptop: spacing[12], // 48px
      desktop: spacing[16], // 64px
    },
  },

  container: {
    mobile: spacing[4], // 16px
    tablet: spacing[6], // 24px
    desktop: spacing[8], // 32px
  },
  //card, panel, dialog, or elevated section.
  surface: {
    compact: spacing[3], // 12px
    default: spacing[4], // 16px
    comfortable: spacing[6], // 24px
  },
  // use for inline and block padding for forms
  control: {
    inline: spacing[3], // 12px
    block: spacing[3], // 12px
  },

  button: {
    inline: spacing[4], // 16px
    block: spacing[3], // 12px
  },

  navigation: {
    item: {
      inline: spacing[3], // 12px
      block: spacing[2], // 8px
    },
  },
} as const;
