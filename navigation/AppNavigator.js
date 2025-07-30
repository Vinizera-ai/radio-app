import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Podcasts" component={PodcastScreen} />
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}