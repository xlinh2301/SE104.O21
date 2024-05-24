// src/components/FamilyNode.jsx
import React from 'react';

const FamilyNode = ({ node, style }) => {
  return (
    <div style={style}>
      <div>{node.name}</div>
      {/* Add more details or styles as needed */}
    </div>
  );
};

export default FamilyNode;
