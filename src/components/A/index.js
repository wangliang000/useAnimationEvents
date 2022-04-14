import React from 'react';
const A = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>手机📱</div>
        <div>电脑💻</div>
        <div>显示器🖥</div>
        <div>主机</div>
      </div>
      {React.cloneElement(children, { name: 1 })}
    </div>
  );
};

export default A;

//给他children传参数
// React.cloneElement(children, { name: 1 });
