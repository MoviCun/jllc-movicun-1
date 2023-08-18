import React, { useState, useEffect } from 'react';
import './Avisos-viales.css';
import mpasUno from '../../../assets/images/Main/maps-1.png'

const Avisos = () => {
    const [isSliderRunning, setIsSliderRunning] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const startSlider = () => {
        if (!isSliderRunning) {
            setIsSliderRunning(true);
        }
    }

    const stopSlider = () => {
        setIsSliderRunning(false);
    }

    const showSlide = (slideIndex) => {
        const slides = document.querySelectorAll(".slide");
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    }

    useEffect(() => {
        const slides = document.querySelectorAll(".slide");

        if (isSliderRunning) {
            showSlide(currentSlide);
            const intervalId = setInterval(nextSlide, 3000);

            return () => {
                clearInterval(intervalId);
            };
        } else {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
        }
    }, [isSliderRunning, currentSlide]);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth <= 768) {
                startSlider();
            } else {
                stopSlider();
            }
        }

        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    const slides = [
        {
            title: "Cancun",
            image: mpasUno,
            description: "¡Atención! Habrá construcción en la Carr. Cancún - Tulum Supermanzana 10, 77500 Cancún, Q.R. entre el 20 y 25 de agosto. Utilice rutas alternas para evitar retrasos."
        },
        {
          title: "Cancun",
          image: mpasUno,
          description: "¡Atención! Habrá construcción en la Carr. Cancún - Tulum Supermanzana 10, 77500 Cancún, Q.R. entre el 20 y 25 de agosto. Utilice rutas alternas para evitar retrasos."
        },
        {
          title: "Cancun",
          image: mpasUno,
          description: "¡Atención! Habrá construcción en la Carr. Cancún - Tulum Supermanzana 10, 77500 Cancún, Q.R. entre el 20 y 25 de agosto. Utilice rutas alternas para evitar retrasos."
        }
    ];

    return (
        <section className="services">
            <h2>Avisos Viales</h2>
            <section>
                <div className="container__services slider-container">
                    {slides.map((slide, index) => (
                        <div className={`services__item slide ${index === currentSlide ? 'active' : ''}`} key={index}>
                            <div className={`container__${slide.title.toLowerCase().replace(" ", "-")}`}>
                                <div className={`${slide.title.toLowerCase().replace(" ", "-")}`}>
                                    <h3>{slide.title}</h3>
                                    <img className={slide.image.replace("./assest", "").replace("/", "").replace(".", "").replace("/", "").replace("svg", "").replace("-", "")} src={slide.image} alt={`icono de ${slide.title}`} />
                                </div>
                                <p>{slide.description}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Avisos;
