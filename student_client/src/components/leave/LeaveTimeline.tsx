import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Box } from '@mui/material';

const timelineSteps = ['Details', 'Confirmation', 'Hall Pass'];

interface LeaveTimelineProps {
  phase: number;
}

export default function LeaveTimeline({ phase }: LeaveTimelineProps): React.JSX.Element {
  return (
    <Box sx={{ width: '100%', minHeight: '300px' }}>
      {' '}
      <Timeline
        sx={{
          [`& .MuiTimelineItem-root:before`]: {
            flex: 0,
            padding: 0,
          },
          '& .MuiTimelineConnector-root': {
            minHeight: '5rem',
          },
          '& .MuiTimelineContent-root': {
            py: 0.5,
          },
        }}
      >
        {timelineSteps.map((step, index) => (
          <TimelineItem key={step}>
            <TimelineSeparator>
              <TimelineDot
                variant={phase === index ? 'filled' : 'outlined'}
                color={phase === index ? 'primary' : 'grey'}
              />
              {index < timelineSteps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{step}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
