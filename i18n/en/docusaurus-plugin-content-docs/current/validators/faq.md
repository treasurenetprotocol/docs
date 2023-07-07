---
sidebar_position: 7
---

# FAQ

## Introduce

### What is a validator?

TreasuerNet [based on Tendermint](https://docs.tendermint.com/main/introduction/what-is-tendermint.html) relies on a set of validators responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting encrypted signatures, signed with the private key of each validator, in the form of votes.

Validator candidates can stake their own UNIT or TAT and allow token holders to "delegate" or stake their UNIT to them. Currently, Treasurenet only allows 100 validators to participate in consensus, but the number of validators can be increased over time through governance proposals. Validators are determined by the total number of UNIT tokens delegated to them, along with TAT ([refer to the rules for selecting active validators](./faq.md)). The top 100 validator candidates with the highest voting power are the current active validators participating in consensus to generate new blocks.

Validators and their delegators earn Units as block rewards and tokens as transaction fees by executing the Tendermint consensus protocol. Please note that validators can set a commission percentage as an additional reward for the fees they charge their delegators.

If validators double-sign or remain offline for an extended period, the staked UNIT (including UNIT delegated by their users) may be subject to slashing. The severity of the penalty depends on the nature of the violation.

### Selection Rules for Active Validators

:::caution
Product Supplement - Easier to understand version
:::

1. Each node that wants to become a Validator must self-delegate a certain amount of UNIT, and the self-delegation of a Validator should never be less than the min-self-delegation (defaulted to 158 units).

2. In the first round of selection, Validators that meet the min-self-delegation requirement are considered, and the top 400 Validators with the highest weight are chosen.

   - By monitoring the bid operation through an event, the Validators that have staked TAT are listed as list-supervalidators.
   - Validators without any TAT stake in the first step are referred to as list-validators.

3. Determining the number of Active Validators:

   - If the sum of list-supervalidators and list-validators is greater than or equal to 200, the number of Active Validators (num) is set to 100.
   - If the sum of list-supervalidators and list-validators is less than 200, num is set to (list-supervalidators + list-validators) / 2.

4. Second round of selection:

   - When list-supervalidators are fewer than 100 and list-validators are more than 100, All-list-super is set to list-supervalidators (taking all list-supervalidators as reference). num-validator is calculated as 2 \* num - num(All-list-super), and the top num-validator Validators from list-validators are selected to form the new All-list-validator.
   - When list-supervalidators are greater than or equal to 100 and list-validators are greater than or equal to 100, the top 100 Validators are selected from list-supervalidators to form the new All-list-super, and the top 100 Validators are selected from list-validators to form the new All-list-validator.
   - When list-supervalidators are fewer than 100 and list-validators are fewer than 100, All-list-super is set to list-supervalidators, and All-list-validator is set to list-validators.
   - When list-supervalidators are greater than 100 and list-validators are fewer than 100, All-list-validator is set to list-validators (taking all list-validators as reference), num-super is calculated as 2 \* num - num(All-list-validator), and the top num-super Validators from list-supervalidators are selected to form the new All-list-super.

5. In the third round of selection, the new Active Validators are formed for the subsequent proof-of-stake (POS) operations.
   - All-list-super and All-list-validator are combined into a new list, and a random selection of num Validators from this list is chosen as the Active Validators.

### What is "staking"?

Treasurenet is a public Proof-of-Stake (PoS) blockchain, meaning that validator's weight is determined by the amount of staking tokens (UNIT) bonded as collateral. These staking tokens can be staked directly by the validator or delegated to them by UNIT holders.

Any user in the system can declare its intention to become a validator by sending a [create-validator](./faq.md) transaction. From there, they become validators.

The weight of a validator (i.e., total stake or voting power) determines whether it is an active validator and also determines the frequency at which the node proposes blocks and the amount of rewards it will receive. The active validator selection rules are based on selecting suitable validators as active validators. If validators engage in double-signing or frequently go offline, they run the risk of having their staked tokens (including UNIT delegated by users) "slashed" by the protocol as a punishment for negligence and improper behavior.

### What is a full node?

A full node is a program that fully validates transactions and blocks of a blockchain. It is distinct from a light client node that only processes block headers and a small subset of transactions. Running a full node requires more resources than a light client but is necessary in order to be a validator. In practice, running a full-node only implies running a non-compromised and up-to-date version of the software with low network latency and without downtime.

Of course, it is possible and encouraged for any user to run full nodes even if they do not plan to be validators.

### What is a delegator?

People who are unable or unwilling to operate a validating node can still participate in the staking process as delegators. In fact, the selection of validators is not based on the shares they delegate themselves, but on their total shares, which includes both the shares they delegate themselves and the shares delegated to them. This is an important attribute as it allows delegators to prevent validators from engaging in malicious behavior. If a validator misbehaves, their delegators can remove their UNIT from them, thus reducing their shares. Eventually, through the [Active Validator selection rules](./faq.md), they will exit the validator set.

**Delegators share in the income of their validators but also bear the risk.** In terms of income, the difference between validators and delegators is that validators can charge a commission on the income allocated to delegators. This commission is known in advance to the delegators and can only be changed according to predefined constraints (refer to [staking](../protocolDevelopers/modules/staking.md)). As for the risk, if a validator behaves improperly, the delegator's UNIT may be slashed. For more information, refer to [slashing](../protocolDevelopers/modules/slashing.md).

To become a delegator, UNIT holders need to send a "delegate transaction" specifying how many UNITs they want to stake and which validator they want to delegate to. The list of candidate validators is displayed on the TreasutreNet browser. Afterwards, if a delegator wants to unbond some or all of their shares, they need to send an "unbond transaction." From there, the delegator will have to wait for 3 weeks to retrieve their UNITs. Delegators can also send a "redelegate transaction" to switch from one validator to another without the 3-week waiting period ([refer to redelegation and unbonding](../protocolDevelopers/modules/staking.md)).

### Validator states

In Treasurenetd, the Validator can have three states: Unbonded, Unbonding, and Bonded.
A newly created Validator through the Msg-CreateValidator message is initialized as Unbonded state and is assigned shares and voting power. The EndBlocker() function in the staking module records the changes in the validator's state for the current block.

- If a newly created Validator's voting power ranking enters the top 100, the state changes from Unbonded to Bonded.
- If a newly created Validator's voting power ranking doesn't enter the top 100, the Unbonded state remains unchanged.
- When the voting power increases and the voting power ranking enters the top 100, the state transitions are as follows:
  - Unbonded to Bonded: Becomes an active validator for the first time.
  - Unbonding to Bonded: Becomes an active validator again.
  - Bonded state remains unchanged: Already an active validator.

### What does staking imply?

Staking UNIT can be thought of as a safety deposit on validation activities. When a validator or a delegator wants to retrieve part or all of their deposit, they send an unbonding transaction. Then, the deposit undergoes a two week unbonding period during which they are liable to being slashed for potential misbehaviors committed by the validator before the unbonding process started.

Validators, and by association delegators, receive block provisions, block rewards, and fee rewards. If a validator misbehaves, a certain portion of its total stake is slashed (the severity of the penalty depends on the type of misbehavior). This means that every user that bonded UNIT to this validator gets penalized in proportion to its stake. Delegators are therefore incentivized to delegate to validators that they anticipate will function safely.

### Incentives

#### What is the incentive to stake?

The block rewards consist of two parts, and each member of the validator stake pool receives different types of income:

- Block rewards: New block rewards are generated through on-chain asset minting. To incentivize participants in the voting process, on-chain assets are rewarded to those involved in the voting process.
- Transaction fees: Transaction fees generated by transactions occurring on the Treasurenet blockchain.

The newly minted on-chain assets are combined with the collected transaction fees to form the current block rewards. These rewards are then distributed to the validator stake pool based on the weight of each validator. Within each validator's stake pool, they are further allocated to delegators proportionally based on their stake.

#### What is the incentive to run a validator ?

Validators earn proportionally more revenue than their delegators because of commissions.

Validators also play a major role in governance. If a delegator does not vote, they inherit the vote from their validator. This gives validators a major responsibility in the ecosystem.

#### What is a validator's commission?

Revenue received by a validator's pool is split between the validator and its delegators. The validator can apply a commission on the part of the revenue that goes to its delegators. This commission is set as a percentage. Each validator is free to set its initial commission, maximum daily commission change rate and maximum commission. Treasurenet enforces the parameter that each validator sets. These parameters can only be defined when initially declaring candidacy, and may only be constrained further after being declared.

#### How are block provisions distributed?

[Please refer to the introduction about reward allocation in the "distribution" module.](../protocolDevelopers/modules/distribution.md)
