import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Modal from '../_components/Modal';
import Button from '../_components/Button';
import BurgerQuiz from '../_components/BurgerQuiz';
import Input from '../_components/Input';

import styles from './styles.module.scss'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  updateCode(e) {
    this.setState({
      code: e.target.value
    })
  }

  render() {
    const {onNewGame, onConnect, isLoading, hasError} = this.props;
    const {code} = this.state;
    return (<div className={styles.landing}>
      <Modal>
        <BurgerQuiz/>
        <div className={styles.codeWrapper}>
          <label htmlFor="code">Code</label>
          <Input id="code" value={this.state.code} onChange={(e) => this.updateCode(e)}/>
        </div>
        {hasError && <span>Oops, something went wrong</span>}
        <div>
          {isLoading ?
            <span>Loading...</span>:
            <div>
              <Button block className={styles.button} onClick={() => onConnect(code)}>Rejoindre la partie</Button>
              <Button block link className={styles.button} onClick={onNewGame}>Nouvelle partie</Button>
            </div>
          }
        </div>
      </Modal>
    </div>)
  }
}

Landing.propTypes = {
  onNewGame: PropTypes.func.isRequired,
}

export default Landing;
