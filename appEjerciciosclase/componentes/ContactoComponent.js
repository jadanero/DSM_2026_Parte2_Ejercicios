import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

function Contacto() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Contacto" />
        <Card.Content>
          <Text>Kaixo Mendizale!</Text>

          <Text style={styles.text}>
            Si quieres participar en las salidas de montaña que organizamos o quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a través de diferentes medios. Puedes llamarnos por teléfono los jueves de las semanas que hay salida (de 20:00 a 21:00). También puedes ponerte en contacto con nosotros escribiendo un correo electrónico, o utilizando la aplicación de esta página web. Y además puedes seguirnos en Facebook.
          </Text>
          <Text>Tel: +34 948 277151</Text>
          <Text>Email: gaztaroa@gaztaroa.com</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  text: {
    marginVertical: 10
  }
});

export default Contacto;