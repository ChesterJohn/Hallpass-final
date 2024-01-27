
import React, { useRef, useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';
import SignatureCanvas from 'react-native-signature-canvas';


export default function Page() {
    const params = useLocalSearchParams();
    const { name, noun, event } = params;
    const signatureRef = useRef();

    const getDate = () => {
        const today = new Date();
        return today.toLocaleDateString();
    };

    const handleSignatureClear = () => {
        if (signatureRef.current) {
          signatureRef.current.clearSignature();
        }
      };
  
    return (
        <View style={Styles.page}>
  
            <View style={Styles.headerView}>
                <Image
                    source={require('../assets/madlibs2.png')}   
                    style={{ width: '80%', height: 100, marginLeft: 5 }}  
                />
            </View>


            <View style={Styles.subheaderView}>
   

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={Styles.subHeaderText}>HALL PASS</Text> 
                    <Image
                        source={require('../assets/001.png')}  
                        style={{ width: 50, height: 50, marginLeft: 5 }}  
                    />
                </View>
            </View>

            <View style={Styles.bodyView}>
                <Text style={Styles.bodyText}>Date: {getDate()}</Text>
                <Text>
                    <Text style={Styles.dynamicText}>{name}</Text>
                    <Text style={Styles.bodyText}> is too cool</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>for</Text>
                    <Text style={Styles.dynamicText}> {noun} </Text>
                    <Text style={Styles.bodyText}>class.</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>Instead, he/she will be</Text>
                </Text>
                <Text>
                    <Text style={Styles.bodyText}>attending the </Text>
                    <Text style={Styles.dynamicText}>{event}</Text>
                </Text>

            </View>
            

            <View style={Styles.signatureBox}>

                <Text style={Styles.signatureText}>Signed:</Text>
                <SignatureCanvas
                    ref={signatureRef}
                    canvasProps={{
                        width: 400,
                        height: 100,
                        backgroundColor: 'fff',
                        onEnd: () => {

                        },
                    }}
                />
                <Pressable style={Styles.clearButton} onPress={handleSignatureClear}>
                    <Text style={Styles.clearButtonText}>Clear</Text>
                </Pressable>
            </View>

        </View>
    )
}