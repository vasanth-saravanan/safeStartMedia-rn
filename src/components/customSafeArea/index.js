import React, {useEffect, useRef} from 'react';
import {Animated, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

//themes and styles
import {BASESTYLES, COLORS} from '../../themes';

export default function CustomSafeArea({
  children = <Text>Children</Text>,
  backgroundColor = COLORS.baseBgColor,
  style = {},
}) {
  const fadeAnimation = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const CustomStatusBar = ({backgroundColor, barStyle = 'dark-content'}) => {
    const insets = useSafeAreaInsets();
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={backgroundColor} />
      <Animated.View
        View
        style={[style, BASESTYLES.flex(), {opacity: fadeAnimation}]}>
        {children}
      </Animated.View>

      <SafeAreaView style={BASESTYLES.bgColor(backgroundColor)} />
    </SafeAreaProvider>
  );
}
