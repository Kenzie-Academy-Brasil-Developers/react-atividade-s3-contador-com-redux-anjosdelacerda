import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modulos/counter/actions";
import { ButtonRender, DivButtons } from "./style";
function Renderer() {
  const dispatch = useDispatch();

  return (
    <>
      <DivButtons>
        <ButtonRender onClick={() => dispatch(addNumber(1))}>
          add +
        </ButtonRender>
        <ButtonRender onClick={() => dispatch(subNumber(1))}>
          sub -
        </ButtonRender>
      </DivButtons>
    </>
  );
}

export default Renderer;
