import React from 'react';
import { Image } from 'react-native';
import { Title, Container, Subtitle, Button } from '../styles/pages/Welcome';
import { Feather } from '@expo/vector-icons';

import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Image source={wateringImage} style={{
        width: 252,
        height: 248
      }} />

      <Subtitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Subtitle>

      <Button activeOpacity={0.7}>
        <Feather name="chevron-right" style={{
          fontSize: 24,
          color: colors.white
        }} />
      </Button>
    </Container>
  );
}