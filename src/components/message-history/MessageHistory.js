import React from 'react';

import './messageHistory.css';

export const MessageHistory = ({ msg }) => {
    if (!msg) return null;
    return msg.map((rec, i) => (
        <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold text-secondary">
                <div className="sender">{rec.messageBy}</div>
                <div className="date">{rec.date}</div>
            </div>
            <div className="message">{rec.message}</div>
        </div>
    ))
}
