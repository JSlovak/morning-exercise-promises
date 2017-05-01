const data = ['first', 'second', 'third'];

/*jshint esversion: 6*/

function getData(index, cb) {
  let err = null;
  if (index < 0) { err = new Error('index out of bounds'); }
  return cb(err, data[index]);
}

// wrap getData in a promise and console log the

new Promise((resolve, reject) => {
  getData(1, (err, data)=>{
    if (err){
      return reject(err);
    }
    else {
      return resolve(data);
    }
  });
})
.then((data)=>{
  //console.log(data);
});

// call getData three times and console log the output (use .then for the second and third call) using promises

new Promise((resolve, reject) => {
  getData(0, (err, data)=>{
    if (err){
      return reject(err);
    }
    else {
      console.log(data);
      return resolve(data);
    }
  });
})
.then((data) => {
  return new Promise((resolve, reject) => {
    getData(1, (err, data)=>{
      if (err){
        return reject(err);
      }
      else {
        console.log(data);
        return resolve(data);
      }
    });
  });
})
.then((data) => {
  return new Promise((resolve, reject) => {
    getData(2, (err, data)=>{
      if (err){
        return reject(err);
      }
      else {
        console.log(data);
        return resolve(data);
      }
    });
  });
});

// create a promise within getData and use the promise to trigger the callback in getData

// create a promisified version of getData

// call the promisified version of getData with -1, console log the error in a .catch
