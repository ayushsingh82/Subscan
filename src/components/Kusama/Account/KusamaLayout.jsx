import React, { useState } from "react";
import KusamaAccountList from './KusamaAccountList';
import KusamaTokenHolder from "./KusamaTokenHolder";
import KusamaBalanceHistory from "./KusamaBalanceHistory";

function KusamaLayout() {
  const [activeSection, setActiveSection] = useState("account");
  const [accountView, setAccountView] = useState("account-list");
  const [blockView, setBlockView] = useState("block-details");
  const [stakingView, setStakingView] = useState("reward");
  const [contractView, setContractView] = useState("contract-event");
  const [nftView, setNftView] = useState("nft-balance");

  const renderSection = () => {
    switch (activeSection) {
      case "account":
        return (
          <div>
               {accountView === "account-list" && <KusamaAccountList />}
               {accountView === "token" && <KusamaTokenHolder />}
               {accountView === "balance" && <KusamaBalanceHistory />}
          </div>
        );
      case "block":
        return (
          <div>
          block
          </div>
        );
      case "staking":
        return (
          <div>
            stake
          </div>
        );
      case "contract":
        return (
          <div>
            contract
          </div>
        );
      case "nft":
        return (
          <div>
            nft
          </div>
        );
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
         <h1 className="border border-2 bg-black text-lg font-semibold mb-[10px] text-pink-500 rounded-lg px-[5px] py-[3px]">Kusama</h1>
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

      {activeSection === "nft" && (
        <div style={dropdownStyle}>
          <label>
            <select
              value={nftView}
              onChange={(e) => setNftView(e.target.value)}
            >
              <option value="nft-balance">NFT Account Balance</option>
              <option value="nft-holders">NFT Holders</option>
              <option value="nft-info">NFT Info</option>
            </select>
          </label>
        </div>
      )}

      <div>{renderSection()}</div>
    </div>
  );
}

export default KusamaLayout;
