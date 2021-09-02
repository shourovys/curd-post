export const breakpoints = {
    mobile: "576px",
    tablet: "768px",
    tabletL: "992px",
    laptop: "1200px",
    laptopL: "1440px",
  };

  export const device = {
    mobile: `screen and (min-width: ${breakpoints.mobile})`,
    tablet: `screen and (min-width: ${breakpoints.tablet})`,
    tabletL: `screen and (min-width: ${breakpoints.tabletL})`,
    laptop: `screen and (min-width: ${breakpoints.laptop})`,
    laptopL: `screen and (min-width: ${breakpoints.laptopL})`,
    desktop: `screen and (min-width: ${breakpoints.desktop})`,
  };
  