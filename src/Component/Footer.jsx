import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <footer class="text-center text-white" style={{ backgroundColor: '#f1f1f1;' }}>
                <div class="container pt-4 text-center">

                    <section class="mb-4 text-center">

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        > <FontAwesomeIcon icon={faCoffee} transform={{ rotate: 42 }} size="2x" /></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faFacebook} transform="shrink-6 left-4" size="2x" /></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faTwitter} transform="shrink-6 left-4" size="2x" /></a>


                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-linkedin"></i></a>

                        <a
                            class="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-github"></i></a>
                    </section>

                </div>
                <div class="text-center text-dark p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2);' }}>
                    Follow Us For New Update
                </div>
            </footer>
        </>
    )
}

export default Footer;