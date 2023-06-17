import "./style.css";

const Form = () => (
    <form className="container__form ">
    <input className="container__form--input" required autofocus placeholder="Co jest do zrobienia?" />
    <button className="container__form--button">Dodaj zadanie</button>
</form>
);
export default Form;

