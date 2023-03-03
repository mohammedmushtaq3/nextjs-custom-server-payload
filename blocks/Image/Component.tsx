import React from 'react';
import NextImage from 'next/image';
import { Type } from '.';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export const sizes = [
  480,
  1024,
  1280,
  1920,
  2560,
];

export const ImageComponent: React.FC<Type> = (props) => {
  const { image, type, caption } = props;

  if (typeof image === 'object') {
    let filenameToRender = image.filename;
    let { width } = image;
    let { height } = image;

    if (image.sizes[type]) {
      filenameToRender = image.sizes[type];
      width = image.sizes[type].width;
      height = image.sizes[type].height;
    }

    const sizesToUse = sizes.map((size) => `(max-width: ${size}px) ${size}px`).join(', ');

    return (
      <div className={`${classes.wrap} ${classes[type]}`}>
        <NextImage
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
          alt={image.alt}
          sizes={sizesToUse}
          width={width}
          height={height}
          style={{ objectFit: 'cover', height: 'auto' }}
          priority
        />
        {caption && (
          <RichText
            className={classes.caption}
            content={caption}
          />
        )}
      </div>
    );
  }

  return null;
};
