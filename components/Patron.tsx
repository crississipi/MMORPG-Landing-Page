import React from 'react'
import Background from './Background'
import PatronCard from './PatronCard'

const PatronInfo = [
    {
        name: "Free",
        amount: 0,
        gradient: 'from-rock via-rock to-volcano',
        border: 'border-volcano',
        color: 'text-white',
        included: ["Free 3 characters", "Monthly free packages", "Unlock uncommon quests", "Walkthrough until 3rd chapter", "Team-up with other players", "Character level cap at 199"],
    },
    {
        name: "Premium",
        amount: 499,
        gradient: 'from-emerald-500 via-emerald-700 to-fog',
        border: 'border-amber-200',
        color: 'text-amber-200',
        included: ["Free all characters", "Weekly free packages", "Unlock up to rare quests", "Walkthrough until final chapter of the character storyline", "Team-up with other players", "More realistic storyline", "Smarter NPCs (provide hints)", "Craft unique items", "Character level cap at 499"],
    },
    {
        name: "Royalty",
        amount: 999,
        gradient: 'from-amber-400 to-amber-800',
        border: 'border-volcano',
        color: 'text-volcano',
        included: ["Free all characters", "Daily free packages", "Unlock and find all quests (uncommon to mythical)", "Walkthrough until end of the world", "Team-up with other players and NPCs", "Conversation and interaction affects storyline", "Highly intelligent NPCs", "Craft desired items you imagine", "No character level cap"],
    },
];

const Patron = () => {
  return (
    <section id='patron' className='text-white text-5xl font-protest-guerrilla px-10 pb-10 flex flex-col items-center gap-10 relative overflow-hidden before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-gradient-to-t before:from-black before:via-black/20 before:to-black before:z-10 font-extralight'>
      <Background bg={["/images/background/blindswordsman-bg.png", "/images/background/frostprincess-bg.png", "/images/background/asuragiant-bg.png"]} reversed={true} />
      <div className='w-4/5 h-4/5 grid grid-cols-3 gap-3 mt-auto'>
        {PatronInfo.map((info, i) => (
            <PatronCard key={i} name={info.name} amount={info.amount} gradient={info.gradient} border={info.border} color={info.color} included={info.included} />
        ))}
      </div>
    </section>
  )
}

export default Patron
