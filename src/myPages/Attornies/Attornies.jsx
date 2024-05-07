import React from "react";
import { Fragment } from "react";
import { Table } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";

const Attornies = () => {
  const dummyAttorneys = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      companyName: "ABC Law Firm",
      street: "123 Main Street",
      city: "Cityville",
      state: "Stateville",
      zip: "12345",
      country: "Countryland"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      companyName: "XYZ Law Firm",
      street: "456 Elm Street",
      city: "Townsville",
      state: "Stateland",
      zip: "54321",
      country: "Countryville"
    },
    // Add more dummy attorneys here
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "555-123-4567",
      companyName: "Law Associates",
      street: "789 Oak Avenue",
      city: "Villageville",
      state: "Countyville",
      zip: "67890",
      country: "Countrytown"
    },
    {
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "111-222-3333",
      companyName: "Williams & Co",
      street: "101 Pine Street",
      city: "Mountainville",
      state: "Hillstate",
      zip: "54321",
      country: "Countryland"
    },
    {
      name: "David Brown",
      email: "david@example.com",
      phone: "444-555-6666",
      companyName: "Brown Legal",
      street: "777 Maple Street",
      city: "Valleytown",
      state: "Foothillstate",
      zip: "98765",
      country: "Countryside"
    },
    {
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "777-888-9999",
      companyName: "Davis Law Group",
      street: "222 Birch Lane",
      city: "Laketown",
      state: "Woodsstate",
      zip: "13579",
      country: "Countryville"
    },
    {
      name: "Matthew Wilson",
      email: "matthew@example.com",
      phone: "123-456-7890",
      companyName: "Wilson & Partners",
      street: "333 Cedar Street",
      city: "Rivercity",
      state: "Riverstate",
      zip: "24680",
      country: "Riverland"
    },
    {
      name: "Olivia Martin",
      email: "olivia@example.com",
      phone: "999-888-7777",
      companyName: "Martin Law Firm",
      street: "444 Elm Street",
      city: "Beachtown",
      state: "Coaststate",
      zip: "97531",
      country: "Coastland"
    },
    {
      name: "James Thompson",
      email: "james@example.com",
      phone: "333-222-1111",
      companyName: "Thompson & Associates",
      street: "555 Oak Street",
      city: "Hilltown",
      state: "Highstate",
      zip: "36912",
      country: "Hillcountry"
    },
    {
      name: "Sophia Hernandez",
      email: "sophia@example.com",
      phone: "666-777-8888",
      companyName: "Hernandez Law",
      street: "888 Maple Avenue",
      city: "Deserttown",
      state: "Sandstate",
      zip: "75309",
      country: "Desertland"
    },
  ];
  return (
    <Fragment>
      <Breadcrumbs  mainTitle="View Attorneys" parent="Attorneys" title="View Attorneys"  />

      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {dummyAttorneys.map((attorney, index) => (
            <tr key={index}>
              <td>{attorney.name}</td>
              <td>{attorney.email}</td>
              <td>{attorney.phone}</td>
              <td>{attorney.companyName}</td>
              <td>{attorney.city}</td>
              <td>{attorney.state}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Attornies;
