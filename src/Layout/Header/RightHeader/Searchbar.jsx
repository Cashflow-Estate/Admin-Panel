import React, { useState } from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';

const Searchbar = () => {
  const [searchresponsive, setSearchresponsive] = useState(false);

  const SeacrhResposive = (searchresponsive) => {
    const searchFull = document.querySelector('.search-full');
    const moreLang = document.querySelector('.more_lang');

    if (searchresponsive) {
      setSearchresponsive(!searchresponsive);
      if (searchFull) {
        searchFull.classList.add('open');
      }
      if (moreLang) {
        moreLang.classList.remove('active');
      }
    } else {
      setSearchresponsive(!searchresponsive);
      if (searchFull) {
        searchFull.classList.remove('open');
      }
    }
  };

  return (
    <li>
      <span className='header-search'>
        <SvgIcon iconId='search' onClick={() => SeacrhResposive(searchresponsive)} />
      </span>
    </li>
  );
};

export default Searchbar;

// import React, { useState } from 'react';
// import SvgIcon from '../../../Components/Common/Component/SvgIcon';

// const Searchbar = () => {
//   const [searchresponsive, setSearchresponsive] = useState(false);
//   const SeacrhResposive = (searchresponsive) => {
//     if (searchresponsive) {
//       setSearchresponsive(!searchresponsive);
//       document.querySelector('.search-full').classList.add('open');
//       document.querySelector('.more_lang').classList.remove('active');
//     } else {
//       setSearchresponsive(!searchresponsive);
//       document.querySelector('.search-full').classList.remove('open');
//     }
//   };

//   return (
//     <li>
//       <span className='header-search'>
//         <SvgIcon iconId='search' onClick={() => SeacrhResposive(searchresponsive)} />
//       </span>
//     </li>
//   );
// };

// export default Searchbar;
