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
        'overview',
        'architecture',
        'extensibility',
        'installation',
      ],
    },
    {
      type: 'category',
      label: 'PLATFORM',
      collapsed: false,
      items: [
        'platform/connections',
        'platform/shipping',
        'platform/tracking',
        'platform/api-logs',
        'platform/events',
        'platform/document-templates',
      ],
    },
    {
      type: 'category',
      label: 'SELF HOSTING',
      collapsed: false,
      items: [
        'self-hosting/overview',
        'self-hosting/oss',
        'self-hosting/enterprise',
        {
          type: 'category',
          label: 'Configure',
          collapsed: true,
          collapsible: true,
          items: [
            'self-hosting/administration',
            'self-hosting/environment',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SEE ALSO',
      collapsed: false,
      items: [
        'faq',
        'support',
        {
          type: 'category',
          label: 'Contributing',
          collapsed: true,
          collapsible: true,
          items: [
            'contributing/guidlines',
            'contributing/development',
          ],
        },
        "privacy",
        "terms"
      ],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'APIs',
      items: [
        'apis/overview',
        'apis/quickstart',
        'apis/authentication',
        {
          type: 'category',
          label: 'REST',
          collapsed: false,
          items: [
            'apis/error-codes',
            'apis/carriers',
            'apis/shipping',
            'apis/tracking',
          ],
        },
        {
          type: 'category',
          label: 'GRAPHQL',
          collapsed: false,
          items: [
            'apis/requests',
            'apis/connections',
            'apis/addresses',
            'apis/parcels',
            'apis/metadata',
            'apis/users',
            'apis/organizations',
          ],
        },
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
      label: 'EXTENSIONS',
      collapsed: false,
      items: [
        'carriers/extensions/amazon_mws',
        'carriers/extensions/aramex',
        'carriers/extensions/australiapost',
        'carriers/extensions/canadapost',
        'carriers/extensions/canpar',
        'carriers/extensions/chronopost',
        'carriers/extensions/dhl-express',
        'carriers/extensions/dhl-poland',
        'carriers/extensions/dhl-universal',
        'carriers/extensions/dicom',
        'carriers/extensions/dpdhl',
        'carriers/extensions/fedex',
        'carriers/extensions/purolator',
        'carriers/extensions/royalmail',
        'carriers/extensions/sendle',
        'carriers/extensions/tnt',
        'carriers/extensions/ups',
        'carriers/extensions/usps',
        'carriers/extensions/usps-international',
        'carriers/extensions/custom-carrier',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      collapsed: true,
      collapsible: true,
      items: [
        'carriers/sdk/introduction',
        'carriers/sdk/architecture',
        'carriers/sdk/gateways',
        'carriers/sdk/rating',
        'carriers/sdk/shipping',
        'carriers/sdk/tracking',
        'carriers/sdk/pickup',
        'carriers/sdk/debugging',
        'carriers/sdk/extension',
      ],
    },
  ]
};

module.exports = sidebars;
