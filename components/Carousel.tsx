import React, { useState, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
  navigation?: (props: {
    setActiveIndex: (index: number) => void;
    activeIndex: number;
    length: number;
  }) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  autoplayDelay = 3000,
  loop = false,
  className = '',
  navigation,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = React.Children.toArray(children);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (activeIndex === items.length - 1 && !loop) {
        clearInterval(interval);
        return;
      }

      setActiveIndex((current) =>
        current === items.length - 1 ? 0 : current + 1
      );
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [activeIndex, autoplay, autoplayDelay, items.length, loop]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{
          transform: `translateX(${-activeIndex * 100}%)`,
          width: `${items.length * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
      {navigation &&
        navigation({
          setActiveIndex,
          activeIndex,
          length: items.length,
        })}
    </div>
  );
};

export default Carousel;
