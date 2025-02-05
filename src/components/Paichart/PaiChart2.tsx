import { PieChart } from "react-native-gifted-charts";

import { View, Text } from "react-native";
import React from "react";

const PaiChart2 = ({ init, fainal }: any) => {
  const pieData = [
    { value: init, color: "#F93827" },
    { value: fainal, color: "#008FFF" },
  ];

  return (
    <View style={{ alignItems: "center", marginVertical: 0 }}>
      <PieChart
        data={pieData}
        donut
        radius={100}
        innerRadius={60}
        shadowWidth={10}
        showGradient
        showTooltip
        centerLabelComponent={() => {
          return (
            <View className="flex items-center justify-center ">
              <Text style={{ fontSize: 30 }}>{fainal}</Text>
              <Text className="text-lg font-semibold">SCGPA</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PaiChart2;
