
import Link from 'next/link';

const Header: React.FC = () =>{
    return(
          <header>
              <div className='p-2 flex justify-between items-center'>
                   <Link href="/">Hello</Link>

                  <div className='flex items-center space-x-4'>
                      <Link href="/home">home</Link>
                      <Link href="/about">about</Link>
                  </div>
             
              </div>
             
             </header>
    );
}
export default Header;