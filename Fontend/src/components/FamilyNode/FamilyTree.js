// src/components/FamilyNode/FamilyTree.jsx
import React from "react";
import styled from "styled-components";
import Member from "./member";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => `${props.level * 30}px`};
`;

const FamilyTree = ({ members, level = 0 }) => {
  return (
    <StyledWrapper level={level}>
      {members.map((member, i) => (
        <div key={`level-${level}-${i}`}>
          <Member {...member} />
          {member.children && member.children.length > 0 && (
            <FamilyTree members={member.children} level={level + 1} />
          )}
        </div>
      ))}
    </StyledWrapper>
  );
};

export default FamilyTree;
