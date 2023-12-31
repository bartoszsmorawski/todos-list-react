import Input from "../../Input";
import {
  useReplaceQueryParameter,
  useQueryParameter,
} from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Wpisz słowo kluczowe."
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
