# 关于Treasurenet私钥安全哨兵节点和KMS的基本原理和搭建过程

## 概述

Treasurenet是基于evm和cosmos-sdk的共识协议区块链技术，当我们的⼀些节点成为Validator时，需要提议和签署区块，这样验证者需要持续访问私钥，来获取持续签署区块的能⼒。这样访问私钥和访问节点这个过程中存在安全漏洞。

## 1. 关于安全的情况介绍

### 1.1 当我们的validator节点访问私钥时，如果validator节点被泄露出去，那么我们的私钥也会被泄露出去。会导致面临错误签署恶意块的风险。

> ==详细解释：==
>
> 当验证者（validator）节点被攻陷时，与之关联的私钥所面临的风险。我们可以从以下几个方面来理解： 
>
> 1. 验证者与私钥的关系：在区块链网络中，验证者通常持有与之对应的私钥。这个私钥是验证者身份的核心，用于生成对区块的签名，以证明该区块的合法性和有效性。私钥的保密性和安全性对于验证者至关重要，因为一旦私钥泄露，攻击者就可以冒充验证者进行恶意活动。
> 2. 验证者节点被攻陷的风险：如果验证者节点被黑客或其他恶意方攻陷，那么存储在该节点上的所有敏感信息（包括私钥）都可能被窃取或篡改。这意味着攻击者可以轻易地获取到私钥，从而拥有与验证者相同的权限和能力。 
> 3. 私钥泄露的后果：一旦私钥泄露，攻击者就可以利用它来对区块链网络进行各种恶意操作，包括但不限于签名恶意的区块。由于区块链的不可篡改性和去中心化特性，这些恶意区块一旦被签名并广播到网络中，就可能被其他诚实的验证者接受并加入到区块链中，从而对区块链的完整性和安全性造成不可逆转的损害。 
> 4. 永久性的风险：与仅提供签名服务的验证者节点不同，当验证者节点本身被攻陷且私钥泄露时，这种风险是永久性的。因为私钥一旦被窃取，除非通过其他手段（如私钥恢复、密钥轮换等）来重新获得控制权，否则攻击者将一直拥有冒充验证者进行恶意操作的能力。
>
> 如果验证者节点被攻陷且私钥泄露，那么区块链网络将面临永久性的安全威胁。因此，我们必须采取严格的安全措施来保护验证者节点和私钥的安全，以防止此类事件的发生。

### 1.2 当我们仅为validator提供签名服务时，如果validator节点被攻陷或者损坏时，只要validator节点进行签名服务时，我们就会面临错误签署而已区块的风险

> ==详细解释：==验证者（validator）节点仅提供签名服务时，所面临的安全风险。我们可以将其分解为几个关键部分来理解： 
>
> 1. **验证者（Validator）的角色：**在区块链网络中，验证者负责验证交易和区块的合法性，并通过签名来确认这些区块是有效且被网络接受的。验证者的签名是区块链共识机制中的重要环节，因为它确保了区块的不可篡改性和⽹络的安全性。
> 2. **签名服务：**这里提到的“签名服务”指的是验证者节点提供的一种功能，即使用其私钥对区块进行签名。私钥是验证者身份的核心，只有拥有私钥的验证者才能生成有效的签名。因此，签名服务是验证者节点在区块链网络中发挥作用的关键部分。
> 3. **验证者节点被攻陷的风险：**如果验证者节点被⿊客或其他恶意方攻陷（即“compromised”），那么攻击者就可以控制该节点的私钥，并利用它进行恶意活动。在这种情况下，攻击者可以生成并签名恶意的区块，这些区块可能会被网络接受，从而对区块链的完整性和安全性造成威胁。
> 4. **签名服务运行期间的风险：**文中指出，当验证者节点仅提供签名服务时，如果节点被攻陷，那么只要签名服务还在运行，攻击者就可以持续不断地签名恶意区块。这意味着，在签名服务被关闭或修复之前，整个区块链网络都可能面临被恶意区块污染的风险。
>
> 综上所述，我们使用仅提供签名服务的验证者节点时，必须高度重视其安全性。因为如果这样的节点被攻陷，攻击者就可以利用它来对区块链网络造成重大损害，而且这种损害在签名服务被修复之前会一直存在。因此，确保验证者节点的安全是维护区块链网络整体安全性的重要一环。

