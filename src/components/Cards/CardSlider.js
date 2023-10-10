import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import CardXcss from "./CardXcss";

const CardSlider = ({ dataSet }) => {
    const settings = {
        // ... rest of the settings
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider  {...settings}>
            {dataSet.map((data, index) => (
                <CardXcss key={index} data={data} />
            ))}
        </Slider>
    );
};

// Custom "Next" arrow for the slider
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            icon={<ArrowForwardIcon />}
            color="whiteAlpha.800"
            bg="whiteAlpha.200"
            _hover={{
                color: "whiteAlpha.900",
                bg: "whiteAlpha.500"
            }}
            aria-label="Next"
            position="absolute"
            top="50%"
            right="0"
            transform="translateY(-50%)"
            zIndex="10"
            borderRadius="full"
        />
    );
}

// Custom "Prev" arrow for the slider
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <IconButton
            onClick={onClick}
            icon={<ArrowBackIcon />}
            color="whiteAlpha.800"
            bg="whiteAlpha.200"
            _hover={{
                color: "whiteAlpha.900",
                bg: "whiteAlpha.500"
            }}
            aria-label="Previous"
            position="absolute"
            top="50%"
            left="0"
            transform="translateY(-50%)"
            zIndex="10"
            borderRadius="full"
        />
    );
}

export default CardSlider;
