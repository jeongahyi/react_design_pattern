import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Pane = styled.div`
  /* pass props */
  flex: ${props => props.weight};
`;

export const SplitScreen = ({
  children,
  // left: Left, // component will be displayed on the left side of the split screen
  // right: Right,
  leftWeight = 1,
  rightWeight = 1,
  // if 
}) => {
  // this is element, not component
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}{/* <Left /> props */}
      </Pane>
      <Pane weight={rightWeight}>
        {right}{/* <Right /> */}
      </Pane>
    </Container>
  );
}