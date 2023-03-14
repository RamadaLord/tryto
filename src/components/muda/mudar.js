import { useState } from "react";

function Mudar() {
    let x = 20
    let y = 4
    let resultado = x * y

    const [numero, teste] = useState("");

    function Clicar() {
        teste(resultado);
    }
    return (
        <div>
            <p>{numero}</p>
            <button onClick={Clicar}>Soma</button>
        </div>
    )
}

export default Mudar