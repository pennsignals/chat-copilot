// Copyright (c) Microsoft. All rights reserved.

import { IChatMessage } from './ChatMessage';

export interface IChatSession {
    id: string;
    title: string;
    deleted:boolean;
    systemDescription: string;
    memoryBalance: number;
    enabledPlugins: string[];
}

export interface ICreateChatSessionResponse {
    chatSession: IChatSession;
    initialBotMessage: IChatMessage;
}
