const {readFile, writeFile} = require('fs');

readFile('./pathFolder/first.txt','utf8', (err,res)=>{
    if(err){
        console.log(err);
        return
    }
    const first = res;
    // console.log(first);

    readFile('./pathFolder/second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;

        writeFile('./pathFolder/async.txt',`Here is the async file : ${first}, ${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(res);
        })

    })

})
