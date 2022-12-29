import {useState} from 'react';
import AddCategory from './components/AddCategory';
import GiftGriff from './components/GiftGriff';

const GifAppExpert = () => {

  const [categories, setcategories] = useState([]);  
  const onAddCategorie=(newCategory)=>{
    //categories.push(newCategory);
      if(categories.includes(newCategory))return;
      setcategories([newCategory,...categories]);
  }  

  return (
    <>
    <h1>Gif expert APP</h1>

    <AddCategory 
   // setcategories={setcategories}
      onNewCategory={onAddCategorie}
    >
        
    </AddCategory>

    <button onClick={onAddCategorie}>
        agregar
    </button>
        {
          categories.map(category =>{
                return (
                <GiftGriff 
                key={category}
                 category ={category}/>  
                )
          })  
        }
    </>
  );
}

export default GifAppExpert;
