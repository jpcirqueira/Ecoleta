import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Feather, FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const Detail = () => {

  const navigation = useNavigation();
  
  function handleNavigateBack() {
    navigation.goBack();
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Feather name="arrow-left" color="#34CB79" size={24} />
        </TouchableOpacity>

        <Image
          style={styles.pointImage}
          source={{
            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.rcky.com.br%2Fquanto-fatura-um-mini-mercado-descubra-aqui%2F&psig=AOvVaw1J_7cM-zg4l4cKRtau-j74&ust=1591505393110000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCxwN-x7OkCFQAAAAAdAAAAABAD",
          }}
        />
        <Text style={styles.pointName}>Mercadao do joao</Text>
        <Text style={styles.pointItems}>
          Lampadas, oleo de cozinha
        </Text>

        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço:</Text>
          <Text style={styles.addressContent}>
            Valparaiso
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
          <Feather name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

export default Detail;