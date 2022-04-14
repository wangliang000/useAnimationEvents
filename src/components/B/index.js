import React from 'react';
const B = ({ children, name }) => {
  console.log(name, 'name');
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ height: 'calc(100vh - 40px)', background: '#f90' }}>
        <div>菜单1</div>
        <div>菜单2</div>
        <div>菜单3</div>
        <div>菜单4</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default B;
