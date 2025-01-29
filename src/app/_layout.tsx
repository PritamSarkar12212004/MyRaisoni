import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import "../../global.css";
import { AlertNotificationRoot } from "react-native-alert-notification";

import React from "react";
import { ContextProvider } from "../context/ContextApi";

const _layout = () => {
  return (
    <ContextProvider>
      <AlertNotificationRoot>
        <MainLayout />
      </AlertNotificationRoot>
    </ContextProvider>
  );
};
const MainLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
