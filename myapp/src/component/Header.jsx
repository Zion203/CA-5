import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    console.log(props)
   const {login} = props.props

   const chosse = () =>{
    console.log(login)
    if (login == 0 && !(window.localStorage.getItem("name"))){
       return( <Link to="/From"><button className='buttonSize'>Register</button></Link>)
    }else{
        return(
            <div className='buttonSize'>{window.localStorage.getItem("name")}</div>
        )
    }
    
   }

   const srcool = () =>{
    window.scrollTo({ top: 260, left:0, behavior: 'smooth' })
   }

   const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
        <nav >
            <div id='linkers'>
                <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
                <div id='anchors'>
                    <p onClick={handleReload}>Home</p>
                    <p onClick={srcool}>All Deals</p>
                    <a href="https://github.com/Zion203"><p>Contact Us</p></a>
                </div>
            </div>

            <div>
                {/* <button className='buttonSize'>Sign In</button> */}
                {chosse()}

                
                
            </div>
        </nav>
    </>
  )
}

export default Header