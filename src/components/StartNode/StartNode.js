import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './StartNode.module.css'

const StartNode = ({ data }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.startNode}>
        <NodeHeader label={data.label} type={data.type} />
        <Handle id={`${data.id}`} type="source" position="right" className={styles.handle} isConnectable />
      </div>
    </div>
  )
}

export default StartNode
