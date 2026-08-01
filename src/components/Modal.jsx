function Modal({ title, children, onClose }) {
  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="drawer-backdrop"
      role="presentation"
      onMouseDown={handleBackdropClick}
    >
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <header className="drawer-header">
          <h2 id="drawer-title">{title}</h2>

          <button
            type="button"
            className="drawer-close-button"
            aria-label="Close form"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="drawer-content">
          {children}
        </div>
      </aside>
    </div>
  )
}

export default Modal