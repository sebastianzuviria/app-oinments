import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Appointments = ({appointment, deletePacient}) => {

    const deleteDialog = (id) => {
        deletePacient(id)
    }

    return (
        <View style={styles.appointment}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.text}>{appointment.pacient}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.text}>{appointment.propietary}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sintomas: </Text>
                <Text style={styles.text}>{appointment.symptoms}</Text>
            </View>

            <View>
                <TouchableHighlight onPress={() => deleteDialog(appointment.id)} style={styles.btnDelete}>
                    <Text style={styles.textDelete}>Eliminar</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appointment: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    btnDelete: {
        backgroundColor: 'red',
        padding: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    }, 
    text: {
        fontSize: 18,
    },
    textDelete: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default Appointments