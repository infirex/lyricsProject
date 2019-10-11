import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import validations from './validations'
import {Formik} from 'formik'
import MyButton from '../myButton'
const fakeApi = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.id == 'infire' && user.password == 1963) 
                resolve()
            reject()
        }, 2000);
        
    })
}
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

export default class LoginArea extends Component {

    _handleSubmit = async(values,bag) => {
        try {
            await fakeApi(values)
            bag.setSubmitting(false)
            this.props.navigate('Lyrics')
        } catch (e) {
            bag.setSubmitting(false)
            alert('Permission denied!')
        }
    }

    render() {
        
        return (
            <Formik
                initialValues={{
                id: '',
                password: ''
            }}
                onSubmit={this._handleSubmit}
                validationSchema={validations}>
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    isSubmitting,
                    setFieldTouched,
                    touched,
                    isValid
                }) => (                    
                <KeyboardAvoidingView style={{alignItems:'center'}} behavior={'position'} keyboardVerticalOffset={keyboardVerticalOffset}>
                    <View style={styles.loginArea}>
                        <Text
                            style={{
                            textAlign: 'center',
                            color: '#1572de',
                            fontWeight: '600'
                        }}>Sign In To See The Picture</Text>
                        <Text
                            style={{
                            textAlign: 'center',
                            fontSize: 10,
                            marginTop: 10,
                            fontWeight: '500',
                            color: 'gray'
                        }}>Please type the root user info to enter the app!</Text>
                        {errors.id && touched.id ? <Text style={{fontSize:10,color:'red'}}>{errors.id}</Text> : null}
                        <TextInput
                            value={values.id}
                            onChangeText={handleChange('id')}
                            style={[styles.textInput]}
                            placeholder={'Type your id'}
                            placeholderTextColor={'#1572de'}
                            onBlur={() => setFieldTouched('id')}
                            
                            />
                        {errors.password && touched.password ? <Text style={{fontSize:10,color:'red'}}>{errors.password}</Text> : null}                        
                        <TextInput
                            value={values.password}
                            onChangeText={handleChange('password')}
                            secureTextEntry={true}
                            style={[
                            styles.textInput, {
                                borderColor: '#f2f2f2'
                            }
                        ]}
                            onBlur={() => setFieldTouched('password')}
                            placeholder={'Type your password'}
                            returnKeyType={'go'}
                            />

                        <View style={{position:'absolute',bottom:0,right:0,left:0}}>
                            <MyButton disabled={!isValid || isSubmitting} isSubmit={isSubmitting} text='Login' onPress={handleSubmit}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                )}

            </Formik>
        )
    }
}

const styles = StyleSheet.create({
    loginArea: {
        backgroundColor: '#fff',
        width: '75%',
        height: 250,
        padding: 20,
        marginVertical: 40,
        borderRadius: 10,
        elevation: 20
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: '#1572de',
        marginVertical: 5
    }
})
