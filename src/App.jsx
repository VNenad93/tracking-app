import React, { useState } from "react";
import './App.css';
import Card from './Card';
import Profile from "./Profile";
import Data from './data.json/'
import { data } from "autoprefixer";

function App() {

  const [current, setCurrent] = useState(Data.map((e, index) => {
    return <Card key={index} name={e.title} current={e.timeframes.daily.current} previous={e.timeframes.daily.previous} />
  }))

  function daily() {
    setCurrent(Data.map((e, index) => {
      return <Card key={index} name={e.title} current={e.timeframes.daily.current} previous={e.timeframes.daily.previous} />
    }))
  }

  function weekly() {
    setCurrent(Data.map((e, index) => {
      return <Card key={index} name={e.title} current={e.timeframes.weekly.current} previous={e.timeframes.weekly.previous} />
    }))
  }

  function monthly() {
    setCurrent(Data.map((e, index) => {
      return <Card key={index} name={e.title} current={e.timeframes.monthly.current} previous={e.timeframes.monthly.previous} />
    }))
  }

  return (
    <main className="min-h-screen bg-darkBlue lg:grid lg:content-center p-6">
      <section className="space-y-7 font-rubik
                          rounded-3xl mx-auto gap-6 
                          lg:h-[60vh] lg:grid-cols-4 lg:grid lg:space-y-0">
        <Profile  daily={daily}
                  weekly={weekly}
                  monthly={monthly}
        />
        {current}
      </section>
    </main>
  )

}

export default App 
