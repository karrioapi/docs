// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Karrio',
  tagline: 'The Headless, API-first, open source shipping platform.',
  url: 'https://karrio.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'karrio', // Usually your GitHub org/user name.
  projectName: 'karrio', // Usually your repo name.

  plugins: [
    'tailwind-loader',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-223037359-1',
        anonymizeIP: true,
      },
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        language: "en",
      },
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/karrioapi/about/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/karrioapi/about/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/karrio.png',
      metaImage: 'img/karrio.png',
      navbar: {
        // title: 'Karrio',
        logo: {
          alt: 'Karrio',
          src: 'img/logo.svg',
          srcDark: 'img/logo-inverted.svg',
        },
        items: [
          {
            to: '/guides',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/reference',
            position: 'left',
            label: 'Reference',
          },
          {
            to: '/carriers',
            position: 'left',
            label: 'Carriers',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/karrioapi/karrio',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'Carriers',
                to: '/carriers',
              },
              {
                label: 'OpenAPI',
                to: 'https://api.karrio.io/openapi',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/karrioapi/karrio/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/karrio',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/karrio',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/karrioapi/karrio',
              },
            ],
          },
          {
            title: 'Beta',
            items: [
              {
                label: 'Join our beta',
                href: 'https://karrio.io',
              },
            ],
          },
        ],
        logo: {
          alt: 'Karrio Inc.',
          src: 'img/logo-inverted.svg',
        },
        copyright: `Copyright © ${new Date().getFullYear()} karrio Inc.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        defaultLanguage: 'js',
        additionalLanguages: ['json'],
        plugins: ['line-numbers', 'show-language'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
