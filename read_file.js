var fs = require('fs')

var images_name = fs.readdirSync('./images/')
var new_images_name = new Array();

images_name.forEach((img)=>{
    var img_name = img.split('.')

    if(parseInt(img_name[0]) > 9 && img_name[0][0] == '0'){
        var new_image_name = img_name[0].replaceAll('0','')
        fs.rename(`./images/${img}`,`./images/${new_image_name}.${img_name[1]}`,(err)=> err ? console.log(err) : null)
    }

    if(parseInt(img_name[0]) < 10 && img_name[0][0] == '0' && img_name[0][1] == '0'){
        fs.rename(`./images/${img}`,`./images/0${img_name[0][2]}.${img_name[1]}`,(e)=>e ? console.log(e) : null)
    }
})

var has_prefix_number = false;

images_name.forEach((single_image)=>{
    var name = single_image.split('.');

    if(name[0][0] == '0'){
        has_prefix_number = true
    }

    new_images_name.push(parseInt(name[0]));
});


new_images_name.sort((a,b)=> a - b);
console.log(new_images_name);

new_images_name.map((current,index)=>{
    if(current.toString().length == 1 && has_prefix_number){
         new_images_name[index] = 0 + current.toString() + '.jpg';
    }else{
        new_images_name[index] = current.toString() + '.jpg';
    }
})

console.log(new_images_name);

fs.writeFile('images.json',JSON.stringify(new_images_name),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})