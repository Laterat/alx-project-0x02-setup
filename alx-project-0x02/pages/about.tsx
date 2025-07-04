import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const About: React.FC=()=>{

   
    return(
        <>
           <Header/>
           <div className="p-2">
              <h1 className="text-2xl font-semibold">About Page</h1>
              <h2 className="text-xl font-semibold">Small</h2>
                 <div className="flex space-x-3">
                    <Button size="small" shape="rounded-sm"/>
                    <Button size="medium" shape="rounded-md"/>
                    <Button size="large" shape="rounded-full"/>
                    
                 </div>
            </div>
        </>
    );
}

export default About;