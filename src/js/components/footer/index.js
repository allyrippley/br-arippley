import React from 'react';
import Internet from '../../../assets/images/tab_internets@2x.png';
import Lunch from '../../../assets/images/tab_lunch@2x.png';
import FooterTab from './footer-tab';

const Footer = ({
  activeView,
  handleChangeView
}) => (
  <div className="footer-container">
    <FooterTab tab="Internet" icon={Internet} activeView={activeView} handleChangeView={handleChangeView} />
    <FooterTab tab="Lunch" icon={Lunch} activeView={activeView} handleChangeView={handleChangeView} />
  </div>
);

export default Footer;
