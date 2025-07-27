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
            label: 'Introduction',
            items: [
                '1/Introduction',
            ]
        },
        {
            type: 'category',
            label: 'How Treasurenet Works',
            items: [
                '2/How Treasurenet Works',
                '2/Step 1',
                '2/Step 2',
                '2/Step 3',
                '2/Step 4',
                '2/Step 5',
                '2/Step 6',
            ]
        },
        {
            type: 'category',
            label: 'Network Roles',
            items: [
                '3/Network Roles',
            ]
        },
        {
            type: 'category',
            label: 'Litepaper',
            items: [
                '4/Litepaper',
            ]
        },
        {
            type: 'category',
            label: 'Tokenomics Overview',
            items: [
                '5/Tokenomics Overview',
                '5/REP Score',
                '5/UNIT',
                '5/Genesis of UNIT',
                '5/TCash',
            ]
        },
        {
            type: 'category',
            label: 'Staking & Rewards',
            items: [
                '6/Staking & Rewards',
                '6/What is Staking',
                '6/What is Bonus Stake',
            ]
        },
        {
            type: 'category',
            label: 'Network Role',
            items: [
                '7/Network Role',
                '7/How it works',
            ]
        },
        {
            type: 'category',
            label: 'Privacy & Protection',
            items: [
                '8/Privacy & Protection',
                '8/Why Privacy Matters',
            ]
        },
        {
            type: 'category',
            label: 'Validators',
            items: [
                '9/Validators',
                {
                    type: 'category',
                    label: 'How to become a Validator',
                    items: [
                        
                        'validators/overview',
                        {
                            type: 'category',
                            label: 'Concepts',
                            items: [
                                'validators/concepts/becoming-a-validator',
                                'validators/concepts/validator-delegator',
                                'validators/concepts/rewards',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Quick Start',
                            items: [
                                'validators/quickStart/installation',
                                'validators/quickStart/init',
                                'validators/quickStart/treasurenetd',
                                'validators/quickStart/run-a-node',
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Setup',
                            items: [
                                'validators/setup/configuration',
                                'validators/setup/run-a-validator',
                            ]
                        },
                        'validators/join-testnet',
                        'validators/join-mainnet',
                        'validators/create-your-gentx',
                        'validators/sentry',
                        'validators/faq',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Delegators',
            items: [
                '10/Delegators',
                '10/How Delegation Works',
                '10/How to Choose a Validator',
            ]
        },
        {
            type: 'category',
            label: 'Use Cases',
            items: [
                '11/Use Cases',
                '11/TCash',
                '11/Otter',
                '11/Other Use Cases',
            ]
        },
        {
            type: 'category',
            label: 'How to Section',
            items: [
                '12/How to Section',
                '12/Wallet Setup',
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
                'api/officialContracts/TCash',
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
