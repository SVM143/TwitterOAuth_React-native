import {
    CustomTabs,
    ANIMATIONS_SLIDE,
    ANIMATIONS_FADE
  } from 'react-native-custom-tabs';
  
  const options = {
    toolbarColor: '#876eff',
    enableUrlBarHiding: false,
    showPageTitle: true,
    enableDefaultShare: true,
    // Specify full animation resource identifier(package:anim/name)
    // or only resource name(in case of animation bundled with app).
    // animations: {
    //   startEnter: 'slide_in_bottom',
    //   startExit: 'slide_out_bottom',
    //   endEnter: 'slide_in_bottom',
    //   endExit: 'slide_out_bottom',
    // },
    // And supports SLIDE and FADE as default animation.
    animations: ANIMATIONS_SLIDE,
    // headers: {
    //   'my-custom-header': 'my custom header value'
    // },
    forceCloseOnRedirection: true,
  }
  
  export function openCustomTab(url, customOptions) {
    CustomTabs.openURL(url, customOptions || options).then((launched: boolean) => {
      // console.log(`Launched custom tabs: ${launched}`);
    }).catch(err => {
      // console.log(err)
    });
  }
  