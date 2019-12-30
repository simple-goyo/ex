// const BaseUrl = 'http://192.168.1.103:8080/'
const BaseUrl = 'http://10.141.221.88:8080/sc/'

const WebAddr = {
    VoiceUrl:   BaseUrl+'quickapp/voicerecord/voice_record.html',
    RecoUrl:   BaseUrl+'quickapp/batchSaveVoice',
    TextUrl0:    BaseUrl+'quickapp/housekeeper/canvas-side-text/index.html?a=',
    TextUrl:    BaseUrl+'quickapp/housekeeper/canvas-side-text/index.html?a=好的@',
    ResourceUrl:BaseUrl+'quickapp/sourceCenter/source_center.html',
    ServiceUrl: BaseUrl+'quickapp/serviceCenter/service_center.html',
    PhotoUri:   '/camera',
    QueryInfo:BaseUrl+'quickapp/queryInfo'
}
export {
    BaseUrl,
    WebAddr
}