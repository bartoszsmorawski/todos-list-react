import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button, ContainerButton } from "../Button/styled";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <ContainerButton>
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
    </ContainerButton>
  );
};
