import React from 'react';

export default function AddTemplate(props) {
  return (
    <div>
      <input
        type="text"
        onKeyDown={({ key, target }) => {
          if (key === 'Enter') {
            props.onAdd({ name: target.value });
            target.value = '';
          }
        }}
      />
    </div>
  );
}
