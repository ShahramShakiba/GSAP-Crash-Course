import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function GsapStagger() {
  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 200,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      // ease: 'back.in',
      borderRadius: '100%',
      // stagger: 0.5,

      stagger: {
        //the amount of time to stagger the animations between each element
        each: 0.1,
        // amount: 2,

        //the number of columns and rows in the grid
        grid: [2, 1], 
        // grid:'auto',

        axis: 'y',

        // ease: 'circ.inOut',
        ease: 'power2.inOut',

        from: 'center', //the starting position of the staggered animations
        
        // repeat: -1,
      },
    });
  }, []);

  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{' '}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{' '}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
}
