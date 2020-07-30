import React from 'react';
//import { Container } from 'reactstrap';

import SkillList from './SkillList';
import SkillinUSAList from './SkillinUSAList';
import CategoriesList from './CategoriesList';
import LocationList from './LocationList';

const amountOfItemsInBottomLists = 7;
export const SkillsRow = () => (
  <div className="row">
    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="wt-widgetskills">
        <div className="wt-fwidgettitle">
          <h3>By Skills</h3>
        </div>
        <SkillList amountOfItems={amountOfItemsInBottomLists} />
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="wt-widgetskill">
        <div className="wt-fwidgettitle">
          <h3>Skills In US</h3>
        </div>
        <SkillinUSAList amountOfItems={amountOfItemsInBottomLists} />
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="wt-footercol wt-widgetcategories">
        <div className="wt-fwidgettitle">
          <h3>By Categories</h3>
        </div>
        <CategoriesList amountOfItems={amountOfItemsInBottomLists} />
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
      <div className="wt-widgetbylocation">
        <div className="wt-fwidgettitle">
          <h3>By Location</h3>
        </div>
        <LocationList amountOfItems={amountOfItemsInBottomLists} />
      </div>
    </div>
  </div>
);
