import React, { Fragment } from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';

const CommonDropDown = () =>{
    // Define your static data here
    const item = {
        btnclass: 'example-class',
        btncolor: 'primary',
        btnText: 'Dropdown Button',
        items: [
            { item: 'Item 1' },
            { item: 'Item 2' },
            { divider: true },
            { item: 'Item 3' }
        ]
    };

    return(
        <Dropdown >
            <div className="btn-group mb-0">
                <Btn attrBtn={{ className:`dropbtn ${item.btnclass}`, color:item.btncolor }}  >{item.btnText}<span><i className="icofont icofont-arrow-down"></i></span></Btn>
                <DropdownMenu className="dropdown-content">
                    {item.items.map((dropdownItem, i) =>
                        <Fragment key={i}>
                            {dropdownItem.item ? <DropdownItem href="#">{dropdownItem.item}</DropdownItem> : ''}
                            {dropdownItem.divider ? <DropdownItem divider/> : ''}
                        </Fragment>   
                    )}
                </DropdownMenu>
            </div>
        </Dropdown>
    );
};

export default CommonDropDown;

// import React, { Fragment } from 'react';
// import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
// import { Btn } from '../../../AbstractElements';

// const CommonDropDown = ({ item }) =>{
//     return(
//       <Dropdown >
//         <div className="btn-group mb-0">
//           <Btn attrBtn={{ className:`dropbtn ${item.btnclass}`, color:item.btncolor }}  >{item.btnText}<span><i className="icofont icofont-arrow-down"></i></span></Btn>
//           <DropdownMenu className="dropdown-content">
//             {item.items.map((dropdownItem, i) =>
//               <Fragment key={i}>
//                 {dropdownItem.item?<DropdownItem href="#">{dropdownItem.item}</DropdownItem>:''}
//                 {dropdownItem.divider? <DropdownItem divider/> :''}
//               </Fragment>   
//               )}
//           </DropdownMenu>
//         </div>
//       </Dropdown>
//     );
// };

// export default CommonDropDown;