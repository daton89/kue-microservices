const kue = require('kue');
const queue = kue.createQueue();

queue.process('myQueue', function({data, ...job}, done){
    console.log('job.id =>', job.id);
    console.log(`${data.from} sent a ${data.type} that say: "${data.msg}"`);
    done && done()
});