

import { PostData, PostModalProps } from "@/interfaces";
import React,{useState} from 'react';

const PostModal: React.FC<PostModalProps>=({onClose, onSubmit})=>{
        const [title, setTitle]= useState("");
        const [content, setContent]= useState("");
    
        const handleSubmit=(e: React.FormEvent)=>{
            e.preventDefault();
            onSubmit({title, content});
            onClose();
        }

    return(

     
        <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 justify-center">Add a Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 ">
                    <label className="text-xl font-semibold mb-2">Title</label>
                    <input
                          type="text"
                          placeholder="Enter title"
                          value={title}
                          onChange={(e)=> setTitle(e.target.value)}
                          required
                          className="border p-2 mb-3 rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xl font-semibold mb-2">
                          Content
                    </label>
                    <textarea
                          placeholder="Enter content"
                          value={content}
                          rows={4}
                          onChange={(e)=> setContent(e.target.value)}
                          required
                          className="border p-2 mb-3 rounded"
                    />
                </div>
                <div className="flex justify-between">
                      <button
                             type="button"
                             onClick={onClose}
                             className="px-6 py-2 bg-gray-300 rounded-lg hover:shadow-lg" >
                             Cancel</button>
                      <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:shadow-lg">
                             Post</button>
                </div>
                 
            </form>
        </div>
        
    );
}

export default PostModal;

