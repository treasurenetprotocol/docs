// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Treasurenet Documentation',
    tagline: 'Treasurenet Built on Real-World Rare Assets.',
    url: 'https://docs.treasurenet.io',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    favicon: 'img/favicon.ico',

    organizationName: 'treasurenetprotocol',
    projectName: 'treasurenetDoc',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    // themes:[
    //     [
    //         require.resolve("@easyops-cn/docusaurus-search-local"),
    //         ({
    //             indexPages: true,
    //             language: ['en'],
    //             hashed: true,
    //             docsRouteBasePath: '/docs',
    //         }),
    //     ]
    // ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
                gtag: {
                    trackingID: 'G-YTTVBEEG0V',
                    anonymizeIP: true,
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: ({locale, docPath}) => {
                        if (locale === 'en') {
                            return `https://github.com/treasurenetprotocol/docs/blob/feature/1.0.3/docs/${docPath}`
                        }
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarCollapsible: true,
                },
                blog: {
                    showReadingTime: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/treasurenetprotocol/docs/blob/master',
                    feedOptions: {
                        type: 'rss',
                        copyright: `Copyright © ${new Date().getFullYear()} Treasurenet Foundation, Inc.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            /*algolia: {
                appId: 'YOUR_APP_ID',
                apiKey: 'YOUR_SEARCH_API_KEY',
                indexName: 'YOUR_INDEX_NAME',
                contextualSearch: true,
                externalUrlRegex: 'external\\.com|domain\\.com',
                replaceSearchResultPathname: {
                    from: '/docs/',
                    to: '/',
                },
                searchParameters: {},
                searchPagePath: 'search',
            },*/
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'Treasurenet Docs',
                logo: {
                    alt: 'treasurenet',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: '1/Introduction',
                        position: 'left',
                        label: 'Guide',
                    },
                    /*{
                        type: 'doc',
                        docId: 'api/intro',
                        position: 'left',
                        label: 'API',
                    },*/
                    {
                        type: 'dropdown',
                        label: 'Network',
                        position: 'right',
                        items: [
                            {
                                label: 'Treasurenet Mainnet',
                                href: 'https://www.treasurenet.io',
                            },
                            {
                                label: 'Treasurenet Testnet',
                                href: 'https://www.testnet.treasurenet.io',
                            },
                        ],
                    },
                    {
                        href: 'https://github.com/treasurenetprotocol',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Guide',
                                to: '/docs/1/Introduction',
                            },
                            /*{
                                label: 'API',
                                to: '/docs/api/intro',
                            },*/
                        ],
                    },
                    {
                        title: 'Products',
                        items: [
                            {
                                label: 'Treasurenet',
                                href: 'https://www.treasurenet.io',
                            },
                            {
                                label: 'Service Platform',
                                href: 'https://splatform.treasurenet.io',
                            },
                        ],
                    },
                    {
                        title: 'Others',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/treasurenetprotocol',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Treasurenet Foundation, Inc.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        })
};

module.exports = config;
