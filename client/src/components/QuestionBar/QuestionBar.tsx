import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

export default function QuestionBar(): JSX.Element {
    const dispatch = useAppDispatch()
    const themes = useAppSelector((state) => state.ethemes)
  return (
    <div>QuestionBar</div>
  )
}
