/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. Test.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/image.jpg'.
  //   image: '/img/diffbot_logo.png',
  //   infoLink: 'https://www.diffbot.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'Docs Suite', // Title for your website.
  tagline: 'Diffbot Documentation - Tutorials, Guides, API reference',
  url: 'https://diffbot.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',


  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'diffbot',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: '2c24e5e78d724e77c46ef1b720700177',
    indexName: 'diffbot',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'error-intro', label: 'Debugging'},
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/diffbot_white.svg',
  footerIcon: 'img/diffbot_white.svg',
  favicon: 'img/diffbot-head.png',

  /* Colors for website */
  colors: {
    primaryColor: '#1c233c',
    secondaryColor: '#1c233c ',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Diffbot.com`,

  editUrl: 'https://github.com/diffbot/docs/edit/master/docs/',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js', 
    '/js/app.js', 
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js'],

  styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  useEnglishUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/diagram.svg',
  twitterImage: 'img/diagram.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  cname: 'docs.diffbot.com',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;