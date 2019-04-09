import React, { useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import MapControl from './MapControl';
import { colors } from '../../util/styles';

const Container = styled.div`
  display: inline-block;
  margin-top: 4rem;
`;

const MapNotice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => Math.floor(props.width * 0.9)};
  font-size: 1.2rem;
  color: ${colors.white};
  text-align: center;
`;

export default function Map() {
  const [active, setActive] = useState(0);
  const controls = [
    { text: 'Wrocław', pos: { x: 120, y: 270 } },
    { text: 'Szczecin', pos: { x: 24, y: 91 } },
    { text: 'Jelenia Góra', pos: { x: 60, y: 296 } },
    { text: 'Żarki Letnisko', pos: { x: 255, y: 330 } }
  ];

  return (
    <Container>
      <PolandMap>
        <MapNotice>
          <FormattedMessage id="contact.map.notice" />
        </MapNotice>
        {controls.map(({ pos, text }, index) => (
          <MapControl key={index} pos={pos} text={text} setActive={() => setActive(index)} active={active === index} />
        ))}
      </PolandMap>
    </Container>
  );
}

function PolandMap({ width, children }) {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 605.046 561.591">
        <g transform="translate(-6.355 -22.938)">
          <path
            d="M335.889,61.483l-9.053,6.743-15.6,4.254.438,4.753,4.048,1.985,6.616-1.323,6.946-3.638,6.285-1.985,4.63-4.631,4.631-4.38,8.6.741,14.554,1.323L382.2,68.3l15.546.992,11.246.992L426.854,72.6l24.807-.992,22.161-1.323L494,67.31l8.853-.656L509.875,64l4.8-2.484L519.8,60.7l4.629,5.621,5.293,4.3,3.307-.662,3.307,3.138,7.277,1.493,1.659,4.875,4.957,4.386,4.3,5.292-1.654,10.584,2.977,12.9,5.954,19.515,6.946,16.538,6.948,21.911,4.871,5.211.755,11.987,4.21,6.776-.576,12.328.33,7.939-.992,7.938-6.285,4.3-7.607,3.638L560.481,236l-7.443,11.162-8.767,13.727-.989,5.542,2.646,4.3,13.23.993L572.388,279l7.939,10.253-6.947,5.293-1.323,8.269,2.977,8.1-4.472,1.9-2.144,3.562.662,13.889,3.638,4.631L580,345.149l-2.062,8.6,2.393,6.948,3.968,6.284,6.946,1.985.662,5.623,4.962,5.954.331,7.939,2.315,5.292,7.938,2.646.992,1.984-4.962.993-2.646,3.307V407l5.293,7.277,1.9,4.2-1.7,6.5-.865,5.172-.993,7.938-5.623,4.631-6.946.33-7.939,3.638-10.584,13.23-14.222,19.846-24.807,33.407L519.8,531.036l3.969,8.931,2.977,5.623v2.315l.661,3.969V561.8l6.947,7.277,4.3,5.954,1.984,5.954-3.968,1.323-3.973-2.9-2.973-1.729-7.608-.993L511.2,573.7l-7.853-3.722-11.662-3.224-8.93-3.308-1.654-3.968.331-4.961-5.293-3.638-6.285-4.961-3.058,3.64-4.549-2.979-5.293-2.976h-3.969l-4.3,1.984-6.616-.661-4.631-3.969-3.638,1.654-2.315,5.292-2.646-2.646-6.284-.33-2.316,3.638,3.308,3.638-5.293.33-1.323,5.624-4.3.661-10.254-10.584-4.63-.992-2.646,1.984-7.277-.331-4.962,1.323h-2.976l-2.731-2.231-.576,6.531-5.624,1.323-6.946,1.984-1.739,6.2-.907,7.03-4.3-1.321-2.644-3.309-5.623.661-3.638,2.315-5.624-1.323.331-6.284,1.985-10.254-3.969-2.646H333.91l-2.646-2.315L326.3,541.62l-1.322-4.63L322,530.375l-3.307-1.323-2.646,6.285L309.1,536.66l-3.969,7.607-4.962,5.954-6.615-1.323-3.308-.33-.661-7.277-2.324-2.229-2.638-2.072-3.638-5.954v-4.3l-4.63-3.969-6.946-3.638-1.654-6.946L266.1,501.268l-10.915-4.3-5.623,2.976-5.623-5.954-4.63-1.323-5.624-2.976-3.307,2.645-5.623,2.646-5.624-3.638-2.315-6.285-3.638-4.63-6.946-4.3,5.954-2.977,6.285-1.984-4.3-6.285-5.954-1.41-5.624.418-4.962,3.307-4.631-2.646-3.307-4.961-4.3-1.323L181.43,454.3h-5.293l-5.954-3.969-7.277-2.646-4.631,1.985,3.969,4.3,4.962,5.954,2.976,5.624-.331,3.307h-7.277l-4.961,1.984-5.624,8.6-6.946-1.654-2.646-2.645-2.315-9.592-3.227-2.471-1.735-4.144-4.63-.661-1.323-3.308-5.954-2.976-4.3-3.638,4.3-4.63,5.623-2.977,4.962-5.954-.992-5.954-1.984-3.638h-4.631l-4.129-1.653-2.9,2.643-5.213-1.65-4.962,4.962-.662-8.27-1.984-.33-2.315.33-5.954-.33L96.093,415.6l-5.623,1.323-5.292-3.307-5.954-1.323-9.592-3.307-4.3-7.608-3.638-10.254-3.969-.661-4.3-.992-4.631-1.654-.662,1.654v4.3L47.8,397.74l-2.315,3.969-4.3-.993H38.21L34.9,398.732l1.323-5.292,2.977-4.3,4.631-2.976,2.646-5.624,2.315-7.277,1.323-5.954v-5.292L47.8,356.065V343.826l-7.277-3.308-6.946-3.307,1.985-4.3.661-8.931-3.4-3.727-.244-4.789-2.644-4.714-1.654-2.976,4.626-6.782,4.967-6.118,1.321-6.284.994-3.308-2.977-3.307-.914-7.11-.078-8.1-6.456-4.387-.159-7.52V249.89l3.723-4.63.907-11.247L27.13,228.8l-4.8-6.362-12.9-11.246-.992-13.23,5.954-3.638,7.938-7.939V180.43l4.8-8.442,1.817-4.042L26.3,162.155l-1.325-7.524-.992-8.6-2.315-10.254-1.235-5.539-.75-6.037,1.574-6.369-.582-6.53-.992-4.631-.331-2.977c.008,0,12.9,2.646,12.9,2.646s12.734-7.691,12.652-7.608c0,0,11.122-4.232,11.122-4.238S68.793,91.6,68.805,91.579l22.988-5.747,51.6-15.215,6.947-10.254,10.584-10.915,17.363-1.325,7.112-2.975,9.262-8.93,11.245-3.638,16.869-.992,17.862-6.615,17.2,1.654,7.019,2.142,17.138,9.557,5.085,5.9,1.36,5.814L287.082,44.3,282,38.358,266.194,30.17,265.106,34.3l2.652,6.213,4.962,8.931.992,12.569L279,68.3l10.584,4.961,9.592.661,12.014-1.6,15.673-4.009Z"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            fillRule="evenodd"
          />
        </g>
      </svg>
      {children}
    </div>
  );
}

PolandMap.defaultProps = {
  width: 500
};

function SvgMap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="605.046" viewBox="0 0 605.046 561.591">
      <defs>
        <filter id="a" x="27.086" y="106.035" width="38" height="38" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="b" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-1010.914 -121.965)">
        <g transform="translate(1004.559 99.027)">
          <path
            d="M335.889,61.483l-9.053,6.743-15.6,4.254.438,4.753,4.048,1.985,6.616-1.323,6.946-3.638,6.285-1.985,4.63-4.631,4.631-4.38,8.6.741,14.554,1.323L382.2,68.3l15.546.992,11.246.992L426.854,72.6l24.807-.992,22.161-1.323L494,67.31l8.853-.656L509.875,64l4.8-2.484L519.8,60.7l4.629,5.621,5.293,4.3,3.307-.662,3.307,3.138,7.277,1.493,1.659,4.875,4.957,4.386,4.3,5.292-1.654,10.584,2.977,12.9,5.954,19.515,6.946,16.538,6.948,21.911,4.871,5.211.755,11.987,4.21,6.776-.576,12.328.33,7.939-.992,7.938-6.285,4.3-7.607,3.638L560.481,236l-7.443,11.162-8.767,13.727-.989,5.542,2.646,4.3,13.23.993L572.388,279l7.939,10.253-6.947,5.293-1.323,8.269,2.977,8.1-4.472,1.9-2.144,3.562.662,13.889,3.638,4.631L580,345.149l-2.062,8.6,2.393,6.948,3.968,6.284,6.946,1.985.662,5.623,4.962,5.954.331,7.939,2.315,5.292,7.938,2.646.992,1.984-4.962.993-2.646,3.307V407l5.293,7.277,1.9,4.2-1.7,6.5-.865,5.172-.993,7.938-5.623,4.631-6.946.33-7.939,3.638-10.584,13.23-14.222,19.846-24.807,33.407L519.8,531.036l3.969,8.931,2.977,5.623v2.315l.661,3.969V561.8l6.947,7.277,4.3,5.954,1.984,5.954-3.968,1.323-3.973-2.9-2.973-1.729-7.608-.993L511.2,573.7l-7.853-3.722-11.662-3.224-8.93-3.308-1.654-3.968.331-4.961-5.293-3.638-6.285-4.961-3.058,3.64-4.549-2.979-5.293-2.976h-3.969l-4.3,1.984-6.616-.661-4.631-3.969-3.638,1.654-2.315,5.292-2.646-2.646-6.284-.33-2.316,3.638,3.308,3.638-5.293.33-1.323,5.624-4.3.661-10.254-10.584-4.63-.992-2.646,1.984-7.277-.331-4.962,1.323h-2.976l-2.731-2.231-.576,6.531-5.624,1.323-6.946,1.984-1.739,6.2-.907,7.03-4.3-1.321-2.644-3.309-5.623.661-3.638,2.315-5.624-1.323.331-6.284,1.985-10.254-3.969-2.646H333.91l-2.646-2.315L326.3,541.62l-1.322-4.63L322,530.375l-3.307-1.323-2.646,6.285L309.1,536.66l-3.969,7.607-4.962,5.954-6.615-1.323-3.308-.33-.661-7.277-2.324-2.229-2.638-2.072-3.638-5.954v-4.3l-4.63-3.969-6.946-3.638-1.654-6.946L266.1,501.268l-10.915-4.3-5.623,2.976-5.623-5.954-4.63-1.323-5.624-2.976-3.307,2.645-5.623,2.646-5.624-3.638-2.315-6.285-3.638-4.63-6.946-4.3,5.954-2.977,6.285-1.984-4.3-6.285-5.954-1.41-5.624.418-4.962,3.307-4.631-2.646-3.307-4.961-4.3-1.323L181.43,454.3h-5.293l-5.954-3.969-7.277-2.646-4.631,1.985,3.969,4.3,4.962,5.954,2.976,5.624-.331,3.307h-7.277l-4.961,1.984-5.624,8.6-6.946-1.654-2.646-2.645-2.315-9.592-3.227-2.471-1.735-4.144-4.63-.661-1.323-3.308-5.954-2.976-4.3-3.638,4.3-4.63,5.623-2.977,4.962-5.954-.992-5.954-1.984-3.638h-4.631l-4.129-1.653-2.9,2.643-5.213-1.65-4.962,4.962-.662-8.27-1.984-.33-2.315.33-5.954-.33L96.093,415.6l-5.623,1.323-5.292-3.307-5.954-1.323-9.592-3.307-4.3-7.608-3.638-10.254-3.969-.661-4.3-.992-4.631-1.654-.662,1.654v4.3L47.8,397.74l-2.315,3.969-4.3-.993H38.21L34.9,398.732l1.323-5.292,2.977-4.3,4.631-2.976,2.646-5.624,2.315-7.277,1.323-5.954v-5.292L47.8,356.065V343.826l-7.277-3.308-6.946-3.307,1.985-4.3.661-8.931-3.4-3.727-.244-4.789-2.644-4.714-1.654-2.976,4.626-6.782,4.967-6.118,1.321-6.284.994-3.308-2.977-3.307-.914-7.11-.078-8.1-6.456-4.387-.159-7.52V249.89l3.723-4.63.907-11.247L27.13,228.8l-4.8-6.362-12.9-11.246-.992-13.23,5.954-3.638,7.938-7.939V180.43l4.8-8.442,1.817-4.042L26.3,162.155l-1.325-7.524-.992-8.6-2.315-10.254-1.235-5.539-.75-6.037,1.574-6.369-.582-6.53-.992-4.631-.331-2.977c.008,0,12.9,2.646,12.9,2.646s12.734-7.691,12.652-7.608c0,0,11.122-4.232,11.122-4.238S68.793,91.6,68.805,91.579l22.988-5.747,51.6-15.215,6.947-10.254,10.584-10.915,17.363-1.325,7.112-2.975,9.262-8.93,11.245-3.638,16.869-.992,17.862-6.615,17.2,1.654,7.019,2.142,17.138,9.557,5.085,5.9,1.36,5.814L287.082,44.3,282,38.358,266.194,30.17,265.106,34.3l2.652,6.213,4.962,8.931.992,12.569L279,68.3l10.584,4.961,9.592.661,12.014-1.6,15.673-4.009Z"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            fillRule="evenodd"
          />
        </g>
        <g transform="matrix(1, 0, 0, 1, 1010.91, 121.97)" filter="url(#a)">
          <g transform="translate(36.09 112.03)" fill="#fff" stroke="#fff" strokeWidth="3">
            <circle cx="10" cy="10" r="10" stroke="none" />
            <circle cx="10" cy="10" r="8.5" fill="none" />
          </g>
        </g>
        <text transform="translate(1072 249)" fill="#fff" fontSize="15" fontFamily="Raleway-Regular, Raleway">
          <tspan x="0" y="0">
            Szczecin
          </tspan>
        </text>
        <g transform="translate(116 218)">
          <g transform="translate(1047 234)" fill="none" stroke="#fff" strokeWidth="3">
            <circle cx="10" cy="10" r="10" stroke="none" />
            <circle cx="10" cy="10" r="8.5" fill="none" />
          </g>
          <text transform="translate(1072 249)" fill="#fff" fontSize="15" fontFamily="Raleway-Regular, Raleway">
            <tspan x="0" y="0">
              Wrocław
            </tspan>
          </text>
        </g>
        <g transform="translate(266 274)">
          <g transform="translate(1047 234)" fill="none" stroke="#fff" strokeWidth="3">
            <circle cx="10" cy="10" r="10" stroke="none" />
            <circle cx="10" cy="10" r="8.5" fill="none" />
          </g>
          <text transform="translate(1072 249)" fill="#fff" fontSize="15" fontFamily="Raleway-Regular, Raleway">
            <tspan x="0" y="0">
              Żarki Letnisko
            </tspan>
          </text>
        </g>
        <g transform="translate(37 245)">
          <g transform="translate(1047 234)" fill="none" stroke="#fff" strokeWidth="3">
            <circle cx="10" cy="10" r="10" stroke="none" />
            <circle cx="10" cy="10" r="8.5" fill="none" />
          </g>
          <text transform="translate(1072 249)" fill="#fff" fontSize="15" fontFamily="Raleway-Regular, Raleway">
            <tspan x="0" y="0">
              Jelenia Góra
            </tspan>
          </text>
        </g>
        <text
          transform="translate(1315 370)"
          fill="#f5f5f5"
          fontSize="12"
          fontFamily="Raleway-Regular, Raleway"
          textAnchor="middle"
        >
          <FormattedMessage id="contact.map.info">
            {txt => (
              <tspan x="0" y="0">
                {txt}
              </tspan>
            )}
          </FormattedMessage>
        </text>
      </g>
    </svg>
  );
}