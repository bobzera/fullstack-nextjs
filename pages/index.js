import Nav from '../components/nav'
import { signIn, signOut, useSession } from 'next-auth/client'



export default function IndexPage() {

  const [ session, loading ] = useSession()

  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-900 dark:text-gray-100">
          Teste de commit pelo VSCODE
        </h1>
      </div>
      <>
            {!session && <>
            Not signed in <br/>
            <button onClick={signIn}>Sign in</button>
            </>}
            {session && <>
            Signed in as {session.user.email} <br/>
            <button onClick={signOut}>Sign out</button>
            </>}
        </>


    </div>
  )
}
