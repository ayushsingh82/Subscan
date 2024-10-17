import React, { useEffect, useState } from 'react';

const PolkadotNFTInfo = () => {
  const [nftInfo, setNftInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNFTInfo = async () => {
      const myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("X-API-Key", "311e618de4bc4a6687fcbe8f1e8c910f"); // Add your API key here

      const raw = JSON.stringify({
        "collection_id": 1 // Example collection ID, replace it with your actual collection ID
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://polkadot.api.subscan.io/api/scan/nfts/info", requestOptions);
        const result = await response.json();

        console.log("Response:", result); // Log the API response for debugging

        if (result.code === 0) {
          setNftInfo(result.data);
        } else {
          setError(result.message || 'Failed to fetch NFT information');
        }
      } catch (error) {
        setError('An error occurred while fetching data');
        console.error('Error:', error);
      }
    };

    fetchNFTInfo();
  }, []);

  return (
    <div>
      <h2>Polkadot NFT Info</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {nftInfo ? (
        <div>
          <p><strong>Collection ID:</strong> {nftInfo.collection_id}</p>
          <p><strong>Name:</strong> {nftInfo.metadata.name}</p>
          <p><strong>Description:</strong> {nftInfo.metadata.description}</p>
          <p><strong>Symbol:</strong> {nftInfo.metadata.symbol}</p>
          <p><strong>Items:</strong> {nftInfo.items}</p>
          <p><strong>Holders:</strong> {nftInfo.holders}</p>
          <p><strong>Total Supply:</strong> {nftInfo.total_supply}</p>
          <p><strong>Image:</strong> <img src={nftInfo.metadata.image} alt={nftInfo.metadata.name} style={{ maxWidth: '200px' }} /></p>
          <p><strong>External URL:</strong> <a href={nftInfo.metadata.external_url} target="_blank" rel="noopener noreferrer">{nftInfo.metadata.external_url}</a></p>
        </div>
      ) : (
        <p>Loading NFT information...</p>
      )}
    </div>
  );
};

export default PolkadotNFTInfo;
