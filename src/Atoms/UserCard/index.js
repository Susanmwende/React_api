import "./index.css"
const UserCard = ({image,fullName,id})=>{
  return(
    <div className="images">
        <img src= {image} alt={`${fullName} profile`} className="people"/>
        <h3 className="text">{fullName}</h3>
    </div>
  )  
}
export default UserCard