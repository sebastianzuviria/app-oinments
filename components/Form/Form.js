import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Form = () => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    //Date-Picker
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirmDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
        const dateToSave = date.toLocaleDateString('es-ES', options)
        setDate(dateToSave)
        hideDatePicker();
    };

    //Time-Picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {
        const options = {
            hour: 'numeric',
            minute: '2-digit'
        }
        const timeToSave = time.toLocaleString('es-ES', options)
        setTime(timeToSave)
        hideDatePicker();
      };

    return (
        <View style={styles.container}>
            <Text>Agregar turno</Text>
            <View>
                <Text style={styles.label}>Paciente:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => alert(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Propietario:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => alert(text)}
                />
            </View>
            <View>
                <Text style={styles.label}>Telefono de Contacto:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => alert(text)}
                    keyboardType='numeric'
                />
            </View>
            <View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una Fecha"
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                    />
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                        headerTextIOS="Elige una Hora"
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Confirmar'
                        is24Hour
                    />
                    <Text>{time}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.label}>Sintomas:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => alert(text)}
                    multiline
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginHorizontal: '2.5%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    // dateTimeButton: {
    //     marginBottom: 10,
    // },
    // dateTimeButtons: {
    //     marginVertical: 20,
    // },
    input: {
        borderColor: '#e1e1e1',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 50,
        marginTop: 10,

    }, 
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    }
})

export default Form