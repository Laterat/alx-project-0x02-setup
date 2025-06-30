

import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const User: React.FC<{Users: UserProps[]}>=({Users})=>{
    return(
         <>
              <Header/>
                <div className="p-2">
                     <h1 className="text-2xl font-semibold">USers Page</h1>
                 </div>

                 <div className="grid grid-cols-3 gap-2 p-2">
                    {
                        Users.map((user,index)=>(
                            <UserCard key={index} 
                                       name={user.name} 
                                       email={user.email}
                                        address={user.address}/>
                        ))
                    }
                 </div>
        </>
    );
}


export const getStaticProps= async()=>{
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const data= await response.json();
     const Users= data.map((user:any ) => ({
                           name: user.name,
                           email: user.email,
                            address: {
                                     street: user.address.street,
                                     suite: user.address.suite,
                                     city: user.address.city,
                                     zipcode: user.address.zipcode,
                                     geo: {
                                           lat: user.address.geo.lat,
                                           lng: user.address.geo.lng,
                                     },
                            }
     }));
     return{
        props: {
            Users
        }
     }
}

export default User;
