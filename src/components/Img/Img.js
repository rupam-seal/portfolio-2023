import { useEffect } from 'react';
import Link from 'next/link';

import { classes } from '@/utils/styles';
import styles from './Img.module.css';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Img Component.
 *
 * @param {Component} as - The HTML element type for the component.
 * @param {String} src - The image source URL.
 * @param {String} className - The CSS class name for the component.
 * @param {String} href - The URL for the link, if the image should be clickable.
 * @param {Object} variants - The animation variants for the motion component.
 * @param {Boolean} rounded - Whether the image should have rounded corners.
 * @param {String} placeholder - The URL for the placeholder image.
 * @returns {Component} The Image component.
 */

export const Img = ({
  as,
  src,
  alt = '',
  className,
  href,
  variants = {},
  rounded = false,
  target = '_blank',
  ...rest
}) => {
  const Component = as || motion.div;

  return (
    <>
      <Component
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={(classes(styles.container), className)}
        {...rest}
      >
        {href ? (
          <Link target={target} href={href} {...rest}>
            <Image
              className={styles.image}
              data-rounded={rounded}
              width={560}
              height={321.38}
              layout="responsive"
              src={src}
              alt={alt}
            ></Image>
          </Link>
        ) : (
          <Image
            className={styles.image}
            data-rounded={rounded}
            width={560}
            height={321.38}
            src={src}
            alt={alt}
          ></Image>
        )}
      </Component>
    </>
  );
};
