import "./index.css"
import{useGetUsers} from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";

const Users =()=>{
    const {users,loading,error}=useGetUsers()
    console.log('users...',users)
      return(
        <div className="images">
            {loading && <h2>Loading Users...</h2>}
            {users.length > 0 && !loading
             ? users.map((user => (
                <UserCard 
                image={user.image} 
               fullName ={`${user.firstname} ${user.lastName}`}
               key= {user.id}
               /> 

            ))
        ):!loading && <h2>No Users Found</h2>}
    {error.length > 0 &&<h2>Error:{error}</h2>}
  </div>
        );
};

export default Users