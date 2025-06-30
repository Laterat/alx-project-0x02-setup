import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";



const Post: React.FC<{posts: PostProps[]}>=({posts})=>{

   
    return(
        <>
           <Header/>
           <div className="p-2">
                 <h1 className="text-2xl font-semibold">Posts Page</h1>

           </div>
            <div className="grid grid-cols-3 gap-2 p-2">
               {posts.map((post, index) => (
                <PostCard key={index} content={post.content} title={post.title} userId={post.userId} />
               ))}
           </div>

           
        </>
    );
}

export  const getStaticProps = async()=>{
           const response = await fetch("https://jsonplaceholder.typicode.com/posts")
           const data= await response.json();
          const posts=              data.map((post: any) => ({
                                                    title: post.title,
                                                    content: post.body,
                                                    userId: post.userId
                                                  }));      
         return{
                        props: {posts}
             };
     }

export default Post;


// {  useEffect(
//                ()=>{
//                      const fetchData= async()=>{
//                                                  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//                                                  const data= await response.json();
//                                                 setPosts(
//                                                   data.map((post: any) => ({
//                                                     title: post.title,
//                                                     content: post.body,
//                                                     userId: post.userId
//                                                   }))
//                                                 );      
//                                           }
             
//              fetchData();               }
//         ,[]);
//}