import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {tilte: 'name of the wind', id: 1},
        {tilte: 'the way of kings', id: 2},
        {tilte: 'the final empire', id: 3},
        {tilte: 'the hero of ages', id: 4}
    ])
  
    return ( 
       <BookContext.Provider value={{books}}>
            {props.children}
            {/* console.log({props.children}) */}
       </BookContext.Provider> 
     );
}
 
export default BookContextProvider;