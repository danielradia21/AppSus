const IMG_URL= 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'

const VIDEO_URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export const mails =[
   {
    id: "e101",
    title: "YOU ARE AMAZING!",
    info: {
      txt: "Fullstack Me Baby!",
      imgUrl: IMG_URL,
      vidUrl: VIDEO_URL,
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "you@are.amazaing.com",
    status: "inbox || sent || trash || draft",
   },
   {
    id: "e102",
    title: "I know you didnt kill her",
    info: {
      txt: "I heard about your wife and I believe you ddint kill her, there is no way you killed her in vegas while you were with me in new york that same day, hope you will feel better",
      
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "momo@momo.com",
    status: "inbox || sent || trash || draft",
  },
   {
    id: "e103",
    title: "RE:HITMAN PAYMENT",
    info: {
      txt: "So I know she is late with the payment just please dont kill her!",
      imgUrl: IMG_URL,
      
      lables: ["important", "romantic"],
    },
    isRead: true,
    isStared: false,
    sentAt: 1551133930594,
    to: "agent47@hitmans.com",
    status: "inbox || sent || trash || draft",
  },
  {
    id: "e104",
    title: "My married lover is cheating on me?",
    info: {
      txt: "I'm pretty sure my married lover is cheating on me on someone expect her husband... can you check up on her?",
      
      vidUrl: VIDEO_URL,
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "detective@realationships.com",
    status: "inbox || sent || trash || draft",
  },
  {
    id: "e105",
    title: "I'm not crazy",
    info: {
      txt: "I AM INSANE!!!",
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "me@you.com",
    status: "inbox || sent || trash || draft",
  },
  {
    id: "e106",
    title: "just joking",
    info: {
      txt: "Everything above is a lie! ",
      
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "you@me.com",
    status: "inbox || sent || trash || draft",
  },
  {
    id: "e107",
    title: "Or is it??",
    info: {
      txt: "If you read everything in your email , you realize you hacked into an insane person's email , just watch out from having leaving own \'Foot Prints\' . Here is a cute picture ",
      imgUrl: IMG_URL,
      vidUrl: VIDEO_URL,
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "idk@isitrue.com",
    status: "inbox || sent || trash || draft",
  },
  {
    id: "testdummy",
    title: "I am a test dummy! IM SUPPOSED TO BE BROKEN",
    info: {
      txt: "Fullstack Me Baby!",
      imgUrl: "http://some-img/me",
      vidUrl: "http://some-vid/me",
      lables: ["important", "romantic"],
    },
    isRead: false,
    isStared: false,
    sentAt: 1551133930594,
    to: "test@test.com",
    status: "inbox || sent || trash || draft",
  }
  

 

]

