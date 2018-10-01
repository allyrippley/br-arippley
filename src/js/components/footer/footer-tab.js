import React, { Component } from 'react';

class FooterTab extends Component {
  handleTabClick = (tab) => {
    this.props.handleChangeView(tab);
  }
  render() {
    const { icon, tab, activeView } = this.props;
    return (
      <div onClick={() => this.handleTabClick(tab)} className={`footer-button-container ${activeView === tab && 'active'}`}>
        <div className="footer-button-icon-container">
          <img src={icon} className="footer-button-icon" alt={`${tab} Icon`} />
        </div>
        <div className="footer-button-text">
          {tab}
        </div>
      </div>
    );
  }
}

export default FooterTab;
