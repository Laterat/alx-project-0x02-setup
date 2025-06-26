import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";



const Home: React.FC=()=>{
    return(
        <>  <Header/>
            <h1>Home</h1>
            <Card title="This is home" content=" the content"/>
        </>
        
    );
}

export default Home;