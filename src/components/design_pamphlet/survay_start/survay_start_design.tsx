import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import * as T from './survay_start_components/survay_start_components';
import {
  ButtonStartText1,
  ButtonStartText2,
  LogoText,
  SemiTitleText,
  TitleText,
} from './survay_start_components/survay_start_components.style';
import { ImageImg, StatusBarView } from '../common_components/common_components.style';
import { StyleSheet } from 'react-native-web';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: '#524882',
    borderRadius: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
});

export function SurvayStart({ navigation }: any) {
  return (
    <T.FirstView>
      <StatusBarView></StatusBarView>

      <T.TitleView>
        <TitleText>여행자 유형</TitleText>
        <TitleText>테스트</TitleText>
      </T.TitleView>

      <T.SemiTitleView>
        <SemiTitleText>내 취향을 알면 여행이 쉽다</SemiTitleText>
      </T.SemiTitleView>

      <T.ImageView>
        <ImageImg source={require(`../../../../public/img/survay/survay_start/survay_start.png`)} />
      </T.ImageView>

      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('QuestionNo1')}
      >
        <T.ButtonStartView>
          <ButtonStartText1>테스트 시작하기</ButtonStartText1>
          <ButtonStartText2>지금까지 000,000명이 참여!</ButtonStartText2>
        </T.ButtonStartView>
      </TouchableOpacity>

      <TouchableYes onPress={() => navigation.navigate('QuestionNo1')}></TouchableYes>

      <T.LogoView>
        <LogoText>Yeowoon</LogoText>
      </T.LogoView>
    </T.FirstView>
  );
}

const TouchableYes = styled.TouchableOpacity`
  background-color: '#524882';
  border-radius: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
`;
