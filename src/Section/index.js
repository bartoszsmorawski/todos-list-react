import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="container__section">
        <header className="container__header">
            <h2 className="container__title">{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="container__specification">
            {body}
        </div>
    </section>
);

export default Section;