import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../_components/Button';
import Input from '../../../_components/Input';
import styles from './styles.module.scss';


class Step1 extends Component {
  state = {
    code: null,
  }

  updateCode = e => {
    this.setState({ code: e.target.value });
  }

  render() {
    const {
      onConnect,
      errorMessage,
      isLoading,
      onNewGame,
    } = this.props;
    const { code } = this.state;
    return (<form onSubmit={e => {
      e.preventDefault();
      onConnect(code);
    }}
    >
      <div className={styles.codeWrapper}>
        <label htmlFor="code">
          Entrez votre code de partie
          <Input id="code" value={this.state.code} onChange={e => this.updateCode(e)} />
        </label>

      </div>
      {errorMessage && <span>Oops, something went wrong</span>}
      <div>
        {isLoading
          ? <span>Loading...</span>
          : (
            <div>
              <Button
                block
                type="submit"
                className={styles.button}
                disabled={this.state.code === ''}
                color="blue"
              >
            Rejoindre la partie
              </Button>
              <Button
                block
                secondary
                className={styles.button}
                onClick={onNewGame}
                color="blue"
              >
            Nouvelle partie
              </Button>
            </div>)
      }
      </div>
    </form>);
  }
}

Step1.defaultProps = {
  errorMessage: '',
};

Step1.propTypes = {
  onNewGame: PropTypes.func.isRequired,
  onConnect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

export default Step1;
