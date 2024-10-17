import React, { useEffect, useState } from 'react';

const PolkadotNFTHolders = () => {
  const [holdersData, setHoldersData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTHolders = async () => {
      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-API-Key", "311e618de4bc4a6687fcbe8f1e8c910f"); // Add your API key here

      const raw = JSON.stringify({
        "collection_id": 1, // Example collection_id
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
        const response = await fetch("https://polkadot.api.subscan.io/api/scan/nfts/info/holders", requestOptions);
        const result = await response.json();

        console.log("Response:", result); // Log the API response for debugging

        if (result.code === 0) {
          setHoldersData(result.data);
        } else {
          setError(result.message || 'Failed to fetch NFT holders');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
        console.error('Error:', error);
      }
    };

    fetchNFTHolders();
  }, []);

  return (
    <div>
      <h2>Polkadot NFT Holders</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {holdersData ? (
        <div>
          <p>Total Holders: {holdersData.count}</p>
          <ul>
            {holdersData.list.map((holderData, index) => (
              <li key={index}>
                <p><strong>Holder Address:</strong> {holderData.holder.address}</p>
                <p><strong>Balance:</strong> {holderData.balance}</p>
                <p><strong>Display Name:</strong> {holderData.holder.display}</p>
                {holderData.holder.evm_contract && (
                  <p><strong>Contract Name:</strong> {holderData.holder.evm_contract.contract_name}</p>
                )}
                {holderData.holder.judgements && holderData.holder.judgements.length > 0 && (
                  <p><strong>Judgements:</strong> {holderData.holder.judgements.map(j => j.judgement).join(", ")}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading NFT holders...</p>
      )}
    </div>
  );
};

export default PolkadotNFTHolders;
