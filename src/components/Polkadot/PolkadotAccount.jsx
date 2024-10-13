import React, { useState } from "react";
import axios from 'axios';

function PolkadotAccount() {
    const [balanceHistory, setBalanceHistory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBalanceHistory = () => {
        setLoading(true);
        setError(null);

        var data = JSON.stringify({
            "address": "16Z8Vn4dSMNYtqKCF6mskVb5k2QoB2T9jbBkH2gVd9FxcL2L",  // Replace with the actual address
            "start": "2022-01-01",  // Start date (YYYY-MM-DD format)
            "end": "2023-01-01",    // End date (YYYY-MM-DD format)
            "recent_block": 10000   // Optional, you can adjust or remove
        });

        var config = {
            method: 'post',
            url: 'https://polkadot.api.subscan.io/api/scan/account/balance_history',
            headers: { 
                'User-Agent': 'Apidog/1.0.0 (https://apidog.com)', 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 311e618de4bc4a6687fcbe8f1e8c910f' // API key authorization
            },
            data: data
        };

        axios(config)
        .then(function (response) {
            setBalanceHistory(response.data);
            setLoading(false);
        })
        .catch(function (error) {
            setError('Failed to fetch balance history');
            setLoading(false);
        });
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">Account Balance History</h2>
            
            <button 
                onClick={fetchBalanceHistory} 
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
                Fetch Balance History
            </button>

            {/* Display loading, error or data */}
            {loading && <p className="mt-4 text-blue-600">Loading...</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
            {balanceHistory && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Balance History</h3>
                    <pre className="bg-gray-200 p-4 rounded-md">
                        {JSON.stringify(balanceHistory, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

export default PolkadotAccount;
