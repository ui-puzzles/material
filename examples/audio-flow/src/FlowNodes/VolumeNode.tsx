import { Handle, Position } from '@xyflow/react';
import { ChangeEventHandler, useState } from 'react';
import { updateAudioNode } from '../Audio';

export const VolumeNode = ({ id, data }: VolumeNodeProps) => {
  const [gain, setGain] = useState(data.gain);

  const changeGain: ChangeEventHandler<HTMLInputElement> = (e) => {
    const changedValue = +e.target.value;

    setGain(changedValue);
    updateAudioNode(id, {
      gain: changedValue,
    });
  };

  return (
    <div className={'rounded-md bg-white shadow-xl'}>
      <Handle
        className="w-[10px] h-[10px]"
        type="target"
        position={Position.Top}
      />

      <p className={'rounded-t-md p-[4px] bg-blue-500 text-white'}>音量节点</p>
      <div className={'flex flex-col p-[4px]'}>
        <p>Gain</p>
        <input
          className="nodrag"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={gain}
          onChange={changeGain}
        />
        <p className={'text-right'}>{data.gain.toFixed(2)}</p>
      </div>

      <Handle
        className="w-[10px] h-[10px]"
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
};

export interface VolumeNodeProps {
  id: string;
  data: {
    gain: number;
  };
}
