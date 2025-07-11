---
sidebar_position: 1
---

# Bonus Stake

Contract Information

|Environment|Address|ABI File|
|--|--|--|
|testnet|--|[📥](http://)|
|mainnet|--|[📥](http://)|


## stake `$REP` token

- Function: **bidREP** 
- Type: **Transaction**

    Contract function for staking Bonus Stake, with parameter being the amount of `$REP` tokens to stake.
    
    ❗️Please note: Regardless of whether your staked `$REP` tokens earn you additional rewards (Bonus Block Reward), your staked `$REP` tokens will be burned.
    
    ❗️Please note: Please ensure that your account and associated Validator node are functioning properly. If your account cannot find the corresponding Validator, or if your Validator is experiencing issues at this moment, the `$REP` tokens will be burned without bringing you any additional benefits.
    
    Input
    
    |parameter name|type|description|
    |--|--|--|
    |amount|uint|`$REP` token amount|
    
    Result
    
    |parameter name|type|description|
    |--|--|--|
    |result|boolean|Returns true when executed correctly|



- Event: bidBurn

    Listening to this event will allow you to obtain data from all successful stakes made through the "bidREP" function by all users.
    
    Parameters
    
    |parameter name|type|description|
    |--|--|--|
    |sender|address|Address of the staking user|
    |amount|uint|`$REP` token amount|

