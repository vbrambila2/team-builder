import React from 'react';

export default function TeamList(props) {
    const { name, nickName, email, role } = props;

    return (
        <div>
            <div>{ name } aka { nickName }</div>
            <div>{ email }</div>
            <div>{ role }</div>
        </div>
    )
}