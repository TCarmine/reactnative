import React, { Component } from 'react';
import {  Text,View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View></View>
                <View style={styles.headerContentStyle}>
                    <Text> {props.albumrecord.title}</Text>
                    <Text>{props.albumrecord.artist}</Text>
                </View>
            </CardSection>  
        </Card>


    )
};

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    }
}
export default AlbumDetail;

