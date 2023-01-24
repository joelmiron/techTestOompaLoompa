import { useHistory } from "react-router";



const OompaLoompaMain = ({ id, image, firstName, lastName,gender,profession}) =>{
const history=useHistory()

const loompaDetails = (oompaLoompa) =>{
  history.push("/"+ oompaLoompa)
  }
  
 // This intersection observer loops images and checks if the image is visible on the view to load it
// useEffect(() =>{
// const viewImage = (entries) =>{
//   entries.forEach((entry) =>{
//     if(entry.isIntersecting){
//       const element = entry.target
//       const imageSrc = element.getAttribute('data-src')

//       element.setAttribute('src', imageSrc)
//     }
//   })}
  
//   const observer = new IntersectionObserver(viewImage,{threshold:1})
//   observer.observe(elementRef.current)
// },[])

return(

 <div className="oompaLoompaContent"  onClick={() => loompaDetails(id)}>
    <img alt="OompaImage" className="imagesOompaLoompas"   src={image} />
   <div>
<div className="name">{firstName} {lastName}</div>
<div className="gender">{gender === "F" ? "Female" : "Male"}</div>
<div className="profession">{profession}</div>
</div>



</div>

)


}

export default OompaLoompaMain