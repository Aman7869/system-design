import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'

const CHAT_MESSAGE_LIMIT = 10;

const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

var finalName = ""

function generateRandomNames() {
   var finalName = nameList[Math.floor( Math.random() * nameList.length )];
   return finalName;
};

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const fetchData = () => {
        const data = [
            {
                id: 1,
                name: generateRandomNames(),
                photo: "data:image/png;base64,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",
                message: "This is the comment"
            },
        ]

        setMessages((message) => {
            let newMessageList = [...data, ...message];
            newMessageList = newMessageList.splice(0,CHAT_MESSAGE_LIMIT);
            return newMessageList;
        });
    }

    useEffect(() => {
        const intervalId = setInterval(fetchData, 1000)
        return ()=> {
            clearInterval(intervalId);
        }
    }, [])
    return (
        <div className='flex w-full h-[400px] border border-black m-5 overflow-y-scroll flex-col-reverse'>
            {messages?.map((message, index) => <ChatMessage key={index} {...message} />)}
        </div>
    )
}

export default ChatWindow