
let fs = require('fs');

let tgTuringPackage = fs.readFileSync('./node_modules/tg-turing/package.json', {encoding: 'utf-8'});
let tgTuringPackageJson = JSON.parse(tgTuringPackage);
let tgTuringVersion = tgTuringPackageJson.version;
tgTuringVersion = tgTuringVersion.replace(/^\^|\~/, '');

let tgTuringAntdPackage = fs.readFileSync('./node_modules/tg-turing-antd/package.json', {encoding: 'utf-8'});
let tgTuringAntdPackageJson = JSON.parse(tgTuringAntdPackage);
let tgTuringVersionInAntd = tgTuringAntdPackageJson.dependencies['tg-turing'];
tgTuringVersionInAntd = tgTuringVersionInAntd.replace(/^\^|\~/, '');

let tgFormDidiPackage = fs.readFileSync('./node_modules/tg-form-didi/package.json', {encoding: 'utf-8'});
let tgFormDidiPackageJson = JSON.parse(tgFormDidiPackage);
let tgTuringVersionInFormDidi = tgFormDidiPackageJson.dependencies['tg-turing'];
tgTuringVersionInFormDidi = tgTuringVersionInFormDidi.replace(/^\^|\~/, '');


if(tgTuringVersion !== tgTuringVersionInAntd || tgTuringVersion !== tgTuringVersionInFormDidi){
    if(tgTuringVersion !== tgTuringVersionInFormDidi && tgTuringVersion !== tgTuringVersionInAntd){
        console.log('\033[31m error tg-turing与tg-turing-antd和tg-form-didi中引用的tg-turing版本不一致 \033[0m');
        console.log('\033[31m 请重新发布tg-turing-antd和tg-form-didi 到npm \033[0m');
    }else if(tgTuringVersion !== tgTuringVersionInAntd){
        console.log('\033[31m error tg-turing与tg-turing-antd中引用的tg-turing版本不一致 \033[0m');
        console.log('\033[31m 请重新发布tg-turing-antd 到npm \033[0m');
    }else if(tgTuringVersion !== tgTuringVersionInFormDidi){
        console.log('\033[31m error tg-turing与tg-form-didi中引用的tg-turing版本不一致 \033[0m');
        console.log('\033[31m 请重新发布tg-form-didi 到npm \033[0m');
    }

    console.log('特意用此中断程序执行' + aaa + bbb);
}