### 1.3 验证器节点参与了公共网络，其地址可能会被发现或者攻击导致节点崩溃或者网络拥堵或者非恶意的操作失误会导致您和您的委托人损失部分权益。

1. 您的验证者未能签署或提议区块。以下情况可能会发生：
   + 您的计算机离线时间过长。
   + 您的计算机没有及时收到更新。
2. 您的验证者错误地签署了两个高度相同的有效区块。如果出现以下情况，可能会发生这种情况：
   + 您的故障转移验证器配置错误
   + 您的两台计算机使用相同的密钥。



## 2. 解决方案

### 2.1 针对1.1的情况

我们可以将私钥保存在==硬件安全模块中（又名HSM）==，在HSM的离线设置期间，只能从中检索一次。然后，此HSM设备仍插入运行验证器或签名服务的计算机。

### 2.2 针对1.2的情况

我们可以使用专门的[密钥管理系统](https://hub.cosmos.network/main/validators/kms)（KMS）。它在与你的验证者节点不同的计算机上运行，但可以访问硬件密钥并[通过私有网络联络你的验证者节点](https://github.com/iqlusioninc/tmkms/blob/v0.12.2/README.txsigner.md#architecture)（或由您的验证者节点联系）用于签署区块。这种KMS是专门的，例如，它能够检测到在同一高度签署两个不同区块的尝试。

> Tendermint KMS会按照您指定的时间间隔轮询您提供的微服务以获取要签名的交易。签名后，它会自动将其提交给Tendermint完整节点，这意味着生成交易的微服务只需负责构建交易，其余部分则由KMS处理。
>
> KMS以指定的时间间隔（即一个区块高度间隔）向交易微服务发起“webhook”式的HTTP请求，请求一批待签名的交易，然后提交给Tendermint节点进行广播：
>
> 1. 交易微服务器生成一批需要签名的交易，例如对于Oracle服务，向多个交易所发出请求并计算平均价格对，然后生成一个JSON文档 （当前为[Amino JSON](https://github.com/tendermint/tendermint/blob/v0.34.x/spec/blockchain/encoding.md)）来描述需要签名的交易。
> 2. KMS从交易微服务中检索要签名的交易批次。如果它不为空，它会解析JSON，根据给定网络交易格式的指定框架对其进行检查，根据访问控制列表审查提议的交易以确保交易有权签名，使用指定的账户密钥（[ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)/[Secp256k1](https://en.bitcoin.it/wiki/Secp256k1)）计算签名，然后以二进制格式（目前为Amino，很快将是Protobuf）序列化交易。
> 3. 然后，已签名的交易被提交到指定的Tendermint节点，以便广播到P2P网络并纳入区块链。

### 2.3 针对1.3.1的情况

当攻击者向某个IP地址发送大量互联网流量以阻止该IP地址的服务器连接到互联网时，就会发生拒绝服务攻击。

攻击者扫描网络，尝试了解各种验证器节点的IP地址，并通过向其发送大量流量来断开它们的通信。 减轻这些风险的一种推荐方法是验证者使用哨兵节点架构精心构建其网络拓扑。

验证器节点应仅连接到他们信任的完整节点，因为他们自己操作完整节点，或者信任的完整节点由他们熟悉的其他验证器运行。验证器节点通常在数据中心运行。大多数数据中心提供与主要云提供商网络的直接链接。验证器可以使用这些链接连接到云中的哨兵节点。这种缓解措施将拒绝服务的负担从验证器的节点直接转移到其哨兵节点，并且可以要求启动或激活新的哨兵节点以缓解对现有节点的攻击。

哨兵节点可以快速启动或更改其IP地址。由于与哨兵节点的链接位于私有IP空间中，因此基于互联网的攻击无法直接干扰它们。此策略可确保验证器区块提案和投票有更高的机会到达网络的其余部分。



## 3. testnet中KMS的搭建



## 4. testnet中哨兵集群的搭建

### 4.1 前期准备：

testnet环境一共9个节点，分别是node0~node8，我们在这9个节点通过docker-compose启动validator节点和对应的哨兵节点。

一共需要启动18个节点

在node0节点中安装了golang环境，docker，docker-compose

```bash
git clone https://github.com/treasurenetprotocol/treasurenet.git
git branch
git checkout main
```

生成镜像

```bash
cd /root/go/src/treasurenet/
make localnet-build
docker images
```

查看我们是否成功生成镜像

![docker_images](/img/docs/docker_images.png)


> 关于上传docker hub的操作，随便写了一个账户您替换成自己的就行
>
> ```
> docker login -u ****
> 
> *****************************(docker hub的密码)
> 
> docker tag treasurenetd:latest dongqi1/treasurenetd:latest
> 
> docker pushdongqi1/treasurenetd:latest
> ```

您也可以直接在docker hub中下载我们的最新的镜像

![docker_hub_images](/img/docs/docker_hub_images.png)

```
docker pull treasurenet/treasurenetd:latest
```

### 4.2 开始部署工作

生成validator的信息，运行脚本`init-gravity1.sh`，我们测试环境有9个节点，每个节点都有自己的初始化脚本。

分别在`/data`中创建`treasurenet`文件夹，并在`treasurenet`分别创建`valiator`的映射目录和`sentry-node0`的映射目录

```bash
mkdir /data/treasurenet
mkdir /data/treasurenet/sentry-node0
ll
.treasurenet   //validator的目录映射
sentry-node0   //node0哨兵的映射目录
```

`init-gravity.sh`脚本示例：

```shell
#!/bin/bash
set -eux
# your gaiad binary name
BIN=./treasurenetd

CHAIN_ID="treasurenet_5005-1"

ALLOCATION="10000000000000000000000aunit,10000000000stake,10000000000footoken,10000000000footoken2,10000000000ibc/nometadatatoken"
KEY1="validator0"
KEY2="orchestrator0"
CHAINID="treasurenet_5005-1"
MONIKER="node0"
KEYRING="file"
KEYALGO="eth_secp256k1"
LOGLEVEL="info"
TRACE="--trace"
# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }
$BIN config keyring-backend $KEYRING
$BIN config chain-id $CHAINID
GAIA_HOME="--home /home/ec2-user/.treasurenetd"
ARGS="$GAIA_HOME --keyring-backend file"
# Generate a validator1 key, orchestrator1 key, and eth key for each validator1
$BIN keys add $KEY1 --keyring-backend $KEYRING --algo $KEYALGO 2>> 
/data/treasurenet/validator0-phrases
$BIN keys add $KEY2 --keyring-backend $KEYRING --algo $KEYALGO 2>> 
/data/treasurenet/orchestrator0-phrases
$BIN eth_keys add --keyring-backend $KEYRING >> /data/treasurenet/validator0-eth-keys
$BIN init $MONIKER --chain-id $CHAINID --keyring-backend $KEYRING --home /home/ec2-user/.treasurenetd
cat $HOME/.treasurenetd/config/genesis.json | jq '.app_state["staking"]
["params"]["bond_denom"]="aunit"' > 
$HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json
cat $HOME/.treasurenetd/config/genesis.json | jq '.app_state["crisis"]
["constant_fee"]["denom"]="aunit"' > 
$HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json
cat $HOME/.treasurenetd/config/genesis.json | jq '.app_state["gov"]
["deposit_params"]["min_deposit"][0]["denom"]="aunit"' > 
$HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json
cat $HOME/.treasurenetd/config/genesis.json | jq '.app_state["mint"]["params"]
["mint_denom"]="aunit"' > $HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json

cat $HOME/.treasurenetd/config/genesis.json | jq '.consensus_params["block"]
["time_iota_ms"]="1000"' > $HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json
cat $HOME/.treasurenetd/config/genesis.json | jq '.consensus_params["block"]
["max_gas"]="10000000"' > $HOME/.treasurenetd/config/tmp_genesis.json && mv 
$HOME/.treasurenetd/config/tmp_genesis.json 
$HOME/.treasurenetd/config/genesis.json

# disable produce empty block
if [[ "$OSTYPE" == "darwin"* ]]; then
	sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' 
$HOME/.treasurenetd/config/config.toml
else
	sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' 
$HOME/.treasurenetd/config/config.toml
fi
# add in denom metadata for both native tokens
jq '.app_state.bank.denom_metadata += [{"name": "Foo Token", "symbol": "FOO", "base": "footoken", display: "mfootoken", "description": "A non-staking test token", "denom_units": [{"denom": "footoken", "exponent": 0}, {"denom": "mfootoken", "exponent": 6}]},{"name": "Stake Token", "symbol": "STEAK", "base": "aunit", display: "unit", "description": "A staking test token", "denom_units": [{"denom": "aunit", "exponent": 0}, {"denom": "unit", "exponent": 18}]}]' /home/ec2-user/.treasurenetd/config/genesis.json > 
/home/ec2-user/treasurenet-footoken2-genesis.json
jq '.app_state.bank.denom_metadata += [{"name": "Foo Token2", "symbol": "F20", "base": "footoken2", display: "mfootoken2", "description": "A second non-staking test token", "denom_units": [{"denom": "footoken2", "exponent": 0}, {"denom": "mfootoken2", "exponent": 6}]}]' /home/ec2-user/treasurenet-footoken2-genesis.json > /home/ec2-user/treasurenet-bech32ibc-genesis.json

# Set the chain's native bech32 prefix
jq '.app_state.bech32ibc.nativeHRP = "treasurenet"' /home/ec2-user/treasurenet-bech32ibc-genesis.json > /home/ec2-user/gov-genesis.json
mv /home/ec2-user/gov-genesis.json /home/ec2-user/.treasurenetd/config/genesis.json
validator1_KEY=$($BIN keys show validator0 -a $ARGS)
orchestrator1_KEY=$($BIN keys show orchestrator0 -a $ARGS)
$BIN add-genesis-account $ARGS $validator1_KEY $ALLOCATION
$BIN add-genesis-account $ARGS $orchestrator1_KEY $ALLOCATION

orchestrator1_KEY=$($BIN keys show orchestrator0 -a $ARGS)
ETHEREUM_KEY=$(grep address /data/treasurenet/validator0-eth-keys | sed -n "1"p | sed 's/.*://')
echo $ETHEREUM_KEY

$BIN gentx $ARGS --moniker $MONIKER --chain-id=$CHAIN_ID --ip node0.testnet.treasurenet.io validator0 200000000000000000000aunit 
$ETHEREUM_KEY $orchestrator1_KEY

$BIN collect-gentxs

```

==注意：在gentx的创建创世交易的过程中，ip如果是在同一个局域网中可以使用内网ip==

### 4.3 生成最新的genesis.json文件

在每个节点都会生成一个genesis.json文件，我们需要将9个节点的genesis.json合并生成新的genesis-new.json

需要融合的部分

![genesis_images](/img/docs/genesis.png)

生成新的genesis.json后需要将node0~node9的节点中的genesis.json替换

另外：在gentx目录中需要将node0~node9的gentx文件放在一起

![gentx_images](/img/docs/gentx.png)

分别在node0~node9中sentry节点进行初始化

```bash
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node0:/root/.treasurenetd \
	treasurenetd:latest \
	treasurenetd init node0 --chain-id "treasurenet_5005-1"
./treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node0/
node-id@node0.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node1:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node1 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node1/
node-id@node1.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node2:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node2 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node2/
node-id@node2.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node3:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node3 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node3/
node-id@node3.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node4:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node4 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node4/
node-id@node4.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node5:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node5 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node5/
node-id@node5.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node6:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node6 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node6/
node-id@node6.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node7:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node7 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node7/
node-id@node7.sentry.com:26656
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-node8:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init node8 --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-node8/
node-id@node8.sentry.com:26656

//这个是⽣成的两个种⼦节点
docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-sepolia:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init sentrysepolia --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-sepolia/

docker run --rm -i \
	-v $(pwd)/treasurenet/sentry-cosmosexplorer:/root/.treasurenetd \
	dongqi1/treasurenetd:latest \
	treasurenetd init sentrycosmos --chain-id "treasurenet_5005-1"
treasurenetd tendermint show-node-id --home /data/treasurenet/sentry-cosmosexplorer/
```

==注意：在进行初始化操作时候treasurenetd init [moniker]哨兵节点和validator节点的名称最好保持一致==

关键步骤：修改配置文件

> validator节点的映射目录：/data/treasurenetd/.treasurenetd sentry
>
> 节点的映射目录：/data/treasurenet/sentry-node0

修改.treasurenetd/config/config.toml（validator节点）

```toml
# Comma separated list of nodes to keep persistent connections to
persistent_peers = "node-id@node0.sentry.com:26656"
# Set true to enable the peer-exchange reactor
pex = false
```

修改sentry-node0/config/config.toml（node0哨兵节点）

```toml
# Comma separated list of seed nodes to connect to
seeds = "node-id@node1.sentry.com:26656,node-id@node2.sentry.com:26656,node-id@node3.sentry.com:26656,node-id@node4.sentry.com:26656,node-id@node5.sentry.com:26656,node-id@node6.sentry.com:26656,node-id@node7.sentry.com:26656,node-id@node8.sentry.com:26656"

# Comma separated list of nodes to keep persistent connections to
persistent_peers = "node-id@node0.testnet.treasurenet.io:26656"
# Comma separated list of peer IDs to keep private (will not be gossiped to other peers)
private_peer_ids = "node-id"
```

修改sentry-node0/config/app.toml（node0哨兵节点）

```toml
[api]

# Enable defines if the API server should be enabled.
enable = true

# Swagger defines if swagger documentation should automatically be registered.
swagger = false

# Address defines the API server to listen on.
address = "tcp://0.0.0.0:1317"
```

 docker-compose.yaml（示例node0节点中的）

```yaml
version: '3.8'

networks:
	treasurenet-test:
	
services:
	node0.testnet.treasurenet.io:
	container_name: node0.testnet.treasurenet.io
	image: dongqi1/treasurenetd:latest
	entrypoint: /bin/bash
	command: -c "echo '$KEYRING_PASSWORD' | treasurenetd start --keyring-backend file --chain-id treasurenet_5005-1"
	volumes:
	- /data/treasurenet/.treasurenetd:/root/.treasurenetd
	networks:
	- treasurenet-test
	node0.sentry.com:
	container_name: node0.sentry.com
	image: dongqi1/treasurenetd:latest
	command: treasurenetd start --chain-id treasurenet_5005-1  -- evm.tracer=json --json-rpc.api eth,txpool,net,web3,miner --pruning=nothing -- trace --json-rpc.address 0.0.0.0:8555 --rpc.laddr tcp://0.0.0.0:26657 --x-crisis-skip-assert-invariants
	volumes:
	- /data/treasurenet/sentry-node0:/root/.treasurenetd
	ports:
	- "26656:26656"
	- "26657:26657"
	- "8555:8555"
	- "8546:8546"
	- "8125:8125"
	- "9090:9090"
	- "1317:1317"  
	extra_hosts:
	#############内网############
	- "node1.sentry.com:node1的内网ip"
	- "node2.sentry.com:node2的内网ip"
	- "node3.sentry.com:node3的内网ip"
	- "node4.sentry.com:node4内网ip"
	- "node5.sentry.com:node5内网ip"
	- "node6.sentry.com:node6内网ip"
	- "node7.sentry.com:node7内网ip"
	- "node8.sentry.com:node8内网ip"
	networks:
	- treasurenet-test
```

在启动docker-compose之前，需要在每个节点中进行ip映射

```bash
vi /eth/hosts
ip   node0.sentry.com
ip   node1.sentry.com
ip   node2.sentry.com
ip   node3.sentry.com
ip   node4.sentry.com
ip   node5.sentry.com
ip   node6.sentry.com
ip   node7.sentry.com
ip   node8.sentry.com
```
