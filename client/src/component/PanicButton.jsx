import React from 'react';
import styles from './PanicButton.module.css';
import axios from 'axios'

export default function PanicButton() {
    const onClick = (e)=>{
        axios.post('/api/v1/sms/alert', {})
        // .then(res => res.json())
        .then(data => {console.log(data)})
    }
    return (
        <div>
            <button className={styles.panicButton} onClick={onClick}>Panic Button</button>
        </div>
    )
}
