import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { PostData } from "@/interfaces";

const Home: React.FC=()=>{

    const [modalOpen, setModalOpen]= useState(false);
    const [posts, setPost]= useState<PostData[]>([]);

    const handleAddPost=(post: PostData)=>{
        setPost((prev)=>[post,...prev]);
    };

    return(
        <div>  
            <Header/>
            <div className="m-4">
                <h1 className="text-2xl font-semibold ">Home</h1>
                <Card title="This is home" content=" the content"/>
             </div>
           
     <div className="p-6 ">
                
        <h1 className="text-2xl font-bold mb-2">Posts</h1>
          <button
             onClick={() => setModalOpen(true)}
             className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:shadow-lg">
            Add New Post   </button>

        {modalOpen && (
          <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
          )}

       <div className="grid grid-cols-3 gap-2  space-y-4 mt-5 ">
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow-sm hover:shadow-lg">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
       </div>
    </div>
        </div>
        
    );
}

export default Home;