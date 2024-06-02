import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function GsapTo() {
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 300,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease:'circ.inOut'
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{' '}
        <code>gsap.from()</code> method, but the difference is that the{' '}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{' '}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{' '}
        method.
      </p>

      {/* box */}
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
}
