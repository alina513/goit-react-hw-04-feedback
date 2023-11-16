import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 

 const handleIncrement = (name) => {
  if(name==="good") {setGood(prevGood =>  prevGood + 1 )}
  if(name==="neutral") {setNeutral(prevNeutral =>  prevNeutral + 1)}
  if(name==="bad") {setBad(prevBad =>  prevBad + 1)}
 }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
 const  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      (good /
        (countTotalFeedback())) *
        100
    );
  };

   
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingLeft: 20,
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }

