import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background,
  MiniMap
} from "react-flow-renderer";

import ActionNode from "../ActionNode/ActionNode";
import LogicNode from "../LogicNode/LogicNode";
import OutputNode from "../OutputNode/OutputNode";
import StartNode from "../StartNode/StartNode";
import Sidebar from "../Sidebar/Sidebar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./Workflow.module.css";
import "../react-flow-styles.css";

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

let id = 1;
const getId = () => `node_${id++}`;

const Workflow = () => {
  const { height } = useWindowDimensions();
  const [reactFlowInstance, setReactFlowInstance] = useState();
  const [elements, setElements] = useState([
    {
      id: "node_0",
      type: "startNode",
      name: "start",
      position: {
        x: 100,
        y: (height - 48) / 2
      },
      data: { label: "Start", type: "startNode" },
      selectable: false,
      draggable: false
    }
  ]);

  const onConnect = (params) => {
    const sourceHandleUsed = elements.find(
      (elem) => elem.sourceHandle === params.sourceHandle
    );
    //const targetHandleUsed = elements.find((elem) => elem.targetHandle === params.targetHandle)

    if (!sourceHandleUsed /* && !targetHandleUsed*/) {
      setElements((els) => addEdge(params, els));
    }
  };
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDrop = (event) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const node = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );
      const { type, name } = node;
      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY - 40
      });
      const newNodeId = getId();
      const newNode = {
        id: newNodeId,
        type,
        name,
        position,
        data: {
          onDelete: onElementsRemove,
          label: `${name}`,
          type,
          id: newNodeId
        }
      };

      setElements((es) => es.concat(newNode));
    }
  };

  console.log("elements", elements);

  return (
    <div className={styles.workflow}>
      <ReactFlowProvider>
        <div className={styles.workflowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={{
              logicNode: LogicNode,
              outputNode: OutputNode,
              startNode: StartNode,
              actionNode: ActionNode
            }}
          >
            <Background />
            <MiniMap />
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default Workflow;
