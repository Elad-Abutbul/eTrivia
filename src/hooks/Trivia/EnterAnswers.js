import { useState } from "react";
export const useEnterAnswers = () => {
  const [answers, setAnswers] = useState({});

  const enterAnswers = (item, activeSlider) => {
    setAnswers((prevAnswers) => {
      const updatedSliderAnswers = prevAnswers[activeSlider] || [];

      const itemIndex = updatedSliderAnswers.indexOf(item);

      if (itemIndex !== -1) {
        updatedSliderAnswers.splice(itemIndex, 1);
      } else {
        updatedSliderAnswers.push(item);
      }
      if (updatedSliderAnswers.length === 0) {
        delete prevAnswers[activeSlider];
      } else {
        prevAnswers[activeSlider] = updatedSliderAnswers;
      }
      return prevAnswers;
    });
  };

  return { enterAnswers, answers };
};
