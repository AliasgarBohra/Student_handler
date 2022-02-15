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
import Signup from "./Signup";
 const Login = () => {
  return (
    <>
      <StyledContainer>
        <StatusBar></StatusBar>
        <InnerContainer>
         
            <PageLogo
              source={require("../../asset/chat.jpg")}
              alt="Studethandelr"
            />
          
          <SubTilte>Account Login </SubTilte>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
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
                  keyboardType="email-address"
                  secureTextEntry={true}
                />
                <MesgBox>...</MesgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line></Line>
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color='white'/>
                  <ButtonText  >Sign up</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>
                    Dot have an account already?
                  </ExtraText>
                  <TextLink>
                    <TextLinkContent onClick={()=>{<Signup></Signup>}}>
                      Sign-up
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

export default Login;
