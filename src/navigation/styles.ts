import * as React from "react";
import { PixelRatio, Platform, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "column",
    flex: 1,
    top: -15,
    width: 45,
  },
  topBarView: {
    backgroundColor: "#FDB816",
    height: 4,
    marginBottom: -1,
  },
  barIcon: {
    alignSelf: "center",
    top: Platform.OS == "ios" ? 18 : 14,
  },
  headerTitleStyle: {
    textAlign: "center",
    flex: 1,
   
    fontSize: PixelRatio.get() >= 2 ? 16 : 14,
  },
  headerTitleStyleNotCentered: {
    fontSize: PixelRatio.get() >= 2 ? 16 : 14,
  },
});

export default styles;
