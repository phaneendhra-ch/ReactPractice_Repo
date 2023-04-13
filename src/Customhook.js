import { useState } from "react";

function Customhook(){
    const [state,setState] = useState(false);
    
    const toogle =()=>{
        setState(!state);
    //  setState((prev) => !prev); {/* We can use this also here prev value is taken from state (prev = state) */}
     }

    return [state,toogle]
}

export default Customhook;