// src/components/FamilyNode/Member.jsx
import React from "react";
import styled from "styled-components";
import { MdPerson } from "react-icons/md";

const StyledWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Member = ({ HoVaTen, NgaySinh, Doi }) => {
  const defaultAvatar = <MdPerson style={{ fontSize: 50 }} />;
  return (
    <StyledWrapper>
      {defaultAvatar}
      <span>{HoVaTen}</span>
      <span>{NgaySinh}</span>
      <span>Doi: {Doi}</span>
    </StyledWrapper>
  );
};

export default Member;
