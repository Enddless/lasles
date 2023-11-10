export const settingsSlider = {
    dots: true,
    infinite: false,
    variableWidth: false,
    // autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

    ]
  };