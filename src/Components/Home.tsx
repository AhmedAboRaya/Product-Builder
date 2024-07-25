import React, { useState, useEffect } from 'react';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const descriptions = [
    "Add New Products",
    "Edit Existing Products",
    "Delete Unwanted Products"
  ];

  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let charIndex = 0;
    const typingDelay = 200; // Delay after typing (in milliseconds)
    const typingInterval = 100; // Interval for typing effect

    const currentText = descriptions[currentDescriptionIndex];
    
    const typeEffect = () => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        if (!isDeleting) {
          setIsTypingComplete(true);
          setTimeout(() => {
            setIsTypingComplete(false);
            setIsDeleting(true);
          }, typingDelay); // Delay before starting to delete
        } else {
          setIsDeleting(false);
          setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }
      }
    };

    const interval = setInterval(typeEffect, typingInterval); // Change character every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentDescriptionIndex, isDeleting]);

  return (
    <div className="container mx-auto p-8 text-center ">
      <h1 className="text-4xl font-bold mb-4 text-red-700">Welcome to ProductHub</h1>
      <p className="text-blue-700 font-bold">{displayText}</p>
    </div>
  );
};

export default Home;
