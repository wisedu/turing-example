let fs = require('fs');

let file = fs.readFileSync('./dist/wisedu-vue.pc.min.js', {encoding: 'utf-8'});
let vueVersions = file.match(/Vue\.version\s?\=\s?\'?\"?([^\'|\"]+)/g);
if(!vueVersions){
    console.log('\033[31m error vue未被打包 \033[0m');
}else if(vueVersions.length > 1){
    console.log('\033[31m error wisedu-vue.pc.min.js 的 vue被重复打包打包，\n 可能tg-turing-antd与turing-example中的vue版本不一致，\n 存在的个版本'+vueVersions.join(' ， ')+' \n 请升级example的vue \033[0m');
}


let mobileFile = fs.readFileSync('./dist/wisedu-vue.mobile.min.js', {encoding: 'utf-8'});
let mobileVueVersions = mobileFile.match(/Vue\.version\s?\=\s?\'?\"?([^\'|\"]+)/g);
if(!mobileVueVersions){
    console.log('\033[31m error vue未被打包 \033[0m');
}else if(mobileVueVersions.length > 1){
    console.log('\033[31m error wisedu-vue.mobile.min.js 的 vue被重复打包打包，\n 可能tg-form-didi与turing-example中的vue版本不一致，\n 存在的个版本'+vueVersions.join(' ， ')+' \n 请升级example的vue \033[0m');
}

