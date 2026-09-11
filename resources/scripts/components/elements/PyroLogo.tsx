// million-ignore
//
// ─────────────────────────────────────────────────────────────────────────────
// ORNON BRANDING — TEMPORARY PLACEHOLDER WORDMARK
//
// This renders a plain "Ornon" text wordmark using `currentColor` so the panel
// no longer shows the upstream Pyrodactyl mark. It is intentionally a stand-in.
//
// TO DROP IN THE REAL LOGO: replace the <svg>…</svg> returned below with the
// exported Ornon wordmark SVG (keep the default export name `Logo`, the
// `{ className, uniqueId }` prop signature, and the `className` fallback so the
// existing call sites — login page, sidebar, mobile top bar, auth screens —
// keep working). If the real mark uses a gradient, give it an id derived from
// `uniqueId` (as the old mark did) so multiple instances on one page don't
// collide.
// ─────────────────────────────────────────────────────────────────────────────
const Logo = ({ className, uniqueId: _uniqueId }: { className?: string; uniqueId?: string } = {}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            className={className || 'flex h-full w-full shrink-0'}
            width='284'
            height='61'
            fill='none'
            viewBox='0 0 284 61'
        >
            <text
                x='0'
                y='44'
                fill='currentColor'
                fontFamily="'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
                fontSize='44'
                fontWeight='700'
                letterSpacing='-1'
            >
                Ornon
            </text>
        </svg>
    );
};

export default Logo;
