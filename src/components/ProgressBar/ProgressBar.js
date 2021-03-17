import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + 'px',
    "--borderRadius": 4 + 'px',
  },
  medium: {
    "--height": 12 + 'px',
    "--borderRadius": 4 + 'px',
  },
  large: {
    "--height": 24 + 'px',
    "--borderRadius": 8 + 'px',
    "--padding": 4 + 'px',
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <BackBar style={styles}>
    <CornerHelper>
      <FrontBar 
        role="progressbar"
        aria-valuenow= {value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{'--width': value + '%'}}>
          <VisuallyHidden>{value}</VisuallyHidden>
      </FrontBar>
    </CornerHelper>
  </BackBar>;
};

const BackBar = styled.div`
  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
  width: 370px;;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const CornerHelper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const FrontBar = styled.div`
  height: 100%;
  width: var(--width);
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
