import React from 'react';
import { Liquid } from '@ant-design/plots';

export const DemoLiquid = () => {
  const config = {
    percent: 0.75,
    shape: function (x, y, width, height) {
      const r = width / 4;
      const dx = x - width / 2;
      const dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 4,
      distance: 8,
      style: {
        stroke: '#de141b',
        strokeOpacity: 0.65,
      },
    },
    wave: {
      length: 128,
    },
    theme: {
        styleSheet: {
          brandColor: '#de141b',
        },
    },
  };
  return <Liquid {...config} />;
};
