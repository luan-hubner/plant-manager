import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import fonts from "../fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding: 24px 18px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 32px;
  text-align: center;
  line-height: 38px;
  margin-top: 42px;
  color: ${colors.heading};
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;

  text-align: center;

  color: ${colors.heading};

  padding: 0px 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;

  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;
