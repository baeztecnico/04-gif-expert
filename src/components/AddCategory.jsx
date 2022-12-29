import { useState } from 'react';

const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState(' One punch');

  const onInputChange = (event) => {
    setinputValue(event.target.value);
    console.log(inputValue);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1)return;
    //setcategories(categories =>[inputValue,...categories]);
    onNewCategory(inputValue.trim());
    setinputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>

  );
}

export default AddCategory;
