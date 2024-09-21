import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
import { toggleAudio } from '../Audio';

export const OutputNode = () => {
  const [isRunning, setIsRunning] = useState(false);

  function switchAudio() {
    setIsRunning((isRunning) => !isRunning);
    toggleAudio();
  }

  return (
    <div className="bg-white shadow-xl p-[20px]">
      <Handle
        className="w-[10px] h-[10px]"
        type="target"
        position={Position.Top}
      />

      <div>
        <p>输出节点</p>
        <button onClick={switchAudio}>
          {isRunning ? <span role="img">🔈</span> : <span role="img">🔇</span>}
        </button>
      </div>
    </div>
  );
};
