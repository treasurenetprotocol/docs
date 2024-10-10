# Cross-Chain
## How to Use TN Bridge

### Preparation

#### Wallet Installation

If you have not yet installed MetaMask, please [install](https://chromewebstore.google.com/search/metamask?hl=de&pli=1) it and follow this [guide](https://docs.treasurenet.io/zh-Hans/docs/fundamentals/wallets/metamask) to learn how to set up your wallet.

Ensure that you are logged into MetaMask, the network is set to "Treasurenet testnet," and you have selected the correct account.

#### Ensuring UNIT Exists on the Target Chain

When you cross-chain for the first time, make sure that UNIT exists on the target chain. If it does not, please import it promptly; otherwise, you will not be able to see the UNIT balance on the target chain through MetaMask.

You can refer to [this section](https://docs.treasurenet.io/zh-Hans/docs/fundamentals/wallets/metamask#%E5%A6%82%E4%BD%95%E5%AF%BC%E5%85%A5%E4%BB%A3%E5%B8%81) for the import method.

**When the target chain is Sepolia**: UNIT token address: 0x1c7022D9758A7F8c2044935E9664FC93E010c1Ea.

![ImportToken](/img/docs/ImportToken.png)

When the target chain is Treasurenet: The UNIT token will automatically appear in your wallet without the need for manual addition.

Once ready, proceed to the [Cross-Chain Portal](https://services.testnet.treasurenet.io/transfer).

Let's get started!

### Treasurenet to Ethereum

1. Make sure the "From" section displays "Treasurenet."

![ChooseNetwork](/img/docs/ChooseNetwork.png)

2. Click the "Connect MetaMask" button in the top right corner of the page to link your MetaMask wallet. After a successful connection, you can see your UNIT balance.

![Connect](/img/docs/Connect.png)

![BalanceTN](/img/docs/BalanceTN.png)

3. Enter the amount you want to transfer.

![Amount](/img/docs/Amount.png)

4. The transfer target address will default to the same address you have on Ethereum.

5. Check the required bridge fee.

![Fee](/img/docs/Fee.png)

6. Once ready, click "Transfer." From this point on, follow the prompts from MetaMask to carry out the transaction.

![Transfer](/img/docs/BridgeTN-ETH.png)

Congratulations! You have successfully sent tokens from Treasurenet to Ethereum!

Tip: We recommend that you first try sending a small amount before attempting a large transfer. This way, you can ensure everything proceeds as expected.

### Ethereum to Treasurenet

1. Make sure the "From" section displays "Ethereum."

![ChooseNetworkFromETH](/img/docs/ChooseNetworkFromETH.png)

2. Click the "Connect MetaMask" button in the top right corner of the page to link your MetaMask wallet. After a successful connection, you can see your UNIT balance on Ethereum.

![Connect](/img/docs/Connect.png)

![BalanceETH](/img/docs/BalanceETH.png)

3. Enter the amount you want to transfer.

![AmountETH](/img/docs/AmountETH.png)

4. The transfer target address will default to the same address you have on Ethereum.

5. Once ready, click "Transfer." From this point on, follow the prompts from MetaMask to carry out the transaction.

![TransferETH](/img/docs/BridgeETH-TN.png)

Congratulations! You have successfully sent tokens from Ethereum to Treasurenet!

Tip: We recommend that you first try sending a small amount before attempting a large transfer. This way, you can ensure everything proceeds as expected.
