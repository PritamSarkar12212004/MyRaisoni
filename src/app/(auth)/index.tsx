import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorAlert from "@/src/components/combaine/alert/ErrorAlert";
import useMainDataCall from "@/src/hooks/useMainDataCall";
import { userContext } from "@/src/context/ContextApi";
import { Storge } from "@/src/utils/mmkv/Storge";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import useCommanCall from "@/src/hooks/useCommanCall";

const index = () => {
  const { id, setid, pass, setpass, loader } = userContext();
  const { AuthKeyFinder } = useCommanCall();
  const { successFun } = useMainDataCall();

  const logar = () => {
    AuthKeyFinder({ id, pass, ErrorAlert, apiCall: successFun });
  };

  const idInput = (id) => {
    setid(id);
  };
  const passInput = (pass) => {
    setpass(pass);
  };
  useEffect(() => {
    if (Storge.getString("userData")) {
      const data = JSON.parse(Storge.getString("userData"));
      setid(data.id);
      setpass(data.password);
    }
  }, []);
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full h-full px-4 pb-5">
        <View className="w-full flex-auto pt-10">
          <View className="w-full">
            <Text className="text-5xl font-extrabold leading-tight">
              <Text className=" font-extrabold text-[#7d73e6cc]">S</Text>
              ign in to your
            </Text>
            <Text className="text-5xl font-extrabold">account</Text>
          </View>
          <View className="w-full mt-2">
            <Text className=" font-semibold">
              Access your Account by Registretion Number & Password
            </Text>
          </View>
          <View className="w-full mt-3 relative">
            <View className="absolute top-9 left-3">
              <FontAwesome name="phone" size={24} color="#7c73e6" />
            </View>
            <TextInput
              value={id ? id : ""}
              onChangeText={(id) => idInput(id)}
              placeholder={id ? id : "Registration Number"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 border-[#7d73e6cc] `}
            />
          </View>
          <View className="w-full  relative">
            <View className="absolute top-9 left-3">
              <Feather name="unlock" size={24} color="#7c73e6" />
            </View>
            <TextInput
              value={pass ? pass : ""}
              onChangeText={(pass) => passInput(pass)}
              placeholder={pass ? pass : "Password"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 border-[#7d73e6cc] `}
            />
          </View>
          <View className="w-full mt-14 flex items-center justify-center">
            <LottiAnimation
              height={300}
              width={400}
              color={"white"}
              path={Animation.Lock}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => logar()}
          className={`w-full h-16 bg-[#7c73e6]  flex items-center justify-center rounded-[25px] tracking-widest leading-loose`}
          activeOpacity={0.8}
        >
          {loader ? (
            <View className="w-full flex items-center justify-center">
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : (
            <Text className="text-xl font-bold text-white">Next</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;
