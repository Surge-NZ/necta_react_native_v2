import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';


const Tweet = ({ tweet }) => {
  return (
    <View style={styles.container}>
    <Image 
      src={tweet.user.image} 
      style={styles.userImage}
    />
    <View style={styles.mainContainer}>
    <Text style={styles.name}>{tweet.user.name}</Text>
    <Text style={styles.content}>{tweet.content}</Text>
    </View>
</View>
  )

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderColor: 'lightgray',
    backgroundColor: 'black',
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: 'black',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  userImage: {
    width:50, 
    height: 50, 
    borderRadius: 50

  },
  name: {
    fontWeight: '600',
    color: 'white',

  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: 'white',
    
  }
});


export default Tweet