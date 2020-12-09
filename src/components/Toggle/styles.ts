import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

interface ContainerProps {
  checked: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 100px;
  width: 100%;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg.moom {
    color: ${props => (props.checked ? '#757575' : '')};
  }

  svg.lightbulb {
    color: ${props => (props.checked ? '' : '#fea03f')};
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.tertiary,
    offColor: theme.colors.gray,
  }),
)``;
