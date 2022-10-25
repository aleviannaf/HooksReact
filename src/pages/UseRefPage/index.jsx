import { useState, useRef, useEffect } from "react";

const UseRefPage = ()=>{

    const [name, setName] = useState("");

    const renders = useRef(0);
    const inputRef = useRef()
    const previusName = useRef();

    const focusInputRef = ()=> inputRef.current.focus();

    useEffect(()=>{
        renders.current = renders.current +1;
    })

    useEffect(()=>{
        previusName.current = name;
    },[name]);

    return(
        <div>
            <h2> Use ref guarda uma variavel com um state mas quando ele é atualizado  ele não é rederizado novamente</h2>
           <p>É bom quando a gente quer persistir o valor durante todo ciclo de vida do componente 
            mas não quer que o componente seja rederizado novamente quando for atualizado
           </p>
           <p>
            A gente consegue utilizar ele para referenciar elementos html
           </p>
           <p>Podemos utilizar tbm o useRef quando queremos salvar o valor anterior de um estado</p>
           <br />
           <br />
           <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
           <p>Hello! My name is {name}</p>
           <p>Renders: {renders.current}</p>
           <p>And my name was {previusName.current}</p>
           <button onClick={focusInputRef}>Focus in inputRef</button>
        </div>
    )
}

export default UseRefPage;