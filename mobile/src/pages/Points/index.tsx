import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Feather } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';
import styles from './styles';


interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
}

const Points = () => {
  const navigation = useNavigation();


  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail(id: number) {
    navigation.navigate('Detail', { point_id: id });
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34CB79" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Bem vindo.</Text>
        <Text style={styles.description}>
          Encontre no mapa um pronto de coleta.
        </Text>

        <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion= {{
                latitude: -16.0734057,
                longitude: -47.9713124,
                latitudeDelta: 0.014,
                longitudeDelta:  0.014,
              }}
            >  
            <Marker
            onPress={handleNavigateToDetail}
            style={styles.mapMarker} 
            coordinate={{
                latitude: -16.0734057,
                longitude: -47.9713124,
            }}
            > 
            <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.rcky.com.br%2Fquanto-fatura-um-mini-mercado-descubra-aqui%2F&psig=AOvVaw1J_7cM-zg4l4cKRtau-j74&ust=1591505393110000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCxwN-x7OkCFQAAAAAdAAAAABAD" }} />
                <Text style={styles.mapMarkerTitle}>mercado</Text>
            </View>
            </Marker>
            </MapView>
        </View>
      </View>

      <View style={styles.itemsContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >    
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {}}
            >
              <SvgUri width={42} height={42} uri="http://192.168.0.103:3333/uploads/lampadas.svg" />
              <Text style={styles.itemTitle}>lampadas</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Points;