# Step 3: Verify Output with Asset Modules + Oracles

<img src="/img/docs/HowTreasurenetWorks/set3.jpg" alt="System Flow" width="800" height="400" />

Treasurenet uses modular validation logic to accurately assess real-world productivity. Different asset classes require different verification methods—so the protocol relies on specialized **Asset Data Modules**, paired with **Oracle-based audits**, to ensure integrity at scale.

**How It Works:**

* Producers submit output through the TN Gateway  
* Asset Modules process the data based on asset-specific logic  
* Oracles pull public benchmarks to cross-verify claims  
* If verified → REP Score is minted as a reward

**What Are Asset Data Modules?**

* Custom-built validators for specific industries  
* Apply unique rules for calculating output value and confirming authenticity

**Examples:**

* **Oil:** Calculates value per barrel based on production logs and market prices  
* **Gas (Natural Gas):** Verifies flow rates, energy content, and timestamp accuracy via sensors

Each module knows how to interpret the data specific to its domain—ensuring that productivity is never generalized or misvalued.

**Role of Oracles:**

* Pull real-time price data or benchmarks  
* Cross-reference with third-party records (e.g. EIA, chain logs, open datasets)  
* Feed back into the smart contract to finalize REP issuance

All Oracle sources are whitelisted via DAO governance, ensuring transparency and auditability.

**Governance-Driven Expansion:**

* As Treasurenet scales, new asset modules can be proposed and approved by the community  
* Supports new industries (e.g. solar, compute, bandwidth)  
* Adapts to evolving data sources, standards, and compliance needs  
* Each module undergoes on-chain review, testing, and DAO ratification

This trustless pipeline ensures that every unit of REP is backed by validated, tamper-resistant data.