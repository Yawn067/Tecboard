import "./campo-formulario.css";

export function CamporDeFormulario({ children }) {
  return <fieldset className="campo-form">{children}</fieldset>;
}
