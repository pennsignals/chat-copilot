// Copyright (c) Microsoft. All rights reserved.

import { useCallback } from 'react';

//import { useChat } from '../../libs/useChat';

export const ModelSelector  = () => {
   // const chat = useChat();
   // const modelVal = "";

    const onModelChanged = useCallback(() => {
        // TODO: Add a loading indicator
        // void chat.changeModel(modelVal).then(() => {
        //    // if (response) {
        //         //msalInstance?.setActiveAccount(response.account);
        //    // }
        // });
    },[]);

    return (
        
        <div>
            <select title='Select a Model' 
        onChange={onModelChanged}><option value="test">test</option><option value="chat=gpt">chat-gpt</option></select>
        </div>
    );
};
