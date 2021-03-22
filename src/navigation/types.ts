import { ParamListBase } from "@react-navigation/native";


export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Jobs: undefined;
  Resumes: undefined;
  Profile: undefined;
  Messages: undefined;
  Settings: undefined;
};

export type JobsTabParamList = {
  JobsScreen: undefined;
};

export type ResumeTabParamList = {
  ResumeScreen: undefined;
};
export type ProfileTabParamList = {
  ProfileScreen: undefined;
};
export type MessageTabParamList = {
  MessageScreen: undefined;
};
export type SettingsTabParamList = {
  Settings: undefined;
};

export interface StackParamListJDP extends ParamListBase {
  params: JDPParams | undefined;
}
interface JDPParams {
  jobDID: string;
  //iPath: IPathPagePieces;
  companyDid: string;
}

export type TabParamList =
  | JobsTabParamList
  | ResumeTabParamList
  | ProfileTabParamList
  | SettingsTabParamList;
