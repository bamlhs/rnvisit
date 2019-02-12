import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");


const CustomizedListItem = ({
    item,
}) => (
    <View style={{flex: 1, marginTop: 10, backgroundColor: '#fff',}}>
       <View style={{ flex: 8, 
       justifyContent: 'center', alignItems: 'center',}}>
            <Image source={{uri: item.thumb}} 

            style={{
                borderRadius: 40,
                 margin: 10, padding: 10,
                width: width*0.9, height: height/2.4}} />
       </View>
       <View style={{ flex: 2, flexDirection: 'row',}}>
       <View style={{ flex: 2,}}>
        <Text style={{
              opacity: 0.9,
              fontSize: 18,
              fontWeight: "normal",
              fontStyle: "normal",
              lineHeight: 21,
              letterSpacing: 0,
              textAlign: "left",
              color: "#000000"
        }}>
        {item.name}
        </Text>
        <Text style={{

              opacity: 0.5,
              fontSize: 15,
              fontWeight: "300",
              fontStyle: "normal",
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: "left",
              color: "#000000"
        }}>
        {item.category}
        </Text>
       </View>
       <View style={{backgroundColor: 'yellow', flex: 1,}}></View>
       </View>
    </View>
);

export default CustomizedListItem;
