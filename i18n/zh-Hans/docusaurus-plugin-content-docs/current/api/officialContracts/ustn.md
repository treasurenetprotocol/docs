---
sidebar_position: 1
---

# USTN(ERC20/Stable Token)

合约信息

|Environment|Address|ABI File|
|--|--|--|
|testnet|--|[📥](http://)|
|mainnet|--|[📥](http://)|

## 查询USTN发行量

- Function: **totalSupply**
- Type: **Query**

Result

|parameter name|type|description|
|--|--|--|
|amount|uint256|USTN Token 总额|


## 查询账户USTN余额

- Function: **balanceOf**
- Type: **Query**

Input

|parameter name|type|description|
|--|--|--|
|tokenOwner|address|待查询的账户|

Result

|parameter name|type|description|
|--|--|--|
|amount|uint256|账户余额|

## 转账

- Function: **transfer**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|to|address|接收Token的账户地址|
|amount|uint256|转账数量|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|正确执行返回true|

## Token持有者将部分Token委托给指定消费者代为消费

- Function: **approve**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|spender|address|被授权的账户地址|
|amount|uint256|授权数量|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|正确执行返回true|

## 查询委派代为消费的余额

- Function: **allowance**
- Type: **Query**

Input

|parameter name|type|description|
|--|--|--|
|tokenOwner|address|Token实际拥有者账户地址|
|spender|address|代理者的账户地址|

Result

|parameter name|type|description|
|--|--|--|
|amount|boolean|剩余token数量|

## 委派的消费者进行转账

- Function: **transferFrom**
- Type: **Transaction**

Input

|parameter name|type|description|
|--|--|--|
|from|address|Token发送方地址|
|to|address|Token接收方地址|

Result

|parameter name|type|description|
|--|--|--|
|result|boolean|正确执行返回true|


