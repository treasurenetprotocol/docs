# Tokenomics

The total supply of `$UNIT` tokens is finite, but the exact limit will vary depending on the future production of rare assets. This is because Treasurenet block rewards reduce over time. Producers work together to create RWAs to prevent `$UNIT` block rewards from decaying quickly. Whereas BTC reduces by 50% per period, `$UNIT` rewards reduce at a rate based on $`$REP` minted, reflecting the producer's reputation and asset produced.

## `$UNIT` Token

UNIT is the native token of Treasurenet, issued at the base layer of the Treasurenet network to facilitate fundamental operations.

Though the UNIT token behaves similarly to other POS tokens, UNIT differs from other cryptocurrencies because it is backed by real-world effort. Every UNIT is created as a reward by verifying new blocks, the rate of which requires the production of real-world resources.

The issuance of UNIT tokens is determined by the rate of production of real-world rare assets and rare digital assets, conforming to a mechanism akin to commodity-based currencies. This approach entails a positive correlation between the number of UNIT tokens minted and the volume of real-world rare assets generated. Resulting in an asset-based approach rather than an asset-backed one.

An added benefit to asset-based is to not be a financial security product by design. There will be no liquidity and registration requirements as there would be with financial security products. And a sound digital currency should have no reliance on another corporation’s promise of fiat profits, which limits scalability and reach.

UNIT supply logic focuses purely on the natural difficulty of creating new real-world assets. By design, UNIT aims to maximize liquidity while grounded by real-world assets. This distinctive approach makes UNIT a more stable and valuable cryptocurrency compared to others, as its supply is directly tied to the production of rare assets. This dynamic creates a real-world cost floor for minting UNIT, extending beyond computing expenses to encompass the creation of new rare assets.

### Multiple purposes within Treasurenet:

**Network Economics**
UNIT token being the native token serves as the primary utility and value transfer mechanism within the network. It is used for paying transaction fees(gas fees), staking, governance (DAO), and block rewards on Treasurenet

**Network Consensus and Security**
Validators are required to stake UNIT tokens to participate in the network and validate transactions. This staking mechanism helps secure the network and ensures validators earn rewards in the form of UNIT tokens for their contributions to the network

**Governance**
UNIT token holders can participate in the governance of the Treasurenet ecosystem by voting on proposals and updates related to the platform's development and operation.

**Validator selection**
The amount of UNIT tokens staked plays a role in determining the selection of validators within the Treasurenet network.

**Staking and Reward**
Validators earn rewards in the form of UNIT tokens for their contributions to the network, such as proposing and validating blocks.

## `$REP` Token

`$REP` serves as the reputation token for representing real-world asset productivity on Treasurenet. `$REP` serves as a representation of the credibility and reputation of each Producer, with its utility derived from the underlying asset(s) it records. The purpose of the `$REP` is to document, verify and reflect the reputation and legitimacy of Producers in the Treasurenet economy.

### Value Sources and Use Cases of `$REP` Token

**On-chain proof of creditworthiness:**
`$REP` tokens serve as an on-chain proof of creditworthiness and reputation for Producers in a decentralized and anonymous manner. `$REP` can be used to transparently evaluate producer reliability and price asset financing. This is because `$REP` tokens track both the production of assets and the credibility of the Producer, demonstrating not only asset ownership but also operational excellence.

Collateralization:
`$REP` tokens can be used as collateral for financing activities on the Treasurenet platform. This means that users can use their `$REP` tokens for financing, without having to sell their real-world assets. On their own, `$REP` tokens signal both a commitment to a financing pool and the producer's reputation, ensuring that the same asset (or portion of the asset) cannot be double-committed elsewhere.

The Treasurenet DAO is also looking to set up real-world legal structures to claim real-world collateral. This means that if a user defaults on a loan, the Treasurenet DAO will be able to seize their real-world assets. This makes the `$REP` collateralization system more secure, as it provides lenders with a way to recover their money if a borrower defaults, while also impacting the producer's reputation score.

Although this type of legal structuring is common practice in legacy markets, combining real-world recourse with on-chain creditworthiness allows for radically transparent financing that is not possible without `$REP` and Treasurenet’s decentralized audit framework, which ensures both asset verification and reputation tracking.

**TCash Minting Verification:**
To mint TCash in the Treasurenet ecosystem, users need to verify the `$REP` minting history. This verification process ensures that TCash is properly backed by real-world assets that have been audited through the Treasurenet protocol.

**Pool Creation in Otter:**
Users who want to create a Pool in the Otter platform must have `$REP` minting records. This requirement ensures that only those who have contributed real assets to the ecosystem can create liquidity pools, maintaining the integrity of the system.

