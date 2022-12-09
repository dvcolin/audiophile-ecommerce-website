import { AssetBreakpoint } from '@/hygraph/sdk';
import styles from '@/styles/components/Picture.module.scss';
import type { BaseComponentProps } from '@/types/components';
import { classNames } from '@/utils/styles';

import { ProductPageProps } from './ProductPage';

interface PictureProps extends BaseComponentProps {
  images: ProductPageProps['featuredImage'];
}

const imageOrder = [
  AssetBreakpoint.Desktop,
  AssetBreakpoint.Tablet,
  AssetBreakpoint.Mobile
];

const sourceBreakpoints = {
  [AssetBreakpoint.Desktop]: '75em',
  [AssetBreakpoint.Tablet]: '48em'
};

const cn = classNames.bind(null, styles);

export default function Picture({ images, className }: PictureProps) {
  const sortedImages = images.sort((a, b) => {
    return a.breakpoint && b.breakpoint
      ? imageOrder.indexOf(a.breakpoint) - imageOrder.indexOf(b.breakpoint)
      : -1;
  });
  return (
    <picture className={cn('container', className)}>
      <>
        {sortedImages.map(({ id, breakpoint, url, width, height, altText }) => {
          return breakpoint && breakpoint !== AssetBreakpoint.Mobile ? (
            <source
              key={id}
              className={styles.image}
              type="image/webp"
              media={`(min-width: ${sourceBreakpoints[breakpoint]})`}
              srcSet={url}
              width={width || undefined}
              height={height || undefined}
            />
          ) : (
            <img
              key={id}
              className={styles.image}
              src={url}
              width={width || undefined}
              height={height || undefined}
              alt={altText || undefined}
              decoding="async"
              loading="lazy"
            />
          );
        })}
      </>
    </picture>
  );
}
