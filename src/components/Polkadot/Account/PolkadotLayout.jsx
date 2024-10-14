import React, { useState } from "react";
import PolkadotBalanceHistory from "./PolkadotBalanceHistory";
import PolkadotTokenHolder from "./PolkadotTokenHolder";
import PolkadotAccountList from "./PolkadotAccountList";
import PolkadotRewardSlash from "../Staking/PolkadotRewardSlashList"; 


function PolkadotLayout() {
  const [activeSection, setActiveSection] = useState("account");
  const [accountView, setAccountView] = useState("balance");
  const [stakingView, setStakingView] = useState("reward"); // Default to "Reward/Slash"

  const renderSection = () => {
    switch (activeSection) {
      case "account":
        return (
          <div>
            {accountView === "balance" && <PolkadotBalanceHistory />}
            {accountView === "token" && <PolkadotTokenHolder />}
            {accountView === "account-list" && <PolkadotAccountList />}
          </div>
        );
      case "block":
        return <div>Polkadot Block Information</div>;
      case "staking":
        return (
          <div>
            {stakingView === "reward" && <PolkadotRewardSlash />}
            {stakingView === "validator" && <p>Hello</p>}
          </div>
        );
      case "contract":
        return <div>Polkadot Contract Information</div>;
      case "nft":
        return <div>Polkadot NFT Information</div>;
      default:
        return <div>Select a section to view details</div>;
    }
  };

  const buttonStyle = (section) => ({
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "5px",
    border: activeSection === section ? "2px solid #f472b4" : "1px solid gray",
    backgroundColor: activeSection === section ? "#f472b4" : "#fff",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  });

  const dotStyle = {
    marginLeft: "5px",
    color: "#f472b8",
  };

  const dropdownStyle = {
    padding: "10px",
    backgroundColor: "#f3f4f6",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  return (
    <div className="mt-[30px] text-center">
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle("account")}
          onClick={() => setActiveSection("account")}
        >
          Account {activeSection === "account" && <span style={dotStyle}>●</span>}
        </button>
        <button
          style={buttonStyle("block")}
          onClick={() => setActiveSection("block")}
        >
          Block {activeSection === "block" && <span style={dotStyle}>●</span>}
        </button>
        <button
          style={buttonStyle("staking")}
          onClick={() => setActiveSection("staking")}
        >
          Staking {activeSection === "staking" && <span style={dotStyle}>●</span>}
        </button>
        <button
          style={buttonStyle("contract")}
          onClick={() => setActiveSection("contract")}
        >
          Contract {activeSection === "contract" && <span style={dotStyle}>●</span>}
        </button>
        <button
          style={buttonStyle("nft")}
          onClick={() => setActiveSection("nft")}
        >
          NFT {activeSection === "nft" && <span style={dotStyle}>●</span>}
        </button>
      </div>

      {activeSection === "account" && (
        <div style={dropdownStyle}>
          <label>
            <select
              value={accountView}
              onChange={(e) => setAccountView(e.target.value)}
            >
              <option value="balance">Balance Account</option>
              <option value="token">Token Holder</option>
              <option value="account-list">Account List</option>
            </select>
          </label>
        </div>
      )}

      {activeSection === "staking" && (
        <div style={dropdownStyle}>
          <label>
            <select
              value={stakingView}
              onChange={(e) => setStakingView(e.target.value)}
            >
              <option value="reward">Reward/Slash List</option>
              <option value="validator">Validator</option>
            </select>
          </label>
        </div>
      )}

      <div>{renderSection()}</div>
    </div>
  );
}

export default PolkadotLayout;
