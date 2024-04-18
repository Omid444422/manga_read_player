var images = null;
var image_container = document.querySelector('div.row');

 fetch('./images.json').then((res)=>res.text()).then((text)=>{
        images = JSON.parse(text);
        
        images.forEach((image)=>{
            image_container.innerHTML +=`<div class="col-12 d-flex justify-content-center"><img src="./images/${image}" class='w-auto'/></div>`
        })

    }).catch((err)=>alert(err))
