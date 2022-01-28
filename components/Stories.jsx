import Story from "./Story";
import { useEffect, useState } from "react";
import {useSession} from "next-auth/react";


function Stories() {
  // we need to make a hardcoded object because the creator of faker turns mad and corrupted his own work, shit happens
  const {data: session} = useSession();


  const [suggestions,setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_,i)  => ({
      avatar: "https://placekitten.com/200/200",
      username: "John Smith",
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
      <div className="flex  space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {session && (
          <Story  img={session.user.image}
                  username={session.user.username}
          />
        )}
        {suggestions.map((profile) => (
          <div className=" w-14 flex-shrink-0">
            <Story  
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}          
                    />
          </div>
        ))}          
      </div>

  )
}

export default Stories;
