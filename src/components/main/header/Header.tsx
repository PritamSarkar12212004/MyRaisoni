import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { userContext } from "@/src/context/ContextApi";

const StudentProfile = () => {
  const { userDetails } =
    userContext();
  return (
    <View className=" flex-row  gap-7   ">
      <View>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/57/17/c9/5717c988fa4af4ea25a2d79849fb6354.jpg",
          }}
          className="h-32 w-32 rounded-3xl"
          resizeMode="cover"
        />
      </View>
      <View className="flex py-5">
        <Text className="text-xl text-warp font-thin text-wrap ">
          <Text className="font-bold text-wrap text-3xl text-[#7d73e6cc]">
            {userDetails.userFirstName.charAt(0)}
          </Text>
          {userDetails.userFirstName.slice(1)} {userDetails.middleName}{" "}
          {userDetails.lastName}
        </Text>
        <Text className="text-lg font-thin">
          Rg No : {userDetails.registrationNumber}
        </Text>
        <Text className="text-lg font-thin">
          Roll No : {userDetails.rollNumber}
        </Text>
      </View>
    </View>
  );
};

export default StudentProfile;
