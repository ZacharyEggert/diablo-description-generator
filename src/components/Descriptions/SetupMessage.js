import React from "react";

const SetupMessage = (props) => {
    const { stringGauge, guitarCase } = props;

    return (
        <span>
            Guitar is freshly setup and restrung with {stringGauge || "GAUGE"}{" "}
            strings{guitarCase ? ` and includes ${guitarCase || "CASE"}` : null}
            .
        </span>
    );
};

export default SetupMessage;
