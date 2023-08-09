import {
    BrandVariants,
    GriffelStyle,
    Theme,
    createDarkTheme,
    createLightTheme,
    makeStyles,
    shorthands,
    themeToTokensObject,
    tokens,
} from '@fluentui/react-components';

export const semanticKernelBrandRamp: BrandVariants = {
    10: "#060103",
    20: "#261018",
    30: "#084D8E",
    40: "#084D8E",
    50: "#084D8E",
    60: "#084D8E",
    70: "#084D8E",
    80: "#084D8E",
    90: "#084D8E",
    100: "#084D8E",
    110: "#084D8E",
    120: "#2596be",
    130: "#2596be",
    140: "#2596be",
    150: "#2596be",
    160: "#2596be"
};

export const semanticKernelLightTheme: Theme & { colorMeBackground: string } = {
    ...createLightTheme(semanticKernelBrandRamp),
    colorMeBackground: '#e8ebf9',
};

export const semanticKernelDarkTheme: Theme & { colorMeBackground: string } = {
    ...createDarkTheme(semanticKernelBrandRamp),
    colorMeBackground: '#2b2b3e',
};

export const customTokens = themeToTokensObject(semanticKernelLightTheme);

export const Breakpoints = {
    small: (style: GriffelStyle): Record<string, GriffelStyle> => {
        return { '@media (max-width: 744px)': style };
    },
};

export const ScrollBarStyles: GriffelStyle = {
    overflowY: 'scroll',
    '&:hover': {
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: tokens.colorScrollbarOverlay,
            visibility: 'visible',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: tokens.colorNeutralBackground1,
            WebkitBoxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.1)',
            visibility: 'visible',
        },
    },
};

export const SharedStyles: Record<string, GriffelStyle> = {
    scroll: {
        height: '100%',
        ...ScrollBarStyles,
    },
    overflowEllipsis: {
        ...shorthands.overflow('hidden'),
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

export const useDialogClasses = makeStyles({
    root: {
        height: '515px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
    },
    scopes: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
        paddingLeft: '20px',
    },
    error: {
        color: '#d13438',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        rowGap: '10px',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: '175px',
    },
});
