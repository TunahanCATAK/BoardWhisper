'use client';

import { Chessboard } from 'react-chessboard';

interface Props {
  fen: string;
}

export default function ChessBoardPreview({ fen }: Props) {

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <Chessboard
        options={{
          position: fen, 
          id: 'static-board',
          allowDragging: false, 
          animationDurationInMs: 0,
        }} 
      />
    </div>
  );
}

