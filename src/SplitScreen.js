import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  flex: 1;
`;

export const SplitScreen = ({
  left: Left, // component will be displayed on the left side of the split screen
  right: Right,
}) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
}