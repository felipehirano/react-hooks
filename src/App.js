import React from 'react'
import UseStateHook from './components/useStateHook';
import UseEffectDidMountHook from './components/useEffectDidMountHook';
import UseEffectDidUpdateHook from './components/useEffectDidUpdateHook';

export default function App() {
  return (
    <>
      {/* <UseStateHook /> */}
      {/* <UseEffectDidMountHook /> */}
      <UseEffectDidUpdateHook />
    </>
  );
}
