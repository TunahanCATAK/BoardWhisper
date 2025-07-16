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
        <ChessBoardPreview fen="r3nrk1/1q3ppp/p1b1pb2/8/1PB2B2/P1N3Q1/5PPP/2RR2K1 b - - 0 1" />
        <div className="bg-gray-800 p-4 rounded-xl text-sm text-gray-200">
            Material is even. <br />
             White: King safety is good, rooks ideally placed in the center. Knight and Bishops good placed and well developed, Queen aiming at the black king. Good pawn structure for white as well, with no weak pawns and 2 pawn islands. <br />
            Black: King safety is okay, the rooks are not connected which is a problem. The bishops for black are better than the white bishops as they occupy the two longest diagonals of the board. The knight is very passive on the eight rank and needs to be improved for the rooks to be connected. <br />
            The queen on b7 working together with the bishop on c6 creating a battery pointing at the white king looks fine too. Black has a good pawn structure on the kingside but on the queenside he has one isolated pawn which is weak. What should be the plan for black? to improve the knight, connect the rooks and get them to the center! So a good plan for black is 1...g6 followed by Ng7-Nf5 and then go Rfd8 and Rac8. After that all of blacks pieces are good placed and black is better.
        </div>
      </section>

      <footer className="mt-24 text-sm text-gray-500">
        © 2025 Board Whisper. All rights reserved.
      </footer>
    </div>

  );
}

