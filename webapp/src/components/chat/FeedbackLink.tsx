import {
    Button,
    Link,
    Tooltip,
} from '@fluentui/react-components';
import { useState } from 'react';
import { FeedbackAddIn24 } from '../shared/BundledIcons';

export const FeedbackLink: React.FC = () => {
    const [_open, _setOpen] = useState(false);

    return (
        <Link href="https://forms.office.com/r/Z2j5bTChD4">
            <Tooltip content="Submit Feedback" relationship="label">
                <Button
                    data-testid="feedbackButton"
                    style={{ color: 'black' }}
                    appearance="transparent"
                    icon={<FeedbackAddIn24 color="black" />}
                >
                </Button>
            </Tooltip>
        </Link>

    );
};
