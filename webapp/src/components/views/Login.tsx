// Copyright (c) Microsoft. All rights reserved.

import { useMsal } from '@azure/msal-react';
// import { Body1, Button, Image, Title3 } from '@fluentui/react-components';
import { Button, Title3 } from '@fluentui/react-components';
import React from 'react';
// import signInLogo from '../../ms-symbollockup_signin_light.svg';
import { useSharedClasses } from '../../styles';
import { getErrorDetails } from '../utils/TextUtils';

export const Login: React.FC = () => {
    const { instance } = useMsal();
    const classes = useSharedClasses();

    return (
        <div className={classes.informativeView}>
            {/*<Title3>Login with your Microsoft Account</Title3>*/}
            <Title3>Penn AI Chat</Title3>
            {/*<Body1>
                {"Don't have an account? Create one for free at"}{' '}
                <a href="https://account.microsoft.com/" target="_blank" rel="noreferrer">
                    https://account.microsoft.com/
                </a>
            </Body1> */}

            <Button
                // style={{ padding: 0 }}
                style={{
                    padding: "10px",
                    background: "#084D8E",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px" }}
                // appearance="transparent"
                appearance="outline"
                onClick={() => {
                    instance.loginRedirect().catch((e: unknown) => {
                        alert(`Error signing in: ${getErrorDetails(e)}`);
                    });
                }}
                data-testid="signinButton"
            >
                Sign In
                {/* <Image src={signInLogo} /> */}
            </Button>
        </div>
    );
};
