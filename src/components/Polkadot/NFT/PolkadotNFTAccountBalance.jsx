import React, { useEffect, useState } from 'react';

const PolkadotNFTAccountBalance = () => {
  const [nftData, setNftData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTBalances = async () => {
      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Api-Key", "311e618de4bc4a6687fcbe8f1e8c910f"); // Your API key

      const raw = JSON.stringify({
        "address": "EaBRZ3VBUFEd6GT9kxXXk9C5gsYC6zAsNfxahmpusrYPtPf",
        "collection_id": 1,
        "page": 0,
        "row": 10
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://polkadot.api.subscan.io/api/scan/nfts/account/balances", requestOptions);
        const result = await response.json();

        if (result.code === 0) {
          setNftData(result.data);
        } else {
          setError(result.message || 'Failed to fetch NFT balances');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
        console.error('Error:', error);
      }
    };

    fetchNFTBalances();
  }, []);

  return (
    <div>
      <h2>Polkadot NFT Account Balance</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {nftData ? (
        <div>
          <p>Total NFTs: {nftData.count}</p>
          <ul>
            {nftData.list.map((nft, index) => (
              <li key={index}>
                <p><strong>Collection Name:</strong> {nft.collection_name}</p>
                <p><strong>Balance:</strong> {nft.balance}</p>
                <p><strong>Item ID:</strong> {nft.item_id}</p>
                <p><strong>Token Name:</strong> {nft.token_metadata.name}</p>
                <img src={nft.token_metadata.image} alt="NFT" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading NFT balances...</p>
      )}
    </div>
  );
};

export default PolkadotNFTAccountBalance;
