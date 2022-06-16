import React, {useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";



function UpdateModal(show, setShow) {
    //const dispatch = useDispatch();
  //  const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');


useEffect(() => {
 
}, [  show]);
  

  const handleSubmit = (e) => {
      

  }

  const handleClose = () => {
    setShow=false
  }



  return <div>
         
  </div>;
}

export default UpdateModal;
