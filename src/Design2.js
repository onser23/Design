import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Design2 = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  const click = id => {
    setSelected([...selected, id]);
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  console.log('AA', selected);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={
              selected.find(e => e === item.id)
                ? [styles.cardSingularId, styles.selectedFilter]
                : styles.cardPluralId
            }
            onPress={() => click(item.id)}>
            <Image style={styles.image} source={{uri: item.thumbnailUrl}} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardSingularId: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  cardPluralId: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  selectedFilter: {
    backgroundColor: 'red',
    opacity: 0.1,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    flexShrink: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default Design2;
