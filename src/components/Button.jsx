const Button = ({ children, onClickAction = null, type = 'button' }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClickAction === null) {
            return;
        }
        onClickAction();
    }
    return (
        <button className="btn btn-primary" onClick={handleClick} type={type}>
            {children}
        </button>
    );
}

export default Button;