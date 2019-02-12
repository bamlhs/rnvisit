import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';


const CustomizedButton = ({
    title,onPress
}) => (
    <View>
        <Button 
        buttonStyle={{backgroundColor: 'white', 
        borderColor: 'rgb(107,209,61)',
        borderRadius: 10,
        borderWidth: 1,
    }}
        containerStyle={{padding: 10, margin: 10,}}
        titleStyle={{
            fontSize: 22,
            fontWeight: "bold",
            fontStyle: "normal",
            textAlign: "left",
            color: "#707070"
          
        }}
        title={title} onPress={onPress}/>
    </View>
);

export default CustomizedButton;
