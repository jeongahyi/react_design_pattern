import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  /* pass props */
  flex: ${props => props.weight};
`;

export const SplitScreen = ({
  left: Left, // component will be displayed on the left side of the split screen
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  );
}