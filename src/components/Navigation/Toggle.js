import React from 'react';

const Toggle = ({ toggle }) => (
  <div
    onClick={toggle}
    style={{
      position: 'absolute',
      bottom: 15,
      right: 15,
      width: 40,
      height: 40,
      backgroundColor: 'Cyan',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        height: 25,
        width: 20,
      }}
    >
      <svg
        id="Layer_1"
        style={{
          enableBackground: 'new 0 0 32 32',
        }}
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            'M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z' +
            ' M28,14H4c-1.104,0-2,0.896-2,2' +
            ' s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z' +
            ' M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z'
          }
        />
      </svg>
    </div>
  </div>
);

export default Toggle;
