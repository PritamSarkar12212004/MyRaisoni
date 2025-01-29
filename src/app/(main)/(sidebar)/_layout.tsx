import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import useLogout from "@/src/hooks/useLogout";
const _layout = () => {
  const {Logout}=useLogout()
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => {
          return (
            <View className="w-full h-full  flex   gap-10 relative py-20">
              <View className="w-full px-2">
                <View className="w-full border-b-2 border-[#F33829] pb-3">
                  <Text className="text-4xl font-semibold">
                    <Text className="text-[#F33829]">M</Text>y{" "}
                    <Text className="text-[#F33829]">R</Text>aisoni
                  </Text>
                </View>
              </View>
              <View>
                <DrawerItemList {...props} />
              </View>
              <View className="absolute bottom-10 w-full px-7">
                <TouchableOpacity
                  onPress={() => Logout()}
                  activeOpacity={0.8}
                  className=" bg-[#F33829] w-full px-2 py-5 rounded-3xl"
                >
                  <Text className="text-center  text-xl text-white font-vold">
                    Logout
                  </Text>
                </TouchableOpacity>
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
            width: 250,
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
          name="Address"
          options={{
            title: "Address",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "Address",
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
          name="ParentInformation"
          options={{
            title: "Parrent Information",
            drawerInactiveTintColor: "gray",
            drawerActiveTintColor: "#F33829",
            drawerLabel: "Parrent Information",
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
