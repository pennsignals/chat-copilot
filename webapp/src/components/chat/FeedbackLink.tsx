import {
    Body1,
    Button,
    Dialog,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Label,
    Link,
    Subtitle1,
    Subtitle2,
    Tooltip,
    makeStyles,
    shorthands,
    tokens,
} from '@fluentui/react-components';
import { useState } from 'react';
import { useAppSelector } from '../../redux/app/hooks';
import { RootState } from '../../redux/app/store';
import { AppsAddIn24, Dismiss24, FeedbackAddIn24 } from '../shared/BundledIcons';

const useClasses = makeStyles({
    root: {
        maxWidth: '1052px',
        height: '632px',
        width: 'fit-content',
        display: 'flex',
    },
    title: {
        ...shorthands.margin(0, 0, '12px'),
    },
    description: {
        ...shorthands.margin(0, 0, '12px'),
    },
    dialogContent: {
        ...shorthands.overflow('hidden'),
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflowY: 'auto',
        rowGap: '24px',
        columnGap: '24px',
        ...shorthands.padding('12px', '2px', '12px'),
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: tokens.colorScrollbarOverlay,
            visibility: 'visible',
        },
    },
});

export const FeedbackLink: React.FC = () => {
    const classes = useClasses();

    const { plugins } = useAppSelector((state: RootState) => state.plugins);
    const [open, setOpen] = useState(false);

    return (
        <Link href="https://forms.office.com/r/Z2j5bTChD4">
             <Tooltip content="Submit Feedback" relationship="label">
         <Button
                    data-testid="feedbackButton"
                    style={{ color: 'black' }}
                    appearance="transparent"
                    icon={<FeedbackAddIn24 color="black" />}
                >
                </Button></Tooltip>
                </Link>
       
    );
};
