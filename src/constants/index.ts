import facebookIcon from '@/public/assets/facebookIcon.svg'
import googleIcon from '@/public/assets/googleIcon.svg'
import instagramIcon from '@/public/assets/instagramIcon.svg'

// Quality icons
import overjoyed from '@/public/assets/overjoyed.svg';
import happy from '@/public/assets/happy.svg';
import nuetral from '@/public/assets/neutral.svg';
import sad from '@/public/assets/sad.svg';
import depressed from '@/public/assets/depressed.svg';

// medication icons
import drugContainer from '@/public/assets/drugContainer.svg';
import drugStore from '@/public/assets/drugStore.svg';
import cancel from '@/public/assets/x.svg';
import pillRound from '@/public/assets/pillRound.svg';

export const socailIcons = [
    {
        src: facebookIcon,
        alt: 'facebook'
    },
    {
        src: googleIcon,
        alt: 'google'
    },
    {
        src: instagramIcon,
        alt: 'instagram'
    },
]


// Sleep Qualities

export const sleepQualities = [
    {
        quality: 'Excellent',
        duration: '7-9 HOURS',
        icon: overjoyed
    },
    {
        quality: 'Good',
        duration: '6-7 HOURS',
        icon: happy
    },
    {
        quality: 'Fair',
        duration: '5 HOURS',
        icon: nuetral
    },
    {
        quality: 'Poor',
        duration: '3-4 HOURS',
        icon: sad
    },
    {
        quality: 'Worst',
        duration: '<3 HOURS',
        icon: depressed
    }
]

// Medications
export const medications = [
    {
        icon: drugContainer,
        text: 'Prescribed Medications'
    },
    {
        icon: drugStore,
        text: 'Pharmacist'
    },
    {
        icon: pillRound,
        text: 'I\'m not taking any'
    },
    {
        icon: cancel,
        text: 'Prefer not to say'
    },
];


export const moodScore = [
    {
        mode: 'good',
        height: '60'
    },
    {
        mode: 'good',
        height: '40'
    },
    {
        mode: 'good',
        height: '20'
    },
    {
        mode: 'good',
        height: '90'
    },
    {
        mode: 'bad',
        height: '50'
    },
    {
        mode: 'good',
        height: '60'
    },
    {
        mode: 'good',
        height: '60'
    },
    {
        mode: 'bad',
        height: '80'
    },
    {
        mode: 'good',
        height: '20'
    },
    {
        mode: 'good',
        height: '40'
    },
    {
        mode: 'bad',
        height: '10'
    },
    {
        mode: 'good',
        height: '100'
    },
    {
        mode: 'good',
        height: '60'
    },
    {
        mode: 'bad',
        height: '50'
    },
    {
        mode: 'good',
        height: '60'
    },
]