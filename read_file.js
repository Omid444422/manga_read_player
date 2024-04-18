var fs = require('fs')

var images_name = fs.readdirSync('./images/')

fs.writeFile('images.json',JSON.stringify(images_name),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})