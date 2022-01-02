import React, { useState } from 'react';
import { RefreshControl, SectionList, StyleSheet, Text, View } from 'react-native';

const SectionList1 = () => {
  
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        const len=DATA.length+1
        setRefreshing(true);
        setItems([...DATA, { 
            
            title: `Title ${len}`, data:  [`Item ${len}-1`, `Item ${len}-2`] }]);
        setRefreshing(false);
    }

    const [DATA,setItems]=useState([
        
            {
                title: "Title 1",
                data: ["Item 1-1", "Item 1-2"]
            },
        
        
    ])
 

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    return (<SectionList sections={DATA} 
        keyExtractor={(item,index)=>item+index}
        renderItem={({ item }) => (<View style={styles.text}>
        <Text style={styles.titles}>{item}</Text>
      </View>)}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        ) }
        refreshControl={<RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            />
        }>
    
    </SectionList>);
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#123100'
    },
    text: {
        color: '#4d5d53',
        fontSize: 24,
        margin: 10
    },
    titles: {
        color: '#ff0000',
        fontSize: 16,
        margin: 10
    },
    header: {
        color: '#000000',
        fontSize: 24,
        margin: 10,
        backgroundColor:'#4da6ff',
        textAlign: 'center'
    
    },
});
export default SectionList1;