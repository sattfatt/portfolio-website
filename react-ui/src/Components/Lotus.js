function Lotus() {
    return (
        <svg className='lotus' width="38" height="33" viewBox="0 0 38 33" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M4 4.93603L15.9158 9.04002L18.9799 25L7.06407 20.896L4 4.93603Z" fill="#63D0FF"/>
                <path d="M34 4.93604L30.9359 20.896L19.0201 25L22.0842 9.04003L34 4.93604Z" fill="#63D0FF"/>
            </g>
            <g filter="url(#filter1_d)">
                <path d="M18.9275 0L25.1866 12.4782L18.9275 24.9564L12.6683 12.4782L18.9275 0Z" fill="#63D0FF"/>
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="4.93603" width="38" height="28.064" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <filter id="filter1_d" x="8.66833" y="0" width="20.5183" height="32.9564" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default Lotus

