// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";


// import Home from "../../pages/Home/Home";
// import UserAccount from "../../pages/UserAccount/UserAccount";
// import Statusbar from "../StatusBar/StatusBar";


// // const Stack = createNativeStackNavigator();

// export default function TopBar({navigation}) {
//     return (
//       <>
//           <Statusbar />
       
    

//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => navigation.navigate('UserAccount')}>
//               <Image
//                 source={require("../../assets/logo.png")}
//                 style={{ width: 40, height: 50 }}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
  
//             <TouchableOpacity>
//               <Image
//                 source={require("../../assets/user.png")}
//                 style={{ width: 40, height: 40 }}
//                 resizeMode="contain"
//               />
//             </TouchableOpacity>
//           </View>
    
//           </>
//           )
//   };
//   const styles = StyleSheet.create({
//     header: {
//       backgroundColor: "white",
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       paddingLeft: 15,
//       paddingRight: 15,
//       paddingBottom: 5,
//       paddingTop: 10,
//     },
//   });