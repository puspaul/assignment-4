import React from "react"
import "./style.css"


import Contactcard from "./Contactcard.js"
function Romance()
{
return(
  <div className="contacts">
    
    
    <Contactcard 
     imgUrl="https://img.etimg.com/thumb/height-480,width-640,imgsize-66180,msid-45284305/.jpg"
     
     name="DDLJ"
     imd="9.5"
     like="98%"

     />
     
    <Contactcard 
     imgUrl="data:image/jpeg;base64,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"
     
     name="Veer zara"
     imd="9.4"
     like="84%"

     />
     <Contactcard 
      imgUrl="https://english.cdn.zeenews.com/sites/default/files/2018/02/14/660445-hum-dil.jpg"
      
      name="Hum dil de chuke sanam"
      imd="9.2"
      like="88%"
 
      />
      <Contactcard 
       imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MA3FRIeaFOm0JHOOAM3a1CeXRnKqJZRMh1WHzJVdCQr4OmjBpg"
       
       name="Ashiqui 2"
       imd="9.4"
       like="97%"
  
       />
       <Contactcard 
        imgUrl="https://im.idiva.com/content/2017/Sep/idiva_romantic_scenes_lead.jpg?w=980&h=457&q=75"
        
        name="Yeh Jawaani Heh Deewani"
        imd="9.5"
        like="96%"
   
        />
        <Contactcard 
         imgUrl="http://static.indianexpress.com/pic/uploadedImages/bigImages/B_Id_395418_Raanjhanaa.jpg"
         
         name="Ranjhaana"
         imd="8.8"
         like="84%"
    
         />
         <Contactcard 
          imgUrl="https://www.theindiancircle.com/indasset/uploads/2018/02/Valentines-Day-2.jpg"
          
          name="Jab we met"
          imd="9.5"
          like="96%"
     
          />
          <Contactcard 
           imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNLu527QlNhuL_0iC_IQSnherHhRbQ01G4Ecu1pZ6NhuG_2YbJg"
           
           name="Jab Tak he Jaan"
           imd="9.3"
           like="95%"
      
           />
           <Contactcard 
            imgUrl="https://qph.fs.quoracdn.net/main-qimg-6e6a1e8309923fa3fd6424eaf0caf127.webp"
            
            name="Lootera"
            imd="9.1"
            like="86%"
       
            />
            <Contactcard 
             imgUrl="https://www.top10about.com/wp-content/uploads/2016/02/Bajirao-Mastani.jpg"
             
             name="Bajirao Mastaani"
             imd="9.6"
             like="96%"
        
             />
             
                </div>
                )
}
export default Romance;