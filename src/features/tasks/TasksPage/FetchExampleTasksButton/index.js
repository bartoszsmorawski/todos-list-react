import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Button";

export default () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Form>
    <Button dispach={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
    </Form>
  );
};
