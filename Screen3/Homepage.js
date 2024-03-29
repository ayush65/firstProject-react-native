import React from "react";
import { Image, Text, View } from "react-native";

const Homepage = () => {
  const images = [
    "https://freesvg.org/img/1286146771.png",
    "https://freesvg.org/img/maroon.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuvADA0ib0DusP4l25guqakHm2OFoeOhMvaf8F3fG3QTkQ3gGlkJUwcd54KunIlXlFq0&usqp=CAU",
    "https://freesvg.org/img/1286146771.png",
    "https://freesvg.org/img/maroon.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuvADA0ib0DusP4l25guqakHm2OFoeOhMvaf8F3fG3QTkQ3gGlkJUwcd54KunIlXlFq0&usqp=CAU",
    "https://freesvg.org/img/1286146771.png",
    "https://freesvg.org/img/maroon.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuvADA0ib0DusP4l25guqakHm2OFoeOhMvaf8F3fG3QTkQ3gGlkJUwcd54KunIlXlFq0&usqp=CAU",
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {images.map((imageUrl, index) => (
        <View
          key={index}
          style={{
            marginBottom: 10,
            flex: 1,
            flexDirection: "row",
            backgroundColor: "black",
          }}
        >
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      ))}
    </View>
  );
};

export default Homepage;
