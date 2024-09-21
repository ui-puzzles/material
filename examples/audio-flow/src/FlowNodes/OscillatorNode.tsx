import { Handle, Position } from '@xyflow/react';
import { ChangeEventHandler, useState } from 'react';
import { updateAudioNode } from '../Audio';

export const OscillatorNode = ({ id, data }: OscillatorProps) => {
  const [frequency, setFrequency] = useState(data.frequency);
  const [type, setType] = useState(data.type);

  const handleChangeFrequency: ChangeEventHandler<HTMLInputElement> = (e) => {
    const changedFrequency = +e.target.value;

    setFrequency(changedFrequency);
    updateAudioNode(id, {
      frequency: changedFrequency,
    });
  };

  const handleChangeType: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const curType = e.target.value;

    setType(curType);

    updateAudioNode(id, {
      type: curType,
    });
  };

  return (
    <div className={'bg-white shadow-xl'}>
      <p className={'rounded-t-md p-[8px] bg-pink-500 text-white'}>
        振荡器节点
      </p>
      <div className={'flex flex-col p-[8px]'}>
        <span>频率</span>
        <input
          type="range"
          min="10"
          max="1000"
          className="nodrag"
          onChange={handleChangeFrequency}
          value={frequency}
        />
        <span className={'text-right'}>{frequency}赫兹</span>
      </div>
      <hr className={'mx-[4px]'} />
      <div className={'flex flex-col p-[8px]'}>
        <p>波形</p>
        <select value={type} onChange={handleChangeType}>
          <option value="sine">正弦波</option>
          <option value="triangle">三角波</option>
          <option value="sawtooth">锯齿波</option>
          <option value="square">方波</option>
        </select>
      </div>
      <Handle
        type="source"
        className="w-[10px] h-[10px]"
        position={Position.Bottom}
      />
    </div>
  );
};

export interface OscillatorProps {
  id: string;
  data: {
    frequency: number;
    type: string;
  };
}
