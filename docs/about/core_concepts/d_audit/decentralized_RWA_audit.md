# Overview

Real-world asset production data is audited by smart contracts in the Treasurenet blockchain. By design, different asset classes call respective asset data modules, because each asset class will have unique industry processes.

## Asset Classes in Treasurenet

Currently, Treasurenet focuses on two main types of physical assets:

- **Oil**: Has specific value calculation methods and production data collection processes
- **Gas (Natural Gas)**: Has different value calculation methods and ways to obtain production data

You can learn more about these and other asset types in the [Production Data](../producers/production_data.md) documentation.

## Asset Data Modules

Asset data modules are specialized components in the Treasurenet blockchain that process and validate production data for specific asset classes. For example, the Oil asset data module handles the unique requirements for validating oil production, while the Gas asset data module manages natural gas production validation.

These asset data modules work in tandem with the Oracle module to validate the asset production record from hardware meters by cross-referencing the production rates with publicly accessible sources, whitelisted by Treasurenet's DAO governance smart contract.

Upon successful verification of the production data, the TN protocol will allocate the corresponding quantity of `$TAT` as a reward to Producers.
