import React from "react";
import pageStyle from "./Header.module.css";

 const Header = () =>(
     <div className={pageStyle.header}>
        <h1 className={pageStyle.headerWords}>The INFO6150 News</h1>
        <time className={pageStyle.dateTime} datetime="2019-06-26">Wed, June 26, 2019</time>
     </div>

 );

 export default Header;