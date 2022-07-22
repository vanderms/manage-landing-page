import { useId } from "react";
import { TestimonialCard } from "@/components/cards/testimonial/testimonial-card";
import AvatarAli from "@/assets/avatar-ali.png";
import AvatarAnisha from "@/assets/avatar-anisha.png";
import AvatarRichard from "@/assets/avatar-richard.png";
import AvatarShanai from "@/assets/avatar-shanai.png";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { SliderNavegation } from "@/components/navegation/slider/slider-navegation";
import { ActionLink } from "@/components/buttons/action-link/action-link";

interface ISlider {
  cardWidth: number;
  position: number;
  control: number;
}

interface IRefControls {
  resizing: boolean;
  id: number | null;
}

const getCardPosition = (index: number, cardWidth: number): number => {
  return -(index * (cardWidth + 30));
};

export const TestimonialsSection: React.FC = () => {
  const title = useId();
  const refControls = useRef<IRefControls>({ resizing: false, id: null });
  const [slider, setSlider] = useState<ISlider>({
    position: 0,
    cardWidth: 0,
    control: 1,
  });

  const callbackRef = useCallback((card: HTMLLIElement | null) => {
    if (card) {
      const setConstraints = () => {
        const cardWidth = card.getBoundingClientRect().width;
        const control = 1;
        const position = cardWidth < 540 ? getCardPosition(control, cardWidth) : -120;
        setSlider({ control, cardWidth, position });
        refControls.current.resizing = false;
        refControls.current.id = null;
      };

      const watchChanges = () => {
        if (!refControls.current.resizing) {
          refControls.current.resizing = true;
          refControls.current.id = setTimeout(setConstraints, 2000);
        }
      };

      setConstraints();
      window.addEventListener("resize", watchChanges);
    }
    //...
    else if (refControls.current.id) {
      clearTimeout(refControls.current.id);
    }
  }, []);

  return (
    <section aria-labelledby={title} className="mt-16 px-[6.4%] xl:mt-[9.125rem] xl:px-0">
      <h2 id={title} className="title-md text-neutral-800 text-center">
        What they've said
      </h2>
      <div className="mt-16 w-[min(100%,22.5rem)] mx-auto overflow-hidden xl:w-full xl:mt-[4.75rem]">
        <div className="w-[min(95.625rem,400%_+_90px)] xl:w-[140.625rem]">
          <motion.ul
            className="relative w-full grid grid-cols-4 gap-[30px]"
            animate={{ x: slider.position }}
            drag="x"
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{
              right: 0,
              left: slider.cardWidth < 540 ? getCardPosition(3, slider.cardWidth) : -960,
            }}
          >
            <li ref={callbackRef}>
              <TestimonialCard avatar={AvatarAnisha} name="Anisha Li">
                <p>
                  “Manage has supercharged our team's workflow. The ability to maintain
                  visibility on larger milestones at all times keeps everyone motivated.”
                </p>
              </TestimonialCard>
            </li>
            <li>
              <TestimonialCard avatar={AvatarAli} name="Ali Bravo">
                <p>
                  “We have been able to cancel so many other subscriptions since using
                  Manage. There is no more cross-channel confusion and everyone is much more
                  focused.”
                </p>
              </TestimonialCard>
            </li>
            <li>
              <TestimonialCard avatar={AvatarRichard} name="Richard Watts">
                <p>
                  “Manage allows us to provide structure and process. It keeps us organized
                  and focused. I can't stop recommending them to everyone I talk to!”
                </p>
              </TestimonialCard>
            </li>
            <li>
              <TestimonialCard avatar={AvatarShanai} name="Shanai Gough">
                <p>
                  “Their software allows us to track, manage and collaborate on our projects
                  from anywhere. It keeps the whole team in-sync without being intrusive.”
                </p>
              </TestimonialCard>
            </li>
          </motion.ul>
        </div>
      </div>
      <div className="xl:hidden mt-10 flex justify-center">
        <SliderNavegation
          option={slider.control}
          setCurrentOption={(option) => {
            const position = getCardPosition(option, slider.cardWidth);
            setSlider((prev) => ({ ...prev, position, control: option }));
          }}
        />
      </div>
      <div className="mt-12 flex justify-center">
        <ActionLink href="/">Get Started</ActionLink>
      </div>
    </section>
  );
};
