import styles from "./Style";
import {ScrollView, View, Text, TextInput,TouchableOpacity} from 'react-native';

const LoginScreen =()=>{
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style= {styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Phone"
            />
            <TextInput style={styles.input} placeholder="Password"
            secureTextEntry/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>      
        </View>
    </ScrollView>
    );
};
export default LoginScreen;