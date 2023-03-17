import Link from 'next/link';

import { motion } from 'framer-motion';

import styles from './Button.module.css';
import { classes } from '@/utils/styles';

import { Icon } from '../Icon';

export const Button = ({
  className,
  variants,
  as,
  secondary,
  icon,
  weight = 'medium',
  size = 'medium',
  align,
  href,
  disabled,
  children,
  ...rest
}) => {
  const MotionComponent = motion(Link);

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={classes(styles.button, className)}
      data-secondary={secondary}
      data-weight={weight}
      data-size={size}
      data-align={align}
      href={href}
      data-disabled={disabled}
      {...rest}
    >
      {children}
      {icon ? <Icon className={styles.icon} icon={icon} /> : ''}
    </MotionComponent>
  );
};
