import { useEffect } from "react";
import { useState } from "react"
import './escritorDeTexto.css'

const EscritorDeTexto = (props) => {
  const [text, setText] =useState("");

  const escreverNaTela = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => escreverNaTela(text, i + 1), props.tempo);
    }
  };

  useEffect(() => {
    setTimeout(() => escreverNaTela(props.text));
  }, []);

  return(
    <div>
      {text}
    </div>
  )
}

export default EscritorDeTexto