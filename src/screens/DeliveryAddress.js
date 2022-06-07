import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {PRIMARYCOLOR, SECONDARYCOLOR, WHITECOLOR} from '../Utilities/Colors';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import TextBox from '../components/TextBox';
import {FONT_SIZE} from '../Utilities/Constants';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required').trim(),
  mobileNumber: Yup.string()
    .trim()
    .matches(/^[0-9]{10}$/, 'Mobile Number is invalid')
    .required('Mobile Number is required'),
  address: Yup.string().required('Address is required').trim(),
  pinCode: Yup.string()
    .trim()
    .matches(/^[0-9]{6}$/, 'Pincode is invalid')
    .required('Pincode is required'),
});

const DeliveryAddress = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobileNumber: '',
      address: '',
      pinCode: '',
    },

    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: values => {
      navigation.replace('OrderConfirmation');
    },
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Delivery Details</Text>
      <TextBox
        value={formik.values.fullName}
        onChangeText={formik.handleChange('fullName')}
        title="Full Name *"
        placeHolder="Enter your Full Name"
        isError={formik.touched.fullName && formik.errors.fullName}
        errorText={formik.errors.fullName}
      />
      <TextBox
        value={formik.values.mobileNumber}
        onChangeText={formik.handleChange('mobileNumber')}
        title="Mobile Number *"
        placeHolder="Enter your Mobile Number"
        maxLength={10}
        keyBoardType="number-pad"
        isError={formik.touched.mobileNumber && formik.errors.mobileNumber}
        errorText={formik.errors.mobileNumber}
      />
      <TextBox
        value={formik.values.address}
        onChangeText={formik.handleChange('address')}
        title="Address *"
        placeHolder="Enter your Address"
        maxLength={120}
        isError={formik.touched.address && formik.errors.address}
        errorText={formik.errors.address}
      />

      <TextBox
        value={formik.values.pinCode}
        onChangeText={formik.handleChange('pinCode')}
        title="Pin Code *"
        placeHolder="Enter your Pin Code"
        maxLength={6}
        keyBoardType="number-pad"
        isError={formik.touched.pinCode && formik.errors.pinCode}
        errorText={formik.errors.pinCode}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          formik.handleSubmit();
        }}>
        <Text style={styles.buttonText}>CONFIRM ORDER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: WHITECOLOR,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.xLarge,
    color: SECONDARYCOLOR,
    marginTop: 10,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARYCOLOR,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  buttonText: {
    color: WHITECOLOR,
    fontSize: 16,
  },
});
