import "./formulario-de-evento.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CamporDeFormulario } from "../CamporDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export default function FormularioDeEvento({ temas, aoSubmeter }) {
  function formSubmetido(formData) {
    const evento = {
      titulo: formData.get("nomeEvento"),
      capa: formData.get("capa"),
      data: new Date(formData.get("dataEvento")),
      tema: temas.find((item) => {
        return item.id == formData.get("tema");
      }),
    };
    aoSubmeter(evento);
  }

  return (
    <form className="form-evento" action={formSubmetido}>
      <TituloFormulario>Preencha para cirar um evento:</TituloFormulario>
      <div className="campos">
        <CamporDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          />
        </CamporDeFormulario>
        <CamporDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="http://..."
          />
        </CamporDeFormulario>
        <CamporDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder="Summer dev hits"
          />
        </CamporDeFormulario>
        <CamporDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CamporDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
