import React, { memo, useState } from "react";

const Chid = ({text, onClick})=>{
    console.log('Child is rendered',text);
    
    return (
        <button onClick={onClick}>{text}</button>
    )

}
export default memo(Chid);