import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, List } from 'react-native-paper';
import { ACTIVIDADES } from './comun/actividades';

function Historia() {
    return (
        <Card style={styles.card}>
            <Card.Title title="Historia" />
            <Card.Content>
                <Text>
                    El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.
                    Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.
                    Gracias!
                </Text>
            </Card.Content>
        </Card>
    );
}

class QuienesSomos extends Component {

    renderItem = ({ item }) => (
        <List.Item
            title={item.nombre}
            style={styles.listItem}
            description={item.descripcion}
            left={() => <List.Icon icon="folder" />}
        />
    );

    render() {
        return (
            <View style={styles.container}>

                <Historia />

                <Card style={styles.card}>
                    <Card.Title title="Actividades" />
                    <Card.Content>
                        <FlatList
                            data={ACTIVIDADES}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card.Content>
                </Card>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2'
  },

  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'chocolate'
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333'
  },

  listItem: {
    paddingVertical: 5
  }
});

export default QuienesSomos;