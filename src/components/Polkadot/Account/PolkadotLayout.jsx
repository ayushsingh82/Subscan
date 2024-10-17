import React, { useState } from "react";
import PolkadotBalanceHistory from "./PolkadotBalanceHistory";
import PolkadotTokenHolder from "./PolkadotTokenHolder";
import PolkadotAccountList from "./PolkadotAccountList";
import PolkadotRewardSlash from "../Staking/PolkadotRewardSlashList"; 
import PolakdotValidatorList from "../Staking/PolkadotValidatorList";
import PolkadotVotedValidator from "../Staking/PolkadotVotedValidator";
import PolkadotContractEvents from "../Contract/PolkadotContractEvents";
import PolkadotContractMeta from "../Contract/PolkadotContractMeta";
import PolkadotBlockDetails from "../Block/PolkadotBlockDetails";
import PolkadotBlockList from "../Block/PolkadotBlockList";

function PolkadotLayout() {
  const [activeSection, setActiveSection] = useState("account");
  const [accountView, setAccountView] = useState("balance");
  const [stakingView, setStakingView] = useState("reward");
  const [contractView, setContractView] = useState("contract-event");
  const [blockView, setBlockView] = useState("block-details"); // State for block view

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
        return (
          <div>
            {blockView === "block-details" && <PolkadotBlockDetails />}
            {blockView === "block-list" && <PolkadotBlockList />}
          </div>
        );
      case "staking":
        return (
          <div>
            {stakingView === "reward" && <PolkadotRewardSlash />}
            {stakingView === "validator-list" && <PolakdotValidatorList />}
            {stakingView === "votedvalidator-list" && <PolkadotVotedValidator />}
          </div>
        );
      case "contract":
        return (
          <div>
            {contractView === "contract-event" && <PolkadotContractEvents />}
            {contractView === "contract-meta" && <PolkadotContractMeta />}
          </div>
        );
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

      {activeSection === "block" && (
        <div style={dropdownStyle}>
          <label>
            <select
              value={blockView}
              onChange={(e) => setBlockView(e.target.value)}
            >
              <option value="block-details">Block Details</option>
              <option value="block-list">Block List</option>
              {/* Add more options here as needed */}
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
              <option value="validator-list">Validator List</option>
              <option value="votedvalidator-list">Voted Validator List</option>
            </select>
          </label>
        </div>
      )}

      {activeSection === "contract" && (
        <div style={dropdownStyle}>
          <label>
            <select
              value={contractView}
              onChange={(e) => setContractView(e.target.value)}
            >
              <option value="contract-event">Contract Event</option>
              <option value="contract-meta">Contract Meta-Data</option>
            </select>
          </label>
        </div>
      )}

      <div>{renderSection()}</div>
    </div>
  );
}

export default PolkadotLayout;
