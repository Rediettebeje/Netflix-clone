import React, { useEffect, useState } from 'react'
import './Nav.css'


// function Navv() {
//     const [show, handleShow] = useState(false);
//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 100) {
//                 handleShow(true);
//             } else handleShow(false)
//         });
//         return () => {
//             window.removeEventListener("scroll");
//         };
//     }, []);
   
    
//   return (
//       <div className= {`navv ${ show && "navv_black"}`} >
//           <img
//               className='navv_logo'
//               src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
//               alt='Netflix Logo'
//           />
//            <img
//               className='navv_avatar'
//               src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
//               alt='Avatar Logo'
//           />
          
//       </div>
//   )
// }

// export default Navv



function Navv() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navv ${show && "navv_black"}`}>
      <img
        className='navv_logo'
        src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
        alt='Netflix Logo'
      />
      <img
        className='navv_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Avatar Logo'
      />
    </div>
  );
}

export default Navv;
