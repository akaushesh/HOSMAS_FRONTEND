import * as React from 'react';
import QRCode from 'react-qr-code';

export default function Pass(): React.JSX.Element {
  return <QRCode style={{ aspectRatio: '1/1', marginLeft: '50%', transform: 'translateX(-50%)' }} value="Hall Pass" />;
}
