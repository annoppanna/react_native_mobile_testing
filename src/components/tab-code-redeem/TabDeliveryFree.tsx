import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

export const TabDeliveryFree: React.FC<any> = () => {
  return (
    <ThemedView style={{ flex: 1, alignItems: "center" }}>
      <ThemedText
        style={{
          paddingTop: 36,
        }}
      >
        ไม่มีโค้ด
      </ThemedText>
    </ThemedView>
  );
};
