import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#fff",
  "--black": "#1a1a1a",
  "--gray": "#374151",
  "--teal": "#0d9488",
  "--red": "#dc2626",
};

export const sanityTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--black"],
  "--white": props["--white"],

  "--gray-base": props["--gray"],

  "--component-bg": props["--black"],
  "--component-text-color": props["--white"],

  /* Default button */
  "--default-button-color": props["--teal"],
  "--default-button-primary-color": props["--teal"],
  "--default-button-success-color": props["--teal"],
  "--default-button-warning-color": props["--red"],
  "--default-button-danger-color": props["--red"],

  /* State */
  "--state-info-color": props["--teal"],
  "--state-success-color": props["--teal"],
  "--state-warning-color": props["--red"],
  "--state-danger-color": props["--red"],

  /* Navbar */
  "--main-navigation-color": props["--black"],
  "--main-navigation-color--inverted": props["--white"],

  "--focus-color": props["--teal"],
});
