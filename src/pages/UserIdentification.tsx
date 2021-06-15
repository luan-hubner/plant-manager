import React, { useState } from 'react';
import {
  Container,
  Content,
  Form,
  Emoji,
  Input,
  Title,
  Footer,
  Agroup
} from '../styles/pages/UserIdentification';

import { Button } from '../components/Button';
import { Platform } from 'react-native';
import colors from '../styles/colors';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Form>
          <Agroup>
            <Emoji>
              { isFilled ? '😄️' : '😀️' }
            </Emoji>

            <Title>
              Como podemos chamar você?
            </Title>
          </Agroup>

          <Input
            style={[
              (isFocused || isFilled) && { borderColor: colors.green },
            ]}
            placeholder="Digite um nome"
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />

          <Footer>
            <Button />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}