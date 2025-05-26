import { View, Text, ToastAndroid } from 'react-native'
import { useState, useEffect } from 'react'
import { TextInput, Button } from "react-native-paper";
import { Layout } from '../../../layouts'
import { styles } from './NovedadesScreen.styles'
import { novedadesCtrl } from '../../../api'
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./NovedadesScreen.form";

export function NovedadesScreen() {

    const [novedades,setNovedades] = useState(null);
    
        useEffect(() => {
                getMensajes();                    
            }, []);
              
        const getMensajes = async () => {
            try {
                const response = await novedadesCtrl.verNovedades();
                setNovedades(response.novedades);
            } catch (error) {
                ToastAndroid.show( "Error al obtener libro" , ToastAndroid.SHORT);
            }
        };


        const formik = useFormik({
                initialValues: initialValues(),
                validationSchema: validationSchema(),
                validateOnChange: false,
                onSubmit: async (formValue) => {
                  const { mensaje } = formValue;
                  try {
                    await novedadesCtrl.crearNovedad(mensaje);
                    getMensajes();
                  } catch (error) {
                    ToastAndroid.show( "Error " + error , ToastAndroid.SHORT);
                  }
                },
              });

  return (
    <Layout.Basic>
      <Text style={styles.titulo}>Libro Novedades</Text>
      <TextInput
          label="Evento"
          style={styles.input}
          onChangeText={(text) => formik.setFieldValue("mensaje", text)}
          value={formik.values.mensaje}
          error={formik.errors.mensaje}
        />  
      <Button
          mode="contained"
          style={styles.btnSubmit}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >
           Guardar Novedad
        </Button>  

        {
            novedades ? 
                novedades.map((item,index)=>(
                    <View key={"v"+index} style={styles.tarjeta}>
                        <View key={"vv01"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Evento :</Text><Text style={styles.texto2}>{item.novedad}</Text></View>
                        <View key={"vv02"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Supervisor :</Text><Text style={styles.texto}>{item.nombrede}</Text></View>
                        <View key={"vv03"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Fecha / Hora :</Text><Text style={styles.texto}>{item.fecha + " " + item.hora}</Text></View>
                    </View>                        
                ))
            : ""
        }

    </Layout.Basic>
  )
}