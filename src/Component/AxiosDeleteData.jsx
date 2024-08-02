import axios from 'axios';
import React, { useEffect } from 'react';

const AxiosDeleteData = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        console.log(response);
      });
  }, []);

  const deleteRecord = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        alert("Post has been deleted!");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Delete Data</h1>
        <button
          onClick={deleteRecord}
          className="bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AxiosDeleteData;
