import React from 'react';
import { FixedSizeList, VariableSizeList } from 'react-window';
import "./Console.scss";


const Row = (props: {
    index: number;
    style: React.CSSProperties;
    data: string[];
}) => {
    const { index, style, data } = props;
    const text = data[index];
    return (
        <div
            className={`left-text ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={index}
            style={style}
        >
            {text}
        </div>
    );
};

function Console(props: any) {
    const list = props.list;
    if (list.length == 0) {
        return (<div></div>);
    }

    return (
        <div className='console d-flex'>
            <div id='windowed-FixedSizeList' style={{ marginRight: 10 }}>
                <h2> Operations</h2>
                <FixedSizeList
                    className='List'
                    height={300}
                    itemCount={list.length}
                    itemSize={35}
                    width={400}
                    itemData={list}
                >
                    {Row}
                </FixedSizeList>
            </div>

        </div>
    );
}

export default Console;