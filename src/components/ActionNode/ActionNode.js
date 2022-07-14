import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './ActionNode.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/semantic-ui.css'

const ActionNode = ({ data }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.actionNode}>
        <Handle
          id={`${data.id}`}
          type="target"
          position="left"
          className={`${styles.handle} ${styles.handleLeft}`}
          isConnectable
        />
        <NodeHeader label={data.label} type={data.type} onDelete={data.onDelete} id={data.id} />
        <Handle
          id={`${data.id}`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.handleRight}`}
          isConnectable
        />
        {data.label === 'Send Text' ? (
          <div className={styles.body}>
            <label className={styles.label}>Phone Number</label>
            <PhoneInput
              enableSearch
              country={'us'}
              containerClass={`nodrag nowheel ${styles.phoneContainer}`}
              inputClass={styles.phoneInput}
            />
            <label className={styles.label}>Message</label>
            <textarea className={`nodrag nowheel ${styles.input}`} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ActionNode
