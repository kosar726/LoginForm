import React from 'react'
import '../style.css'
import image1 from '../image/logo.png'
const signup = (props) => {
     return (
          <form id="form" method="POST" action="" >
               <img className="logo" src={image1} />
               <input type="email" placeholder="پست الکترونیک" dir="ltr" className="text-center" />
               <input type="password" placeholder="انتخاب گذرواژه" dir="ltr" className="text-center" />
               <input type="password" placeholder="تکرار گذرواژه" dir="ltr" className="text-center" />
               <button className="btn" type="submit"><span>ثبت نام</span></button>
               <p className="text-center">.برای ورود  <a href="" style={{color:'#00bcef' , textDecoration:'none'}}>اینجا</a> کلیک کنید </p>
          </form>
     );
}
export default signup;