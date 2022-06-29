import { useSelector } from "react-redux";
import { DivDisplay } from "./style";

function Display() {
  const store = useSelector((store) => store);

  return (
    <>
      <DivDisplay>
        <h3> {store.render}</h3>
      </DivDisplay>
    </>
  );
}

export default Display;
