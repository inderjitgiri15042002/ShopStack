import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchAPI() {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="">
      {posts.length > 0 ? (
        <div className=" max-w-[1200px] mx-auto flex flex-wrap gap-6 justify-center">
          {posts.map((post) => (
            <div key={post.id} className="w-[250px]">
              <Product post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">No Data Found</div>
      )}
    </div>
  );
};

export default Home;
