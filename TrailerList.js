import React from 'react';

import {View, Text, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

export default class TrailerList extends React.Component {
constructor() {
    super();
    this.state = {
        data: []
    }
}

   getMoviesFromApiAsync = async () => {
    return fetch('https://192.168.10.128:8080/trailers')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.trailers)
            this.setState({
                data: responseJson.trailers
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
        <View>
            <Text>
                Bienvenue sur la liste
            </Text>
            <Button
                title="Détails"
                onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName:
                            'Details'})
                            ],
                    }))
                }}
            />
        </View>

        );
}
}

