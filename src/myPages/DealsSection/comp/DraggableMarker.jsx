import React, { Fragment, useState } from 'react';
import { Map, Draggable, Marker } from "pigeon-maps";
import { Col, Card, CardBody, Input, InputGroup, Button, InputGroupText } from 'reactstrap';

const DraggableMarker = () => {
  const [anchor, setAnchor] = useState([50.879, 4.6997]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query submission
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248df697b6ba80640dcaea261e7de10b913&text=${searchQuery}`);
      const data = await response.json();
    if (data && data.features && data.features.length > 0) {
      const { geometry: { coordinates } } = data.features[0];
      setAnchor(coordinates); // Move the map to the searched city coordinates
    } else {
      console.log('Location not found');
    }
  } catch (error) {
    console.error('Error fetching location:', error);
  }
};
  return (
    <Fragment>
      <Col xl="12" md="12">
        <Card>
          <CardBody>
            <div className="map-js-height">
              <InputGroup>
                <Input
                  placeholder="Search location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                />
                <InputGroupText addonType="append">
                  <Button color="primary" onClick={handleSearch}>Search</Button>
                </InputGroupText>
              </InputGroup>
              <Map height={350} defaultCenter={!anchor? [30.840509922738445, 74.46427231249996]:anchor} defaultZoom={11}>
                <Draggable offset={anchor} anchor={anchor} onDragEnd={setAnchor}>
                  <Marker width={50} anchor={!anchor? [30.840509922738445, 74.46427231249996]:anchor} />
                </Draggable>
              </Map>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DraggableMarker;


// import React, { Fragment, useState } from 'react';
// import { Map, Draggable, Marker } from "pigeon-maps";
// import { Col, Card, CardBody } from 'reactstrap';

// const DraggableMarker = () => {
//   const [anchor, setAnchor] = useState([50.879, 4.6997]);
//   return (
//     <Fragment>
//       <Col xl="12" md="12">
//         <Card>
       
//           <CardBody>
//             <div className="map-js-height">
//               <Map height={350} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
//                 <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
//                   <Marker width={50} anchor={[50.879, 4.6997]} />
//                 </Draggable>
//               </Map>
//             </div>
//           </CardBody>
//         </Card>
//       </Col>
//     </Fragment>
//   );
// };

// export default DraggableMarker;