import React, { useState } from 'react';
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'
// import sidebarData from './const/index'

export default function App() {
  return (

    <>
    <Navbar />
    <Hero />
    <div className="container-box">
      <div className="sidebarOuterContainer">
        {sidebarData.map((data, index) => {
          return (
            <div className="category" key={index}>
              <h3>{data.heading}</h3>
              <ul className='ul-sidebar'>
                {data.subHeading.map((list, index) => {
                  return <List list={list} key={index} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </>
  );
}

const List = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li
      className={isSelected ? 'selectedList' : ''}
      onClick={() => setIsSelected(!isSelected)}
    >
      <span className="title">{props.list.name}</span>
      {isSelected && <span className="cross-sign">x</span>}
    </li>
  );
};

export const sidebarData = [
  {
    heading: 'Related Category',
    subHeading: [
      {
        id: 'R-1',
        name: 'Paracetamol Tablets',
      },
      {
        id: 'R-2',
        name: 'Paracetamol Syrup',
      },
      {
        id: 'R-3',
        name: 'Paracetamol Powder',
      },
      {
        id: 'R-4',
        name: 'Aceclofenac',
      },
      {
        id: 'R-5',
        name: 'Magaladrate Simethicone Oral Suspension',
      },
      {
        id: 'R-6',
        name: 'Mefenamic Paracetamol Syrup',
      },
    ],
  },
  {
    heading: 'Related Brands',
    subHeading: [
      {
        id: 'B-1',
        name: 'Cipmol Paracetamol',
      },
      {
        id: 'B-2',
        name: 'Pandal Paracetamol Tablets',
      },
      {
        id: 'B-3',
        name: 'Combiflam',
      },
      {
        id: 'B-4',
        name: 'Crocin Tablets',
      },
      {
        id: 'B-5',
        name: 'Calpol Paracetamol Tablets',
      },
      {
        id: 'B-6',
        name: 'Sumo Tablet',
      },
    ],
  },
  {
    heading: 'Business Type',
    subHeading: [
      {
        id: 'T-1',
        name: 'Wholesaler',
      },
      {
        id: 'T-2',
        name: 'Manufacturer',
      },
      {
        id: 'T-3',
        name: 'Retailer',
      },
      {
        id: 'T-4',
        name: 'Exporter',
      },
    ],
  },
  {
    heading: 'Strength',
    subHeading: [
      {
        id: 'S-1',
        name: '500mg',
      },
      {
        id: 'S-2',
        name: '650mg',
      },
    ],
  },
  {
    heading: 'Manufacturer',
    subHeading: [
      {
        id: 'M-1',
        name: 'Intas Pharmaceutical Ltd.',
      },
      {
        id: 'M-2',
        name: 'Alkern Laboratories Ltd.',
      },
    ],
  },
  {
    heading: 'Prescription/Non prescription',
    subHeading: [
      {
        id: 'P-1',
        name: 'Intas Pharmaceutical Ltd.',
      },
      {
        id: 'P-2',
        name: 'Alkern Laboratories Ltd.',
      },
    ],
  },
];
