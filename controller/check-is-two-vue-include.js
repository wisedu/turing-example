let fs = require('fs');

let file = fs.readFileSync('./dist/wisedu-vue.pc.min.js', {encoding: 'utf-8'});
let vueVersions = file.match(/Vue\.version\s?\=\s?\'?\"?([^\'|\"]+)/g);
if(!vueVersions){
    console.log('\033[31m error vue未被打包 \033[0m');
}else if(vueVersions.length > 1){
    console.log('\033[31m error vue被重复打包打包，\n 可能tg-turing-antd与turing-example中的vue版本不一致，\n 请升级vue \033[0m');
}