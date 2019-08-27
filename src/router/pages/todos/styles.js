import styled from 'styled-components'


const StyledHeader = styled.div`
  .app-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .done {
    color: grey
  }
`;

export default StyledHeader