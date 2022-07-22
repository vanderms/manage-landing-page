import { useId } from "react";
import { TestimonialCard } from "@/components/cards/testimonial/testimonial-card";
import AvatarAli from "@/assets/avatar-ali.png";
import AvatarAnisha from "@/assets/avatar-anisha.png";
import AvatarRichard from "@/assets/avatar-richard.png";
import AvatarShanai from "@/assets/avatar-shanai.png";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ISlider {
  size: number;
  position: number;
}

export const TestimonialsSection: React.FC = () => {
  const title = useId();
  const card = useRef<HTMLLIElement>(null);
  const resizing = useRef<boolean>(false);
  const [slider, setSlider] = useState<ISlider>({
    position: 0,
    size: 0,
  });

  useEffect(() => {
    if (card.current) {
      const size = card.current.getBoundingClientRect().width;
      const position = size < 540 ? -(size + 30) : -120;
      setSlider({ size, position });

      window.addEventListener("resize", () => {
        if (!resizing.current) {
          resizing.current = true;
          setTimeout(() => {
            console.log('I am here!');            
            const size = card.current!.getBoundingClientRect().width;
            const position = size < 540 ? -(size + 30) : -120;
            setSlider({ size, position });
            resizing.current = false;
          }, 2000);
        }
      });     
    }
  }, []);

  return (
    <section aria-labelledby={title} className="mt-16 px-[6.4%]">
      <h2 id={title} className="title-md text-neutral-800 text-center">
        What they've said
      </h2>
      <div className="mt-16 w-[min(100%,22.5rem)] mx-auto overflow-hidden">
        <div className="w-[min(95.625rem,400%_+_90px)]">
          <motion.ul
            className="relative w-full grid grid-cols-4 gap-[30px]"
            animate={{ x: slider.position }}
            drag="x"
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0}
            whileTap={{ cursor: "grabbing" }}
            dragConstraints={{ right: 0, left: -(3 * slider.size + 90) }}
          >
            <li ref={card}>
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
    </section>
  );
};
