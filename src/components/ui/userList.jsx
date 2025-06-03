import Image from 'next/image'
import React from 'react'

const UserList = ({ userList }) => {
    return (
        <div className='flex items-center'>
            {
                userList.map(({ id, src }) => {
                    return (
                        <div key={id} className='max-w-11 max-h-11 -ml-2.5 first:-ml-0'>
                            <Image src={src} alt='use-image' width={40} height={40} className='rounded-full border-2 border-background w-full h-full' />
                        </div>
                    )
                })
            }
            <div className='rounded-full bg-primary w-11 h-11 -ml-2.5 first:-ml-0 flex justify-center items-center border-2 border-background'>
                <span className='text-secondary-foreground dark:text-muted-foreground font-semibold text-base'>7K+</span>
            </div>
        </div>
    )
}

export default UserList