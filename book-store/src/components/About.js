import React from "react";

const About = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: `url(${process.env.PUBLIC_URL + "/store.jpg"}) no-repeat center center/cover`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        paddingTop: "100px",
      }}
    >
      {/* Transparent Overlay for Opacity Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.52)",
        }}
      ></div>

      {/* Content on Top of Background */}
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
          marginBottom: "10px",
        }}
      >
        SHARMA PUSTAK BHANDAR
      </h1>
      <p
        style={{
          padding: "50px",
          fontSize: "20px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          lineHeight: "1.9",
        }}
      >
        Welcome to Sharma Pustak Bhandar! Your one-stop destination for all
        educational and competitive exam books. We specialize in providing
        study materials for students, competitive exam aspirants, and
        professionals. Our store offers school textbooks, university reference
        books, competitive exam guides, and specialized study materials for
        exams like UPSC, SSC, Banking, Railways, and other government exams.
        <br />
        <br />
        Our mission is to help students achieve academic success by providing
        high-quality books at affordable prices. Whether you are a school
        student, a graduate, or preparing for an entrance exam, we have the
        right books for you!
      </p>

      {/* Address Section */}
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 1,
          marginTop: "20px",
        }}
      >
        📍 Address: S.M. College Road, Choti Khanjarpur, Bhagalpur, Bihar - 812005
      </p>
    </div>
  );
};

export default About;
