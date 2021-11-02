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
      items: ['guides/overview'],
    },
    {
      type: 'category',
      label: 'CONNECTIONS',
      collapsible: false,
      items: [
        'guides/connections/carrier-connections',
        'guides/connections/connection-mode'
      ],
    },
    {
      type: 'category',
      label: 'SHIPPING',
      collapsible: false,
      items: [
        'guides/shipping/live-rates',
        'guides/shipping/buy-label',
        'guides/shipping/print-label',
        'guides/shipping/international',
        'guides/shipping/void-label'
      ],
    },
    {
      type: 'category',
      label: 'TRACKING',
      collapsible: false,
      items: [
        'guides/tracking/shipment-tracking',
        'guides/tracking/branded-page'
      ],
    },
    {
      type: 'category',
      label: 'ADMIN',
      collapsible: false,
      items: [
        'guides/admin/email-configuration',
        'guides/admin/address-validation',
        'guides/admin/price-addon'
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
        'reference/apis/rest',
        'reference/apis/graphql'
      ],
    },
    {
      type: 'category',
      label: 'REST API',
      collapsible: false,
      items: [
        'reference/rest-api/clients',
        'reference/rest-api/installing',
        'reference/rest-api/initializing'
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
