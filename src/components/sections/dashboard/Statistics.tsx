import { Grid } from '@mui/material';
import { graphic } from 'echarts';
import { useState } from 'react';
import SingleStatistic from './SingleStatistic';

const Statistics = () => {
  const [selectedButtonBar, setSelectedButtonBar] = useState('Day');
  const [selectedButtonArea, setSelectedButtonArea] = useState('Day');

  const handleClickBar = (buttonName: string) => {
    setSelectedButtonBar(buttonName);
  };

  const handleClickArea = (buttonName: string) => {
    setSelectedButtonArea(buttonName);
  };

  const barChartOption = {
    color: ['#2884FF'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      backgroundColor: '#282B32',
      textStyle: {
        color: 'white',
        fontSize: 10,
      },
      valueFormatter: (value: number) => {
        if (value < 100) return `${value}`;
        else return `${value}k`;
      },
    },

    grid: {
      left: '-4%',
      // left: '0',
      right: '-4%',
      // right: '1',
      top: '0',
      bottom: '12%',
    },

    textStyle: {
      fontFamily: 'DM Sans',
      fontWeight: 400,
    },

    xAxis: [
      {
        type: 'category',
        data: ['1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#F2F2F2',
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: { fontSize: 14 },
      },
    ],

    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],

    series: [
      {
        type: 'bar',
        barWidth: '20%',
        data: [120, 80, 157, 60, 130, 40, 90],
        cursor: 'none',
        emphasis: {
          focus: 'series',
          // itemStyle: {
          //   color: '#2884FF',
          // },
        },
      },
    ],
  };

  const areaChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      backgroundColor: '#282B32',
      textStyle: {
        color: 'white',
        fontSize: 10,
      },
      valueFormatter: (value: number) => {
        return value;
      },
    },

    xAxis: {
      type: 'category',
      data: ['5 am', '7 am', '9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', '9 pm', '11pm'],
      axisTick: {
        // show: false
        show: true,
        inside: true,
        alignWithLabel: true,
        length: 300,
        lineStyle: {
          color: ['#F2F2F2'],
        },
      },

      boundaryGap: false,
      splitLine: {
        // show: true,
        // lineStyle: { color: ['#F2F2F2'] },
        show: false,
      },
      splitArea: {
        show: false,
      },

      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#808191',
        fontFamily: 'DM Sans',
        fontSize: 14,
        fontWeight: 400,
      },
    },

    yAxis: {
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },

    grid: {
      left: '-5%',
      // left: 0,
      right: '-5%',
      top: '0',
      bottom: '12%',
    },
    series: [
      {
        data: [500, 620, 932, 801, 934, 1290, 1130, 1020, 1300, 1200],
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 1, color: '#FF764C' },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(255, 118, 76, 0.24)',
            },
            {
              offset: 1,
              color: 'rgba(255, 126, 7, 0)',
            },
          ]),
        },
      },
    ],
  };

  return (
    <Grid container spacing={3.75}>
      <SingleStatistic
        title="Miles"
        subtitle="256 Miles"
        flexDirection="row"
        buttonTexts={['Day', 'Week', 'Month']}
        buttonVariant={selectedButtonBar}
        onHandleClickButton={handleClickBar}
        chartOption={barChartOption}
      />
      <SingleStatistic
        title="Car"
        subtitle="20 February 2022"
        flexDirection="row-reverse"
        buttonTexts={['Day', 'Week', 'Month']}
        buttonVariant={selectedButtonArea}
        onHandleClickButton={handleClickArea}
        chartOption={areaChartOption}
        buttonColor="warning"
      />
    </Grid>
  );
};

export default Statistics;
