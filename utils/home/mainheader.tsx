import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br/>
        {useTypedText("I'm Sadegh Akbari.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Welcome on my portfolio page! I'm a Creative Junior Front-end Developer with 2 year of experience leveraging JavaScript to build responsive websites, and interactive features . Interested in Js Freamworks like ReactJs, nextjs and learning more and more .", 30, 350)}
      </h2>
    </div>
  )
}