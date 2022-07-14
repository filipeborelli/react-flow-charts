import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './LogicNode.module.css'

const LogicNode = ({ data }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.logicNode}>
        <Handle
          id={`${data.id}`}
          type="target"
          position="left"
          className={`${styles.handle} ${styles.handleLeft}`}
          isConnectable
        />
        <NodeHeader label={data.label} type={data.type} onDelete={data.onDelete} id={data.id} />
        <Handle
          id={`${data.id}-true`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.true} ${styles.handleRight} `}
          isConnectable
        />
        <Handle
          id={`${data.id}-false`}
          type="source"
          position="right"
          className={`${styles.handle} ${styles.false} ${styles.handleRight} `}
          isConnectable
        />
      </div>
    </div>
  )
}

export default LogicNode
