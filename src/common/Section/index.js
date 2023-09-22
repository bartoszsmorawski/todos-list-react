import { Box, Header, Title, Specification } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Box>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Specification>{body}</Specification>
  </Box>
);

export default Section;
