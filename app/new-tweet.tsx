import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const images = [
  { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg' },
  { uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg' },
  // Add more image URLs here
];

export default function NewTweet() {
  const [tweet, setTweet] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const tweetInputRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      if (tweetInputRef.current) {
        tweetInputRef.current.focus();
      }
    });

    return () => {
      keyboardShowListener.remove();
    };
  }, []);

  const handlePostTweet = () => {
    console.log(tweet);
    if (selectedImage) {
      console.log(selectedImage);
    }
  };

  useEffect(() => {
    navigation.setOptions({
    headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
        </Pressable>
        ),
      headerRight: () => (
        <Pressable style={styles.postButton} onPress={handlePostTweet}>
          <Text style={styles.postButtonText}>Post</Text>
        </Pressable>
      ),
    });
  }, [navigation, tweet, selectedImage]);

  return (
    <View style={styles.page}>
         <Text style={styles.title}>Create a Buzz</Text>
      <View style={styles.newTweetContainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.inputsContainer}>
          <TextInput
            ref={tweetInputRef}
            multiline
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
            placeholderTextColor="grey"
            onChangeText={setTweet}
            value={tweet}
            autoFocus
          />
        </View>
      </View>
      <ScrollView horizontal style={styles.imageCarousel}>
        {images.map((img, index) => (
          <Pressable key={index} onPress={() => setSelectedImage(img.uri)}>
            <Image source={{ uri: img.uri }} style={styles.carouselImage} />
          </Pressable>
        ))}
        <Pressable style={styles.addImageContainer}>
          <Text style={styles.addImageText}>+</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: 'black',
      padding: 15,
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },
    newTweetContainer: {
      flexDirection: 'row',
      alignItems: 'center', // Changed from 'flex-start' to 'center'
      marginBottom: 15,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 999,
    },
    inputsContainer: {
      marginLeft: 10,
      flex: 1,
    },
    tweetInput: {
      height: 100,
      fontSize: 18,
      color: 'white',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    },
    imageCarousel: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    carouselImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginRight: 10,
    },
    addImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 10,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addImageText: {
      fontSize: 30,
      color: 'white',
    },
    postButton: {
      marginRight: 10,
    },
    postButtonText: {
      fontSize: 18,
      color: 'orange',
    },
  });