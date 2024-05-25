import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tree from 'react-d3-tree';
import './caygiapha.scss';
import { useCenteredTree } from "./helpers";

export const Caygiapha = () => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    document.title = "Cây gia phả";
    const fetchTreeData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3001/caygiapha',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const formattedData = formatTreeData(response.data);
        // console.log(response.data)
        setTreeData(formattedData);
      } catch (error) {
        console.error('Error fetching family tree data:', error);
      }
    };

    fetchTreeData();
  }, []);

  const formatTreeData = (data) => {
    const map = {};

    // Step 1: Create a map of people
    data.forEach(item => {
      map[item.MaThanhVien] = {
        ...item,
        name: item.HoVaTen,
        attributes: {
          GioiTinh: item.GioiTinh,
          NgaySinh: item.NgaySinh,
          Doi: item.Doi,
        },
        children: []
      };
    });

    // Step 2: Construct the tree structure
    const tree = [];
    data.forEach(item => {
      if (item.MaThanhVienCu) {
        // Check if the current person is a spouse
        if (map[item.MaThanhVienCu]) {
          map[item.MaThanhVienCu].children.push(map[item.MaThanhVien]);
        } else {
          tree.push(map[item.MaThanhVien]);
        }
      } else {
        tree.push(map[item.MaThanhVien]);
      }
    });

    // Step 3: Return the root node
    return [tree[0]];
  };

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
    let nodeColor = "black"; // Mặc định màu sắc cho nút

    // Kiểm tra loại nút để áp dụng màu sắc phù hợp
    if (nodeDatum.isRoot) {
      nodeColor = "green"; // Màu cho gốc
    } else if (nodeDatum.isSibling) {
      nodeColor = "blue"; // Màu cho các nút con
    } else if (nodeDatum.isMarried) {
      nodeColor = "red"; // Màu cho các cặp vợ chồng
    }

    return (
      <g>
        <circle r="10" onClick={toggleNode} fill={nodeColor} />
        <text fill="black" strokeWidth="1" x="20" className="rendered-node">
          {nodeDatum.name}
        </text>
        {nodeDatum.attributes?.department && (
          <text fill="black" x="20" dy="20" strokeWidth="1" className="rendered-node">
            Department: {nodeDatum.attributes?.department}
          </text>
        )}
      </g>
    );
  };

  const [translate, containerRef] = useCenteredTree();

  return (
    <div ref={containerRef} className='caygiapha-container'>
      {treeData && (
        <div id="treeWrapper" style={{ width: '100%', height: '100vh' }}>
          <Tree
            data={treeData}
            translate={translate}
            orientation="vertical"
            nodeSize={{ x: 200, y: 100 }}
            separation={{ siblings: 2, nonSiblings: 2 }}
            scaleExtent={{ min: 0.5, max: 2 }}
            renderCustomNodeElement={renderRectSvgNode}
          />
        </div>
      )}
    </div>
  );
};
