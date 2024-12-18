import * as React from 'react';
import { Box, Skeleton } from '@mui/material';

interface PropsType {
  src: string;
  height?: string | undefined;
  width?: string | undefined;
  alt: string | undefined;
  style?: React.CSSProperties | undefined;
  srcSet?: string | undefined;
  loading?: 'eager' | 'lazy' | undefined;
}

export default function ImageSkeleton({
  src,
  height,
  width,
  alt,
  style,
  srcSet
}: PropsType): React.JSX.Element {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleImageLoad = (): void => {
    setIsLoading(false);
  };

  return (
    <Box
      position="relative"
      height={height || '100%'}
      width={width || '100%'}
      overflow="hidden"
      borderRadius="8px"
    >
      {isLoading ? <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ position: 'absolute', top: 0, left: 0 }}
        /> : null}
      <img
        src={src}
        alt={alt || ''}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 300ms ease-in-out',
          ...style, // Merge user-provided styles
        }}
		loading={isLoading ? 'eager' : 'lazy'}
		srcSet={srcSet||""}
        onLoad={handleImageLoad}
      />
    </Box>
  );
}
