import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

//initiate ScrollTrigger at the top
gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollTrigger() {
  const scrollRef = useRef();

  useGSAP(
    () => {
      // get all the boxes in the scrollRef
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 200 * (boxes.indexOf(box) + 2),
          rotation: 360,
          borderRadius: '100%',
          scale: 1.5,
          ease: 'power.in',
          // duration: 2,

          scrollTrigger: {
            trigger: box,
            start: 'top 70%',
            //when the top of the box hits the 70% from the top of the viewport
            end: 'top 50%',
            //end when the top of the box hits 20% from the top of the viewport

            scrub: 3,
            //scrubbing makes the animation smooth - the higher value makes it smoother
            pin: true, //pin the trigger element while active

            // snap: {
            //   snapTo:'.arrow', // snap to the closest label in the timeline
            //    duration: { min: 0.2, max: 3 },
            // },
          },
        });
      });
    },
    { scope: scrollRef } //it'll know when the animation has to happen
  );

  return (
    <main>
      <h1>GsapScrollTrigger</h1>
      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>
      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{' '}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{' '}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{' '}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col arrow">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>
        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500 mb-10"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
}
