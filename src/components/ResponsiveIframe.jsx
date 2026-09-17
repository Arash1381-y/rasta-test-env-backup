import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useWindowSize} from '@docusaurus/theme-common';

export default function ResponsiveIframe({
  src,
  width = 800,
  heightLarge = 240,
  heightSmall = 700,
  breakpoint = 768,
  style,
  ...rest
}) {
  const {width: w} = useWindowSize();
  const h = w && w <= breakpoint ? heightSmall : heightLarge;
  const resolvedSrc = useBaseUrl(src);

  return (
    <iframe
      src={resolvedSrc}
      width={width}
      height={h}
      style={{borderRadius: '8px', ...style}}
      {...rest}
    />
  );
}
