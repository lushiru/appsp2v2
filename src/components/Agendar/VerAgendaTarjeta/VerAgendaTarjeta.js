import { View, Text } from 'react-native'
import { styles } from "./VerAgendaTarjeta.styles"

export function VerAgendaTarjeta({ agenda }) {

    
  return (
    <View>
            {
              agenda.map((item,index)=>(
                    <View key={"map"+index}>  
                    {item.arrtar ?
                      <View key={"vva"+index} style={styles.tarjeta}><Text style={styles.titulo}>Actividad a Supervisar</Text>
                      {item.arrtar.map((it,index1)=>(
                        <View key={"vv00"+index+""+index1}>  
                          <View key={"vv01"+index+""+index1} style={styles.textcolumn}><Text style={styles.titulo2}>Fecha :</Text><Text style={styles.texto2}>{it.diadelasemana +" "+ it.fech}</Text></View>
                          <View key={"vv02"+index+""+index1} style={styles.textcolumn}><Text style={styles.titulo2}>Observación :</Text><Text style={styles.texto2}>{it.observacion}</Text></View>
                        </View>  
                      ))}
                      </View>
                    : ""}

                    {item.prioridades ?
                      <View key={"vvb"+index} style={styles.tarjeta}><Text style={styles.titulo}>Prioridades</Text>
                      {item.prioridades.map((it,index2)=>(
                        <View key={"vvv00"+index+""+index2}>  
                          <View key={"vv04"+index+""+index2} style={styles.textcolumn}><Text style={styles.titulo2}>Fecha :</Text><Text style={styles.texto2}>{it.diadelasemana +" "+ it.fech}</Text></View>
                          <View key={"vv05"+index+""+index2} style={styles.textcolumn}><Text style={styles.titulo2}>Fechas :</Text><Text style={styles.texto2}>{it.fechainicio +" "+ it.fechatermino}</Text></View>
                          <View key={"vv06"+index+""+index2} style={styles.textcolumn}><Text style={styles.titulo2}>Tarea :</Text><Text style={styles.texto2}>{it.tarea}</Text></View>
                        </View>  
                      ))}
                      </View>
                    : ""}
                    </View>  
                ))
            }            
    </View> 
  )
}