import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyle = {
  viewBox: "0 0 24 24",
};

const MapsPlaceIcon = (props) => (
  <SvgIcon {...props} viewBox={iconStyle.viewBox}>
      <defs>
          <linearGradient id="MyGradient2">
              <stop offset="0%" stopColor="#b64be8" />
              <stop offset="100%" stopColor="#faa159" />
          </linearGradient>
      </defs>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </SvgIcon>
);

export default MapsPlaceIcon;