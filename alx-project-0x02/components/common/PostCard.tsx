import { PostProps } from "@/interfaces";



const PostCard: React.FC< PostProps> = ({userId, title, content}) => {
    return(
           
                 <div className=" border p-4 rounded shadow hover:shadow-md transition">
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <p >{content}</p>
                    <p>User ID: {userId}</p>
                 </div>
           
           
    );
}


export default PostCard;