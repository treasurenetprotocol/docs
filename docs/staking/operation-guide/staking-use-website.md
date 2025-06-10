---
sidebar_position: 3
---

# Staking

:::info
🚧 Documentation is in progress. Please verify the accuracy of any information before use. For questions or concerns, please contact `contact@treasurenet.org`.
:::

This is an operation that can only help you become a delegator quickly, but you need to make sure whether you have `$UNIT` and `$REP` tokens on the Treasurenet mainnet.

### Access the dashboard

- Select the Treasurenet mainnet in your wallet (MetaMask).

<div class="image-row">
  <img src="/img/docs/metamask.jpeg" alt="Staking_MetaMask" />
  <img src="/img/docs/metamask2.jpeg" alt="Staking_MetaMask2" />
</div>

- Visit the [official website](https://splatform.treasurenet.io/Stake/activeValidators) and choose an appropriate Active Validator.

![Staking_Active_Validator](/img/docs/Staking_Active_Validator.jpeg)

### Delegate to a Validator

- After selecting an appropriate Active Validator, click on "stake" to initiate the delegation process.

![Staking_Stake](/img/docs/Staking_tanchuang.jpeg)

:::note
After clicking on "stake," a pop-up window will appear with detailed information:
_ My Staked: The total amount of tokens you have delegated (in this Active Validator).
_ Stake Amount: The amount of tokens you need to stake. \* Wallet Balance: The total amount of tokens in your own account.
:::
:::caution
The amount of tokens you stake cannot exceed the total amount of tokens in your account, i.e., Stake Amount < Wallet Balance.
:::

- Successful delegation

![Staking_Successful](/img/docs/successful.jpeg)

- Unbonding delegation

![unstake](/img/docs/unstake.jpeg)

:::caution
After unbonding delegation, the block rewards allocated to you in this Active Validator will be automatically sent to your account. (Without unbonding, the reward distribution is passive. You can refer to the [reward distribution mechanism](../../protocolDevelopers/modules/distribution.md)).

### Stake Statistics

- To view the specific staking situation, click the blue `STAKED RECORD` button, you can check your total stake and allocated rewards.

![Stake_Profile](/img/docs/Stake_Profile.jpeg)
:::

:::note
_ Total Staked: The total amount of tokens staked by all your Active Validators
_ Total Rewards: All the rewards allocated to you

:::

- Retrieve your block rewards

In Treasurenet, we have adopted a different strategy known as passive reward distribution, where block rewards are not automatically transferred to the target account. When validator operators or delegators want to withdraw their rewards, they need to initiate a withdrawal transaction actively.

![Withdraw_Rewards](/img/docs/Withdraw_Rewards.jpeg)

:::caution
It should be noted that when the weight of a validator on the chain changes (due to actions such as redelegation or undelegation), block rewards will be automatically distributed.

:::
