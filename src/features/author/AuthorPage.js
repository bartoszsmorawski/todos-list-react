import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="Autor aplikacji" />
    <Section
      title="Bartosz Smorawski"
      body={
        <>
          Cześć jestem Bartek i mam 25 lat. Na ten moment nie jestem jeszcze
          programistą, jednakże mam nadzieję, że już za niedługo to się zmieni,
          gdyż rozszerzam, kompetencje w tym zakresie. A oto moja aplikacja
          napisana własnoręcznie. Sprawdź ją sam i wyraź swoją opinie. 😎
        </>
      }
    />
  </Container>
);
