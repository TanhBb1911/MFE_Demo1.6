import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                        src="/phone.png"
                        alt="phone"
                        width={440}
                        height={1000}
                        className="feature-phone"
                    />
                </div>
            </div>
        </section>
    )
}



export default Features