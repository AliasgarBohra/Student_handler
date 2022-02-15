import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text ,View,ScrollView} from 'react-native';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
// Post's....

export default function Home() {

    const edges = useSafeAreaInsets();

    return (
        <View>
            <ScrollView>
                <View style={{
                paddingTop:100
                }}>
                   <Login>

                   </Login>
                </View>
            </ScrollView>
        </View>
    );
}