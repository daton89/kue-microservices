const kue = require("kue");
const queue = kue.createQueue();

let job = queue
  .create("myQueue", {
    from: "process1",
    type: "testMessage",
    msg: "Hello world!"
  })
  .save(err => {
    if (err) throw err;
    console.log(`Job ${job.id} saved to the queue.`);
  });

queue.on("job complete", (id, result) => {
  kue.Job.get(id, (err, job) => {
    if (err) throw err;
    console.log(`Job ${job.id} completed!`);
    console.log('result =>', result);
    
    // job.remove(err => {
    //   if (err) throw err;
    // });
  });
});
