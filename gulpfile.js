const {watch,series}=require('gulp');
const {spawn}=require('node:child_process');

let myProcess = null;

const watcher = async () => {
    watch(['./**/*.js'], series(stop, start));
};

const start = async () => {
    myProcess = spawn('node', ['jsonmanaging.js'], {stdio: 'inherit'});
};
console.log('test');
const stop = async () => {
    if (myProcess) {
        await myProcess.kill();
        myProcess = null;
    }
};

const defaultRun = series(start);

exports.default= defaultRun;
exports.watcher=watcher(defaultRun);