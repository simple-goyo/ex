const HostName =  {
  'ServiceCenter': '192.168.1.116:5000',
  'ImageRecognize': '192.168.1.116:5000',
}

const RequestName = {
  'GET_VOICE_START' : 'get_voice_start',
}

// function getServiceCenterUrl(requestName) {
//   const serviceURL = 'http://' + HostName.ServiceCenter + '/' + requestName;
//   return serviceURL;
// }

export {
  HostName,
  RequestName,
}