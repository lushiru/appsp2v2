import { View, Text } from 'react-native'
import { useState, useEffect} from 'react'
import { Layout } from '../../../layouts'
import { mensajeriaCtrl } from '../../../api'
import { styles } from "./MensajeriaRecibidosScreen.styles"

export function MensajeriaRecibidosScreen() {

    const [mensajes,setMensaje] = useState(null);

    useEffect(() => {
                  getMensajes();                    
              }, []);
          
    const getMensajes = async () => {
    try {
        const response = await mensajeriaCtrl.verRecibidos();
        setMensaje(response.recibidos);
    } catch (error) {
        ToastAndroid.show( "Error al obtener mensajes enviados" , ToastAndroid.SHORT);
    }
    };

  return (
    <Layout.Basic>
      <Text style={styles.titulo}>Mensajeria Recibidos</Text>

      {
        mensajes ?
            mensajes.map((item,index) => (

                <View key={"v"+index} style={styles.tarjeta}>
                        <View key={"vv01"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Mensaje :</Text><Text style={styles.texto2}>{item.mensaje}</Text></View>
                        <View key={"vv02"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Enviado por :</Text><Text style={styles.texto2}>{item.nombrede}</Text></View>
                        <View key={"vv03"+index} style={styles.textcolumn}><Text style={styles.titulo2}>Fecha / Hora :</Text><Text style={styles.texto2}>{item.date +" "+ item.time}</Text></View>
                </View>      

            ))
        : ""

      }  
              
    </Layout.Basic>
  )
}