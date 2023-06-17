import "./style.css";

const Section = ({ tittle, body, extraHeaderContent }) => (
    <section className="container__section">
        <header className="container__header">
            <h2 className="container__title">{tittle}</h2>
            {extraHeaderContent}
        </header>
        <div className="container__specification">
            {body}
        </div>
    </section>
);
export default Section;