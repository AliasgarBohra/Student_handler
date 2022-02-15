import React from "react";
import { View } from "react-native";
import {
  StyledContainer,
  PageTitle,
  PageLogo,
  InnerContainer,
  SubTilte,
  StyledFormArea,
  StyledTextInput,
  ButtonText,
  StyledButton,
  RightIcon,
  LeftIcon,
  StyledInputLabel,
  MesgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent
} from "./../Components/Styles";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { TextInput, Button } from "react-native-paper";
import {Fontisto} from '@expo/vector-icons';
 const Signup = () => {
  return (
    <>
      <StyledContainer>
        <StatusBar></StatusBar>
        <InnerContainer>
          <PageTitle>Students Handler</PageTitle>
          <SubTilte>Account Signup </SubTilte>
          <Formik
            initialValues={{ name:"", email: "", password: "",conformPassword:"" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                  <TextInput
                  mode="outlined"
                  label="Name"
                  placeholder=" enter your full  name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  mode="outlined"
                  label="Email Address"
                  placeholder="Email your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  mode="outlined"
                  label="Password"
                  placeholder="* * * * * *  "
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={true}
                />
                <TextInput
                  mode="outlined"
                  label="Confirm Password"
                  placeholder="* * * * * *  "
                  onChangeText={handleChange("conformPassword")}
                  onBlur={handleBlur("conformPassword")}
                  value={values.conformPassword}
                  secureTextEntry={true}
                />
                <MesgBox>...</MesgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Signup</ButtonText>
                </StyledButton>
                <Line></Line>
                
                <ExtraView>
                  <ExtraText>
                     have an account already?
                  </ExtraText>
                  <TextLink>
                    <TextLinkContent>
                      Login
                    </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </View>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

export default Signup;
