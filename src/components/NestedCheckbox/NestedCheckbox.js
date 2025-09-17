import React, { useState } from "react";
import { useLocation } from "react-router";
import { STATUS } from "../../constants";
import Checkbox from "./Checkbox";

const NestedCheckbox = () => {

    const RenderChild = ({ data, handleChange }) => {
        return (
            <ul className="pl-2">
                {data.map((elem) => {
                    return (
                        <li key={elem.id} className="pb-2">
                            <span className="pb-2">
                                <Checkbox
                                    id={elem.id}
                                    label={elem.name}
                                    status={elem.status}
                                    handleChange={handleChange}
                                />
                            </span>
                            {elem.children && elem.children.length > 0 && (
                                <RenderChild data={elem.children} handleChange={handleChange} />
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const data = [
        {
            id: "1",
            name: "Fruits",
            status: STATUS.UNCHECKED,
            children: [
                {
                    id: "1.1",
                    name: "Berries",
                    status: STATUS.UNCHECKED,
                    children: [
                        {
                            id: "1.1.1",
                            name: "Strawberries",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.1.2",
                            name: "Bluebberries",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.1.3",
                            name: "Raspberries",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.1.4",
                            name: "Cranberries",
                            status: STATUS.UNCHECKED,
                        },
                    ],
                },
                {
                    id: "1.2",
                    name: "Citrus Fruits",
                    status: STATUS.UNCHECKED,
                    children: [
                        {
                            id: "1.2.1",
                            name: "Oranges",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.2.2",
                            name: "Lemons",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.2.3",
                            name: "Limes",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.2.4",
                            name: "Grapes Fruits",
                            status: STATUS.UNCHECKED,
                        },
                    ],
                },
                {
                    id: "1.3",
                    name: "Melons",
                    status: STATUS.UNCHECKED,
                    children: [
                        {
                            id: "1.3.1",
                            name: "Watermelon",
                            status: STATUS.UNCHECKED,
                        },
                        {
                            id: "1.3.2",
                            name: "Honeydew",
                            status: STATUS.UNCHECKED,
                        },
                    ],
                },
            ],
        },
    ];

    const [checkboxData, setCheckboxData] = useState(data);

    const computeStatus = (node) => {
        // checkedCount, uncheckedCount, indeterminateCount is maintained based on children length and checking children status one by one
        let checkedCount = 0;
        let uncheckedCount = 0;
        let indeterminateCount = 0;

        if (node.children && node.children.length > 0) {
            node.children.map(child => {
                if (child.status === STATUS.CHECKED) {
                    checkedCount++
                }
                else if (child.status === STATUS.UNCHECKED) {
                    uncheckedCount++
                }
                else if (child.status === STATUS.INDETERMINATE) {
                    indeterminateCount++
                }

            });

            if (checkedCount === node.children.length) {
                node.status = STATUS.CHECKED
            }
            else if (uncheckedCount === node.children.length) {
                node.status = STATUS.UNCHECKED
            }
            else if (checkedCount > 0 || indeterminateCount > 0) {
                node.status = STATUS.INDETERMINATE
            }
        }
    }


    // Traverse function will receive id of checkbox which is passed from handleChange, node on which traversing is to be done , isDecendent means weather node is a child or not, and parents status
    // Traverse function is called recursively on every children
    const traverse = (id, node, isDecendent, ancenstorsStatus) => {
        // If node on which traverse is called at the moment on recursive calls is the one which is clicked change its status accordingly
        if (node.id === id) {
            if (node.status === STATUS.UNCHECKED) {
                node.status = STATUS.CHECKED;
            } else {
                node.status = STATUS.UNCHECKED;
            }
        }

        // if node on which traverse is called is a child , then set status same as of parent
        // For exapmple - If parent is set to checked and traverse is called to every children, children status will be set to parent's status which is set
        if (isDecendent) {
            node.status = ancenstorsStatus;
        }

        // If node on which traverse is called has childeren, traverse through it recursively
        if (node.children && node.children.length > 0) {
            node.children.map((child) => {
                // node.id === id can be true on the immediate children of node
                // then on recursive calls to children isDecendent can be true
                // Basically this is to remember if node is a child 
                // node status is passed so that it status can be set to child
                traverse(id, child, node.id === id || isDecendent, node.status);
            });
        }

        // once traversing is done to all the children of a node computeStatus is called
        computeStatus(node)
    };

    // handleChange is called on change of checkbox, this function will receive id of checkbox
    const handleChange = (id) => {
        // First cloning the complete json data so that change can be done in the cloned object then at last it will be set to main object
        const clonedCheckboxData = JSON.parse(JSON.stringify(checkboxData));

        // Mapping data
        clonedCheckboxData.map((node) => {
            // Traverse function is called on every node getting from data map
            traverse(id, node);
        });

        // Finally setting updated cloned object to main object
        setCheckboxData(clonedCheckboxData);
    };

    return (
        <div>
            <div className="max-w-md mx-auto p-4">
                <RenderChild data={checkboxData} handleChange={handleChange} />
            </div>
        </div>
    );
};

export default NestedCheckbox;
