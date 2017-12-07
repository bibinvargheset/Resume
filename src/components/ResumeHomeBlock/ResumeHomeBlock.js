import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import appTheme from '../../theme';
import './ResumeHomeBlock.css';

const ResumeHomeBlock = ({ snAccounts, shortFullName, headline }) => (
  <ScreenBlock id="Resume-home" className="ResumeHomeBlock">
    <div className="ResumeHomeBlock-headline-container">
      <div className="ResumeHomeBlock-headline">
        <h1>
          <FormattedMessage
            id='Resume.im'
            defaultMessage="I'm {fullName}"
            values={{ fullName: shortFullName }}
          />
        </h1>
        <h2>{headline}</h2>
      </div>
    </div>

    <div className="ResumeHomeBlock-squares">
      <GridBackground>
        <div style={{ ...appTheme.laravelColor.style }}>
          {appTheme.laravelColor.icon}
        </div>
        <div style={{ ...appTheme.phpColor.style }}>
          {appTheme.phpColor.icon}
        </div>
        <div style={{ ...appTheme.reactColor.style }}>
          {appTheme.reactColor.icon}
        </div>
        <div style={{ ...appTheme.rubyColor.style }}>
          {appTheme.rubyColor.icon}
        </div>
        <div style={{ ...appTheme.javascriptColor.style }}>
          {appTheme.javascriptColor.icon}
        </div>
        <div style={{ ...appTheme.dockerColor.style }}>
          {appTheme.dockerColor.icon}
        </div>
      </GridBackground>
    </div>

  </ScreenBlock>
);

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  snAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.object.isRequired,
};

export default ResumeHomeBlock;
