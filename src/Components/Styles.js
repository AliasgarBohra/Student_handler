import styled from "styled-components/native";
import { View, Image, Text,Button,TouchableOpacity,TextInput } from "react-native";
import Constants from "expo-constants";


const StatusBarHeight = Constants.statusBarHeight;
///colors
export const Colors = {
  primary: "white",
  secondary: "blue",
  tertiary: "black",
  darklight: "grey",
};
const { primary, secondary, tertiary, darklight } = Colors;

export const StyledContainer = styled.View`
flex:1;
background-color:white;
padding:2%;

`;
export const InnerContainer = styled.View`


`;
export const PageLogo = styled.Image`
width: 200px;
height: 200px;
  
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;
export const SubTilte = styled.Text`
  font-size: 18px;
  margin-bottom: 28px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
`;
export const StyledTextInput = styled.TextInput`
  backgrround-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;
export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  postion: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  postion: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
padding :15px;
background-color:blue;
justify-content:center;
align-items:center;
border-radius:5px;
margin-vertical:5px;
height:60px;
${(props)=>props.google == true && `background-color:green;`
};
`;



export const ButtonText=styled.Text` 
color:${primary};
font-size:16px;
`;

export const MesgBox=styled.Text`
text-align:center; 
font-size:13px;                               
`;

export const  Line=styled.View`
height:1px;
width:100%;
background-color:black;
margin-vertical:10px
`;

export const ExtraView=styled.View`
justify-content:center;
flex-direction:row;
align-items:center;
padding:18px;
`;

export const ExtraText=styled.Text` 
justify-content:center;
align-items:center;
font-size:15px;
color:${tertiary};
`;

export const TextLink=styled.TouchableOpacity` 
justify-content:center;
align-items:center;
`;

export const TextLinkContent=styled.Text`
font-size:15px;

`;





















