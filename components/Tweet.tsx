import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { TweetProps } from '@/types';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Tweet = ({ tweet }: TweetProps) => {
  const IconButton = ({ icon, text }: { icon: React.ComponentProps<typeof EvilIcons>['name'], text?: number | string }) => {
    return (
      <View style={styles.iconButtonContainer}>
        <EvilIcons name={icon} size={22} color="white" />
        <Text style={styles.footerNumbers}>{text}</Text>
      </View>
    );
  };

  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
    <Pressable style={styles.container} >
      <Image 
        src={tweet.user.image} 
        style={styles.userImage}
      />
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username}</Text>
          <Text style={styles.time}>· 2h</Text>
          <Entypo style={styles.threedots} name="dots-three-horizontal" size={24} color="white" />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && 
          <Image 
            src={tweet.image} 
            style={styles.image}
          />
        }
        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          {/* <IconButton icon="retweet" text={tweet.numberOfRetweets} /> */}
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          {/* <IconButton icon="chart" text={tweet.impressions || 0} /> */}
          {/* <IconButton icon="share-apple" /> */}
        </View>
      </View>
    </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderColor: 'lightgray',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    // marginVerticalr: 10,
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-around',
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
    backgroundColor: 'black',
  },
  nameContainer: {
    flexDirection: 'row',
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
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: '600',
    color: 'white',
  },
  username: {
    fontWeight: '200',
    marginLeft: 5,
    color: 'white',
  },
  time: {
    fontWeight: '200',
    marginLeft: 5,
    color: 'white',
  },
  threedots: {
    marginLeft: 'auto',
  },
  footerNumbers: {
    color: 'white',
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    color: 'white',
  },
});

export default Tweet;
