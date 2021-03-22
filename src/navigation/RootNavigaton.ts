  import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name:any, params:any) {
  navigationRef.current?.navigate(name, params);
} 
 
// RootNavigation.ts

 /*import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name:any, params:any) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
} */