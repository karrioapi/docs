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
        'guides/openapi',
        'guides/graphql',
        'guides/extensibility',
      ],
    },
    {
      type: 'category',
      label: 'SELF HOSTING',
      collapsible: false,
      items: [
        'guides/self-hosting/overview',
        'guides/self-hosting/configuration',
        'guides/self-hosting/docker',
        'guides/self-hosting/heroku',
      ],
    },
  ],
  reference: [
    {
      type: 'category',
      label: 'APIs',
      collapsible: false,
      items: [
        'reference/reference',
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      collapsible: false,
      items: [
        'reference/openapi/clients',
        'reference/openapi/installing',
        'reference/openapi/initializing'
      ],
    },
    {
      type: 'category',
      label: 'GRAPHQL',
      collapsible: false,
      items: [
        'reference/graphql-api/intro',
        'reference/graphql-api/users',
        'reference/graphql-api/connections',
        'reference/graphql-api/templates',
        'reference/graphql-api/organizations',
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
        'carriers/australiapost',
        'carriers/canadapost',
        'carriers/canpar',
        'carriers/dhl_express',
        'carriers/dhl_universal',
        'carriers/dicom',
        'carriers/fedex',
        'carriers/ics-courrier',
        'carriers/purolator',
        'carriers/royalmail',
        'carriers/sendle',
        'carriers/tnt',
        'carriers/ups',
        'carriers/usps',
      ],
    },
  ]
};

module.exports = sidebars;
