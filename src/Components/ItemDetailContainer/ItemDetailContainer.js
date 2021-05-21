import React, {useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import {getFirestore} from '../../firebase'


  function ItemDetailContainer () {
    const [ items, setItem ] = useState([]);
    const [ loading, setLoading ] = useState(true);   
    const {id} = useParams();
   
    useEffect(()=>{
      const db= getFirestore();

      const itemCollection = db.collection('items');
      const item = itemCollection.doc(id)
      item.get().then((querySnapshot) => {
          if(!querySnapshot.exists){
              console.log('Items no existe');
              return;
          }
          
          setItem({id: querySnapshot.id, ...querySnapshot.data()});
      }).catch((error)=>{
          console.log("Error searching items", error);
      }).finally(()=> {
          setLoading(false);
      });


  },[]);


   
    return <>
       <div className="container-fluid">
            <div className="container-fluid">
                <ItemDetail producto={items}/>
            </div>
         </div>
        
    
    </>;
   
   }
   export default ItemDetailContainer;
   
   