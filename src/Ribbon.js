import React from 'react';
import styles from './Ribbon.module.css';

export default ({children}) => <div className={[styles.cr, styles['cr-top'], styles['cr-right'], styles['cr-red']].join(' ')}>{children}</div>
