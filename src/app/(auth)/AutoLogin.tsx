import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottiAnimation from "@/src/components/combaine/lottiAnimation/LottiAnimation";
import Animation from "@/src/constants/Animation";
import ErrorAlert from "@/src/components/combaine/alert/ErrorAlert";
import useMainDataCall from "@/src/hooks/useMainDataCall";
import { Storge } from "@/src/utils/mmkv/Storge";

const AutoLogin = () => {
  const { AuthKeyFinder } = useMainDataCall();
  const data = JSON.parse(Storge.getString("userData"));

  const Loager = () => {
    AuthKeyFinder({ id: data.id, pass: data.password, ErrorAlert });
  };
  useEffect(() => {
    Loager();
  }, []);
  return (
    <SafeAreaView className="w-full h-full bg-[#7c73e6] ">
      <View className="w-full h-full py-10 items-center justify-center px-5 flex">
        <LottiAnimation
          width={400}
          height={400}
          color={"#7c73e6"}
          path={Animation.Data}
        />
        <View className="w-full flex items-center justify-center">
          <Text className="text-xl font-bold text-white text-center">
            Hold on, we are checking your login details...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AutoLogin;
