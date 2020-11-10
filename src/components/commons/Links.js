import React  from 'react'
import { Facebook, Instagram, Medium, SquareSpace, LinkedIn } from "../ui/ui"

export const Routes = [
    {
        name : 'Home',
        link : '/'
    },
    {
        name  : 'Leaderboard',
        link : '/leaderboard'
    },
    {
        name : 'Workout',
        link : '/workout'
    },
    {
        name : 'Challenge',
        link : '/link'
    },
    {
        name : 'FAQ',
        link : 'faq'
    }
]

export const SocialLinks = [
        {
            key : 'Facebook',
            href : '#',
            Icon : Facebook,
            
        },
        {
            key  : 'Instagram',
            href : '#',
            Icon : Instagram,
            
        },
        {
            key : 'LinkedIn',
            href : '#',
            Icon : LinkedIn,
            
        },
        {
            key : 'Medium',
            href : '#',
            Icon : Medium,
            
        },
        {
            key : 'SquareSpace',
            href : '#',
            Icon : SquareSpace,
            
        }
]