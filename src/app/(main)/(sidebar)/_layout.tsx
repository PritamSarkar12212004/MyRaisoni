import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import useLogout from "@/src/hooks/useLogout";
import AntDesign from "@expo/vector-icons/AntDesign";
const _layout = () => {
  const { Logout } = useLogout();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => {
          return (
            <View className="w-full h-full  flex   gap-10 relative">
              <View className="w-full  gap-2 flex  justify-center pb-5 pt-20 px-3  bg-blue-500">
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/4c/60/42/4c6042228823e4a4657dc30425955222.jpg",
                  }}
                />
                <Text className="text-4xl font-bold text-white">
                  Pritam Sarkar
                </Text>
                <View className="flex-row items-center  gap-2">
                  <AntDesign name="idcard" size={24} color="white" />
                  <Text className="text-xl text-white">7796419792</Text>
                </View>
                <View className="flex-row items-center  gap-2">
                  <Ionicons name="call" size={24} color="white" />
                  <Text className="text-xl text-white">GHURA39U39U22</Text>
                </View>
              </View>
            </View>
          );
        }}
        screenOptions={{
          headerBackground(props) {
            return <View className="w-full h-full bg-white" />;
          },
          drawerStyle: {
            backgroundColor: "white",
            width: "80%",
            borderRadius: 0,
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "Home",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            drawerItemStyle: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
        />

        <Drawer.Screen
          name="IdCard"
          options={{
            title: "ID Card",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "ID Card",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            drawerItemStyle: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
        />
        <Drawer.Screen
          name="TimeTable"
          options={{
            title: "Time Table",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "Time Table",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            drawerItemStyle: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
        />
        <Drawer.Screen
          name="MyAttendance"
          options={{
            title: "My Attendance",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "My Attendance",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            drawerItemStyle: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Fainance"
          options={{
            title: "Fainance",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "Fainance",
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            drawerItemStyle: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
