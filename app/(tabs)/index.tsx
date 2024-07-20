import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import EditScreenInfo from '@/components/EditScreenInfo';
import Tweet from '../../components/Tweet'
import tweets from '../../assets/data/tweets'


export default function TabOneScreen() {
  return (
      <View style={styles.page}>
      {/* <Tweet tweet={tweets[0]}/> */}
        <FlatList 
          data={tweets} 
          renderItem={({item}) => <Tweet tweet={item}/>}/>
      </View>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1, 
    backgroundColor: "black",
  }
})