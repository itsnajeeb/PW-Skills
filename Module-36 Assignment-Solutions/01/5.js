const fs=require('fs');
const fileName='nodejs_architecture.txt';

//Delete the file

fs.unlink(fileName,(err)=>{
    if(err){
        console.log('Error Deleting the file');
        return;
    }
    else{
        console.log("File Deleted Successfully ");
        
    }
})
