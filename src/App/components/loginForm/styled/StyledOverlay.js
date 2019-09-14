import styled from "styled-components";
import posed from "react-pose";

const DURATION = 400;
export const transition = {
  type: "tween",
  duration: DURATION
};

export const InnerSignup = posed.div({
  signup: {
    transition,
    x: 0,
    opacity: 1
  },
  login: {
    transition,
    x: "-120%"
  }
});

export const InnerLogin = posed.div({
  login: {
    transition,
    x: 0,
    opacity: 1
  },
  signup: {
    transition,
    x: "120%"
  }
});

export const ButtonInnerLogin = styled(
  posed.span({
    signup: {
      x: 0,
      transition
    },
    login: {
      x: -300,
      transition
    }
  })
)`
  grid-row: 1;
  grid-column: 1;
`;

export const ButtonInnerSignup = styled(
  posed.span({
    signup: {
      x: 300,
      transition
    },
    login: {
      x: 0,
      transition
    }
  })
)`
  grid-row: 1;
  grid-column: 1;
`;

export const Button = styled(
  posed.div({
    signup: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      transition: ({ from, to }) => ({
        duration: DURATION,
        type: "keyframes",
        values: [from, "5rem", to]
      })
    },
    login: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      transition: ({ from, to }) => ({
        duration: DURATION,
        type: "keyframes",
        values: [from, "5rem", to]
      })
    }
  })
)`
  overflow: hidden !important;
  display: grid;
`;

export default styled(
  posed.div({
    signup: {
      x: 0,
      transition
    },
    login: {
      x: "100%",
      transition
    }
  })
)`
  z-index: 1;
  background: ${({ theme }) => theme.gradient};
  align-self: stretch;
  color: white;
  display: grid;
  align-content: center;
  justify-items: center;
  overflow: hidden;

  p {
    padding: 0 2rem 1rem;
  }

  .inner {
    grid-row: 1;
    grid-column: 1;
  }
`;