**Asset-specific indexing:**
Producers who are connected to the TN Gateway can mint `$REP` tokens on a regular basis. The rate at which `$REP` tokens are minted depends on both the type of asset being produced and the producer's operational excellence. This means that the cumulative representative value of an asset class and producer reputation can be tracked by looking at the number of `$REP` tokens that have been minted. This information can be used to make financial decisions, such as evaluating producer reliability and deciding which asset classes to invest in.

**Asset Type Considerations:**
Currently, the Treasurenet ecosystem supports Oil and Gas as the primary real-world assets. The `$REP` tokens minted from these assets have the same value and characteristics. As the ecosystem expands to include new asset types in the future, the `$REP` tokens minted from different assets may have different characteristics, though this is still under consideration.

It is worth noting that the option to make asset production information public is in the hands of the Producers.

## Token Distribution and Circulation After TGE

### UNIT Token Distribution

UNIT tokens are initially distributed through an airdrop mechanism. After the initial distribution, UNIT tokens are generated with each new block at a rate of 10 UNIT per block. This continuous issuance mechanism ensures that the token supply grows in correlation with network activity and real-world asset production.

### `$REP` Token Distribution

Unlike UNIT, `$REP` tokens do not have an initial distribution at TGE (Token Generation Event). `$REP` tokens are exclusively minted through the verification of real-world asset production by Producers within the Treasurenet ecosystem. This design ensures that every `$REP` token in circulation represents actual verified asset production and producer reputation.

## General Supply Framework

### Step 1: How many `$UNIT` tokens?

First, Treasurenet compares the actual RWA production rate amount against a Target Rate set by the DAO Governance module.

How does actual real-world asset production rate stand against Target Rate?
Reduce block reward based on the difference between actual rate and Target Rate.

Subsequently, there would be 3 general scenarios:

Fails to meet Target Rate - block reward reduced by 10% to 50%, depending on the magnitude of the difference
Meets Target Rate - block reward reduced by 10%
Surpasses the Target Rate - block reward reduced by 1% to 10%, depending on the magnitude of the difference
Total supply:

UNIT token supply may likely be between 700 million to 800 million.

This estimate is based on the following highlighted assumptions. However, it is vital to understand that the actual amount of future RWA production will determine the outcome. Specifically, more RWA production will lead to higher UNIT supply, and vice versa.

| Key Assumptions                                | Value                  | Description                                                                                            |
| ---------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| Period                                         | 30,000,000 blocks      | Each period is ~ 1-year                                                                                |
| Initial block reward                           | 10 UNIT/block          | For the initial 2 periods, block reward maintains constant, giving time for the RWA ecosystem to build |
| Target Rate (for RWA production)               | 10%                    | Default Target Rate for periodic RWA production growth rate                                            |
| Maximum block reward reduction                 | 50%                    | Lower edge case; if 0 RWA is produced, block reward aggressively reduces by 50%                        |
| Minimum block reward reduction                 | 1%                     | Upper edge case; if the RWA growth rate is more than 1,000%, block reward reduces just 1%              |
| Default block reward reduction                 | 10%                    | Default reduce; if RWA growth rate equals Target Rate, block reward reduces by 10%                     |
| Future RWA production growth rate distribution | PERT [-50%, 15%, 500%] | It is difficult to forecast the RWA production growth rate,                                            |

We assume the first 3 periods’ growth rate to be 500%, as we develop more RWA connections.

Then, the steady-state growth rate be modeled as a PERT Distribution,
defined by - 50% as the low expected rate, 15% as the expected rate, and 500% as the maximum expected rate.

When simulated for 500 periods, UNIT supply may resemble this following distribution. For complete details, please stay tuned for the further releases.

    ![Expected_supply](/img/docs/expected_supply.png)

### Step 2: Who earns `$UNIT`?

After determining the total block reward, each block reward is awarded to Active Validator nodes and Active Super Validator nodes.

|        | Active Validator node | Active Super Validator node                 |
| ------ | --------------------- | ------------------------------------------- |
| Apple  | Red                   | USA                                         |
| Action | Stakes `$UNIT`        | -Stakes `$UNIT` -Bids `$REP` (burns `$REP`) |
| Reward | Base Rewards          | Base Rewards; Super Validator Rewards       |

`$UNIT` holders can stake `$UNIT` into any of the nodes to share in proportional Base Rewards. $`$REP` holders can bid $`$REP` as well to share in proportional Super Validator Rewards, which is the Bonus Stake described in Core Concepts.

In the long run, we estimate Super Validator Rewards make up for about ~30% of the block rewards.
The magnitude of Super Validator Rewards varies based on how competitive the $`$REP` bids are between nodes, and based on how many Super Validators are there. Details to be further described in future release.
