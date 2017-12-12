
/**
 * 统一输出调试日志
 */
const log = (...parms)=> {
  if (true) {
    console.log(...{parms});
  }
}



if (typeof window.$Log === 'undefined') window.$Log = log;
