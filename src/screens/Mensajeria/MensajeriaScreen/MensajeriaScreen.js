import { View, Text, ToastAndroid } from 'react-native'
import { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper';
import DropDownPicker from "react-native-dropdown-picker";
import { Layout } from '../../../layouts'
import { screensName } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { mensajeriaCtrl } from '../../../api';
import { styles } from './MensajeriaScreen.styles';



export function MensajeriaScreen() {

    const [data,setData] = useState([]);
    const [data2,setData2] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [usuarios,setUsuarios] = useState([]);
    const [trabajadores,setTrabajadores] = useState([]);
    const [mensaje,setMensaje] = useState("");

    const navigation = useNavigation();

         useEffect(() => {
              getUsuTra();                    
          }, []);
      
          const getUsuTra = async () => {
            try {
              const response = await mensajeriaCtrl.leerUsuarios();
              const datos = response.arrusuario.map((item) => ({ label: `${item.nombre} ${item.apellidos}`, value: item.id }));
              setData(datos);
              const datos2 = response.arrcol.map((item) => ({ label: `${item.nombres} ${item.apaterno} ${item.amaterno}`, value: item.id }));
              setData2(datos2);
            } catch (error) {
                ToastAndroid.show( "Error al obtener Usuario Trabajador" , ToastAndroid.SHORT);
            }
          };

          const enviarmensaje = async () => {

                try {
                    if(usuarios.length > 0 && mensaje!=""){ await mensajeriaCtrl.crearMensaje(usuarios,mensaje); ToastAndroid.show( "Mensaje Enviado" , ToastAndroid.SHORT); }
                    else{ ToastAndroid.show( "Mensaje No Enviado" , ToastAndroid.SHORT); }
                } catch (error) {
                    ToastAndroid.show( "Error al enviar mensaje Usuario" , ToastAndroid.SHORT);
                }

          }

          const enviarmensaje2 = async () => {

                try {
                    if(trabajadores.length > 0 && mensaje!=""){ await mensajeriaCtrl.crearMensaje2(trabajadores,mensaje); ToastAndroid.show( "Mensaje Enviado" , ToastAndroid.SHORT); }
                    else{ ToastAndroid.show( "Mensaje No Enviado" , ToastAndroid.SHORT); }
                } catch (error) {
                    ToastAndroid.show( "Error al enviar mensaje Trabajadores" , ToastAndroid.SHORT);
                }

          }

  return (
    <Layout.Basic>
      <Text style={styles.titulo}>Mensajería</Text>
          <Button mode="contained" onPress={() => navigation.navigate(screensName.agend.mensajeriaVerEnviados)} style={styles.btn}>
              Enviados
          </Button>
          <Button mode="contained" onPress={() => navigation.navigate(screensName.agend.mensajeriaVerRecibidos)} style={styles.btn}>
              Recibidos
          </Button>
          <TextInput
                    label="Mensaje"
                    style={styles.input}
                    onChangeText={(text) => setMensaje(text)}
                  />  
            {
                data ?
                <View style={styles.container}>
                    <DropDownPicker
                        open={open}
                        value={usuarios}
                        items={data}
                        setOpen={setOpen}
                        setValue={setUsuarios}
                        setItems={setData}
                        placeholder="Selecciona Usuarios"
                        multiple={true} // ✅ Enable multi-select
                        mode="BADGE" // ✅ Optional: shows selected items as badges
                        listMode="MODAL"
                        style={styles.dropdown}
                        dropDownContainerStyle={{ maxHeight: 500 }}
                        /*onSelectItem={(item) => {
                            console.log("Selected item:", item);
                        }}*/
                    />
                <Button mode="contained" onPress={() => enviarmensaje() } style={styles.btnSubmit}>
                    Enviar Mensaje
                </Button>    
                </View>    
                : ""

            }  

            {
                data2 ?
                <View style={styles.container}>
                    <DropDownPicker
                        open={open2}
                        value={trabajadores}
                        items={data2}
                        setOpen={setOpen2}
                        setValue={setTrabajadores}
                        setItems={setData2}
                        placeholder="Selecciona Trabajadores"
                        multiple={true} // ✅ Enable multi-select
                        mode="BADGE" // ✅ Optional: shows selected items as badges
                        listMode="MODAL"
                        style={styles.dropdown}
                        dropDownContainerStyle={{ maxHeight: 500 }}
                        /*onSelectItem={(item) => {
                            console.log("Selected item:", item);
                        }}*/
                    />
                <Button mode="contained" onPress={() => enviarmensaje2() } style={styles.btnSubmit}>
                    Enviar Mensaje
                </Button>    
                </View>    
                : ""

            }     
            
    </Layout.Basic>
  )
}