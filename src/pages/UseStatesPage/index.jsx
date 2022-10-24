import { useState } from "react";

const UseStatesPage = ()=>{
    const [state, setState] = useState({
        count: 0,
        theme : "Dark",
    });
    const increment = () => {
        setState((previusStates)=>{
            return{
                ...previusStates,
                count: previusStates.count++
            }
        })
    }
    return(
        <div>
            <h2>
                {state.theme}
                <br />
                {state.count}
            </h2>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default UseStatesPage;