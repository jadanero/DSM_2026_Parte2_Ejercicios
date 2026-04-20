import { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { EXCURSIONES } from './comun/excursiones';
import { COMENTARIOS } from './comun/comentarios';
import { baseUrl } from './comun/comun';


function RenderExcursion(props) {
  const excursion = props.excursion;

  if (excursion != null) {
    return (
      <Card style={styles.card}>

        <ImageBackground
          source={ {uri: baseUrl + excursion.imagen} }
          style={styles.image}
        >

          <Text style={styles.title}>{excursion.nombre}</Text>
        </ImageBackground>
        <Card.Content>
          <Text style={styles.descripcion}>
            {excursion.descripcion}
          </Text>
          <View style={styles.iconoContainer}>
            <IconButton
              icon={props.favorita ? 'heart' : 'heart-outline'}
              size={28}
              onPress={() =>
                props.favorita
                  ? console.log('La excursión ya es favorita')
                  : props.onPress()
              }
            />
          </View>
        </Card.Content>
      </Card>
    );
  } else {
    return <View />;
  }
}

function RenderComentario(props) {
  const { comentarios } = props;

  return (
    <Card style={styles.card}>
      <Card.Title title="Comentarios" />

      <Card.Content>
        {
          comentarios.map((item) => {
            const fecha = new Date(item.dia.replace(/\s/g, ''));
            return (
              <View key={item.id} style={{ marginBottom: 20 }}>
                <Text>{item.comentario}</Text>
                <Text>{'⭐'.repeat(item.valoracion)}</Text>
                <Text>{item.autor}</Text>
                <Text>
                  {fecha.toLocaleDateString()} {fecha.toLocaleTimeString()}
                </Text>
              </View>
            );
          })
        }
      </Card.Content>
    </Card>
  );
}

class DetalleExcursion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excursiones: EXCURSIONES,
      comentarios: COMENTARIOS,
      favoritos: []
    };
  }

  marcarFavorito(excursionId) {
    if (!this.state.favoritos.includes(excursionId)) {
      this.setState({
        favoritos: this.state.favoritos.concat(excursionId)
      });
    }
  }

  render() {
    const { excursionId } = this.props.route.params;
    return (
      <ScrollView>
        <RenderExcursion
          excursion={this.state.excursiones[+excursionId]}
          favorita={this.state.favoritos.some(el => el === +excursionId)}
          onPress={() => this.marcarFavorito(+excursionId)}
        />
        <RenderComentario
          comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
  },
  image: {
    marginHorizontal: 0,
  },
  descripcion: {
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    textAlign: 'center',
  },
  cardTitle: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    justifyContent: 'flex-end'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontSize: 25,
    padding: 10,
  },
  iconoContainer: {
    alignItems: 'center',
    marginBottom: 8,
  }
});

export default DetalleExcursion;