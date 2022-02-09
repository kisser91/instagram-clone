import { getProviders, signIn as SignInToProvider} from "next-auth/react";
import Header from "../../components/Header";

// Browser...
function signIn({providers}) {
    return (
        <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-10 px-14 text-center"> 
            <img src="https:links.papareact.com/ocw" alt="" className="w-40" />
            <p className="font-xs italic text-gray-500">
                This is not a REAL app, it is built for  educational purposes only
            </p>
            <div className=" bg-yellow-500 mt-32">
            {console.log("providers => ",providers)}
            {Object.values(providers).map((provider) => (
                < div key={provider.name} className="mx-auto" >
                    <button 
                        className="p-3 bg-blue-500 rounded-lg text-white"
                        onClick={() => SignInToProvider(provider.id, {callbackUrl: "/"})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))} 
            </div>
        </div>

      </>
  );
}

// Server side Render
export async function getServerSideProps() {
    const providers = await getProviders();
    console.log("providers async function => ",providers)
    return {
       props: {
           providers,
       },
    };
}

export default signIn;
