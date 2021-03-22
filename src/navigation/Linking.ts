import { LinkingOptions } from "@react-navigation/native";

const config = {
  screens: {
    BottomTabs: {
      path: 'bottom_tabs',
      screens: {
        Jobs: {
          path: 'jobs',
          exact: true,
          screens: {
            Search: {
              path: 'login',//'search',///:keyword/:location
              params: {
                keyword: (keyword: string) => `${keyword}`,
                location: (location: string) => `${location}`
              },
              exact: true,
            },
            JobDetail: {
              path: 'users/:screamId/',
              params: {
                screamId: (screamId: string) => `${screamId}`,
               
              },
              exact:true,
            }
          },
        },
        Resumes: { path: 'resume', exact: true },
        Profile: { path: 'profile', exact: true },
        Messages: { path: 'messages', exact: true,
        screens:{
          MessageDetailView:{
            path:'messageDetail',
            exact:true,
          }
        } },
        Settings: {
          path: 'settings', exact: true,
          screens: {
            AboutCareerBuilder: {
              path: 'about',
              exact: true,
            },
            GetHelp: {
              path: 'getHelp',
              exact: true,
            },
            TakeOurSurvey: {
              path: 'survey',
              exact: true,
            },
            StoreRating: {
              path: 'storeRating',
              exact: true,
            },
            ExternalApply: {
              path: 'externalApply',
              exact: true,
            }

          }
        },

      }
    },

  }
}



const linking = {
  prefixes: ["https://www.kyadav.tech", "deeplink://"],
  config,
};


export default linking;
