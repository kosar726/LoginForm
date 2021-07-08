import React from 'react'
import '../style.css'
import image1 from '../image/logo.png'
const signin = (props) => {
     return(
        <form id="form" method="POST" action="" >
        <img className="logo" src={image1} />
        <input  type="email" placeholder="پست الکترونیک" dir="ltr" className="text-center"/>
        <input  type="password" placeholder="گذر واژه" dir="ltr" className="text-center"/>
        <button className="btn" type="submit"><span>ورود</span></button>
        <p className="text-center">.اگر ثبت نام نکرده اید <a href="" style={{color:'#00bcef' , textDecoration:'none'}}>اینجا</a> کلیک کنید</p>
      </form>
     );
}
export default signin;