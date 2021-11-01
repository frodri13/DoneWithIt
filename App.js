import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return <WelcomeScreen />;
}
