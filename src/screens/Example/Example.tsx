import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Brand } from '../../components';

const Example = () => {

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{  
        height: '100%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
      }}
    >
      <View
        style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative'}}
      >
        <View
          style={
            {
              height: 300,
              width: 300,
              transform: [{ translateY: 40 }],
              position: 'absolute'
            }
          }
        >
          <Brand height={300} width={300} />
          <Text style={{ textAlign: 'center' }}>Home Screen</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Example;
