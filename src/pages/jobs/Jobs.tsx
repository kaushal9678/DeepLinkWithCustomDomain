import React, { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getScreams } from '../../redux/actions/dataActions';
import moment from 'moment';
import { connect } from 'react-redux';
import { GET_SCREAMS } from '../../redux/actions';

import { Card, Title, Paragraph, Avatar, Button, Text, IconButton, Colors } from 'react-native-paper';
import { IJobs, Scream } from '../../interface/IInterface';
type CardsScreenProps = {};
type CardsScreenState = {
    selected1: boolean;
    selected2: boolean;
};
/* const mapStateToProps = (state: any, props: any) => {
    console.log("state========", state);
    console.log("props========", props);
    const { scream, screams } = state.screamReducer
    return { scream, screams };
    //return state.screamReducer;
} */

const mapStateToProps = (state: any) => ({
    data: state.data,
    screams: state.data.screams,
    scream: state.data.scream
});
const mapDispatchToProps = (dispatch: any, props: any) => ({
    getAllScreams: () => {
        dispatch(getScreams())
    }
});

const Jobs: FunctionComponent<IJobs> = (
    { scream, screams, getAllScreams, navigation, route }:
        {
            scream: Scream,
            screams: Scream[],
            getAllScreams: Function,
            navigation: any,
            route: any
        }) => {


    const [like, setLike] = useState(0)
    useEffect(() => {
        getAllScreams()
        return () => {

        }
    }, []);
    
   /*  const renderLottieHeartIcon = () => {
        return <LottieView source={require('../../lottie-animation/like-animation.json')} autoPlay loop />;
    } */

    const renderCell = ({ item }:{item:Scream}) => {
        const date = item.createdAt
        const timeAgo = moment(item.createdAt).fromNow();
       // console.log('scream==',item);
        return <Card key={item.screamId} style={{ margin: 10, borderRadius: 5 }} onPress={() => navigation.navigate('JobDetail', { screamId: item.screamId })}>
            <Card.Content style={{ flexDirection: 'column' }}>
                <Card.Content style={{ flexDirection: 'row' }}>
                    <Avatar.Image size={50} source={{ uri: item.userImage }} />
                    <Card.Content>
                        <Title>{item.userHandle}</Title>
                        <Text style={{ fontSize: 12, color: Colors.grey600 }}>{timeAgo}</Text>
                        <Paragraph style={{ fontSize: 14, color: "#000", fontWeight: '600' }}>{item.body}</Paragraph>
                        <Card.Actions>

                            <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>

                                <IconButton
                                    icon={item.likeCount > 0 ? "heart" : "heart-outline"}
                                    color={item.likeCount > 0 ? Colors.red500 : Colors.grey400}
                                    size={25}
                                    onPress={() => setLike(1)}
                                />
                                <Text>{item.likeCount} Likes</Text>
                            </Card.Content>

                            <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>

                                <IconButton
                                    icon={item.commentCount > 0 ? "comment-text" : "comment-text-outline"}
                                    color={item.commentCount > 0 ? Colors.cyan400 : Colors.grey400}
                                    size={25}
                                    onPress={() => setLike(1)}
                                />
                                <Text>{item.commentCount} Comment</Text>
                            </Card.Content>

                        </Card.Actions>
                    </Card.Content>
                </Card.Content>

            </Card.Content>
        </Card>

    }
    const renderKeyExtractor=(item:Scream)=>{
        return item.screamId
    }
    const renderFlatList = () => {
        return <FlatList data={screams}
            renderItem={renderCell}
            /* keyExtractor={(item,index)=>{console.log('item in keyExtractor==',item)
             renderKeyExtractor(item)}} */
        />

    }
    return <>{renderFlatList()}</>

}


export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

