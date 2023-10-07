
import PropTypes from 'prop-types';
import "../../styles/modal/ErrorModal.css"

export function ErrorModal({ isOpen, onClose, message }) {
    if (!isOpen) return null;
    return (
        <div className="errorModal">
            <p>{message}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

    ErrorModal.propTypes = {isOpen: PropTypes.bool.isRequired,onClose: PropTypes.func.isRequired,message: PropTypes.string.isRequired
};

