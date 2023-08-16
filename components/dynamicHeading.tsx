"use client";
import { useState, useEffect } from "react";

const DynamicHeading = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["RESPONSIVE", "DYNAMIC", "CREATIVE"]; // List of texts
  const [currentText, setCurrentText] = useState(texts[0]); // Initial text

  useEffect(() => {
    // Function to update the text
    const updateText = () => {
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    };

    // Set an interval to update the text every 3 seconds
    const interval = setInterval(updateText, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentText, texts]);

  return (
    <div>
      <h1>{currentText}</h1>
    </div>
  );
};

export default DynamicHeading;
