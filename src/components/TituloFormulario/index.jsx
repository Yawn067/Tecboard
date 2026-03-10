import "./titulo-formulario.css";
//props é um objeto
export function TituloFormulario(props) {
  return <h2 className="titulo-form">{props.children}</h2>;
}
