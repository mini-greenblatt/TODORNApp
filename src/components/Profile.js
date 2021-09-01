import React  from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Avatar, Row
} from 'native-base'
function Profile(props) {

    const {
        navigation,
        name,
    } = props;


    return (
        <>

            <View style={styles.profileView}>
                <Text size={18} style={{ fontWeight: 'bold', margin: 10 }}>
                    Welcome to
                </Text>
                <Row style={{ alignItems: 'center', margin: 10 }}>
                    <Avatar
                        source={{
                            uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
                        }}
                        size={8}
                    > name</Avatar>
                    <Text> user{name}</Text>
                </Row>
            </View>
        </>
    )
}
export default Profile


const styles = StyleSheet.create({
    profileView: {
        padding: 10,
        borderColor: '#845cc3',
        borderWidth: 5,
        maxWidth: '50%',
        width: '50%',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 20
    }
})