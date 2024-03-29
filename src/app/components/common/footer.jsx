import React from 'react'
import FooterLinks from '../footer/footerLinks'
import { FaXTwitter, FaInstagram, FaFacebookF, FaRegCopyright } from "react-icons/fa6";
import Link from 'next/link'
const footerLinks = [
    {
        title: 'Company',
        links: [
            {
                title: 'About Us',
                link: '#'
            },
            {
                title: 'Careers',
                link: '#'
            },
            {
                title: 'Blog',
                link: '#'
            },
        ]
    }
]
const Footer = () => {

    const socialLinks = [
        {
            link: '#',
            icon: <FaFacebookF />
        },
        {
            link: '#',
            icon: <FaXTwitter />
        },
        {
            link: '#',
            icon: <FaInstagram />
        },
    ]

    const socialLinksList = socialLinks.map((item, index) => {
        return (
            <div key={index} className='p-2 rounded-full bg-btgreen text-white hover:opacity-80 cursor-pointer'>
                {item.icon}
            </div>
        )
    }
    )

    return (
        <footer className=' py-10 w-full'>
            <div className='2xl:max-w-[1400px] mx-auto px-10 lg:px-36'>
                <div className='md:flex items-start justify-between w-full gap-10'>
                    <div className='flex flex-col items-start space-y-10 w-full md:w-2/4'>
                        <div className='text-xl font-extrabold text-btgreen'>
                            Snip Task
                        </div>
                        <div className='text-sm text-bgdark-grey'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi molestiae consectetur numquam. Quas perspiciatis adipisci quod blanditiis earum perferendis ratione quaerat, quidem vitae nesciunt quam vero quo aperiam esse.
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between py-16 md:py-0'>
                        <div>
                            <FooterLinks title={footerLinks[0].title} links={footerLinks[0].links} />
                        </div>
                        <div>
                            <FooterLinks title={footerLinks[0].title} links={footerLinks[0].links} />
                        </div>
                        <div>
                            <FooterLinks title={footerLinks[0].title} links={footerLinks[0].links} />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div className='text-lg font-bold whitespace-nowrap'>
                            Follow Us
                        </div>
                        <div className='flex items-center gap-4'>
                            {socialLinksList}
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='my-5 border' />
                </div>
                <div className='flex justify-between text-xs text-bgdark-grey'>
                    <div className='flex gap-1 items-center'>
                        Copyright<FaRegCopyright />{new Date().getFullYear()}
                    </div>
                    <div className='hover:text-btpurple hover:underline'>
                        <Link href={"/"}>Terms & Conditions</Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer