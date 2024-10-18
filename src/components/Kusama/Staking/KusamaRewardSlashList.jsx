import React, { useState } from "react";
import axios from 'axios';

function KusamaRewardSlash() {
    const [rewardData, setRewardData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Random address and block range
    const randomAddress = "14Y4s6V1PWrwBLvxW47gcYgZCGTYekmmzvFsK1kiqNH2d84t"; // Example address
    const randomBlockRange = "1000000-2000000"; // Example block range

    const fetchRewardData = () => {
        setLoading(true);
        setError(null);

        const data = JSON.stringify({
            "address": randomAddress,  
            "block_range": randomBlockRange, // Set the block range
            "category": "Reward",
            "is_stash": true,
            "page": 0,
            "row": 10,
            "timeout": 0
        });

        const config = {
            method: 'post',
            url: 'https://kusama.api.subscan.io/api/scan/account/reward_slash',
            headers: { 
                'User-Agent': 'Apidog/1.0.0 (https://apidog.com)', 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 311e618de4bc4a6687fcbe8f1e8c910f' // API key authorization
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            setRewardData(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setError('Failed to fetch reward slash data');
            setLoading(false);
        });
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">Reward/Slash Data</h2>
            
            <button 
                onClick={fetchRewardData} 
                className="px-4 py-2 bg-black text-white rounded-md"
            >
                Fetch Reward Slash Data
            </button>

            {/* Display loading, error or data */}
            {loading && <p className="mt-4 text-black">Loading...</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
            {rewardData && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Reward Slash Data</h3>
                    <pre className="bg-gray-200 p-4 rounded-md">
                        {JSON.stringify(rewardData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

export default KusamaRewardSlash;
