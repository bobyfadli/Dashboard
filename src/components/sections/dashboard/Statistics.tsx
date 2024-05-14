import { Stack } from '@mui/material';
import { useState } from 'react';
import SingleStatistic from './SingleStatistic';
import { getChartOption } from 'helpers/getChartOption';

const Statistics = () => {
  const [selectedButtonBar, setSelectedButtonBar] = useState('Day');
  const [selectedButtonArea, setSelectedButtonArea] = useState('Day');

  const handleClickBar = (buttonName: string) => {
    setSelectedButtonBar(buttonName);
  };

  const handleClickArea = (buttonName: string) => {
    setSelectedButtonArea(buttonName);
  };

  return (
    <Stack
      columnGap={{ lg: 3.75 }}
      rowGap={{ xs: 3.75, lg: 0 }}
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent={{ lg: 'space-between' }}
    >
      <SingleStatistic
        title="Miles"
        subtitle="256 Miles"
        flexDirection="row"
        buttonTexts={['Day', 'Week', 'Month']}
        buttonVariant={selectedButtonBar}
        onHandleClickButton={handleClickBar}
        chartOption={getChartOption('bar', selectedButtonBar)}
      />
      <SingleStatistic
        title="Car"
        subtitle="20 February 2022"
        flexDirection="row-reverse"
        buttonTexts={['Day', 'Week', 'Month']}
        buttonVariant={selectedButtonArea}
        onHandleClickButton={handleClickArea}
        chartOption={getChartOption('area', selectedButtonArea)}
        buttonColor="warning"
      />
    </Stack>
  );
};

export default Statistics;
