import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './source/screens/Home'
import Course from './source/screens/Course'
import About from './source/screens/About'
import Contact from './source/screens/Contact'
import CourseDetails from './source/screens/CourseDetails'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Course" component={Course} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "Courses", headerTitleAlign: "center" }} />
        <Stack.Screen name="About" component={About} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "About Us", headerTitleAlign: "center" }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerTitleStyle: { fontSize: 25 }, headerTitle: "Contact Us", headerTitleAlign: "center" }} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} options={{ headerTitleStyle: { fontSize: 25 }, headerTitleAlign: "center", headerTitle: "Course Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
