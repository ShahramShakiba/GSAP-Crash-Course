import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function GsapText() {
  useGSAP(() => {
    gsap.to('#text', {
      opacity: 1,
      x: 0,
      ease: 'back.out',
      duration: 3,
    });

    gsap.fromTo(
      '.para',
      {
        opacity: 0,
        y: 30,
        duration: 2,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <main>
      <h1 id="text" className="opacity-0 -translate-x-36">
        GsapText
      </h1>
      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{' '}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{' '}
        <code>gsap.timeline()</code> to animate text.
      </p>
      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>
      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{' '}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{' '}
        plugin.
      </p>
    </main>
  );
}
