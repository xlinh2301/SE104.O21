import React from "react";
import ReactFamilyTree from "react-family-tree";
import FamilyNode from "~/components/FamilyNode/FamilyNode"; // Define your FamilyNode component

const WIDTH = 70;
const HEIGHT = 80;

export const Caygiapha = () => {
  // Mock family tree data
  const familyTreeNodes = [
    { id: 1, name: "John", parentId: null },
    { id: 2, name: "Alice", parentId: 1 },
    { id: 3, name: "Bob", parentId: 1 },
    { id: 4, name: "Carol", parentId: 2 },
    // Add more nodes as needed
  ];

  const rootId = 1; // ID of the root node

  return (
    <ReactFamilyTree
      nodes={familyTreeNodes}
      rootId={rootId}
      width={WIDTH}
      height={HEIGHT}
      renderNode={(node) => (
        <FamilyNode
          key={node.id}
          node={node}
          style={{
            width: WIDTH,
            height: HEIGHT,
            transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
          }}
        />
      )}
    />
  );
};

