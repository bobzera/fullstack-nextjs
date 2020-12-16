import Link from 'next/link'
import Image from 'next/image'

import { signIn, signOut, useSession } from 'next-auth/client'

export default function Nav() {

  const [ session, loading ] = useSession()

  return (
    <nav>
      
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/coments">
            <a className=" no-underline btn-blue text-white dark:text-blue-300 ">
             Comnetarios
            </a>
          </Link>
        </li>
        <li>
          <Link href="/usuarios">
            <a className=" no-underline btn-blue text-white dark:text-blue-300 ">
             Usuarios
            </a>
          </Link>
        </li>  
        <li>
          <Link href="/">
            <a className=" no-underline btn-blue text-white dark:text-blue-300 ">
             voltar
            </a>
          </Link>
        </li>       
        <li> 
            {session && <>        
            <button className=" no-underline btn-blue text-white dark:text-blue-300 " onClick={signOut}>
             Sair
            </button>
            </>}         
        </li>
        <li> 
            {!session && <>        
            <button className=" no-underline btn-blue text-white dark:text-blue-300 " onClick={() => signIn('auth0')}>
             Logar
            </button>
            </>}         
        </li>
        <li >      
            
            {session && <>
              <div >
              <Image 
              className="rounded-full"
                src={session.user.image}
                alt="Picture of the author"
                width={50}
                height={50}                
              /> 
              
              </div>
             
            </>}
            {/* //carregando statu */}
            {loading && (
              <h1 className="text-5xl">carregando</h1>
            )}        
        </li>
      </ul>
    </nav>
  )
}
