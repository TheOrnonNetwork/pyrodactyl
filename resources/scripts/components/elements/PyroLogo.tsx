// million-ignore
//
// Ornon (The Ornon Network) logo — the isometric "TON" cube mark.
// Vector, inlined from the brand asset (logo-newcolors.svg). Square viewBox with
// default preserveAspectRatio keeps the mark undistorted and centered in the
// wide sidebar/login slots. Colors are the fixed brand marks (rust T, green O,
// teal N) and are independent of the UI accent palette.
const Logo = ({ className, uniqueId: _uniqueId }: { className?: string; uniqueId?: string } = {}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={className || 'flex h-full w-full shrink-0'}
            viewBox='0 0 567 567'
            fill='none'
        >
            <g transform='matrix(2.834646,0,0,2.834646,0,0)'>
                <path
                    d='M99.593,12.5L25.981,55L99.593,97.5L173.205,55L99.593,12.5ZM99.593,32.5L138.564,55L99.593,77.5L60.622,55L99.593,32.5Z'
                    fill='#528a38'
                    fillRule='nonzero'
                />
                <path
                    d='M173.205,65L155.885,75L155.885,120L116.913,97.5L103.923,105L103.923,185L121.244,175L121.244,130L160.215,152.5L173.205,145L173.205,65Z'
                    fill='#1f6275'
                    fillRule='nonzero'
                />
                <path
                    d='M25.981,65L25.981,85L47.631,97.5L47.631,157.5L69.282,170L69.282,110L95.263,125L95.263,105L25.981,65Z'
                    fill='#a94837'
                    fillRule='nonzero'
                />
            </g>
        </svg>
    );
};

export default Logo;
