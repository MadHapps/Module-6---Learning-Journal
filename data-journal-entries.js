// import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

export const journalEntries = [
    {
        img: 'http://unsplash.it/1920/1080/?0',
        date: '1-22-24',
        title: 'Post ONE',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?1',
        date: '1-22-24',
        title: 'Post TWO',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?2',
        date: '1-22-24',
        title: 'Post THREE',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?3',
        date: '1-22-24',
        title: 'Post FOUR',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?4',
        date: '1-22-24',
        title: 'Post FIVE',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?5',
        date: '1-22-24',
        title: 'Post SIX',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
    {
        img: 'http://unsplash.it/1920/1080/?6',
        date: '1-22-24',
        title: 'Post SEVEN',
        summary: 'Id quis culpa reprehenderit voluptate ipsum fugiat aute fugiat mollit est non tempor proident consectetur.',
        content: '',
        id: ''
    },
]

journalEntries.forEach((entry, index) => {
    entry.id = index
    console.log(`${entry.title} ID: ${entry.id}`)
})