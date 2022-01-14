import React, { useEffect, useState } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; // import library navigator
import { createStackNavigator } from '@react-navigation/stack'; // import library navigator
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';  //import icon

export default function App() { // inisialisasi navigator
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) { //tampilan depan atau utama
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 210,
          borderWidth: 5,
          borderColor: 'pink',
          marginTop: 50,
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={require('/assets/me2.jpg')}
      />
      <Text style={{ fontSize: 18 }}>Muhamad Lutfi Alfandi</Text>
      <Text style={{ fontSize: 16, color: '#333333', marginTop: 10, marginBottom: 10 }}>
        Backend Developer
      </Text>
      <Button title="Detail Portofolio" onPress={() => navigation.navigate('detail')} color="#FFC0CB" />
    </View>
  );
}

function MenuScreen({ navigation }) { //tampilan Detail Portofolio
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
      style={{
        width: 200,
        height: 210,
        borderWidth: 5,
        borderColor: 'pink',
        marginTop: 10,
        marginBottom: 10,
      }}
      resizeMode="contain"
      source={require('/assets/me.jpg')}
    />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('edu_history')}
      >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Educational History</Text>
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('areas_of_expert')}
      >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Areas Of Expertise</Text>
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('work_experience')}
      >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Work Experience</Text>
      </TouchableOpacity>
      <Text> </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('contact')}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Contact</Text>
      </TouchableOpacity>
    </View>   
  );
}

function ContactScreen({ navigation }) { // tampilan contact
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 210,
          borderWidth: 5,
          borderColor: 'pink',
          marginTop: 50,
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={require('/assets/contact.jpeg')}
      />
    
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="whatsapp" size={25} color="white" /> <Text> </Text>
      0896-6918-8735
      </Text>
      <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="envelope" size={25} color="white" /> <Text> </Text>
      lutfialfan2@gmail.com
      </Text>
    <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="linkedin-square" size={25} color="white" /> <Text> </Text>
      Muhamad Lutfi Alfandi
      </Text>
    </View>
  );
}

function EduScreen({ navigation }) { //tampilan educational history
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 210,
          borderWidth: 5,
          borderColor: 'pink',
          marginTop: 50,
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={require('/assets/edu.jpeg')}
      />
    
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="university" size={25} color="white" /> <Text> </Text>
      SMK Telkom Jakarta
      </Text>
      <Text
          style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      2016 - 2019 </Text>
      <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="university" size={25} color="white" /> <Text> </Text>
      Pembangunan Jaya University
      </Text>
      <Text
          style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      2020 - 2024 </Text>
    </View>
  );
}

function SkillScreen({ navigation }) { // tampilan areas of expertise
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 210,
          borderWidth: 5,
          borderColor: 'pink',
          marginTop: 50,
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={require('/assets/skill.jpeg')}
      />
    
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="database" size={25} color="white" /> <Text> </Text>
      MySQL, PostgreSQL, MongoDB
      </Text>
      <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="language" size={25} color="white" /> <Text> </Text>
      Java & PHP
      </Text>
      <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <MaterialCommunityIcons name="iframe" size={25} color="white" /> <Text> </Text>
      Laravel & Spring Boot
      </Text>
    </View>
  );
}

function WorkScreen({ navigation }) { //tampilan work experience
  return (
    <View
      style={{
        borderWidth: 10,
        borderColor: 'transparent',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 200,
          height: 210,
          borderWidth: 5,
          borderColor: 'pink',
          marginTop: 50,
          marginBottom: 50,
        }}
        resizeMode="contain"
        source={require('/assets/we.jpeg')}
      />
    
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <MaterialCommunityIcons name="access-point-network" size={25} color="white" /> <Text> </Text>
      PT. Indo Human Resource
      </Text>
      <Text
          style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      Network Engineer, Sep - Des 2018 </Text>
      <Text> </Text>
      <Text 
        style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      <FontAwesome name="code" size={25} color="white" /> <Text> </Text>
      PT. Dian Prima Jaya
      </Text>
      <Text
          style={{ 
          fontSize: 18,
          backgroundColor: 'pink',
          color: 'white',
          paddingHorizontal: 10,
          paddingVertical: 10 }}>
      Backend Developer, Jul 2019 - Now</Text>
    </View>
  );
}

const Stack = createStackNavigator(); //variable stack navigator

function MyStack() {  //screen navigator
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'MY PORTFOLIO',
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerShown: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="detail"
        component={MenuScreen}
        options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          title: 'Detail Portofolio',
          headerShown: true,
          headerBackTitle: ' ',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          title: 'My Contact',
          headerShown: true,
          headerBackTitle: ' ',
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="edu_history"
        component={EduScreen}
        options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          title: 'Educational History',
          headerShown: true,
          headerBackTitle: ' ',
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="areas_of_expert"
        component={SkillScreen}
        options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          title: 'Areas Of Expertise',
          headerShown: true,
          headerBackTitle: ' ',
          headerTintColor: '#333',
        }}
      />
      <Stack.Screen
        name="work_experience"
        component={WorkScreen}
        options={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          title: 'Work Experience',
          headerShown: true,
          headerBackTitle: ' ',
          headerTintColor: '#333',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({ //style
  button: {
    alignItems: "center",
    backgroundColor: "pink",
    padding: 10
  }
});
