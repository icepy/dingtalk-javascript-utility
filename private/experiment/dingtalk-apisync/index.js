import dingtalk from 'weex-dingtalk';
import timer from 'dingtalk-timer';

const { setTimeout, clearTimeout } = timer;

function apisync(){
  let _timeoutStatu = false;
  let _apis;
  while(true){
    var apis = null;
    let timeoutStatu = false;
    let once = true;
    let timeout;
    if (once){
      once = false;
      dingtalk.ready(function(){
        apis = dingtalk.apis;
      });
      timeout = setTimeout(function(){
        timeoutStatu = true;
        clearTimeout(timeout);
      },1000);
    }
    if (timeoutStatu){
      _timeoutStatu = true;
      throw new Error('sync apis timeout 1000ms');
      break;
    }
    if (apis){
      _apis = apis;
      clearTimeout(timeout);
      break;
    }
  }
  return _apis || {};
}

let initStatus = true;
let Apis = {};
if (initStatus){
  initStatus = false;
  Apis = apisync();
}

export default Apis;
