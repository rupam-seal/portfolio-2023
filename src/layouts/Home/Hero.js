import React, { memo } from 'react';

import { classes } from '../../utils/styles';
import styles from './Hero.module.css';

import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { DecoderText } from '../../components/DecoderText';
import { Section } from '../../components/Section';
import { A } from '../../components/A';

import {
  scaleVariant,
  staggerContainer,
  textVariant,
} from '../../utils/motion';

import Spline from '@splinetool/react-spline';
import { SectionBottom } from '../../components/SectionBottom';
import { Icon } from '@/components/Icon';

export const Hero = memo(({ sectionRef }) => {
  return (
    <Section
      className={classes(styles.section)}
      fullscreen={true}
      align={'center'}
      justify={'center'}
      ref={sectionRef}
    >
      <Container
        className={classes(styles.intro)}
        direction="column"
        zIndex={2}
      >
        <h1 className={styles.name}>
          <DecoderText text="Nilax Seal" delay={1000}></DecoderText>
        </h1>
        <Heading
          level={0}
          className={styles.title1}
          align="center"
          weight="bold"
          variants={textVariant(0.2)}
        >
          ANDROID<span className={styles.line}>/</span>
        </Heading>
        <Heading
          level={0}
          className={styles.title2}
          align="center"
          weight="bold"
          variants={textVariant(0.2)}
        >
          WEB DEVELOPER
        </Heading>

        <Text
          size="m"
          weight="medium"
          align="center"
          variants={textVariant(0)}
          className={styles.description}
        >
          NilaX — Android / UI-UX / Web Developer freelance located in India,
          specializing in the creation of modern and user freindly and unique
          android and web designs.
        </Text>
      </Container>
      <Container className={styles.blob} zIndex={1}>
        <Spline scene="https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode" />
      </Container>
      <SectionBottom>
        <Container align="center" variants={scaleVariant}>
          <div className={styles.scroll}></div>
          <Container direction={'column'}>
            <Text weight="regular" size="s">
              Keep —
            </Text>
            <Text weight="regular" size="s">
              Scrolling
            </Text>
          </Container>
        </Container>
        <Container direction={'column'} variants={scaleVariant}>
          <Text weight="regular" size="s" align="end">
            Available for work
          </Text>
          <Text className={styles.talk} weight="regular" size="s">
            <A icon="leftCircle" link="/contact">
              Lets talk
            </A>
          </Text>
        </Container>
      </SectionBottom>
    </Section>
  );
});

Hero.displayName = 'Hero';
