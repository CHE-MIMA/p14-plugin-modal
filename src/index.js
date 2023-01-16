import React from 'react';
const PluginReactComponentModal = ({ openModal, closeModal }) => {
    if (openModal) {
        console.log("modal open");
        return (
            <div className="modal-container">
                <div className="modal-content">
                    <p className="close-modal" onClick={closeModal}>x</p>
                </div>
                <h2 className="titleModal">Employee Created !</h2>
            </div>
        );
    }
};
export default PluginReactComponentModal