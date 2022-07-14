import React from 'react'
import { Handle } from 'react-flow-renderer'
import NodeHeader from '../NodeHeader/NodeHeader'
import globalStyles from '../Node.module.css'
import styles from './OutputNode.module.css'

const OutputNode = ({ data }) => {
  return (
    <div className={globalStyles.node}>
      <div className={styles.outputNode}>
        <Handle d={`${data.id}`} type="target" position="left" className={styles.handle} isConnectable />
        <NodeHeader label={data.label} type={data.type} onDelete={data.onDelete} id={data.id} />
        {data.label === 'Start New Workflow' ? (
          <div className={styles.body}>
            <label className={styles.label}>Workflow</label>
            <select className={`nodrag nowheel ${styles.select}`}>
              <option value="workflow1">Workflow 1</option>
              <option value="workflow2">Workflow 2</option>
              <option value="workflow3">Workflow 3</option>
            </select>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default OutputNode
