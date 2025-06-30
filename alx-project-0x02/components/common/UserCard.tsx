

import { UserProps } from "@/interfaces";

const  UserCard: React.FC<UserProps>=({name,email, address})=>{
    return(
        <div className="border rounded-lg p-3 hover:shadow-2xl transition-shadow shadow-lg duration-300 ">
                <h2 className="text-xl font-semibold ">name: {name}</h2>
                <p>email: {email}</p>
                <h3>Address</h3>
                <p className="ml-4">street: {address.street}</p>
                <p className="ml-4">suite: {address.suite}</p>
                <p className="ml-4">City: {address.city}</p>
                <p className="ml-4">zipcode: {address.zipcode}</p>
                <p className="ml-4">Geo: lat {address.geo.lat}</p>
                <p className="ml-13">  lng:   {address.geo.lng}</p>
        </div>
    );
}

export default UserCard;