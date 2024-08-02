import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosGetRequest = () => {
  const [myData, setData] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Axios GET Request</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {myData.length > 0 ? (
          <ul className="space-y-4">
            {myData.map((item) => (
              <li key={item.id} className="bg-gray-200 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default AxiosGetRequest;
