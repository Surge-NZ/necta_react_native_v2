import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import EditScreenInfo from '@/components/EditScreenInfo';
import Tweet from '../../components/Tweet'
import tweets from '../../assets/data/tweets'
import NewTweet from '../new-tweet';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
      <View style={styles.page}>
        <FlatList 
          data={tweets} 
          renderItem={({item}) => <Tweet tweet={item}/>}/>
          <Link href="/new-tweet" asChild>
            <Pressable style={styles.floatingButton}>
              <Text style={styles.floatingButtonText}>+</Text>
            </Pressable>
          </Link>
          
      </View>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1, 
    backgroundColor: "black",
  },
  floatingButton: {
    backgroundColor: "orange",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  floatingButtonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  }
})