import Screens from '../screens';

export const quitApp = async () => {
  const app = await window.fin.Application.getCurrent();
  return await app.terminate();
};

export const createWindow = async windowOptions => {
  return await window.fin.Window.create(windowOptions);
};

export const getCurrentWindow = async () => {
  return await window.fin.Window.getCurrent();
};

export const getCurrentWindowSync = () => {
  return window.fin.Window.getCurrentSync();
};

export const getChildWindows = async () => {
  const application = await window.fin.Application.getCurrent();
  return await application.getChildWindows();
};

export const getCurrentWindowOptions = async () => {
  const currentWindow = await getCurrentWindow();
  return await currentWindow.getOptions();
};

export const sendInterApplicationMessage = async (uuid, topic, payload) =>
  await window.fin.InterApplicationBus.send({ uuid }, topic, payload);

export const launchScreen = async (name,options) => {
  console.log("About to launch window "+ name);
  const childWindows = await getChildWindows();
  console.log("Already open windows " +childWindows.length);
  for (let i = 0; i < childWindows.length; i++) {
    const childWindowOptions = await childWindows[i].getOptions();
    if (childWindowOptions.name === name) {
      if (childWindows[i]) {
        return childWindows[i];
      }
      break;
    }
  }

   let mi = await fin.System.getMonitorInfo();
   console.log(JSON.stringify(mi.virtualScreen));
    const defaultOptions = {
      autoShow: true,
      name: name,
      url: `${name}.html`,
      resizable: true,
      defaultHeight: Math.floor(mi.virtualScreen.dipRect.bottom * 0.80),
      defaultWidth: Math.floor(mi.virtualScreen.dipRect.right * 0.75),
      defaultLeft: Math.floor(mi.virtualScreen.dipRect.right * 0.19),
      defaultTop: 10,
      saveWindowState: false
    };
    let combinedOptions = Object.assign({},defaultOptions,options);
    
    console.log(JSON.stringify(defaultOptions));
    try {
      const win = await createWindow(combinedOptions);
      return win;
    } catch(err) {
      console.log("error while creating window ");
      console.log(err);
    }


  return null;
}