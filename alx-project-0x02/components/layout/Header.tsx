
import Link from 'next/link';

const Header: React.FC = () =>{
    return(
          <header>
              <div className='p-2 flex justify-between items-center bg-blue-500 text-white '>
                   <Link className="hover:underline" href="/">Hello, Main</Link>

                  <div className='flex items-center space-x-4'>
                      <Link  className="hover:underline" href="/home">home</Link>
                      <Link className="hover:underline" href="/about">about</Link>
                      <Link className="hover:underline" href="/posts">posts</Link>
                      <Link className="hover:underline" href="/users">users</Link>
                  </div>
             
              </div>
             
             </header>
    );
}
export default Header;