/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Docusaurus no style",
  tagline: "Docusaurus 2 theme with minimum style",
  url: "https://t-thomas-dev.github.io",
  baseUrl: "/",
  favicon: "img/diplodocus.png",
  organizationName: "t-thomas-dev", // Usually your GitHub org/user name.
  projectName: "docusaurus-test-2", // Usually your repo name.
  themeConfig: {
    image: "img/diplodocus.png",
    navbar: {
      title: "Docusaurus No Style",
      logo: {
        alt: "My Site Logo",
        src: "img/diplodocus.png"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/wgao19/docusaurus-template-no-style",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/doc1"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      copyright: `Built with love and Docusaurus 2`
    }
  },
  themes: [
    [
      "@wgao19/docusaurus-theme-no-style",
      {
        // path relative to your project root
        customCss: require.resolve("./src/css/custom.css")
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs-legacy",
      {
        sidebarPath: require.resolve("./sidebars.js")
      }
    ],
    ["@docusaurus/plugin-content-blog"],
    ["@docusaurus/plugin-content-pages"]
  ]
};
