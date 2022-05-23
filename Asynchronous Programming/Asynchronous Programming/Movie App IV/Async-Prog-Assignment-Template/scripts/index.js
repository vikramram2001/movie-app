let i=0;
let id;
let arr=[{ images:"https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-03-23/20220322_IPL_Gen_1170x362_Set2-04c62f27-796f-4ddc-bd09-a4a7b7dd1c8b.jpg"},
         { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916"},
         { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/6882/676882-m"},
         { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/7034/677034-m"},
         { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4372/1124372-h-04b0f9e40986"},
         { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b"},


        ]

var img=document.createElement("img")
img.setAttribute("src",arr[i].images)

document.querySelector("#slideshow").append(img);
i=i+1

id=function Slides(){

    setInterval(function(){
        document.querySelector("#slideshow").innerHTML=null;
        if(i===arr.length)
        {
            i=0;
        }
      var img=document.createElement("img")
      img.setAttribute("src",arr[i].images)
      document.querySelector("#slideshow").append(img)
      i=i+1
   
    },2000)
   
}
id()

let MoviesData=[]
//creating obj of movies

obj1()
function obj1(){
  
        let name = "K.G.F. Chapter 2";
        let releaseDate = "1 feb 2022";
        let urlLink = "https://assetscdn1.paytm.com/images/cinema/KGF-705x750%20(1)-b216cd70-b6fe-11ec-8665-6d654dc679e6.jpg" ;
        let imdB = 9;
        let obj1 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj1)
     
}

obj2();
function obj2(){
  let name = "RRR";
  let  releaseDate = "2 feb 2022";
  let urlLink = "https://assetscdn1.paytm.com/images/cinema/RRR-south-705x750-b93cbdd0-693d-11ec-9b0b-ebc9d4ff7995.jpg" ;
  let imdB = 10;
  let obj2 = new Movies(name, releaseDate,urlLink,imdB)
  MoviesData.push(obj2)
}

obj3()
function obj3(){
  
        let name = "Doctor Strange";
        let releaseDate = "17 Mar 2018";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1x/sources/r1/cms/prod/4971/674971-v" ;
        let imdB = 9;
        let obj3 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj3)
     
}

obj4()
function obj4(){
  
        let name = "Deadpool";
        let releaseDate = "16 feb 2018";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3257/1770003257/1770003257-v" ;
        let imdB = 10;
        let obj4 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj4)
    
}
obj5()
function obj5(){
   
        let name = "Dark Phoenix";
        let releaseDate = "19 oct 2021";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/532/820532-v" ;
        let imdB = 8;
        let obj5 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj5)
     
}
obj6()
function obj6(){
   
        let name = "Hawkeye";
        let releaseDate = "18 Mar 2021";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a" ;
        let imdB = 7;
        let obj6 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj6)
     
}
obj7()
function obj7(){
   
        let name = "Captan Marvel";
        let releaseDate = "1 feb 2022";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5190/875190-v" ;
        let imdB = 8;
        let obj7 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj7)
    
}
obj8()
function obj8(){
   
        let name = "MoonKnight ";
        let releaseDate = "30 March 2022";
        let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1514/1161514-v-8c2341c419fd" ;
        let imdB = 7;
        let obj8 = new Movies(name,releaseDate,urlLink,imdB);
        MoviesData.push(obj8)
     
}
obj9()
function obj9(){
   
    let name = "The Wolverin";
    let releaseDate = "1 feb 2022";
    let urlLink = "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/445/1770000445/1770000445-v" ;
    let imdB = 10;
    let obj9 = new Movies(name,releaseDate,urlLink,imdB);
    MoviesData.push(obj9)
 
}

function Movies(name,releaseDate,urlLink,imdB){
    this.name=name;
    this.releaseDate=releaseDate;
    this.urlLink=urlLink;
    this.imdB=imdB;

}
console.log(MoviesData)
localStorage.setItem("MoviesData",JSON.stringify(MoviesData));

var container=document.createElement("div");
container.setAttribute("id","container")
document.querySelector("#Movies").append(container)

displaydata(MoviesData)

/////////////////////////////////////

// sorting Method


// function sorthandle(){
//     var select = document.querySelector("#sort").value ;
//     if(select == "lth"){
//         MoviesData.sort(function(a,b){
//       let x= a.imdB;
//       let y = b.imdB;
//       if(x<y){
//         return -1;
//       }if(x>y){
//         return 1;
//       }
//       return 0;
//     })
//     displaydata(MoviesData);
//     }
//      if(select == "htl"){
//         MoviesData.sort(function(a,b){
//         let x = a.imdB
//         let y = b.imdB;
//         if(x<y){
//           return 1;
//         }if(x>y){
//           return -1
//         }
//         return 0;
//       })
//       displaydata(MoviesData);
//     }
    
//   }



//.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function displaydata(MoviesData){
    document.querySelector("#container").innerHTML="";

    MoviesData.forEach(function(elem){
        var box=document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",elem.urlLink);

        var name=document.createElement("h2");
        name.innerText=elem.name;

        var releaseDate=document.createElement("h4");
        releaseDate.innerText="Release Date : "+elem.releaseDate;

        var imdB=document.createElement("h4");
        imdB.innerText="Imdb Rating :"+elem.imdB;

        box.append(img,name,releaseDate, imdB);
        container.append(box)

    })
}