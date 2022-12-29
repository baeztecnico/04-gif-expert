
import{getGiff} from "../helpers/getGifs";
import GiftItem from "./GiftItem";
import useFetchGifts from "../hooks/useFetchGifts";

const GiftGriff = ({category}) => {

    const {images, isloading} =useFetchGifts(category);

    
   
  return (
  <>
    <h3>{category}</h3>
    {
      isloading
      &&(<h2>Cargando...</h2>)
      
    }
    
    <div className="card-grid">
        {
            images.map((image) =>(
                <GiftItem
                 key ={image.id}
                 {...image}   
                 />
                ))
        }
    </div>
  </>
  )
}

export default GiftGriff;
