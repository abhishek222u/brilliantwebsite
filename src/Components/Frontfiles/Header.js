import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  function handlepage(value) {
    if (value === 'setting') {
      navigate('/EngagementRings');
    }
    else if (value === 'diamond') {
      navigate('/WeddingRings');
    }
  }

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    handlepage(selectedValue);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <label htmlFor="engagement">Engagement Rings</label>
            <select name="engagement" id="engagement" onChange={handleSelectChange}>
              <option value=""></option>
              <option value="setting">Start with a Setting</option>
              <option value="diamond">Start with a Diamond</option>
            </select>
          </li>
          <li><Link to="/WeddingRings">Wedding Rings</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;


