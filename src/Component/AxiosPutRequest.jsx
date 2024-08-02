import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosPutRequest = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((result) => {
        console.log(result.data);
        setPost(result.data); // Optionally set state with fetched data
      });
  }, []);

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('https://jsonplaceholder.typicode.com/posts/1', post)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Axios PUT Request</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              value={post.title}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              id="body"
              name="body"
              placeholder="Enter description"
              value={post.body}
              onChange={handleInput}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AxiosPutRequest;
