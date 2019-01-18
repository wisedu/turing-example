
let fs = require('fs');

let tgTuringPackage = fs.readFileSync('./node_modules/tg-turing/package.json', {encoding: 'utf-8'});
let tgTuringPackageJson = JSON.parse(tgTuringPackage);
let tgTuringVersion = tgTuringPackageJson.version;
tgTuringVersion = tgTuringVersion.replace(/^\^|\~/, '');

let tgTuringAntdPackage = fs.readFileSync('./node_modules/tg-turing-antd/package.json', {encoding: 'utf-8'});
let tgTuringAntdPackageJson = JSON.parse(tgTuringAntdPackage);
let tgTuringVersionInAntd = tgTuringAntdPackageJson.dependencies['tg-turing'];
tgTuringVersionInAntd = tgTuringVersionInAntd.replace(/^\^|\~/, '');
if(tgTuringVersion !== tgTuringVersionInAntd){
    console.log('\033[31m error tg-turing与tg-turing-antd中引用的tg-turing版本不一致 \033[0m');
    console.log('特意用此中断程序执行' + aaa + bbb);
}else{
    console.log(`tg-turing与tg-turing-antd中引用的tg-turing版本相同`);
}


