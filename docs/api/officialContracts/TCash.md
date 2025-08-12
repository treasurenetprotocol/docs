---
sidebar_position: 1
---

# TCash(ERC20/Stable Token)

Contract Information

|Environment|Address|ABI File|
|--|--|--|
|testnet|--|[📥](#)|
|mainnet|--|[📥](#)|

## Check TCash Releases

- Function: **totalSupply**
- Type: **Query**

Result

|parameter name|type|description|
|--|--|--|
|amount|uint256|Total TCash Token amount|


## Check Account TCash Balance

- Function: **balanceOf**
- Type: **Query**

Input

|parameter name|type|description|
|--|--|--|
|tokenOwner|address|Account to be checked|

Result

|parameter name|type|description|
|--|--|--|
|amount|uint256|Account balance|

## Transfer

- Function: **transfer**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|to|address|Recipient account address|
|amount|uint256|Transfer amount|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|Returns true when executed correctly|

## Token holder delegates part of tokens to specified consumer for consumption

- Function: **approve**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|spender|address|Authorized account address|
|amount|uint256|Authorization amount|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|Returns true when executed correctly|

## Query delegated consumption balance

- Function: **allowance**
- Type: **Query**

Input

|parameter name|type|description|
|--|--|--|
|tokenOwner|address|Token actual owner account address|
|spender|address|Agent account address|

Result

|parameter name|type|description|
|--|--|--|
|amount|boolean|Remaining token amount|

## Delegated consumer performs transfer

- Function: **transferFrom**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|from|address|Token sender address|
|to|address|Token recipient address|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|Returns true when executed correctly|


