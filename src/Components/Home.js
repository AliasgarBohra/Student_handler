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
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: (edges.top + 65),
                    paddingBottom: 25
                }}>
               <Text>
                   <Login></Login>
               </Text>
                </View>
            </ScrollView>
        </View>
    );
}