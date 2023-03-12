import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

export const db = SQLite.openDatabase('example.db');

export default function Database() {
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [favs, setFavs] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);
  const [currentPassword, setCurrentPassword] = useState(undefined);

  useEffect(() => {
    
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)')
    });
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY AUTOINCREMENT, model TEXT, name TEXT)')
    });
    // db.transaction(tx => {
    //   tx.executeSql('CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY AUTOINCREMENT, model TEXT, userID INTEGER)')
    // });

    // db.transaction(tx => {
    //   tx.executeSql('INSERT INTO favorites (model, name) values (?,?)', ["R8", "a"],
    //     (txObj, resultSet) => setNames(resultSet.rows._array),
    //     (txObj, error) => console.log(error)
    //   );
    // });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM names', null,
        (txObj, resultSet) => setNames(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM favorites', null,
        (txObj, resultSet) => setFavs(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });

    setIsLoading(false);
  }, [db]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading names...</Text>
      </View>
    );
  }

  const addUser = () => {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO names (name, password) VALUES (?, ?)', [currentName, currentPassword],
        (txObj, resultSet) => {
          let existingNames = [...names];
          existingNames.push({ id: resultSet.insertId, name: currentName, password: currentPassword});
          setNames(existingNames);
          setCurrentName(undefined);
          setCurrentPassword(undefined);
        },
        (txObj, error) => console.log(error)
      );
    });
  }

  const deleteName = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM names WHERE id = ?', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingNames = [...names].filter(name => name.id !== id);
            setNames(existingNames);
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  const showNames = () => {
    return names.map((name, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text>{name.id}</Text>
          <Text>{name.name}</Text>
          <Text>{name.password}</Text>
          <Button title='Delete' onPress={() => deleteName(name.id)} />
        </View>
      );
    });
  };
  const showFavs = () => {
    return favs.map((fav, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text>{fav.id}</Text>
          <Text>{fav.model}</Text>
          <Text>{fav.name}</Text>
          <Button title='Delete' />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <TextInput value={currentName} placeholder='name' onChangeText={setCurrentName} />
      <TextInput value={currentPassword} placeholder='password' onChangeText={setCurrentPassword} />
      <Button title="Add User" onPress={addUser} />
      {showNames()}
      <Text>Favs</Text>
      {showFavs()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    color : "white",
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
});