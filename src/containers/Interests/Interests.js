import React, { forwardRef } from 'react'
import styles from './Interests.module.css'
import Section from '../../components/Section/Section'



const Interests = forwardRef((props, ref) => {
  return (
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.1)' }} fwdRef={ref}>
      <h2>Interests</h2>
            <div className={styles.interestsContainer}>
        <div>
          <h3>Music</h3>
          <p>I am passionate about music. Although I have played guitar since I was 10 years old, I began to significantly improve my understanding of music around 5 years ago by learning the basics of music theory. More recently I have started to learn the keyboard and music production techniques and have helped others to learn the fundamentals of music.</p>
        </div>

        <div>
          <h3>Art &amp; Design</h3>
          <p>Art and design has always been a big hobby of mine. I feel that I am naturally creative and have a keen eye for design. I have learnt various design programs and have utilised my skills in UI design personally and professionally. I have recently picked up the hobby of lino printing. </p>
        </div>

        <div>
          <h3>Technology</h3>
          <p>Since I was young, I have had a keen interest in technology. In High School, I learnt to use Flash to create games and animations. A friend and I worked together to build simple websites for local businesses in my home town. Since mid-2017 my love for tech has rekindled, and since learning JavaScript I have been compulsively learning more and more.</p>
        </div>
      </div>
    </Section>
  )
})

export default Interests