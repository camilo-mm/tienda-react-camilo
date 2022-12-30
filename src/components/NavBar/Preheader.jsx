const Preheader = ({textPreheader}) =>{
    return (
        <header>
            <section className="preheader">
                <div className="info-message">
                    <a href="#">{textPreheader}</a>
                </div>
                <div className="info-account">
                    <ul>
                        <li>¿NECESITAS AYUDA?</li>
                    </ul>
                </div>
            </section>
        </header>
    )
}

export default Preheader