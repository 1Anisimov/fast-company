import React, {useState,useEffect} from "react";
import Users from "./users";
import api from "../api"

function App ()  {
    const [users, setUsers] = useState();
    useEffect(() => {
      api.users.fetchAll().then((data)=>setUsers(data))
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleBookmark = (id)=>{
        setUsers(users.map((user)=>{
            if(user._id===id){
                return {...user, bookmark: !user.bookmark}
            }
            return user;
        })
    )}
    
    return (
      <div>
          {users && (
              <Users
                  onDelete={handleDelete}
                  onToggleBookMark={handleBookmark}
                  users={users}
              />
          )}
      </div>
  );
}

export default App