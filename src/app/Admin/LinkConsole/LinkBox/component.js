import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Input from '../../../_components/Input';

import styles from './styles.module.scss';

class LinkBox extends Component {
  state = {
    shouldDisplayHint: false,
  }

  onFocusInputHandler = event => {
    event.target.select();
    document.execCommand('copy');
    this.setState({
      shouldDisplayHint: true,
    }, () => {
      setTimeout(() => this.setState({
        shouldDisplayHint: false,
      }), 1000);
    });
  }

  render() {
    return (
      <div className={cn(styles.linkBox, this.props.className)}>
        <label className={styles.label}>
          {this.props.label}
          <Input type="text" value={this.props.link} onFocus={this.onFocusInputHandler} className={styles.input} />
        </label>
        {this.state.shouldDisplayHint && <span className={styles.hint}>Lien copié !</span>}
      </div>);
  }
}

LinkBox.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

export default LinkBox;
