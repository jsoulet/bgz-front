import React from 'react';
import Score0 from './Score0';
import Score1 from './Score1';
import Score2 from './Score2';
import Score3 from './Score3';
import Score4 from './Score4';
import Score5 from './Score5';
import Score6 from './Score6';
import Score7 from './Score7';
import Score8 from './Score8';
import Score9 from './Score9';
import Score10 from './Score10';
import Score11 from './Score11';
import Score12 from './Score12';
import Score13 from './Score13';
import Score14 from './Score14';
import Score15 from './Score15';
import Score16 from './Score16';
import Score17 from './Score17';
import Score18 from './Score18';
import Score19 from './Score19';
import Score20 from './Score20';
import Score21 from './Score21';
import Score22 from './Score22';
import Score23 from './Score23';
import Score24 from './Score24';
import Score25 from './Score25';

const ScoreSvg = ({ score }) => {
  if (score <= 0) {
    return <Score0 />;
  }
  if (score === 1) {
    return <Score1 />;
  }
  if (score === 2) {
    return <Score2 />;
  }
  if (score === 3) {
    return <Score3 />;
  }
  if (score === 4) {
    return <Score4 />;
  }
  if (score === 5) {
    return <Score5 />;
  }
  if (score === 6) {
    return <Score6 />;
  }
  if (score === 7) {
    return <Score7 />;
  }
  if (score === 8) {
    return <Score8 />;
  }
  if (score === 9) {
    return <Score9 />;
  }
  if (score === 10) {
    return <Score10 />;
  }
  if (score === 11) {
    return <Score11 />;
  }
  if (score === 12) {
    return <Score12 />;
  }
  if (score === 13) {
    return <Score13 />;
  }
  if (score === 14) {
    return <Score14 />;
  }
  if (score === 15) {
    return <Score15 />;
  }
  if (score === 16) {
    return <Score16 />;
  }
  if (score === 17) {
    return <Score17 />;
  }
  if (score === 18) {
    return <Score18 />;
  }
  if (score === 19) {
    return <Score19 />;
  }
  if (score === 20) {
    return <Score20 />;
  }
  if (score === 21) {
    return <Score21 />;
  }
  if (score === 22) {
    return <Score22 />;
  }
  if (score === 23) {
    return <Score23 />;
  }
  if (score === 24) {
    return <Score24 />;
  }
  if (score >= 25) {
    return <Score25 />;
  }
};

export default ScoreSvg;
