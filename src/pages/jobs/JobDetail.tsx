import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getScream, getScreams } from '../../redux/actions/dataActions';
import moment from 'moment';
import { connect } from 'react-redux';
import { GET_SCREAMS } from '../../redux/actions';
//import LottieView from 'lottie-react-native';
import { Card, Title, Paragraph, Avatar, Button, Text, IconButton, Colors } from 'react-native-paper';
import { Scream } from '../../interface/IInterface';


const mapStateToProps = (state: any) => ({
    data: state.data,
    scream: state.data.scream
});
const mapDispatchToProps = (dispatch: any, props: any) => ({
    getScream: (screamId: string) => {
        dispatch(getScream(screamId))
    }
});

const JobDetail = ({ scream, getScream, navigation, route }:
    {
        scream: Scream,
        getScream: Function,
        navigation: any,
        route: any
    }) => {

    console.log("route in joobDetail==", route);
    const { screamId } = route.params;
    //console.log("scream==", screamId);
    const [like, setLike] = useState(0)
    useEffect(() => {
        getScream(screamId)
        return () => {

        }
    }, []);
    /* const renderLottieHeartIcon = () => {
        return <LottieView source={require('../../lottie-animation/like-animation.json')} autoPlay loop />;
    } */

    const renderCell = (item: any) => {
        console.log("item==", item);
        const date = item.createdAt
        const timeAgo = moment(item.createdAt).fromNow();

        return <Card style={{ margin: 10, borderRadius: 5 }} onPress={() => navigation.navigate('JobDetail')}>
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

    return <>{renderCell(scream)}</>

}


export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);

