import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {BLACKCOLOR, PLACEHOLDERCOLOR} from '../Utilities/Colors';
import {FONT_SIZE} from '../Utilities/Constants';

const TextBox = ({
  value = '',
  onChangeText,
  keyBoardType = 'default',
  maxLength = 20,
  placeHolder = '',
  title = '',
  isError = false,
  errorText = '',
}) => {
  return (
    <>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeHolder}
          placeholderTextColor={PLACEHOLDERCOLOR}
          keyboardType={keyBoardType}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {isError && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  heading: {
    fontSize: FONT_SIZE.tiny,
    color: BLACKCOLOR,
    marginTop: 10,
  },
  inputTextContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: FONT_SIZE.tiny,
    color: BLACKCOLOR,
  },
  errorText: {
    color: 'red',
    fontSize: FONT_SIZE.tiny,
  },
});
