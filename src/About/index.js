import'./index.css'
import logo from '../logo.svg';

const About = ()=>{
    return(
         <div>
            <p className ="about">I am learning ReactJs which is a Javascipt Front-end library</p>
            <img src={logo} alt='logo'/>
        </div>
        )
}
export default About;