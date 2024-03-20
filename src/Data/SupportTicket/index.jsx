import React from 'react';
import user from '../../assets/images/user/1.jpg';
import user2 from '../../assets/images/user/2.png';
import user3 from '../../assets/images/user/3.jpg';
import user4 from '../../assets/images/user/4.jpg';
import user5 from '../../assets/images/user/5.jpg';
import user6 from '../../assets/images/user/6.jpg';
import user7 from '../../assets/images/user/7.jpg';
import user8 from '../../assets/images/user/8.jpg';
import user9 from '../../assets/images/user/9.jpg';
import user10 from '../../assets/images/user/10.jpg';
import user11 from '../../assets/images/user/11.png';
import user12 from '../../assets/images/user/12.png';
import { Media } from 'reactstrap';
import { Image } from '../../AbstractElements';
import { Tooltip } from 'react-bootstrap';

export const supportData = [
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'System Architect',
    client: "Members",
    investment: '$320,800',
    location: 'Edinburgh',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 5421,
    email: 't.nixon@datatables.net',
    packageName: 'premium',
    blockUser: false,
    id:"1"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'System Architect',
    client: "Members",
    investment: '$320,800',
    location: 'Edinburgh',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-primary' style={{ width: '80%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 5421,
    email: 't.nixon@datatables.net',
    packageName: 'premium',
    blockUser: false,
    id:"2"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    client: "Customers",
    investment: '$86,000',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
    packageName: 'basic',
    blockUser: true,
    id:"3"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>John Doe</div>
        </Media>
      </Media>
    ),
    position: 'Senior Developer',
    client: "Customers",
    investment: '$100,000',
    location: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 1234,
    email: 'john.doe@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "1"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Jane Smith</div>
        </Media>
      </Media>
    ),
    position: 'Marketing Manager',
    client: "Customers",
    investment: '$75,000',
    location: 'Los Angeles',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 5678,
    email: 'jane.smith@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "2"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    client: "Customers",
    investment: '$86,000',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'tiger.nixon@example.com',
    packageName: 'basic',
    blockUser: true,
    id: "3"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>John Doe</div>
        </Media>
      </Media>
    ),
    position: 'Senior Developer',
    client: "Customers",
    investment: '$100,000',
    location: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 1234,
    email: 'john.doe@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "1"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Jane Smith</div>
        </Media>
      </Media>
    ),
    position: 'Marketing Manager',
    client: "Customers",
    investment: '$75,000',
    location: 'Los Angeles',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 5678,
    email: 'jane.smith@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "2"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    client: "Customers",
    investment: '$86,000',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'tiger.nixon@example.com',
    packageName: 'basic',
    blockUser: true,
    id: "3"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>John Doe</div>
        </Media>
      </Media>
    ),
    position: 'Senior Developer',
    client: "Customers",
    investment: '$100,000',
    location: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 1234,
    email: 'john.doe@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "1"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user2}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Jane Smith</div>
        </Media>
      </Media>
    ),
    position: 'Marketing Manager',
    client: "Customers",
    investment: '$75,000',
    location: 'Los Angeles',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 5678,
    email: 'jane.smith@example.com',
    packageName: 'premium',
    blockUser: false,
    id: "2"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    client: "Customers",
    investment: '$86,000',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'tiger.nixon@example.com',
    packageName: 'basic',
    blockUser: true,
    id: "3"
  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Junior Technical Author',
    client: "Customers",
    investment: '$86,000',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
        </div>
      </div>
    ),
    extn: 1562,
    email: 'a.cox@datatables.net',
    packageName: 'basic',
    blockUser: true,
    id:"4"

  },
    {
      image: (
        <Media className='justify-content-start'>
          <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user3}`, alt: 'Generic placeholder image' }} />
          <Media body className='align-self-center'>
            <div>Tiger Nixon</div>
          </Media>
        </Media>
      ),
      position: 'Junior Technical Author',
      client: "Customers",
      investment: '$86,000',
      location: 'San Francisco',
      skill: (
        <div className='progress-showcase' style={{ width: '86px' }}>
          <div className='progress sm-progress-bar'>
            <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '50%' }}></div>
          </div>
        </div>
      ),
      extn: 1562,
      email: 'a.cox@datatables.net',
      packageName: 'basic',
      blockUser: true,
    },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user4}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Software Engineer',
    client: "Free",
    investment: '$132,000',
    location: 'London',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' style={{ width: '60%' }} role='progressbar'></div>
        </div>
      </div>
    ),
    extn: 2558,
    email: 'b.greer@datatables.net',
    packageName: 'premium',
    blockUser: false,
    id:"5"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user5}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Integration Specialist',
    client: "Members",
    investment: '$372,000',
    location: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '70%' }}></div>
        </div>
      </div>
    ),
    extn: 4804,
    email: 'b.williamson@datatables.net',
    packageName: 'basic',
    blockUser: true,
    id:"6"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user6}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Pre-Sales Support',
    client: "Free",
    investment: '$106,450',
    location: 'New York',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-success' role='progressbar' style={{ width: '20%' }}></div>
        </div>
      </div>
    ),
    extn: 8330,
    email: 'c.vance@datatables.net',
    packageName: 'basic',
    blockUser: false,
    id:"7"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    client: "Members",
    investment: '$433,060',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
    packageName: 'premium',
    blockUser: true,
    id:"8"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    client: "Members",
    investment: '$433,060',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'u.kelly@datatables.net',
    packageName: 'premium',
    blockUser: true,
    id:"9"

  },
  {
    image: (
      <Media className='justify-content-start'>
        <Image attrImage={{ className: 'rounded-circle img-30 me-3', src: `${user9}`, alt: 'Generic placeholder image' }} />
        <Media body className='align-self-center'>
          <div>Tiger Nixon</div>
        </Media>
      </Media>
    ),
    position: 'Senior Javascript Developer',
    client: "Members",
    investment: '$433,060',
    location: 'San Francisco',
    skill: (
      <div className='progress-showcase' style={{ width: '86px' }}>
        <div className='progress sm-progress-bar'>
          <div className='progress-bar custom-progress-width bg-secondary' role='progressbar' style={{ width: '60%' }}></div>
        </div>
      </div>
    ),
    extn: 6224,
    email: 'c.kelly@datatables.net',
    packageName: 'premium',
    blockUser: true,
    id:"10"

  },
];

export const supportColumns = [
  {
    name: 'Image',
    selector: (row) => row['image'],
    sortable: true,
    center: false,
    minWidth: '200px',
    maxWidth: '300px',
  },
 
  {
    name: 'Investment',
    selector: (row) => row['investment'],
    sortable: true,
    center: false,
  },
  {
    name: 'Package',
    selector: (row) => row['packageName'],
    sortable: true,
    center: false,
  },
  
  {
    name: 'Email',
    selector: (row) => row['email'],
    sortable: true,
    center: false,
  },
 
  {
    name: 'Location',
    selector: (row) => row['location'],
    sortable: true,
    center: false,
  },
 
  

];

export const TicketData = [
  {
    id: 1,
    title: 'Order',
    num: '2563',
    class: 'progress-bar bg-primary',
  },
  {
    id: 2,
    title: 'Pending',
    num: '8943',
    class: 'progress-bar bg-secondary',
  },
  {
    id: 3,
    title: 'Running',
    num: '2500',
    class: 'progress-bar bg-warning',
  },
  {
    id: 4,
    title: 'Smooth',
    num: '2060',
    class: 'progress-bar bg-info',
  },
  {
    id: 5,
    title: 'Done',
    num: '5600',
    class: 'progress-bar bg-success',
  },
  {
    id: 6,
    title: 'Cancel',
    num: '2560',
    class: 'progress-bar bg-danger',
  },
];
