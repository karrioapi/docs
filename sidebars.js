/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guides: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsible: false,
      items: [
        'introduction',
        'architecture',
        'extensibility',
        'installation',
      ],
    },
    {
      type: 'category',
      label: 'ACCOUNT',
      items: [
        'guides/account',
      ],
    },
    {
      type: 'category',
      label: 'SHIPPING',
      items: [
        'guides/shipping',
      ],
    },
    {
      type: 'category',
      label: 'TRACKING',
      items: [
        'guides/tracking',
      ],
    },
    {
      type: 'category',
      label: 'PLATFORM',
      collapsed: false,
      items: [
        'platform/api-logs',
        'platform/events',
        'platform/document-templates',
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      items: [
        'guides/apis/overview',
        {
          type: 'category',
          label: 'REST API',
          collapsed: true,
          collapsible: true,
          items: [
            'guides/apis/authentication',
            'guides/apis/error-codes',
            'guides/apis/carriers',
            'guides/apis/shipping',
            'guides/apis/tracking',
          ],
        },
        {
          type: 'category',
          label: 'GRAPHQL API',
          collapsed: true,
          collapsible: true,
          items: [
            'guides/apis/requests',
            'guides/apis/connections',
            'guides/apis/addresses',
            'guides/apis/parcels',
            'guides/apis/metadata',
            'guides/apis/users',
            'guides/apis/organizations',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DEVELOPMENT',
      collapsed: false,
      items: [
        'development/setup',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      collapsed: true,
      collapsible: true,
      items: [
        'guides/sdk/introduction',
        'guides/sdk/architecture',
        'guides/sdk/gateways',
        'guides/sdk/rating',
        'guides/sdk/shipping',
        'guides/sdk/tracking',
        'guides/sdk/pickup',
        'guides/sdk/debugging',
        'guides/sdk/extension',
      ],
    },
    {
      type: 'category',
      label: 'SELF HOSTING',
      collapsed: false,
      items: [
        'guides/self-hosting/overview',
        'guides/self-hosting/docker',
      ],
    },
    {
      type: 'category',
      label: 'SEE ALSO',
      collapsed: false,
      items: ['faq', 'support', 'contributing', "privacy", "terms"],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        'reference/quickstart',
        'reference/clients/shipments',
        'reference/clients/trackers',
        'reference/clients/webhooks',
        'reference/clients/orders',
        'reference/clients/proxy',
      ],
    },
  ],
  carriers: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsed: false,
      items: ['carriers/integrations'],
    },
    {
      type: 'category',
      label: 'CARRIERS',
      collapsed: false,
      items: [
        'carriers/amazon_mws',
        'carriers/aramex',
        'carriers/australiapost',
        'carriers/canadapost',
        'carriers/canpar',
        'carriers/chronopost',
        'carriers/dhl-express',
        'carriers/dhl-poland',
        'carriers/dhl-universal',
        'carriers/dicom',
        'carriers/dpdhl',
        'carriers/fedex',
        'carriers/purolator',
        'carriers/royalmail',
        'carriers/sendle',
        'carriers/tnt',
        'carriers/ups',
        'carriers/usps',
        'carriers/usps-international',
        'carriers/custom-carrier',
      ],
    },
  ]
};

module.exports = sidebars;
