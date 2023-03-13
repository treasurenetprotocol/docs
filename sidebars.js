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
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    /*
    tutorial:[]
    tutorialSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */
    docs: [
        {
            type: 'category',
            label: 'About TN',
            items: [
                'about/introduction'
            ]
        },
        {
            type: 'category',
            label: 'Assets Production',
            items: [
                'assets/overview',
                {
                    type: 'category',
                    label: 'Core Concepts',
                    items: [
                        'assets/basic-concepts/producer',
                        'assets/basic-concepts/stake',
                        'assets/basic-concepts/decentralized-audit',
                        'assets/basic-concepts/privacy-protection',
                    ]
                },
                'assets/tngateway'
            ]
        },
        {
            type: 'category',
            label: 'Fundamentals',
            items: [
                {
                    type: 'category',
                    label: 'Basic Concepts',
                    items: [
                        {
                            type: 'category',
                            label: 'Transactions',
                            items: [
                                'started/concepts/transactions',
                                'started/concepts/etherenum-tx',
                                'started/concepts/cosmos-tx',
                            ]
                        },
                        'started/concepts/tokens',
                        'started/concepts/gas-and-fees',
                    ]
                },
                {
                    type: 'category',
                    label: 'Digital Wallets',
                    items: [
                        'started/wallets/metamask',
                        'started/wallets/coinbase',
                        'started/wallets/keplr',
                        'started/wallets/ledger',
                    ]
                },
                'started/accounts',
            ]
        },
        {
            type: 'category',
            label: 'USTN Finance Platform',
            items: [
                'ustn/overview',
                'ustn/financial-operations',
                'ustn/qa'
            ]
        },
        {
            type: 'category',
            label: 'Governance',
            items: [
                'governance/overview',
                'governance/dao-website',
                'governance/community-pool',
            ]
        },
        {
            type: 'category',
            label: 'Producer & TAT',
            items: [
                'producers/introduction',
                'producers/rules',
                'producers/assets',
                'producers/new-assets',
                {
                    type: 'category',
                    label: 'Operation Guide',
                    items: [
                        'producers/operation-guide/production-data-upload',
                        'producers/operation-guide/producer',
                        'producers/operation-guide/foundationmanager',
                        'producers/operation-guide/expense',
                        'producers/operation-guide/beneficiaries',
                        'producers/operation-guide/getinfo'
                    ],

                },
                'producers/qa'
            ]
        },
        {
            type: 'category',
            label: 'For Delegaters',
            items: [
                'staking/introduction',
                'staking/getting-started',
                'staking/best-practices',
                'staking/qa',
            ]
        },
        {
            type: 'category',
            label: 'For Validators',
            items: [
                'validators/overview',
                {
                    type: 'category',
                    label: 'Basic Concepts',
                    items: [
                        'validators/concepts/validator-delegator',
                        'validators/concepts/becoming-a-validator',
                        'validators/concepts/bonus-stake',
                        'validators/concepts/incentives',
                    ],
                },
                'validators/rules',
                {
                    type: 'category',
                    label: 'Quick Start',
                    items: [
                        'validators/quickStart/installation',
                        'validators/quickStart/treasurenetd',
                        'validators/quickStart/run-a-node',
                        'validators/quickStart/init',
                    ],
                },
                {
                    type: 'category',
                    label: 'Setup & Configuration',
                    items: [
                        'validators/setup/run-a-validator',
                        'validators/setup/configuration',
                    ]
                },
                'validators/join-testnet',
                'validators/join-mainnet',
                'validators/faq',
            ]
        },
        {
            type: 'category',
            label: 'For Dapp Devs',
            items: [
                'developers/overview',
                'developers/quick-connect',
                'developers/tn-gateway',
                'developers/clients',
                {
                    type: 'category',
                    label: 'Guides',
                    items: [
                        'developers/guides/wallet-integration',
                        'developers/guides/erc20',
                        'developers/guides/trace-transactions',
                        'developers/guides/query-balances'
                    ]
                },
                {
                    type: 'category',
                    label: 'Localnet',
                    items: [
                        'developers/localnet/single-node',
                        'developers/localnet/multi-node',
                        'developers/localnet/testnet-command',
                    ]
                },
                {
                    type: 'category',
                    label: 'Testnet',
                    items: [
                        'developers/testnet/faucet',
                    ]
                },
                {
                    type: 'category',
                    label: 'TreasureNet EVM Tooling ',
                    items: [
                        'developers/ethereum-tooling/remix',
                        'developers/ethereum-tooling/hardhat',
                        'developers/ethereum-tooling/truffle',
                    ]
                },
                {
                    type: 'category',
                    label: 'Client Libraries',
                    items: [
                        'developers/client-libraries/address-converter'
                    ]
                },
                {
                    type: 'category',
                    label: 'Ethereum JSON-RPC',
                    items: [
                        'developers/eth-json-rpc/methods',
                    ]
                },
                {
                    type: 'link',
                    label: 'Cosmos gRPC & REST',
                    href: 'https://www.google.com'
                },
            ]
        },
        {
            type: 'category',
            label: 'For Protocol Devs',
            items: [
                'protocolDevelopers/overview',
                {
                    type: 'category',
                    label: 'Modules',
                    items: [
                        'protocolDevelopers/modules/overview',
                        'protocolDevelopers/modules/auth',
                        'protocolDevelopers/modules/bank',
                        'protocolDevelopers/modules/mint',
                        'protocolDevelopers/modules/staking',
                        'protocolDevelopers/modules/slashing',
                        'protocolDevelopers/modules/gov',
                        'protocolDevelopers/modules/distribution'

                    ]
                },
                {
                    type: 'category',
                    label: 'Genesis File',
                    items: [
                        'protocolDevelopers/genesis/genesis',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Block Explorers',
            items: [
                'blockExplorers/intro',
                {
                    type: 'link',
                    label: 'EVM Explorer',
                    href: 'https://blockscout.treasurenet.io'
                },
                {
                    type: 'link',
                    label: 'COSMOS Explorer',
                    href: 'https://explorer.treasurenet.io'
                },
            ]
        },
    ],
    api: [
        'api/intro',
        {
            type: 'category',
            label: 'Official Contracts',
            items: [
                'api/officialContracts/tat',
                'api/officialContracts/ustn',
                'api/officialContracts/treasure-data',
                'api/officialContracts/bid',
            ]
        },
        {
            type: 'category',
            label: 'Ethereum JSON-RPC Methods',
            items: [
                'api/eth-json-rpc/web3-methods',
                'api/eth-json-rpc/eth-methods',
                'api/eth-json-rpc/websocket-methods',
                'api/eth-json-rpc/personal-methods',
                'api/eth-json-rpc/debug-methods',
                'api/eth-json-rpc/miner-methods',
                'api/eth-json-rpc/txpool-methods',
            ]
        },
        {
            type: 'link',
            label: 'Cosmos gRPC & REST',
            href: 'https://www.google.com'
        },
        {
            type: 'category',
            label: 'Tools',
            items: [
                'api/tools/intro',
            ]
        }
    ]
};

module.exports = sidebars;
