import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';




const App = () => {
  const [valueLat,setLatValue]=useState(null)
  const [ValueLong,setLongValue] = useState(null)

  useEffect (()=>{
    Geolocation.getCurrentPosition(
      (info) =>{
        setLatValue(info.coords.latitude),
        setLongValue(info.coords.longitude)
  
      }
    
    )
  },[]);

  return (
    <View style={styles.container}>
    
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}  // Use PROVIDER_GOOGLE constant
        showsUserLocation={true}
        region={{
          latitude: valueLat||37.78825,  
          longitude: ValueLong||-122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude:valueLat||37.78825, longitude: ValueLong||-122.4324}} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App;
