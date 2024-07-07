import Link from 'next/link'

export default function OffcanvasMenu({ isOffcanvasMenu, handleOffcanvasMenu }: any) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvasMenu ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvasMenu}>
                    <button><i className="fas fa-times" /></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo-white.svg" alt="Logo" /></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>Office Address</h4>
                        <p>Office No. 7 <br /> 2nd Floor, 5391,<br /> Dammam 32241, Saudi Arabia
                        </p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>Email Address</h4>
                        <p>work@multixiondesign.com</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <ul className="list-wrap">
                        <li><Link href="https://www.instagram.com/multixion/" target="_blank"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="https://www.linkedin.com/company/multixion/" target="_blank"><i className="fab fa-linkedin" /></Link></li>
                    </ul>
                </div>
            </div >
            <div className={`offCanvas__overly  ${isOffcanvasMenu ? "active" : ""}`} onClick={handleOffcanvasMenu} />
        </>
    )
}
