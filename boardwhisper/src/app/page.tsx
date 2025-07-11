'use client';

import Head from "next/head";
import dynamic from 'next/dynamic';

const ChessBoardPreview = dynamic(() => import('./components/chess-board-preview'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-4 py-8">
      <Head>
        <title>Board Whisper – Master Chess Analysis</title>
        <meta name="description" content="Get master-level chess feedback on any position you submit. Join the waitlist now." />
      </Head>

      <header className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl font-bold">Struggling with a Chess Position?</h1>
        <p className="text-lg text-gray-300">
          Submit any position and get a written explanation from a real chess master in 24 hours.
        </p>
        <a
          href="https://tally.so/r/waJP19"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition"
        >
          Join the Waitlist
        </a>
      </header>

      <section className="mt-16 max-w-4xl w-full text-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold">♟ Any Position</h3>
            <p className="text-gray-400">Paste your FEN or upload a screenshot. No restrictions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🧠 Real Experts</h3>
            <p className="text-gray-400">Reviewed by 2000+ ELO-rated coaches and masters.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">💬 Clear Insights</h3>
            <p className="text-gray-400">Understand the why, not just the what.</p>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">🔍 Sample Analysis</h2>
        <p className="text-gray-300 mb-2">
          <em>Position (White to move):</em> <code>r3r1k1/pp3ppp/2n2b2/q2p4/2pP4/2N1PN2/PP1BBPPP/R2Q1RK1 w - - 0 1</code>
        </p>
        <ChessBoardPreview fen="r3r1k1/pp3ppp/2n2b2/q2p4/2pP4/2N1PN2/PP1BBPPP/R2Q1RK1 w - - 0 1" />
        <div className="bg-gray-800 p-4 rounded-xl text-sm text-gray-200">
          Your move <strong>Rad1</strong> is natural, aiming to pressure the d5 pawn. However, a stronger plan here is <strong>e4</strong>,
          striking in the center before Black can regroup. Notice how Black’s queen and bishop both eye d4, but lack support behind them.
          If you open the center, your bishops dominate. After <code>1. e4! dxe4 2. Nxe4 Qf5</code>, you can play <strong>Nxf6+</strong>,
          and the position explodes in your favor. Positional concepts: central control, piece activity, and initiative.
        </div>
      </section>

      <footer className="mt-24 text-sm text-gray-500">
        © 2025 Board Whisper. All rights reserved.
      </footer>
    </div>

  );
}

