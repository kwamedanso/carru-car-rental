import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';

const footer = [
    {
        title: 'Carru',
        description: 'Our vision is to provide convenience and help increase your sales business.',
        links: [
            { label: <RiFacebookFill />, path: 'https://facebbook.com' },
            { label: <RiTwitterFill />, path: 'https://twitter.com' },
            { label: <ImInstagram />, path: 'https://instagram.com' }
        ]
    },
    {
        title: 'About',
        links: [
            { label: 'How it works', path: '#home' },
            { label: 'Featured', path: '#home' },
            { label: 'Partnership', path: '#home' },
            { label: 'Business Relation', path: '#home' }
        ]
    },
    {
        title: 'Community',
        links: [
            { label: 'Events', path: '#home' },
            { label: 'Blog', path: '#home' },
            { label: 'Podcast', path: '#home' },
            { label: 'Invite a frient', path: '#home' }
        ]
    },
    {
        title: 'Socials',
        links: [
            { label: 'Discord', path: '#home' },
            { label: 'Instagram', path: '#home' },
            { label: 'Twitter', path: '#home' },
            { label: 'Facebook', path: '#home' }
        ]
    }
]

export { footer };