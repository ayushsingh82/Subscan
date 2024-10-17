import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PolkadotBlockDetails = () => {
  const [blockData, setBlockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockDetails = async () => {
      const data = JSON.stringify({
        "block_hash": "0xa8cba357ea4a7d160eb98d37979dffd7213b1dad592a551b391f96c51b19020b",
        "block_num": 10000,
        "block_timestamp": 0,
        "only_head": true
      });

      const config = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://polkadot.api.subscan.io/api/scan/block', // Using CORS proxy
        headers: { 
          'Content-Type': 'application/json',
          'Api-Key': '311e618de4bc4a6687fcbe8f1e8c910f' // Your API key
        },
        data: data
      };

      try {
        const response = await axios(config);
        setBlockData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlockDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching block details: {error.message}</div>;
  }

  return (
    <div>
      <h2>Block Details</h2>
      <p><strong>Block Number:</strong> {blockData.block_num}</p>
      <p><strong>Block Hash:</strong> {blockData.hash}</p>
      <p><strong>Timestamp:</strong> {blockData.block_timestamp}</p>
      <p><strong>Validator:</strong> {blockData.validator}</p>
      <p><strong>Extrinsics Count:</strong> {blockData.extrinsics_count}</p>
      <p><strong>Event Count:</strong> {blockData.event_count}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default PolkadotBlockDetails;
