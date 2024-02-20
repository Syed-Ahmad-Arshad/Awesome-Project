import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText){
    if (enteredGoalText) {
      setListOfGoals((currentlist) => [...currentlist, 
        {text: enteredGoalText, id:Math.floor(Math.random() * (1000 - 0 + 1)) + 0}]);
    }
    setModalVisible(false);
  }

  function deleteGoalHandler(id){
    setListOfGoals(currentlist=>currentlist.filter((goal)=> goal.id !== id ));
  }

  const clearMyList = () => {
    setListOfGoals([]);
  };

  const reverseListHandler = () => {
    setListOfGoals((currentlist)=>[...currentlist].reverse());
  };

  function startAddGoalGandler(){
    setModalVisible(true);
  }

  
  return (
      <View style={styles.appContainer} >
        <Button title='Add New Goal' color='#f31282' onPress={startAddGoalGandler}/>
        <GoalInput 
          onAddGoal={addGoalHandler} 
          isVisible={modalVisible} 
          setModalVisible={setModalVisible}/>
        <View style={styles.listContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.listText}>
              LIST OF GOALS
            </Text>
          </View>
          <View style={styles.toolbar}>
            <TouchableOpacity disabled={listOfGoals?.length===0} style={styles.reverseListButton} onPress={reverseListHandler}>
              <Text style={styles.reverseListButtonText}>Reverse</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={listOfGoals?.length===0} style={styles.clearListButton} onPress={clearMyList}>
              <Text style={styles.clearListButtonText}>Clear</Text>
            </TouchableOpacity>
            
          </View>
          {listOfGoals?.length === 0 && (
            <View><Image
            source={require('./assets/folder.png')}
            style={styles.folderImage}
          />
            <Text style={styles.noItemsText}>No items in the list</Text>
          </View>
          )}
          <FlatList data={listOfGoals} 
            renderItem={itemData=>
              <GoalItem 
                text={itemData.item?.text} 
                id={itemData.item?.id} 
                onDeleteItem={deleteGoalHandler}/>
              } 
              keyExtractor={(item, index)=>{
                return item.id
              }}
              showsVerticalScrollIndicator={false} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 32,
    flex: 5,
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#BC9DE0',
    padding: 10,
    alignSelf: 'center',
    color: 'white',
  },
  textContainer: {
    backgroundColor: '#BC9DE0',
    borderRadius: 12,
    marginBottom: 14,
    padding: 2
  },
  toolbar: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 1,
    justifyContent: 'space-between',
    gap: 5
  },
  clearListButtonText: {
    color: '#FBF5FF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  reverseListButtonText: {
    color: '#FBF5FF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  clearListButton: {
    backgroundColor: '#f31282',
    borderRadius: 5,
    flex: 1
    
  },
  reverseListButton: {
    backgroundColor: '#311b6b',
    borderRadius: 5,
    flex: 1
  },
  folderImage: {
    paddingTop: 200,
    alignSelf: 'center',
    objectFit: 'contain',
    height: 100,
    width: 100,
  },
  noItemsText: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: -50,
    fontWeight: 'bold',
    color: '#828282'
  }
});
