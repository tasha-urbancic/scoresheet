import React from 'react';
import { Link } from 'react-router-dom';
import TemplateList from '../containers/TemplateList.jsx';
import FilterLink from '../containers/FilterLink.jsx';

export default function HomePage(props) {
  return (
    <div>
      <p className="text-center">Making board games fun again!</p>
      <div className="template-list">
        <TemplateList />
      </div>
    </div>
  );
}