import React from 'react'
import { View, Text } from 'react-native'

const index = () => {
    return (
        <View>
            <View style = {styles.headerStyle}>                    
                <View >
                    <TouchableOpacity onPress={this.previousForm}>
                        <Feather name= 'arrow-left' size = {28} color='#F9AA33'></Feather>
                    </TouchableOpacity>                      
                </View>
                <View style = {styles.containerTitle}>
                        <Text style = {styles.title}>{this.state.subTitleForm}</Text>
                        {/* <Text style = {styles.subTitle}>{this.state.subTitleForm}</Text> */}
                </View>
                <View style ={{width:28}}/>
            </View>
        </View>
    )
}

export default index
