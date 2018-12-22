import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LinkBox from './LinkBox';
import { withGame } from '../../store/GameProvider';

import styles from './styles.module.scss';

const getPlayerLink = gameId => {
  return `${window.location.origin}/player/${gameId}`;
};

const getBuzzerLink = (gameId, team) => {
  return `${window.location.origin}/buzzer/${gameId}/${team}`;
};


const LinkConsole = ({ match: { params: { gameId } }, game: { url } }) => {
  return (
    <div className={styles.linkConsole}>
      <div className={styles.title}>Liens de partage</div>
      <LinkBox label="Tableau des scores" link={getPlayerLink(gameId)} />
      <LinkBox label="Buzzer ketchup" link={getBuzzerLink(gameId, 'ketchup')} className={styles.ketchup} />
      <LinkBox label="Buzzer mayo" link={getBuzzerLink(gameId, 'mayo')} className={styles.mayo} />
      <LinkBox label="Code de partie" link={url} className={styles.code} compact />
    </div>);
};

LinkConsole.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  game: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withGame(withRouter(LinkConsole));
