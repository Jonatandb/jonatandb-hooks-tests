import React from 'react'
import { useState } from 'react'

const Collapse = ({ children, showText = 'Show', hideText = 'Hide', collapse, collapsedTitle }) => {
    const [showChildren, setShowChildren] = useState(!collapse)

    const handleShow = () => setShowChildren(!showChildren)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: showChildren ? 'space-between' : 'flex-end',
            border: '1px solid gray',
            padding: '10px',
            margin: '10px',
        }}>
            {
                showChildren && (<div style={{ width: '100%' }}>
                    {children}
                </div>)
            }
            {
                !showChildren && (<div style={{ width: '100%' }}>
                    <h3>{collapsedTitle}</h3>
                </div>)
            }
            <div style={{
                backgroundColor: 'Tomato',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                userSelect: 'none',
                title: showChildren ? hideText : showText,
                borderRadius: '5px'
            }}
                onClick={handleShow}
            >
                <span style={{ color: 'white', fontWeight: 'bold', padding: '10px' }}>{showChildren ? hideText : showText}</span>
            </div>
        </div>
    )
}

export default Collapse
