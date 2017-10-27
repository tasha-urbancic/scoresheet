import React from 'react';
import { Link } from 'react-router-dom';
import TemplateList from '../containers/TemplateList.jsx';
import NavBar from '../components/NavBar.jsx';

export default function HomePage(props) {
  return (
    <div>
      <NavBar />
      <p className="text-center">Making board games fun again!</p>
      <div className="template-list">
        <TemplateList />
      </div>
    </div>
  );
}
