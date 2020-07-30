import React, { Component } from 'react';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/font-awesome.min.css';
import '../../../css/linearicons.css';
import '../../../css/jquery-ui.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/transitions.css';
import CategoriesPanel from './CategoriesPanel';
import { CompanyRow } from './CompanyRow';
import { LimitlessRow } from './LimitlessRow';
import { SkillsRow } from './SkillsRow';

class WtWrapper extends Component {
  amountOfItemsInBottomLists = 7;
  render() {
    return (
      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        <div className="wt-contentwrapper">
          <div id="wt-main" className="wt-main wt-haslayout">
            {/* <!--Categories Start--> */}
            <section className="wt-haslayout wt-main-section">
              <div className="container">
                <CategoriesPanel />
              </div>
            </section>
            {/* <!--Categories End--> */}
            {/* <!--Join Company Info Start--> */}
            <section className="wt-haslayout wt-main-section wt-paddingnull wt-companyinfohold">
              <div className="container">
                <CompanyRow />
              </div>
            </section>
            {/* <!--Join Company Info End-->
    <!--Limitless Experience Start--> */}
            <section className="wt-haslayout wt-main-section">
              <div className="container">
                <LimitlessRow />
              </div>
            </section>
            {/* <!--Limitless Experience End-->
    <!--Skills Start--> */}
            <section className="wt-haslayaout wt-main-section wt-footeraboutus">
              <div className="container">
                <SkillsRow />
              </div>
            </section>
            {/* <!--Skills Start End--> */}
          </div>
          {/* <!--Main End-->
 
      {/* <!--Footer End--> */}
        </div>
        {/* <!--Content Wrapper End--> */}
      </div>
    );
  }
}
export default WtWrapper;
