import styles from "../../assets/styles/banner.module.css";
// import photo from "../../assets/images/dressup.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const Banner = () => {
  return (
    <div className={styles.cont}>


      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src={photo} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}

    
    </div>
  );
};

export default Banner;

// <div className={styles.splideContainer}>
//             <Splide
//               options={{
//                 // type: "loop",
//                 gap: "1rem",
//                 autoplay: false,
//                 pagination: true,
//                 arrows: true,
//                 perPage: getSlidesPerView(),
//                 breakpoints: {
//                   600: {
//                     perPage: 2,
//                   },
//                   1024: {
//                     perPage: 3,
//                   },
//                   1280: {
//                     perPage: 5,
//                   },
//                 },
//                 classes: {
//                   arrow: `splide__arrow ${styles.yourClassArrow}`,
//                   prev: `splide__arrow--prev ${styles.yourClassPrev}`,
//                   next: `splide__arrow--next ${styles.yourClassNext}`,
//                 },
//               }}
//             >
//               {products
//                 .slice(0, 20)
//                 .filter((item) => item.variants && item.variants.find(variant => variant.quantity > 0))
//                 .map((item) => (
//                   <SplideSlide key={item.id}>
//                     <div className={styles.prod}>
//                       <Product
//                         title={item.category.brand}
//                         name={item.name}
//                         img={item.image}
//                         price={item.price}
//                         id={item.id}
//                         storeLocation={item.location}
//                         size={item.category.size}
//                         alt={`${item.name} image`}
//                       />
//                     </div>
//                   </SplideSlide>
//                 ))}
//             </Splide>
//           </div>
