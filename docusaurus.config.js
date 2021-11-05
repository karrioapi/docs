// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'purplship',
  tagline: 'Open Source, On-prem or Private cloud Shipping API',
  url: 'https://purplship.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'purplship', // Usually your GitHub org/user name.
  projectName: 'Purplship', // Usually your repo name.

  plugins: ['tailwind-loader'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/purplship/about/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/purplship/about/edit/main/blog/',
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
      image: 'img/purplship.png',
      metaImage: 'img/purplship.png',
      navbar: {
        title: '',
        logo: {
          alt: 'purplship',
          src: 'img/logo.svg',
          srcDark: 'img/logo-inverted.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/guides',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/docs/reference',
            position: 'left',
            label: 'Reference',
          },
          {
            to: '/docs/carriers',
            position: 'left',
            label: 'Carriers',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/purplship/purplship',
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
                label: 'Overview',
                to: '/docs',
              },
              {
                label: 'Guides',
                to: '/docs/guides',
              },
              {
                label: 'Reference',
                to: '/docs/introduction',
              },
              {
                label: 'Carriers',
                to: '/docs/carriers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/purplship/purplship/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/purplship',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/purplship',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/purplship/about',
              },
            ],
          },
        ],
        logo: {
          alt: 'Purplship Logo',
          src: 'img/logo-inverted.svg',
        },
        copyright: `Copyright © ${new Date().getFullYear()} purplship`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
