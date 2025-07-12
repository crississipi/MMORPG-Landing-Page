"use client"

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { RiScales3Fill, RiTShirt2Fill, RiUserSmileFill, RiVolumeMuteLine, RiVolumeUpLine } from 'react-icons/ri';
import { IoTicket } from 'react-icons/io5';
import Equipment from './Equipment';
import { GiCutDiamond, GiQueenCrown, GiStarShuriken } from 'react-icons/gi';
import Stat from './Stat';
import Info from './Info';
import { MdMoneyOff } from 'react-icons/md';

const characterInfo = [
    {
        name: "Ginjiro Tsukikage",
        title: 'The Blind Samurai',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Qi Energy"],
            ["560","115","240","300", "400", "280", "60", "45", "125"]
        ],
        afinity: [
            ["Moon", "Wind"],
            [<>+20% <span className='font-extralight italic'>all stats at night</span></>, <>+15% <span className='font-extralight italic'>agility</span></>],
            ["text-amber-300", "text-emerald-300"]
        ],
        characImg: '/images/characters/blindswordsman.png',
        aboutInfo: 
            <>
                Ginjiro Tsukikage was once a paragon of loyalty. An elite warrior, the chosen heir to the legendary samurai Takedo, and master of the deadly Ten Subduing Demon Flash. As elder of a proud martial clan and enforcer of Reverend Khan Quiante&#39;s will, he lived with quiet purpose: to wield his blade in service of peace and protect the bloodline that raised him. He was feared, revered, and content.
                <br /><br />
                But loyalty is a fragile blade, and his was shattered in blood.
                <br /><br />
                While guarding a diplomatic envoy to the Nostre Empire, Ginjiro&apos;s world was torn apart. In his absence, his homeland was razed by the ruthless Crowan Marauder Mercenaries. His clan, every brother, sister, elder, and child were slaughtered without mercy. The earth he once vowed to protect soaked in the blood of his kin.
                <br/><br/>
                The act was branded as an unprovoked invasion by the Trieka Conglomerate, a tragedy no one saw coming. Reverend Khan expressed horror. He sent reinforcements, but they were too late, conveniently too late.
                <br/><br/>
                Ginjiro, consumed by loss, hunted down the mercenaries with the cold precision of a demon unchained. One by one, he tore through them, ripping apart camps, interrogating those who survived the wrath of his vengeance using hot steel and fire, bathing in the vengeance that coursed through his veins. In their final lair, buried in stolen documents, he uncovered the truth: his master&#39;s signature, Reverend Khan&apos;s agreement with the Trieka Conglomerate to sacrifice Ginjiro&#39;s clan under the lie of war.
                <br/><br/>
                The betrayal was deliberate. His loyalty, manipulated. His people, exterminated like pawns.
                <br/><br/>
                Now, Ginjiro Tsukikage is no longer a samurai. He is a wrath incarnate, a cursed soul reborn in the fire of treachery. His heart no longer beats for honor, but for ruin. He no longer serves the light of his clan, but the darkness of his vengeance.
                <br/><br/>
                <span className='font-semibold'>He will carve his revenge into the bones of empires.</span>
                <br/>
                <span className='font-semibold'>He will make Reverend Khan beg for death.</span>
                <br/>
                <span className='font-semibold'>And when that day comes, Ginjiro won&#39;t grant it.</span>
                <br/><br/>
                He is the last of his blood, and the first of a reckoning.
            </>,
        clothing: [
            [
                '/images/items/samurai/katana.png', 
                'Muramasa Dual Blade',
                'Crafted by the infamous swordsmith Sengo Muramasa, these blades were said to thirst for blood from the moment the hammer struck the anvil.'
            ], 
            [
                '/images/items/samurai/kimono.png',
                'Blood-Stained Kimono',
                'Forged from shadow-dyed silk and ember-threaded wool, its black and crimson folds whisper through the air like a stalking predator, elegant, restrained, and terrifying.'
            ],
            [
                '/images/items/samurai/blindfold.png',
                'Seal of Sightless',
                "Forged in myth and whispered in prayer, the blindfold is said to carry the whispers of the moon itself. When worn, it sharpens the soul's awareness beyond mortal comprehension."
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
    {
        name: "Diana Everwinter",
        title: 'The Frost Maiden',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Mana Energy"],
            ["370","75","60","265", "470", "420", "230", "75", "740"]
        ],
        afinity: [
            ["Ice", "Wind"],
            [<>+15% <span className='font-extralight italic'>in ice damage</span></>, <>+20% <span className='font-extralight italic'>attack speed</span></>],
            ["text-sky-200", "text-emerald-300"]
        ],
        characImg: '/images/characters/frostprincess.png',
        aboutInfo: 
            <>
                In the fading realm of Elen&#39;theria, a blizzard has raged for nearly thirty years, slowly killing the sacred Divine Tree, the source of all elven life. Unable to bear new offspring, the tree groans beneath the weight of ice and time.
                <br /><br />
                Elves do not speak names. They communicate through essence. But when a child is born with unmatched vitality, they are given one. A tradition reserved for the rare, the gifted.
                <br /><br />
                From a glowing fruit sac beneath the dying canopy, a child emerged. The moment her skin touched the cold air, a gentle frost pulsed outward, calming the storm and easing the Divine Tree&apos;s pain. The tribe named her Diana Everwinter.
                <br/><br/>
                With pale skin and breath like starlit mist, Diana was no ordinary elf. Her frost was not the cruel blizzard, it was balance. As she grew, she absorbed the storm&apos;s fury into herself, easing the land&#39;s torment, sacrificing her warmth to keep the tree alive.
                <br/><br/>
                But when the Holitzer Boundary collapsed, demons from the Great Expanse poured into their land. Now, Diana not only holds back the endless storm, but also faces the horrors of invasion, her body etched with crystalline scars from years of shielding her people.
                <br/><br/>
                Still, she stands, the lone bloom in a sea of ice, the elven hope in a dying world.
            </>,
        clothing: [
            [
                '/images/items/snowprincess/bow.png', 
                'Frostpiercer',
                "Forged from a shard of the Divine Tree's own bark and strung with a thread of frozen moonlight, the Frostpiercer, sings with ancient magic. It shoot arrow formed of condensed frost, sharpened by her will and purpose."
            ], 
            [
                '/images/items/snowprincess/dress.png',
                'Veil of Blooming Winter',
                "Woven from silk drawn from snow moths and layered with petals from the last frostbloom that ever grew, Diana's white dress flows like mist over ice. A ceremonial garb infused by the Divine Tree's spirit to preserve warmth within her as she absorbs the storm."
            ],
            [
                '',
                '',
                ""
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
    {
        name: "Grok the Champion",
        title: 'The Ancient Asura',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Blood Energy"],
            ["1000","475","585", "750", "120", "75", "110", "80", "999"]
        ],
        afinity: [
            ["Fire", "Earth"],
            [<>+10% <span className='font-extralight italic'>in fire damage</span></>, <>+30% <span className='font-extralight italic'>tenacity</span></>],
            ["text-red-400", "text-stone-400"]
        ],
        characImg: '/images/characters/asuragiant.png',
        aboutInfo: 
            <>
                In the age when gods still roamed the earth, their power could crumble mountains and flood kingdoms with a flick. To tame their bloodlust and spare the world from ruin, they created the Divine Arena, a colossal battleground where gods and demigods clashed for honor, thrill, and spectacle. Among these celestial warriors rose an unlikely terror: Grok.
                <br /><br />
                Born in the Abyss Hell, a cursed island scabbed over with brimstone and shadow, Grok mined adamantine from birth, barehanded, broken, and brutalized. His body became stone, his soul forged in agony. A wandering god, amused by Grok&#39;s raw might, tore him from the mines and hurled him into the arena, where the crowds cheered as gods tore each other apart. For Grok, it was no freedom, only a worse prison. But battle after battle, Grok endured, evolved, and thrived in the slaughter.
                <br /><br />
                His only solace was his master, a fellow warrior and once-proud contender who taught him to channel wrath with purpose. But fate was cruel. In the final match of his first championship, Grok was pitted against his master. Their clash shook the heavens, and in the final breath, his master begged Grok to kill him, not as a slave, but as a warrior. Grok obeyed… and was never the same.
                <br/><br/>
                Crowned champion, Grok became a beast unbound. His hunger for combat twisted into madness, his hands forever reaching for blood. When no challenger could satisfy his rage, he turned on gods and spectators alike. Fearing his wrath, the gods called upon the Golden Buddha, who sealed Grok beneath Mount Likiamundo, entombed in a prison of divine silence.
                <br/><br/>
                But silence does not last forever. When the mountain erupted, rivers of magma licked at the ancient seal. Cracks formed. Heat surged. And in a roar that split the sky, Grok returned, flesh charred, eyes burning, and blade thirsty, to drown the world once more in chaos and forgotten fury.
            </>,
        clothing: [
            [
                '/images/items/asura/demon-ban-sword.png', 
                'Grievance',
                "Forged from the spine of a demon lord Grok decapitated with his bare hands, Grievance is a massive, jagged greatsword soaked in the screams of the slain."
            ], 
            [
                '/images/items/asura/belt.png',
                'The Wyrmbind',
                "Around his waist coils the hide of the last Sky Tyrant, a dragon whose flames once blackened constellations. Grok slew it during a punishment match designed to break him, instead, he strangled the beast with its own tail."
            ],
            [
                '/images/items/asura/asura-brace.png',
                'Vowshards',
                "These cracked gauntlets of volcanic obsidian once belonged to a guardian titan who vowed never to fall, until Grok shattered that vow along with the titan's spine."
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
    {
        name: "Master Salazar",
        title: 'The Last Shaman',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Dark Mana Energy"],
            ["220","150","200","140", "100", "120", "260", "180", "330"]
        ],
        afinity: [
            ["Curse", "Yin"],
            [<>+15% <span className='font-extralight italic'> to curse abilities</span></>, <>+20% <span className='font-extralight italic'>AOE and spellcasting</span></>],
            ["text-purple-600", "text-slate-400"]
        ],
        characImg: '/images/characters/lizardshaman-bg.png',
        aboutInfo: 
            <>
                Before he was Master Salazar, he was merely Orrin, a nameless guard in a crumbling city at the world&#39;s edge. His life was mundane, patrolling alleys, chasing petty thieves. But fate twisted the moment he pursued a grave robber deep into the catacombs beneath the old temple ruins. There, hidden beneath a cracked tombstone, he found a book bound in stitched hide, its pages breathing with dust and secrets long buried. It spoke of curses, spiritmancy, and breathing rituals that could awaken the soul&#39;s fire. Curious and tired of insignificance, Orrin tried it. And it worked.
                <br /><br />
                Power surged through his bones like wildfire. His senses sharpened. His shadow lengthened. He could hear the voices of the dead. At first, he used his new gift in secret, drawing the souls of condemned prisoners, those guilty of murder and treason, thinking himself righteous. Each death felt... justified. Even heroic. But soon, his hands trembled not from fear, but from hunger. The soul&#39;s taste was intoxicating. And as he fed, his body began to change: green scales slowly devoured his skin, his eyes turned glassy and cold, and whispers followed him like a second heartbeat.
                <br /><br />
                Consumed by craving, he fled the city under moonless skies, seeking the ruins of the old shamanic temples, long forbidden and cursed. The shamans had once ruled nations before they were erased for their experiments with soul alchemy, a sin so vile, even the gods turned away. But Salazar was undeterred. He raided shrines, drank the ashes of old relics, and devoured souls by the thousands, their memories howling within his growing spirit.
                <br/><br/>
                Now, they speak his name with dread: Master Salazar, the Last Shaman. Not a prophet. Not a healer. But a devourer of souls, wrapped in tattered robes and scales, his breath thick with forgotten curses. And somewhere, in the echoing dark, he still seeks more, more power, more relics, more spirits to silence, until the world itself bends, or breaks.
            </>,
        clothing: [
            [
                '/images/items/shaman/staff.png', 
                'Verdict of Hollow Moons',
                "Salazar's staff was carved from the blackwood of an extinct soul tree, once sacred, now hollow from decay. At its crown floats a green orb, not fixed but hovering, pulsing faintly with the torment of trapped spirits."
            ], 
            [
                '/images/items/shaman/tattered-robe.png',
                'Ashen Coil',
                'His robe, known as the Ashen Coil, hangs like burnt parchment, fraying with every gust of wind. It was desecrated when Salazar tore it from a soul-touched corpse and infused it with the ashes of a thousand lost spirits.'
            ],
            [
                '/images/items/shaman/eye-of-all-poison.png',
                'Echo of Delirium',
                "It is not just a relic, but a parasite, a shard from the shattered crown of an ancient spirit lord that Salazar defeated during a soul duel."
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
    {
        name: "Zhang Yuxuan",
        title: 'The Great Scholar',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Qi Energy"],
            ["180","120","110","165", "100", "430", "650", "180", "460"]
        ],
        afinity: [
            ["Time", "Void"],
            [<>+25% <span className='font-extralight italic'> doublecasting chance</span></>, <>+10% <span className='font-extralight italic'> slow to enemies</span></>],
            ["text-green-500", "text-fuchsia-500"]
        ],
        characImg: '/images/characters/greatscholar.png',
        aboutInfo: 
            <>
                High atop the cliffs of Mount Yunlai, where no road dares reach and the wind speaks in forgotten tongues, stood a dome, ancient, crystalline, and eternally glowing with starlight. Within it dwelled a man few had seen, but all revered: Zhang Yuxuan, the Grand Advisor of Emperor Li Yuan. While emperors changed, wars raged, and dynasties fell, Zhang remained, untouched by time, buried in books that murmured with age. They called him the Library Hermit, the Seer of Ten Thousand Truths, the Burdened Star.
                <br /><br />
                His dome was no mere library, it was a cathedral of knowledge, lined with scrolls written by dying prophets, tomes sealed in dragon bone, and constellatory charts drawn with celestial ink. He rarely left it. He did not dine with nobles or walk among common folk. The world came to him, messengers trembling with questions, rulers with secrets, priests with riddles, all seeking answers only Zhang could read in the stars, cards, and whispers from the veiled future. Even Emperor Li Yuan, sovereign of the greatest empire under heaven, dared not summon him without offering incense and silence.
                <br /><br />
                But the stars had grown restless.
                <br /><br />
                Night after night, Zhang Yuxuan stood alone beneath the dome&apos;s open eye, staring at a sky he no longer understood. The constellations shifted, rearranging themselves in ways forbidden by the old celestial orders. The Prophecy of Ash, buried in seven locked volumes, had begun to unfold in reverse. The Cards of Falling Dust, when drawn, repeated only one symbol: calamity. And in every vision, one truth loomed, the world was breaking, and only he knew how soon.
                <br/><br/>
                The weight was unbearable.
                <br/><br/>
                He had seen a thousand paths, and each one ended in fire, plague, or silence. The knowledge that once fed his brilliance now poisoned his peace. He spoke to no one, wrote no letters, and ignored the Emperor&apos;s pleas for counsel. Within the dome, he tore through scroll after scroll, tracing old myths, forgotten names, and cosmic alignments. His hair turned white, his voice cracked from silence, and his eyes, once sharp and calm — now flickered with dread.
                <br/><br/>
                &quot;Why grant me knowledge,&quot; he once whispered to a godless sky, &quot;if none will listen in time?&quot;
                <br/><br/>
                And yet, even in despair, Zhang Yuxuan would not rest. Beneath flickering candlelight, he penned warnings to the future in invisible ink, locked predictions inside puzzle-boxes, and sealed his soul into the final book, a tome that no one can open without first solving the riddle of the stars. For he knew he would not live to see salvation, only plant its seed.
                <br/><br/>
                Above, the stars shift still, not in chaos, but in design.
                <br/><br/>
                Waiting for someone worthy to read them again.
            </>,
        clothing: [
            [
                '/images/items/scholar/tome.png', 
                'The Book That Wrote Itself',
                "Bound in bark from the world tree and stitched with sinew of forgotten beasts, Zhang's Prophecy Tome was not a book he wrote, but one that wrote through him."
            ], 
            [
                '/images/items/scholar/robe.png',
                "Heaven's Drift",
                "Allows Zhang to float inches above the ground, not to show grandeur, but because the earth itself had grown too heavy for him to bear."
            ],
            [
                '/images/items/scholar/eye-glasses.png',
                "Eyes of the Endless Sky",
                "Forged from the lenses of a fallen star and framed in silver drawn from the moon's shadow, Zhang Yuxuan's glasses were a gift from the celestial spirits he once communed with in his youth."
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
    {
        name: "Baron Pumpkin",
        title: 'The Wicked',
        stats: [ 
            ["Life Force", "Power", "Tenacity", "Endurance", "Agility", "Accuracy", "Intelligence", "Luck", "Soul Energy"],
            ["220","260","340","115", "350", "170", "290", "430", "600"]
        ],
        afinity: [
            ["Curse", "Chaos"],
            [<>+15% <span className='font-extralight italic'> on curse abilities</span></>, <>+15% <span className='font-extralight italic'> AOE and spellcasting</span></>],
            ["text-purple-500", "text-amber-600"]
        ],
        characImg: '/images/characters/pumpkinhead.png',
        aboutInfo: 
            <>
                Long ago, in the twilight years of the fallen kingdom of Zeitir, the name Javan Walters lit every ballroom and corridor like a morning sun. Born into nobility and grace, he was a boy of angelic beauty and golden charm, the pride of the once-revered House Walters. Though young, he carried the dignity of kings and the kindness of poets. Magic came to him like breath, and even the Grandmaster Wizard Halbrecht took him as a personal apprentice, declaring Javan a prodigy unlike any before.
                <br /><br />
                At the Festival of Luminous Eclipses, a ceremonial ball was held in the royal palace, laughter echoing, chandeliers swaying, and noble gowns blooming like flowers. At the center of the great hall, Javan sat by the grand piano, weaving joy from keys of ivory, his fingers dancing as if the stars whispered through them. Yet beneath the elegance, whispers began to stir: the Duke Monsen&apos;s daughter, heir to one of the most powerful houses, was to be wed to Javan. The crowd murmured in awe. But in the shadows, someone watched with clenched fists.
                <br /><br />
                Prince Sanders, a creature of pride and poisonous envy, had long obsessed over the Duke&apos;s daughter. He had danced, painted, and flattered to no avail. And now, the boy who did nothing but smile and play music would have her? No. That night, he summoned his men, men who knew how to make pain eternal. He didn&apos;t want Javan dead. He wanted his beauty gone, forever.
                <br /><br />
                As the last guests departed and the lights dimmed, corroding poison, a vile concoction forged by curse and acid, was thrown upon Javan&apos;s face. His screams echoed once, then silence. Skin melted. Eyes clouded. Ears bled. Tongue swelled and shriveled. He lived, but his radiance was gone. Not even sacred blessings could restore him. His face, once adored by all, now inspired only horror. Even his parents, once beaming with pride, turned away from him in shame.
                <br/><br/>
                From that night on, Javan never spoke again.
                <br/><br/>
                Whispers crept through the castle of Baron Walters. Maids complained of a child&apos;s voice muttering incomprehensible curses behind walls. Candles flickered in rooms long sealed. Then the disappearances began. A servant girl was found boiled alive in the cauldron, her hands still clutching her apron. Guards went mad overnight, drawing circles with strange runes on the stone floor. Something was growing, feeding, in the basement.
                <br/><br/>
                When the kingdom of Zeitir eventually fell, none returned for Javan. None searched the haunted house of the Walters, nor the lands that died around it. The forest retreated. Flowers wilted. And over time, legends spread of a figure with a twisted, grinning pumpkin head, lurking by the cracked windows of the abandoned manor, its carved eyes glowing faint green, its voice still whispering, lost in a cursed loop of childhood pain.
                <br/><br/>
                And if you listen closely at night, near the ruins, you might hear a piano playing, soft, sorrowful, broken, as if it remembers a time when joy was real.
            </>,
        clothing: [
            [
                '/images/items/pumpkin/cane.png', 
                'Grinspire',
                "Once a symbol of grace, Grinspire was a cane carved from the rib of a direstag slain during Javan's first magical hunt. Inlaid with a silver handle, it once tapped softly through grand halls, a quiet rhythm of nobility."
            ], 
            [
                '/images/items/pumpkin/noble-outfit.png',
                'Vestments of Hollow Grace',
                "Tailored by royal artisans and blessed in silk woven from dawnmoths, Javan's noble suit was once the envy of court."
            ],
            [
                '/images/items/pumpkin/gloves.png',
                "Weeperskin",
                "The gloves, black as the void between stars, were sewn from demonhide and fastened with threads pulled from tortured spirits."
            ]
        ],
        tendency: [
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
            {
                trait: '',
                desc: ''
            },
        ],
        inclination: ''
    },
]

interface CharacterHolderProps {
    charac: number;
}

const CharacterHolder:React.FC<CharacterHolderProps> = ({ charac }) => {
  const [infoBtn, setInfoBtn] = useState("info");
  const [audioMuted, isAudioMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, isPlaying] = useState(false);

  const toggleInfoBtn = (tag: string) => {
    setInfoBtn(tag);
  }

    useEffect(() => {
        const audio = document.getElementById('voiceOver') as HTMLAudioElement | null;
        const container = containerRef.current;

        if (!audio || !container) return;

        const handleEnded = () => {
            setTimeout(() => {
            audio.play().catch((err) => {
                console.warn('Replay failed:', err);
            });
            }, 3000);
        };

        audio.addEventListener('ended', handleEnded);

        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                audio.play().catch((err) => {
                console.warn('Audio play blocked:', err);
                });
            }
            },
            { threshold: 1 }
        );

        observer.observe(container);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            observer.unobserve(container);
        };
    }, []);


  const toggleMute = () => {
    const aud = audioRef.current;
    if (!aud) return;
    if (!playing) {
        aud.play();
        isPlaying(true);
    } 
    isAudioMuted(!audioMuted);
    aud.muted = audioMuted;
    if (audioMuted) {
        document.getElementById('noticeText')?.classList.add('show-notice');
    } else {
        document.getElementById('noticeText')?.classList.remove('show-notice');
    }
  };

  return (
    <AnimatePresence>
        <audio ref={audioRef} key={charac} id='voiceOver'>
          <source src={`/voice-overs/voiceover-${charac+1}.mp3`} type="audio/mpeg"  />
        </audio>
        <div ref={containerRef} className='h-[105%] md:h-full w-full grid grid-cols-5 relative px-3 md:px-17 font-manrope'>
            <div className='col-span-2 md:col-span-1 h-full flex flex-col z-50 relative'>
                <div className='h-auto w-[200%] md:w-[140%] absolute overflow-hidden top-20 md:top-0 md:left-full flex items-center rounded-full'>
                    <button className='text-xl md:text-lg p-1.5 w-max top-3 rounded-full px-1.5 cursor-pointer z-50 text-white/30 hover:text-white/50 focus:text-white ease-in-out duration-150 ' onClick={toggleMute}>
                        { audioMuted ? <RiVolumeUpLine className='text-white'/> : <RiVolumeMuteLine />}
                    </button>
                    <motion.span
                        id='noticeText'
                        initial={{ x: -999 }}
                        className='text-sm absolute pl-10 py-1.5 pr-3 z-30 text-nowrap rounded-full bg-black/50'>Unmute audio for more immersive experience.
                    </motion.span>
                </div>

                <motion.h2 
                    initial={{ filter: 'blur(10px)', opacity: 0 }} 
                    animate={{ filter: 'blur(0px)', opacity: 1 }}
                    exit={{ filter: 'blur(10px)', opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='font-protest-guerrilla text-5xl text-nowrap md:text-wrap'>{characterInfo[charac].name}
                </motion.h2>
                <motion.h3 
                    initial={{ x: -999, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -999, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
                    className='font-manrope text-sm md:text-lg font-extralight border-t border-white/20 w-full md:w-7/10 mt-2 mb-10 md:mb-5 text-nowrap md:text-wrap'>{characterInfo[charac].title}
                </motion.h3>
                <span className='col-span-full flex gap-1 items-center text-sm md:text-base pl-2 md:pl-0'><GiStarShuriken className='text-sm md:text-base'/>Base Stats</span>
                <div className='w-full flex flex-col pl-5 pr-0 md:px-2 text-xs md:text-sm'>
                    {Array.from({ length: 9 }).map((_, i) => (
                        <Stat key={`stat-${i}`} type={characterInfo[charac].stats[0][i]} amount={characterInfo[charac].stats[1][i]} delay={i/20} />
                    ))}
                </div>
                <span className='mt-2 col-span-full flex gap-1 items-center text-sm md:text-base pl-2 md:pl-0'><GiStarShuriken className='text-sm md:text-base'/>Affinity</span>
                <div className='w-full flex flex-col px-5 md:px-2'>
                    <motion.p 
                    initial={{ x: -999, filter: 'blur(20px)' }} 
                    animate={{ x: 0, filter: 'blur(0px)' }}
                    exit={{ x: 999, filter: 'blur(20px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.5 }}
                    className={`w-full text-xs md:text-sm flex gap-5 md:gap-0 justify-between px-3 py-0.5 ${characterInfo[charac].afinity[2][0]}`}>
                        <span className='font-extralight'>{characterInfo[charac].afinity[0][0]}</span>
                        <span className='font-medium text-right text-nowrap'>{characterInfo[charac].afinity[1][0]}</span>
                    </motion.p>
                    <motion.p
                    initial={{ x: -999, filter: 'blur(20px)' }} 
                    animate={{ x: 0, filter: 'blur(0px)' }}
                    exit={{ x: 999, filter: 'blur(20px)' }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.55 }}
                    className={`w-full text-xs md:text-sm flex gap-5 md:gap-0 justify-between px-3 py-0.5 ${characterInfo[charac].afinity[2][1]}`}>
                        <span className='font-extralight'>{characterInfo[charac].afinity[0][1]}</span>
                        <span className='font-medium text-right text-nowrap'>{characterInfo[charac].afinity[1][1]}</span>
                    </motion.p>
                </div>
            </div>
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0 }} 
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              exit={{ filter: 'blur(10px)', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='col-span-3 md:col-span-2 h-full flex flex-col z-30 relative items-center justify-center mt-10 md:mt-0'>
                <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                        duration: 5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                    className='h-5/6 w-full flex relative scale-120 md:scale-100 mr-10 md:mr-0'
                >
                <Image priority src={characterInfo[charac].characImg} alt='bg' height={1000} width={1000} className='h-full w-full object-contain object-center scale-150 absolute top-1/4 for-img'/>
                </motion.div>
            </motion.div>
            <div className='col-span-full  md:pb-0 md:col-span-2 h-full grid grid-rows-12 gap-3 overflow-hidden z-50'>
                <div className='row-span-9 md:row-span-10 w-full gap-1 flex flex-col items-end md:items-start md:flex-row-reverse overflow-x-hidden relative'>
                    <div className='h-max w-max md:w-1/10 mr-20 md:mr-0 backdrop-blur-sm bg-rock/50 border border-white/10 rounded-2xl shadow-xl flex md:flex-col'>
                        <button className='text-2xl p-2 md:py-3 flex items-center justify-center cursor-pointer hover:bg-white/20 rounded-2xl ease-in-out duration-200 text-white/40 hover:text-white/70 focus:bg-white/40 focus:text-white' onClick={() => toggleInfoBtn("info")}><RiUserSmileFill /></button>
                        <button className='text-2xl p-2 px-3 md:px-0 md:py-3 flex items-center justify-center cursor-pointer hover:bg-white/20 rounded-2xl ease-in-out duration-200 text-white/40 hover:text-white/70 focus:bg-white/40 focus:text-white' onClick={() => toggleInfoBtn("items")}><RiTShirt2Fill /></button>
                        <button className='text-2xl p-2 py-3 hidden items-center justify-center cursor-pointer hover:bg-white/20 rounded-2xl ease-in-out duration-200 text-white/40 hover:text-white/70 focus:bg-white/40 focus:text-white'><RiScales3Fill /></button>
                    </div>
                    <div className='h-full w-full backdrop-blur-sm bg-rock/50 border border-white/10 rounded-2xl shadow-xl px-3 py-2 font-extralight text-white/70 tracking-wide overflow-hidden relative flex flex-col before:h-1/4 before:w-full before:absolute before:bottom-0 before:left-0 before:rounded-b-2xl before:bg-gradient-to-t before:from-rock before:to-transparent before:z-60'>
                        { infoBtn === "info" && (
                            <Info context={characterInfo[charac].aboutInfo} />
                        )}
                        { infoBtn === "items" && (
                            <Equipment 
                                weapon={{
                                    weaponImg: characterInfo[charac].clothing[0][0],
                                    weaponName: characterInfo[charac].clothing[0][1],
                                    weaponDesc: characterInfo[charac].clothing[0][2]
                                }} 
                                armor={{
                                    armorImg: characterInfo[charac].clothing[1][0],
                                    armorName: characterInfo[charac].clothing[1][1],
                                    armorDesc: characterInfo[charac].clothing[1][2]
                                }} 
                                acc={{
                                    accImg: characterInfo[charac].clothing[2][0],
                                    accName: characterInfo[charac].clothing[2][1],
                                    accDesc: characterInfo[charac].clothing[2][2]
                                }} 
                            />
                        )}
                    </div>
                </div>
                <div className='row-span-2 w-full grid grid-cols-2 gap-2 px-1 relative'>
                    <span className='col-span-full text-white/70'>You can get this character using</span>
                    <a href='#patron' className={`col-span-1 px-3 py-2.5 h-min flex items-center rounded-md gap-2 border-2 cursor-pointer group ${ charac === 0 || charac === 1 || charac === 3 ? 'bg-gradient-to-tr from-rock via-rock to-volcano border-volcano hover:from-black/90 hover:via-black/90 hover:to-rose-600 focus:from-black focus:via-black focus:to-rose-700 focus:border-rose-700 group shadow-sm shadow-white/10 ease-in-out duration-200' : 'bg-gradient-to-tr from-emerald-500 via-emerald-700 to-fog border-amber-200 hover:from-emerald-600 hover:via-emerald-800 hover:to-fog focus:from-emerald-700 focus:via-emerald-900 focus:to-fog focus:border-amber-300 group shadow-sm shadow-white/10 ease-in-out duration-200'}`}>
                        { charac === 0 || charac === 1 || charac === 3 ? (
                            <MdMoneyOff className='text-2xl text-white/70 group-focus:text-white ease-in-out duration-200'/>
                        ) : (<GiCutDiamond className='text-2xl text-amber-200 group-focus:text-amber-300 ease-in-out duration-200'/>)} 

                        <span className={`font-bold mr-1 ${charac === 0 || charac === 1 || charac === 3 ? 'text-white/70 group-focus:text-white' : 'text-amber-200 group-focus:text-amber-300'} ease-in-out duration-200`}>{ charac === 0 || charac === 1 || charac === 3 ? 'Free' : 'Premium'}</span> Patron
                    </a>

                    <a href={`${charac === 0 || charac === 1 || charac === 3 ? '#register' : '#patron'}`} className={`col-span-1 px-3 py-2.5 h-min rounded-md flex items-center border-2 ${charac === 0 || charac === 1 || charac === 3 ? 'border-white/50 text-white/70 hover:border-fuchsia-500 hover:text-fuchsia-300 focus:border-fuchsia-600 focus:text-fuchsia-400 focus:bg-white' : 'bg-gradient-to-tr from-amber-400 to-amber-800 border-volcano hover:from-amber-300 hover:to-amber-700 focus:from-amber-300 focus:to-amber-600 focus:border-rose-600'} gap-2 cursor-pointer font-semibold tracking-wide group shadow-sm shadow-white/10 ease-in-out duration-200`}>
                        { charac === 0 || charac === 1 || charac === 3 ? (
                            <IoTicket className='text-white/70 text-2xl group-hover:text-fuchsia-300 group-focus:text-fuchsia-400 ease-in-out duration-200'/>
                        ) : (<GiQueenCrown className='text-2xl text-volcano group-focus:text-rose-600 ease-in-out duration-200'/>)} 
                       
                        {charac === 0 || charac === 1 || charac === 3 ? 'Early Registration' : (<span className='font-normal'><span className='font-extrabold mr-1 text-volcano group-focus:text-rose-600 ease-in-out duration-200'>Royalty</span> Patron</span>)}
                        
                    </a>
                </div>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default CharacterHolder
