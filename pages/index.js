import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
if(!session){
  return (
   <>
   <div className="bg-blue-200 w-screen h-screen flex items-center">
    <div className="text-center w-full">
    <button className="bg-white py-2 px-4 rounded-lg" onClick={() => signIn('google')}>Login with Google</button>

    </div>
   </div>
   </>
  )
}
else{
  return (<>
  Logged in as {session.user.email} <br />
  <button onClick={() => signOut()}>Sign out</button>

  </>)
}
}
