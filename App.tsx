import React from 'react'
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
// import { config } from "./config/gluestack-ui.config" 
import Container from './Container'
import { StyledProvider, createConfig } from "@gluestack-style/react"

const config = createConfig({
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    rounded: "borderRadius",
    h: "height",
    w: "width",
  },
  tokens: {
    colors: {
      primary0: "#ffffff",
      primary400: "#c084fc",
      primary500: "#a855f7",
      primary600: "#9333ea",
    },
    space: {
      4: 16,
      5: 20,
      6: 24,
    },
    radii: {
      sm: 4,
      md: 6,
    },
    letterSpacings: {
      md: 0,
    },
    lineHeights: {
      sm: 20,
      md: 22,
    },
    fontWeights: {
      normal: "400",
      medium: "500",
    },
    fontSizes: {
      sm: 14,
      md: 16,
    },
    mediaQueries: {
      sm: "@media (min-width: 480px)",
      md: "@media (min-width: 768px)",
    },
  },
  globalStyle: {
    variants: {
      shadow: {
        softShadow: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$primary500",
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
      },
    },
  },
} as const)

const App = () => {
  return (
    <StyledProvider config={config}>
      <Container />
    </StyledProvider>
  )
}

export default App



// ################ LIST AND KEY
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import ThreadCard from './src/screens/3.props-state-listkey-effect';
// import React from 'react';
// import { IThread } from './src/interface/threads';
// import Dummy from "./src/mocks/threads.json"

// export default function App() {
//   const [threads, setThreads] = React.useState<IThread[]>()

//   React.useEffect(() => {
//     setThreads(Dummy)
//   }, [])
  
//   // threads.content.user
//   // threads?.content?.user
//   // nullist
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
      
//       { threads?.map((data: IThread, index: number) => (
//           <ThreadCard key={index} content={data.content} image={data.image} />
//         )
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     color: 'red'
//   }
// });

// ################ EVENT 
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Thread from './screens/2.embed-expression';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
      
//       <Thread />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     color: 'red'
//   }
// });


// ################ COMPONENT
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Home from './screens/1.components';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Bang pinjem seratus!</Text>
//       <Text style={{ backgroundColor: "red" }}>Bang pinjem seratus!</Text>

//       <Home />
//       {/* <Bwang /> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     color: 'red'
//   }
// });
