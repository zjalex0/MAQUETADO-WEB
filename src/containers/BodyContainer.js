import React from 'react';
import { GalleryComponent } from '../components/gallery/GalleryComponent';

export const BodyContainer = () => {

    return (
        <div className="bodycontainer__main mt-2 mb-2">
            <div className="bodycontainer__main-content">
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <GalleryComponent/>
                    </div>
                    <div className="col-lg-8 col-md-6 mb-4 mb-md-0">
                        <h4 className="fw-bold ms-2">So what's this all about?</h4>
                        <div className="container-flex">
                            <p className="mt1">
                            Al igual que en nuestra vida real, una buena firma en el ámbito digital puede dar un toque más personal y transmitir originalidad y confianza. Si escribes en un blog, quizá necesites una firma para tus publicaciones. Si envías correos electrónicos, también es probable que prefieras una firma especial en lugar del típico y simple texto. Y si escribes un libro electrónico o una carta comercial, una firma personalizada puede darles un toque de confianza adicional.
                            </p>
                            <p className="mt1">
                            Así que, ¿cómo diseñar tu propia firma para usarla donde quieras en línea? Una forma de hacerlo es con una copia exacta de tu propia firma. Simplemente escribe tu firma en un papel, escanéala y guarda la imagen para usarla cuando quieras.
                            </p>
                        </div>
                        <div className="container-flex">
                            <button className="btn fs-6 btn-primary w-15 pt-2 pb-2 ps-4 pe-4">
                                <i className="fas fa-arrow-alt-circle-right me-1"></i>
                                <span>Continue Reading</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
