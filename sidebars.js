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
  docs: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsible: false,
      items: ['introduction', 'accounts', 'shipments', 'trackers', 'APIs'],
    },
    {
      type: 'category',
      label: 'SEE ALSO',
      collapsible: false,
      items: ['faq', 'support', 'contributing'],
    },
  ],
  guides: [
    {
      type: 'category',
      label: 'GUIDES',
      collapsible: false,
      items: [
        'guides/overview',
        'guides/architecture',
        'guides/development',
        'guides/extensibility',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'guides/api/openapi',
        'guides/api/shipping',
        'guides/api/tracking',
      ],
    },
    {
      type: 'category',
      label: 'GRAPH',
      items: [
        'guides/graphql/introduction',
        'guides/graphql/users',
        'guides/graphql/connections',
        'guides/graphql/templates',
        'guides/graphql/logs',
        'guides/graphql/events',
        'guides/graphql/organizations',
      ],
    },
    {
      type: 'category',
      label: 'SDK',
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
      collapsible: false,
      items: [
        'guides/self-hosting/overview',
        'guides/self-hosting/docker',
      ],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'Developer Tools',
      collapsible: false,
      items: [
        'reference/quickstart',
        'reference/error-codes',
      ],
    },
    {
      type: 'category',
      label: 'Core Resources',
      collapsible: false,
      items: [
        'reference/core-resources/authentication',
        'reference/core-resources/connected-carriers',
        'reference/core-resources/shipments',
        'reference/core-resources/trackers',
        'reference/core-resources/proxy',
        'reference/core-resources/webhooks',
        'reference/core-resources/orders',
      ],
    },
    {
      type: 'category',
      label: 'GraphQL Reference',
      collapsible: false,
      items: [
        'reference/graphql/requests',
        'reference/graphql/users',
        'reference/graphql/connections',
        'reference/graphql/addresses',
        'reference/graphql/parcels',
        'reference/graphql/metadata',
        'reference/graphql/organizations',
        'reference/graphql/document_templates',
      ],
    },
  ],
  carriers: [
    {
      type: 'category',
      label: 'OVERVIEW',
      collapsible: false,
      items: ['carriers/integrations'],
    },
    {
      type: 'category',
      label: 'CARRIERS',
      collapsible: false,
      items: [
        'carriers/aramex',
        'carriers/australiapost',
        'carriers/canadapost',
        'carriers/canpar',
        'carriers/dhl-express',
        'carriers/dhl-poland',
        'carriers/dhl-universal',
        'carriers/dicom',
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
