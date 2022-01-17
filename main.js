let Skyline =[{
    name:"Carrot",
    catergory:"Skyline",
    price:"R6.99",
    img:"https://static.wikia.nocookie.net/fastandfurious/images/d/d2/Nissan_Skyline_-_2F2F.jpg/revision/latest/scale-to-width-down/1200?cb=20201128161453"
  },
  {
    name:"Apples",
    catergory:"Skyline",
    price:"R3.99",
    img:"https://static.wikia.nocookie.net/fastandfurious/images/d/d2/Nissan_Skyline_-_2F2F.jpg/revision/latest/scale-to-width-down/1200?cb=20201128161453"
  },
  {
    name:"Skyline",
    catergory:"Skyline",
    price:"4.99",
    img:"https://static.wikia.nocookie.net/fastandfurious/images/d/d2/Nissan_Skyline_-_2F2F.jpg/revision/latest/scale-to-width-down/1200?cb=20201128161453"
  },
  {
    name:"Potato",
    catergory:"Skyline",
    price:"R3.50",
    img:"https://static.wikia.nocookie.net/fastandfurious/images/d/d2/Nissan_Skyline_-_2F2F.jpg/revision/latest/scale-to-width-down/1200?cb=20201128161453"
  },
  ]
  
  Skyline = JSON.parse(localStorage.getItem("Skyline"))
  ? JSON.parse(localStorage.getItem("Skyline"))
  :Skyline;
    
  
  function readSkyline(Skyline){
     document.querySelector("#Skyline").innerHTML = "";
  
     Skyline.forEach((Skyline,position) => {
     document.querySelector("#Skyline").innerHTML +=`
      
      <div class="card" style="width: 18rem;">
      <img src="${Skyline.img}" class="card-img-top">
      <div class="card-body">
      
      ${Skyline.name}
      ${Skyline.catergory} 
      ${Skyline.price}
      
      <div class="content">
      <div  class="buttons">
      <button  class="glow-on-hover lkj btn btn-dark" data-bs-toggle="modal" data-bs-target="#update-modal-${position}">EDIT</button>
      <button  class="glow-on-hover lkj btn btn-danger" onclick="deleteSkyline(${position})">DELETE</button>
      </div>
      </div>
      </div>
    </div>
    
      <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">EDIT YOUR PURCHASE</h5>
              <button type="button" class="glow-on-hover lkj btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body1">
              <h4 class="fs-6">Name:</h4>
              <input type="text"class="in" id="update-input-${position}" value="${Skyline.name} "/>
              <h4 class="fs-6">Category:</h4>
              <select name="catergory" class="in" id="update-input-catergory-${position}">
              <option value="Skyline">Skyline</option>
              <option value="Auto-Evolution">Auto-Evolution</option>
              </select>
              <h4 class="fs-6">Price:</h4>
              <input type="text" class="in" id="update-input-price-${position}" value="${Skyline.price} "/>
              <h4 class="fs-6">Image:</h4>
              <input type="text" class="in" id="update-input-img-${position}" value="${Skyline.img} "/>
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-light" data-bs-dismiss="modal" onclick="updateSkyline(${position})">Save changes</button>
            </div>
          </div>
        </div>
      </div>
     `;
     });
  }
  
  readSkyline(Skyline);
  
  function createSkyline(){
      let newSkyline = document.querySelector("#add").value;
      let catergory = document.querySelector("#catergory").value;
      let img =  document.querySelector("#img").value;
      let price = document.querySelector("#price").value;
     
      try{
          if(newSkyline =="") throw "Please enter a Skyline name..."
          Skyline.forEach(individual =>{
              if(individual == newSkyline)throw "That Skyline name already exists..."
          })
         
  
          Skyline.push({
              name:newSkyline,
              catergory,
              img,
              price,
          });
         localStorage.setItem("Skyline",JSON.stringify(Skyline));
          readSkyline(Skyline);
      } catch(err){
          alert(err)
      }
     
  }
  
  function deleteSkyline(position){
      Skyline.splice(position, 1)
      localStorage.setItem("Skyline",JSON.stringify (Skyline));
      readSkyline(Skyline);
  }
  
  function updateSkyline(position){
      let Skylines =document.querySelector(`#update-input-${position}`).value;
      let catergory =document.querySelector(`#update-input-catergory-${position}`).value;
      let img =  document.querySelector(`#update-input-img-${position}`).value;
      let price = document.querySelector(`#update-input-price-${position}`).value;
      
      try{
          if(Skylines ===""){
              throw new Error("please enter a Skyline name")
          }
          Skyline[position]={
              name:Skylines,
              catergory,
              img,
              price,
          };
          localStorage.setItem("Skyline",JSON.stringify (Skyline));
          readSkyline(Skyline);
      }catch(error){
          alert(error)
      }
      }
    
     function filterAll(){
      readSkyline(Skyline);
     }
  
     function filterSkyline(){
       let newSkyline = Skyline.filter(Skyline =>{
         return Skyline.catergory == "Skyline";
       })
       readSkyline( newSkyline);
     }
  
     function filterVeg(){
      let newSkyline = Skyline.filter(Skyline =>{
        return Skyline.catergory == "Auto-Evolution";
      })
      readSkyline( newSkyline);
      console.log(newSkyline)
    }