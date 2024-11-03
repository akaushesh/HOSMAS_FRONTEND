import * as React from 'react';
import { leaveUrl } from '@/services/api';
import { type Leave } from '@/services/leave';
import QRCode from 'react-qr-code';

export default function Pass({ latestLeave }: { latestLeave: Leave }): React.JSX.Element {
  const id = latestLeave?.id.toString();

  return (
    <QRCode
      style={{ aspectRatio: '1/1', marginLeft: '50%', transform: 'translateX(-50%)' }}
      value={`${leaveUrl}leave/verify/${id}/`}
    />
  );
}
