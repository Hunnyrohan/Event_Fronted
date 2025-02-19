import React, { useState } from 'react';

const ThemeToggler = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleThemeToggler = () => {
    setIsActive(!isActive);
  };

  const changeThemeColor = (color) => {
    document.documentElement.style.setProperty('--theme-color', color);
  };

  return (
    <div className={`theme-toggler ${isActive ? 'active' : ''}`}>
      <div className="toggle-btn" onClick={toggleThemeToggler}>
        <i className="fas fa-cog"></i>
      </div>

      <h3>choose color</h3>

      <div className="buttons">
        <div className="theme-btn" style={{ background: '#ccff33' }} onClick={() => changeThemeColor('#ccff33')}></div>
        <div className="theme-btn" style={{ background: '#d35400' }} onClick={() => changeThemeColor('#d35400')}></div>
        <div className="theme-btn" style={{ background: '#f39c12' }} onClick={() => changeThemeColor('#f39c12')}></div>
        <div className="theme-btn" style={{ background: '#1abc9c' }} onClick={() => changeThemeColor('#1abc9c')}></div>
        <div className="theme-btn" style={{ background: '#3498db' }} onClick={() => changeThemeColor('#3498db')}></div>
        <div className="theme-btn" style={{ background: '#9b59b6' }} onClick={() => changeThemeColor('#9b59b6')}></div>
      </div>
    </div>
  );
};

export default ThemeToggler;