import React from 'react';
import { Pie } from '@ant-design/plots';

const DonutPie = () => {
  const data = [
    {
      type: 'Pakistan',
      value: 27,
    },
    {
      type: 'India',
      value: 25,
    },
    {
      type: 'England',
      value: 18,
    },
    {
      type: 'Australia',
      value: 15,
    },
    {
      type: 'New Zealand',
      value: 10,
    },
    {
      type: 'South Africa',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.5,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'AntV\nG2Plot',
      },
    },
  };
  return <Pie {...config} />;
};
export default DonutPie;