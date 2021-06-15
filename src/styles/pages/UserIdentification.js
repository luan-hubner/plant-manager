import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import fonts from "../fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 54px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  text-align: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  font-size: 18px;
  margin-top: 40px;
  padding: 10px;
  text-align: center;

  font-family: ${fonts.text};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 23px;

  text-align: center;

  color: #5c6660;

  opacity: 0.5;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 90%;
`;

export const Agroup = styled.View`
  align-items: center;
`;
