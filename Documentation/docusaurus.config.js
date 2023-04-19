// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GreenScync",
  tagline: "Developer Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.greensync.co.za",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Green-sync", // Usually your GitHub org/user name.
  projectName: "greensync", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/green-sync/greensync",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/green-sync/greensync/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "GreenScync",
        logo: {
          alt: "GreenScync Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Green-sync/greensync",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/greensync",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/greensync",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Green-sync/greensync",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GreenSync. Developed By Opher R&D .`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          property: "description",
          content: "GreenSync Documentation",
        },
        {
          property: "og:title",
          content: "GreenSync",
        },

        {
          property: "og:description",
          content: "Documentation for GreenSync",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          name: "twitter:card",
          content: "summary",
        },

        {
          name: "twitter:creator",
          content: "@green_sync",
        },

        {
          name: "twitter:title",
          content: "GreenSync",
        },

        {
          name: "twitter:description",
          content: "Documentation for GreenSync",
        },

        {
          name: "twitter:image",
          content: "img/docusaurus-social-card.jpg",
        },

        {
          name: "twitter:site",
          content: "@green_sync",
        },
      ],
    }),
};

module.exports = config;
