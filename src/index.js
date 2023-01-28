import React from 'react';
const PluginReactComponentModal = ({ openModal, closeModal, title, closeButton }) => {
    if (openModal) {
        console.log("modal open");
        return (
            <div className="parent-container">
                <div className="modal-container">
                    <div className="modal-content">
                        <p className="close-modal" onClick={closeModal}>{closeButton}</p>
                    </div>
                    <h2 className="title-modal">{title}</h2>
                </div>
            </div>
        );
    }
};
export default PluginReactComponentModal