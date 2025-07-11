'use client';

import { Chessboard } from 'react-chessboard';

interface Props {
  fen: string;
}

export default function ChessBoardPreview({ fen }: Props) {

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <Chessboard
        position={fen}
        boardOrientation="white"
        arePiecesDraggable={false}
        boardWidth={350}
      />
    </div>
  );
}

