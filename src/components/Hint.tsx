import React from 'react'
import { HintType } from '../types'

interface HintProps {
  hint: HintType
}

const Hint: React.FC<HintProps> = ({ hint }) => {
  if (!hint) return null
  return (
    <div className="hint" aria-live="polite">
      {hint === 'higher' ? 'Try a higher number' : 'Try a lower number'}
    </div>
  )
}

export default Hint