// token/semantics/layout.ts

export const layoutToken = {
  container: {
    form: "640px",
    reading: "760px",
    page: "1280px",
    dashboard: "1440px",
  },

  sidebar: {
    width: "240px",
  },

  header: {
    height: "138px",
    //height: "64px",
  },
} as const;
