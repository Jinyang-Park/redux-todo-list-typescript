import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
      <p>Sparta</p>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  background-color: #e8ffee;
  padding: 20px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
