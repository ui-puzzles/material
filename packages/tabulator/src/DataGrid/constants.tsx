import React from 'react';
import {
  Image,
  Tag,
  DatePicker,
  Rate,
  Select,
  Progress,
} from '@arco-design/web-react';

import { UILib } from './interface';

export const ROW_HEIGHT = 35;

export const HEADER_ROW_HEIGHT = 35;

export const RendererMapUILib: Record<
  UILib,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, (props: any) => React.ReactNode>
> = {
  [UILib.arco]: {
    image: ({ value }) => <Image src={value} />,
    tag: ({ color, value }) => <Tag color={color}>{value}</Tag>,
    date: ({ value }) => <DatePicker value={value} style={{ width: '100%' }} />,
    rate: ({ value }) => <Rate value={value} />,
    select: ({
      value,
      options,
    }: {
      value: string | number;
      options: { label: string; value: string | number }[];
    }) => (
      <Select value={value}>
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    ),
    process: ({ value }) => <Progress percent={value * 100} width="100%" />,
  },
  [UILib.shadcn]: {},
};
