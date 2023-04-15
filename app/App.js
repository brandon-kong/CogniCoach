import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from "./Screens/Quiz";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path = "/"
          // element = {<Home/>}
        />
        <Route
          exact
          path = "/Screens/Quiz"
          element = {<Quiz/>}
        />

      </Routes>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
