import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

import Appointments from './components/Appointments/Appoinments';
import Form from './components/Form/Form';

const App = () => {
  const [appointments, setAppointments] = useState([
    {id: '1', pacient: 'hook', propietary: 'Juan', symptoms: 'no come'},
    {id: '2', pacient: 'redux', propietary: 'Sebastian', symptoms: 'no duerme'},
    {id: '3', pacient: 'native', propietary: 'Pedro', symptoms: 'no canta'},
  ]);

  const deletePacient = (id) => {
    setAppointments((prevAppointments) => {
      return prevAppointments.filter(appointment => appointment.id !== id)
    })
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Administrador de Turnos</Text>

        <Form />

        <Text style={styles.title}>{ appointments.length > 0 ? 'Administra tus turnos' : 'No hay turnos'}</Text>
        <FlatList
          data={appointments}
          renderItem={({item}) => <Appointments appointment={item} deletePacient={deletePacient}/>}
          keyExtractor={ap => ap.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default App;
