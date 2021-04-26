import BoardSquare from './BoardSquare'
import Knight from './Knight'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { moveKnight, canMoveKnight } from '../Game'

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)

  return (
    <DndProvider backend={HTML5Backend} key={i}>
      <div
        style={{ width: '12.5%', height: '12.5%' }}
        onClick={() => handleSquareClick(x, y)}
      >
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, [knightX, knightY])}
        </BoardSquare>
      </div>
    </DndProvider>
  )
}
function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY)
  }
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}