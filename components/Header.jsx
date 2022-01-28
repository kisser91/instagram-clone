import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import {HomeIcon} from "@heroicons/react/solid";
import {signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState} from "../atoms/modalAtom";


function Header() {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();
    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-7xl mx-5 xl:mx-auto">
                {/* Left */}
                <div    onClick={() => router.push("/")}
                        className="relative hidden lg:inline-grid  w-24 cursor-pointer">
                    <Image 
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                        />
                </div>
                <div    onClick={() => router.push("/")}
                        className="relative flex-shrink-0 lg:hidden  w-10 cursor-pointer">
                    <Image 
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                        />
                </div>
                {/* Center*/}
                <div className=" max-w-xs ">
                    <div className="relative p-3  rounded-md ">
                        <div className="absolute pl-3 inset-y-0 flex items-center pointer-events-none"> 
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input  type="text" 
                                placeholder="Search"
                                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black focus:ring-black rounded-md"
                                
                                />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4 ">
                    <HomeIcon   onClick={() => router.push("/")}
                                className="navBtn"/>
                    <MenuIcon className=" h-6 w-6 md:hidden cursor-pointer flex-shrink-0"/>
                    {session ? (
                        <>
                        <div className="relative navBtn">
                            <PaperAirplaneIcon className="navBtn rotate-45"/>
                        <div className="text-xs w-5 h-5 absolute bg-red-500 -top-1 -right-2  rounded-full flex items-center justify-center  text-white animate-pulse">3</div></div>
                            <PlusCircleIcon onClick={() => setOpen(!open)} className="navBtn"/>
                            <UserGroupIcon className="navBtn"/>
                            <HeartIcon className="navBtn"/>
                        <img    src={session?.user.image}
                                alt="Profile pic" 
                                className="h-10 rounded-full cursor-pointer "
                                onClick={signOut}
                                />
                        </>
                    ): <button onClick={signIn}>Sign In</button>}
                </div>
            </div>
        </div>

  )
}

export default Header;
