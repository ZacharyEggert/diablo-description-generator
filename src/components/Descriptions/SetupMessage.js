import React from 'react';

const SetupMessage = (props) => {

    const {stringGuage, guitarCase} = props;

    return (
        <span>
            Guitar is freshly setup and restrung with {stringGuage || 'GUAGE'} strings{guitarCase?` and includes ${guitarCase || 'CASE'} case`:null}.
        </span>
    );
};

export default SetupMessage;