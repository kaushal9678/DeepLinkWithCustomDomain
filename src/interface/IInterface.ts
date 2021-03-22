import { LinkingOptions } from "@react-navigation/native";
import { ColorSchemeName } from "react-native";

export interface IJobs {
    scream: Scream, 
    screams: Scream[], 
    getAllScreams: Function, 
    navigation: any, 
    route: any
}
export interface Scream {
    screamId: string;
    body: string;
    userHandle: string;
    createdAt: Date;
    commentCount: number;
    likeCount: number;
    userImage: string;
}
export interface INavigationContainer{
    uriPrefixe:string[],
    linking:LinkingOptions
    ref: any
    isReadyRef?:any
    colorScheme:ColorSchemeName
}