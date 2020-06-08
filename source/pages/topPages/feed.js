import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, Alert } from 'react-native';



class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //defauilt value of the date time
            date: '',
        };
    }
    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
    }
    render() {
        return (
            <View style={{ flex: 2, backgroundColor: '#ffffff' }}>
                <View
                    style={{
                        height: 470,
                        width: 396,
                        marginTop: 10,
                        marginLeft: 8,
                        marginRight: 4,
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: '#ddd',
                        shadowColor: '#000',
                        shadowOffset: { height: 40, width: 40 },
                        shadowRadius: 10,
                        shadowOpacity: 1.0,
                        elevation: 12,
                        backgroundColor: '#fff'
                    }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            source={require('../../assets/criancas.png')}
                            style={{
                                flex: 1,
                                width: 394,
                                height: 50,
                                resizeMode: 'cover',
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
                        <Text style={styles.tittle}>Something </Text>
                        <Text style={styles.date}>{this.state.date}</Text>
                        <Text style={styles.subTittle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    tittle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 10,
        color: '#A9A9A9'
    },
    subTittle: {
        marginTop: 15,
        fontSize: 15,
        textAlign: "justify"
    }
});

export default Feed;

