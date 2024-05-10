import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [carnet, setCarnet] = useState('');
  const [materia, setMateria] = useState('');
  const [estudiante, setEstudiante] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // Función de agregar 
  const agregarEstudiante = () => {
    const nuevoEstudiante = { id: idCounter + 1, nombre: nombre, carnet: carnet, materia: materia };
    setEstudiante([...estudiante, nuevoEstudiante]);
    setIdCounter(idCounter + 1);
    setNombre('');
    setCarnet('');
    setMateria('');
    setModalVisible(false);
  };
  // Función de eliminar 
  const eliminarEstudiante = (id) => {
    setEstudiante(estudiante.filter((estudiante) => estudiante.id !== id));
  };
  // Diseño de la vistas 
  return (
    <View style={styles.container}>
      <Button
        title="Agregar Estudiante"
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      />
      <FlatList
        data={estudiante}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.estudianteItem}>
            <Text style={styles.estudianteId}>ID: {item.id}</Text>
            <Text style={styles.estudianteNombre}>Nombre: {item.nombre}</Text>
            <Text style={styles.estudianteInfo}>Carnet: {item.carnet}</Text>
            <Text style={styles.estudianteInfo}>Materia: {item.materia}</Text>
            <Button
              title="Eliminar"
              onPress={() => eliminarEstudiante(item.id)}
              color="#FF5733"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nombre del estudiante"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Carnet del estudiante"
              value={carnet}
              onChangeText={setCarnet}
            />
            <TextInput
              style={styles.input}
              placeholder="Materia del estudiante"
              value={materia}
              onChangeText={setMateria}
            />
            <View style={styles.buttonModal}>
              <Button title="Agregar Estudiante" onPress={agregarEstudiante} />
            </View>
            <View style={styles.buttonModal}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#FF5733" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonModal: {
    marginBottom: 10,
    borderRadius: 10,
  },
  estudianteItem: {
    backgroundColor: '#E6E6E6',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  estudianteId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  estudianteNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  estudianteInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 6,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default App;
