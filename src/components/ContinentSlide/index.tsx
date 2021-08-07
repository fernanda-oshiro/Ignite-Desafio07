
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { Box, Text, theme } from "@chakra-ui/react";
import ContinentSwiper from "./ContinentSwiper";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function ContinentSlide() {
  
  
  
  return (
    <Box
      p={3}
      position='relative'
    >
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
      "clickable":
      true
      }}
      navigation={true}
      className="mySwiper"
      style={{
        width: '100%',
        height: '500px',
      }}
    >
      <SwiperSlide>
        <ContinentSwiper link='/eu' src='/images/EUROPE.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>Europa</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
      <SwiperSlide>
        <ContinentSwiper link='/na' src='/images/NA.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>América do Norte</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
      <SwiperSlide>
        <ContinentSwiper link='/sa' src='/images/SA.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>América do Sul</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
      <SwiperSlide>
        <ContinentSwiper link='/af' src='/images/AFRICA.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>África</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
      <SwiperSlide>
        <ContinentSwiper link='/as' src='/images/ASIA.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>Ásia</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
      <SwiperSlide>
        <ContinentSwiper link='/oc' src='/images/OCEANIA.jpg'>
          <Text as='h1' color={theme.colors.gray[50]} fontSize={['3xl','3xl','5xl']} fontWeight='bold'>Oceania</Text>
          <Text as='h2' color={theme.colors.gray[50]} fontSize={['md','md','3xl']} fontWeight='bold'>O continente mais antigo.</Text>
        </ContinentSwiper>
      </SwiperSlide>
  </Swiper>
    </Box>
  )
}