---
sidebar_position: 1
---

# Operation Guide

## TCash Finance

### Exchange

#### Exchange (UNIT → TCash)

Enter the amount of UNIT you wish to convert to TCash and click 'Submit'. The input number must be greater than 0 and less than or equal to the account balance and conversion limit, otherwise, it cannot be successfully submitted.

- Rule Explanation:

  1. Users provide UNIT to exchange for TCash, and the number of TCash that can be exchanged is calculated based on the number of UNITs, the price of UNIT, and the price of TCash;

  2. Determine whether the number of TCash that can be exchanged is greater than the market demand for TCash:

  - If it exceeds the market demand for TCash, the exchange fails;

  - If it's less than or equal to the market demand for TCash, TCash is minted and sent to the user's account.

  3. The number of TCash that can be exchanged (rounded down) = (Number of UNITs \* Price of UNIT) / Price of TCash;

  4. Market demand for TCash = max [total TCash minted by the system, 50,000,000];

  5. When the total number of TCash minted by the system is greater than or equal to 50,000,000, the TCash exchange entrance will be closed.

![TCash_Finance_Exchange](/img/docs/2.1TCash_Finance_Exchange.png)

- Confirm in MetaMask, click 'Confirm' to continue the exchange, or 'Reject' to abort the operation.

![MetaMask](/img/docs/MetaMask.png)

- After clicking 'Confirm', the system will display 'Exchanged successfully!'.

![exchanged_successfully](/img/docs/2.1.3exchanged_successfully.png)

- Click 'VIEW HISTORY' to see all previous exchange records. You can filter by Type in the upper right corner, for example, select Unit to TCash, and all UNIT to TCash information will be displayed in the list.

![VIEW_HISTORY](/img/docs/2.1.2VIEW_HISTORY.png)

#### Repurchase (TCash → UNIT)

Enter the number of UNITs you want to repurchase and click 'Submit'. The input number must be greater than 0 and less than or equal to the account balance, otherwise, it cannot be successfully submitted.

- Rule Explanation:

  1. Users provide TCash to repurchase UNITs, and the number of UNITs that can be repurchased is calculated based on the amount of TCash, the price of TCash, and the price of UNIT;

  2. Determine whether the number of UNITs repurchased by the user is greater than the system repurchase limit:

  - If it's less than or equal to the system repurchase limit, the TCash provided by the user is destroyed, and the repurchased UNIT is returned to the user;

  - If it exceeds the system repurchase limit, the UNIT repurchase fails, and the TCash provided by the user is returned.

  3. System repurchase limit for UNITs = (Total TCash of the system - Market demand for TCash) \* TCash price / UNIT price;

  4. The conditions for opening and closing the UNIT repurchase function are:

  - When the total TCash of the system > Market demand for TCash, open Unit repurchase;

  - When the total TCash of the system <= Market demand for TCash

![Repurchase](/img/docs/Repurchase.png)

- Confirm in MetaMask, click 'Confirm' to continue the exchange, or 'Reject' to abort the operation.

![MetaMask](/img/docs/MetaMask.png)

- After clicking 'Confirm', the system will display 'Exchanged successfully!'.

![exchanged_successfully](/img/docs/2.1.3exchanged_successfully.png)

### 2. Deposit

#### Deposit TCash

- Enter the amount of TCash you wish to deposit and click 'Submit' to submit.

:::caution
The input number must be greater than 0 and less than or equal to the account balance, otherwise, it cannot be successfully submitted.
:::

![Deposit](/img/docs/2.2Deposit.png)

- Click 'VIEW HISTORY' to view all previous deposit and withdrawal records.

![Deposit_HISTORY](/img/docs/2.2.2Deposit_HISTORY.png)

#### Withdraw TCash

- Enter the amount of TCash you wish to withdraw and click 'Submit' to submit.

:::caution
Note: The input number must be greater than 0 and less than or equal to the deposited amount, otherwise, it cannot be successfully submitted.
:::

![Withdraw](/img/docs/Withdraw.png)

### Loan

#### Loan

- Enter the amount of tokens you want to borrow. The equivalent value of the other token will be displayed automatically. Click 'Submit' to submit.

:::caution
Note: The input number must be greater than 0, otherwise, it cannot be successfully submitted.
:::

![Lendinfg](/img/docs/2.3Lending.png)

- Click 'VIEW HISTORY' to see all previous loan and repayment records.

![Loan_history](/img/docs/2.3.1Loan_history.png)

- Click on Details to view loan details.

![Loan_Detail](/img/docs/2.3.1.4Loan_Detail.png)

#### Repay

- In the loan history records, you can click on 'Repayment' to make a repayment.

![Repayment](/img/docs/Repayment.png)

- Enter the repayment amount.

:::caution
Note: The input number must be greater than 0 and less than or equal to the loan amount, otherwise, it cannot be successfully submitted.
:::

![Repay](/img/docs/2.3.1.1Repay.png)

If the repayment is successful, it will display 'Repaid successfully!'; if all repayments have been made, it will display 'Your loan has been paid off totally!'.

![Repaid_successfully](/img/docs/2.3.1.2Repaid_successfully.png)

- After closing the pop-up window, it will return to the history record page.

- Click on the 'Payment History' tab to view previous repayment records.

![Payment_History](/img/docs/2.3.2Payment_History.png)

#### Add collateral

- When the value of the collateral for a loan / the value of the lent TCash is less than or equal to the warning line, the system will issue a warning to the user, suggesting to supplement the collateral.

![Add collateral](/img/docs/2.3.1.3Add_collateral.png)

- Click on 'Add collateral' to add collateral, and enter the amount of collateral in the pop-up window.

![Add](/img/docs/2.3.1.3Add.png)

- After clicking 'Submit', if the value of the added collateral / the value of the lent TCash is greater than the warning line, there will be no more warnings. The system will prompt 'Add collateral successfully! The alert status has been lifted.'.

![Add_collateral_successfully](/img/docs/2.3.1.4Add_collateral_successfully.png)

### 4. Auction

- The Auction interface can query all items currently being auctioned.

![Auotion_Pool](/img/docs/2.4Auotion_Pool.png)

- Click on 'Place a bid' to participate in the bidding.

![bid](/img/docs/2.4.1-2bid.png)

- Click on 'My bidding history' to view records of my participation in the bidding.

![bidding_history](/img/docs/2.4.2bidding_history.png)

- If the user is not currently the highest bidder for the item, click 'Extract TCash' to withdraw the TCash you have invested at any time.

![Extract_TCash](/img/docs/2.4.2.2Extract_TCash.png)

- If the current user successfully wins the bid, click 'Extract auction' to transfer the item to your personal account.

![Extract_auction](/img/docs/2.4.2.3Extract_auction.png)

- Click on 'Details' to view the bidding details of an item, including item information, winning bidder information, bidder information, etc.

![bid_Details](/img/docs/2.4.2.1bid_Details.png)

![bid_Details](/img/docs/2.4.2.1-2bid_Details.png)

### 5. Profile

#### My Assets

- Click on Profile to enter the personal center page. This page displays the statistics of key data such as the user's TCash balance, deposit balance, and outstanding repayments. Here, My Assets = TCash Balance + TCash Deposit Balance; TCash Balance shows the current account's TCash balance.

![Profile](/img/docs/2.5Profile.png)

- Clicking on the buttons and 'Detail' in the three panels of My Assets and the 'Extract TCash' and 'Extract auction' buttons in the My Auction panel will take you to the Exchange, Deposit, Loan page; click on the 'My Bidding History' interface.

:::info
🚧 Documentation is in progress.
:::
